import { Icon } from '@iconify/react';
import Div from '../Div';
import Link from 'next/link';

export default function SocialWidget() {
  return (
    <Div className="cs-social_btns cs-style1">
      <Link href="https://www.facebook.com/JP16Solutions" className="cs-center">
        <Icon icon="fa6-brands:facebook" />
      </Link>
      <Link href="https://twitter.com/JP16Solutions" className="cs-center">
        <Icon icon="fa6-brands:twitter" />
      </Link>
      <Link href="https://www.instagram.com/JP16Solutions/" className="cs-center">
        <Icon icon="fa6-brands:instagram" />
      </Link>
    </Div>
  );
}
