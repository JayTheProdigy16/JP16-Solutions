import React from 'react';
import parse from 'html-react-parser';
import Button from '../Button';
import Div from '../Div';
import VerticalLinks from '../VerticalLinks';
import Image from 'next/image';
import bg from '../../public/images/test2.webp';

export default function Hero({
  title,
  subtitle,
  btnText,
  btnLink,
  scrollDownId,
  socialLinksHeading,
  heroSocialLinks,
  bgImageUrl,
}) {
  return (
    <Div
      className="cs-hero cs-style1 cs-bg cs-shape_wrap_1"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <Div className="cs-shape_1" />
      <Div className="cs-shape_1" />
      <Div className="cs-shape_1" />
      <Div className="cs-circle_1" />
      <Div className="cs-circle_2" />
      <Div className="container">
        <Div className="cs-hero_text">
          <h1 className="cs-hero_title text-end">{parse(title)}</h1>
          <Div className="cs-hero_subtitle text-end">{subtitle}</Div>
          <Button btnLink={btnLink} btnText={btnText} />
        </Div>
      </Div>
      <VerticalLinks
        data={heroSocialLinks}
        title={socialLinksHeading}
        variant="cs-left_side"
      />
    </Div>
  );
}
