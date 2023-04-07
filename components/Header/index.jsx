import React, { useEffect, useState } from 'react';
import Div from '../Div';
import DropDown from './DropDown';
import Link from 'next/link';
import Image from 'next/image';

export default function Header({ variant }) {
  const [isSticky, setIsSticky] = useState(false);
  const [sideHeaderToggle, setSideHeaderToggle] = useState(false);
  const [mobileToggle, setMobileToggle] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    });
  }, []);

  return (
    <>
      <header
        className={`cs-site_header cs-style1 text-uppercase ${
          variant ? variant : ''
        } cs-sticky_header ${isSticky ? 'cs-sticky_header_active' : ''}`}
      >
        <Div className="cs-main_header">
          <Div className="container">
            <Div className="cs-main_header_in">
              <Div className="cs-main_header_left">
              <Link className="cs-site_branding" href="/">
                <Image src="/images/logo.png" alt="Logo" width={125} height={50} />
              </Link>

              </Div>
              <Div className="cs-main_header_center">
                <Div className="cs-nav cs-primary_font cs-medium">
                  <ul
                    className="cs-nav_list"
                    style={{ display: `${mobileToggle ? 'block' : 'none'}` }}
                  >
                    <li>
                      <Link href="/" onClick={() => setMobileToggle(false)}>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link href="/web-design" onClick={() => setMobileToggle(false)}>
                        Web Design & Development
                      </Link>
                    </li>
                    <li>
                      <Link href="/seo-services" onClick={() => setMobileToggle(false)}>
                        SEO
                      </Link>
                    </li>
                    <li>
                      <Link href="/digital-marketing" onClick={() => setMobileToggle(false)}>
                        Digital Marketing
                      </Link>
                    </li>
                  </ul>
                  <span
                    className={
                      mobileToggle
                        ? 'cs-munu_toggle cs-toggle_active'
                        : 'cs-munu_toggle'
                    }
                    onClick={() => setMobileToggle(!mobileToggle)}
                  >
                    <span></span>
                  </span>
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </header>
    </>
  );
}
