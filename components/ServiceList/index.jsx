import Link from 'next/link';
import React, { useState } from 'react';
import Div from '../Div';
import web from '../../public/images/webdev.webp'
import seo from '../../public/images/seo.webp'
import marketing from '../../public/images/digitalmarketing.webp'
import Image from 'next/image';

export default function ServiceList() {
  const serviceData = [
    {
      title: 'Website Design & Development',
      subtitle:
        "We excel in creating websites that boost organic traffic and sales. Our experienced designers will collaborate with you to understand your brand's specific requirements and create a tailored website that represents your vision while also optimizing its ability to attract and convert users.",
      imgUrl: `${web.src}`,
      href: '/web-design',
    },
    {
      title: 'Search Engine Optimization',
      subtitle:
        "We perform extensive keyword research, evaluate your rivals, and apply technical and on-page SEO optimizations to increase the relevance and reputation of your website. You can expect to see a substantial rise in organic traffic and better search engine rankings with our SEO services, resulting in more leads and conversions for your company.",
      imgUrl: `${seo.src}`,
      href: '/seo-services',
    },
    {
      title: 'Digital Marketing',
      subtitle:
        "We specialize in developing tailored digital marketing plans based on your objectives and budget. Our specialists will collaborate with you to determine the most effective channels and strategies for reaching your target audience, such as search engine marketing, social media advertising, and display advertising.",
      imgUrl: `${marketing.src}`,
      href: '/digital-marketing',
    }
  ];
  const [active, setActive] = useState(0);
  const handelActive = index => {
    setActive(index);
  };
  return (
    <Div className="cs-iconbox_3_list">
      {serviceData.map((item, index) => (
        <Div
          className={`cs-hover_tab ${active === index ? 'active' : ''}`}
          key={index}
          onMouseEnter={() => handelActive(index)}
        >
          <Link href={item.href} className="cs-iconbox cs-style3">
            <>
            <Div className="cs-image_layer cs-style1 cs-size_md">
              <Div className="cs-image_layer_in">
                <Image
                  src={item.imgUrl}
                  alt="Thumb"
                  className="w-100 cs-radius_15"
                  width={400}
                  height={300}
                />
              </Div>
            </Div>
              <span className="cs-iconbox_icon cs-center">
                <svg
                  width={30}
                  height={29}
                  viewBox="0 0 30 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M29.3803 3.05172C29.4089 1.94752 28.537 1.02921 27.4328 1.00062L9.43879 0.534749C8.33459 0.506159 7.41628 1.37811 7.38769 2.48231C7.35911 3.58651 8.23106 4.50482 9.33526 4.53341L25.3299 4.94752L24.9158 20.9422C24.8872 22.0464 25.7592 22.9647 26.8634 22.9933C27.9676 23.0218 28.8859 22.1499 28.9144 21.0457L29.3803 3.05172ZM3.37714 28.5502L28.7581 4.4503L26.0039 1.54961L0.622863 25.6495L3.37714 28.5502Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <Div className="cs-iconbox_in">
                <h2 className="cs-iconbox_title">{item.title}</h2>
                <Div className="cs-iconbox_subtitle">{item.subtitle}</Div>
              </Div>
            </>
          </Link>
        </Div>
      ))}
    </Div>
  );
}
