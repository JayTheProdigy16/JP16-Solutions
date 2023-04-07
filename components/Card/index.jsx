import Link from 'next/link';
import Image from 'next/image'; // Import next/image

import Div from '../Div';

export default function Card({ title, link, src, alt }) {
  return (
    <Link href={link} className="cs-card cs-style1">
      <>
        {/* Use next/image instead of <img> */}
        <div style={{ position: 'relative', width: '100%', height: '0', paddingBottom: '100%' }} className="cs-radius_15">
          <Image src={src} alt={alt} layout="fill" objectFit="cover" />
        </div>
        <Div className="cs-card_overlay" />
        <Div className="cs-card_info">
          <span className=" cs-hover_layer3 cs-accent_bg" />
          <h2 className="cs-card_title">{title}</h2>
        </Div>
      </>
    </Link>
  );
}
