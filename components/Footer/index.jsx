import React from 'react';
import Div from '../Div';
import ContactInfoWidget from '../Widget/ContactInfoWidget';
import MenuWidget from '../Widget/MenuWidget';
import SocialWidget from '../Widget/SocialWidget';
import TextWidget from '../Widget/TextWidget';

export default function Footer({ copyrightText, logoSrc, logoAlt, text }) {
  const copyrightLinks = [
    {
      title: 'Terms of Use',
      href: '/',
    },
    {
      title: 'Privacy Policy',
      href: '/',
    },
  ];

  const serviceMenu = [
    {
      title: 'Website Design & Development',
      href: '/web-design'
    },
    {
      title: 'Search Engine Optimization',
      href: '/seo-services'
    },
    {
      title: 'Digital Marketing',
      href: '/digital-marketing'
    }
  ]

  return (
    <footer className="cs-footer">
    <Div className="cs-fooer_main">
      <Div className="container">
        <Div className="row">
          <Div className="col-lg-5 col-sm-6">
            <Div className="cs-footer_item">
              <TextWidget 
                logoSrc='/images/logosmall.png' 
                logoAlt='Logo'
                text ='JP16 strives to exceed expectations by under-promising and over-delivering. We understand the value of having a strong online presence, and we are committed to developing custom solutions tailored to our clients’ specific requirements.'
              />
              <SocialWidget/>
            </Div>
          </Div>
          <Div className="col-lg-3 col-sm-6">
            <Div className="cs-footer_item">
              <MenuWidget menuItems={serviceMenu} menuHeading='Services'/>
            </Div>
          </Div>
          <Div className="col-lg-3 col-sm-6">
            <Div className="cs-footer_item">
              <ContactInfoWidget title='Contact Us'/>
            </Div>
          </Div> 
        </Div>
      </Div>
    </Div>
    <Div className="container">
      <Div className="cs-bottom_footer">
        <Div className="cs-bottom_footer_left">
          <Div className="cs-copyright">Copyright © 2022 JP16 Solutions</Div>
        </Div>
        <Div className="cs-bottom_footer_right">
          <MenuWidget menuItems={copyrightLinks} variant=' cs-style2'/>
        </Div>
      </Div>
    </Div>
  </footer>
  );
}
