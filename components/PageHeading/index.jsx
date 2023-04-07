import React from 'react';
import Image from 'next/image';
import Div from '../Div';

export default function PageHeading({ title, bgSrc, pageLinkText }) {
  return (
    <Div className="cs-page_heading cs-style1 cs-center text-center cs-bg">
      <Image
        src={bgSrc}
        alt={title}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        loading="eager" // Set loading to "eager"
      />
      <Div className="container">
        <Div className="cs-page_heading_in">
          <h1 className="cs-page_title cs-font_50 cs-white_color">{title}</h1>
        </Div>
      </Div>
    </Div>
  );
}
