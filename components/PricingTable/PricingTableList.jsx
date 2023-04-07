import React from 'react'
import { useState } from 'react'
import PricingTable from '.'
import Section from '../Div'
import Spacing from '../Spacing'

export default function PricingTableList() {
  const [tab, setTab] = useState('monthly')
  return (
    <Section className="position-relative">
      <ul className="cs-tab_links cs-style1 cs-mp0 cs-primary_font">
      </ul>
      <Section className="row">
        <Section className="col-lg-4">
          {tab==='monthly' && (
            <PricingTable 
              title='White'
              price='55'
              currency='$'
              timeline='monthly'
              downpayment='$500 Initial Set-Up'
              features={['Customized WordPress Template', '1 Hour Brainstorm', 'Mobile Responsive', 'Social Media Integration', 'Google Maps Integration', 'Mailing List Plugin', 'Contact Form', 'Photo Sourcing', 'Website Hosting', 'Unlimited Edits', '24/7 Support', 'Lifetime Updates', '3-5 Pages']}
              btnText='Purchase Now'
              btnLink='/contact'
            />
          )}
          {tab==='yearly' && (
            <PricingTable 
              title='White'
              price='55'
              currency='$'
              timeline='yearly'
              features={['Static responsive website', 'Video marketing', 'Keywords research', 'Facebook campaign', 'eCommerce solution', 'Google adword']}
              btnText='Purchase Now'
              btnLink='/contact'
            />
          )}
          <Spacing lg='25' md='25'/>
        </Section>
        <Section className="col-lg-4">
         {tab==='monthly' && (
            <PricingTable 
              title='Black'
              price='75'
              currency='$'
              timeline='monthly'
              downpayment='$750 Initial Set-Up'
              features={['Customized WordPress Theme', '1 Hour Brainstorm', 'Mobile Responsive', 'Social Media Integration', 'Google Maps Integration', 'Mailing List Plugin', 'Contact Form', 'Photo Sourcing', 'Website Hosting', 'Unlimited Edits', '24/7 Support', 'Faster Lifetime Updates', 'Google Analytics', 'Social Sharing Buttons', '404 Redirect', 'XML Sitemap', '3 Rounds of Revisions', ' Custom Icons', 'Multilingual Support', '6-8 Pages']}
              btnText='Purchase Now'
              btnLink='/contact'
            />
          )}
          {tab==='yearly' && (
            <PricingTable 
              title='Black'
              price='399'
              currency='$'
              timeline='yearly'
              downpayment='$750 Initial Set-Up'
              features={['Static responsive website', 'Video marketing', 'Keywords research', 'Facebook campaign', 'eCommerce solution', 'Google adword']}
              btnText='Purchase Now'
              btnLink='/contact'
            />
          )}
          <Spacing lg='25' md='25'/>
        </Section>
        <Section className="col-lg-4">
          {tab==='monthly' && (
            <PricingTable 
              title='Orange'
              price='125+'
              currency='$'
              timeline='monthly'
              downpayment='$1,000+ Initial Set-Up'
              features={['Custom Coded, Built From Scratch', '1 Hour Brainstorm', 'Mobile Responsive', 'Social Media Integration', 'Google Maps Integration', 'Mailing List Plugin', 'Contact Form', 'Photo Sourcing', 'Website Hosting', 'Unlimited Edits', '24/7 Support', 'Priority Lifetime Updates', 'Google Analytics', 'Social Sharing Buttons', '404 Redirect', 'XML Sitemap', '3 Rounds of Revisions', '2 Page Custom Mock-Up', ' Custom Icons', 'Multilingual Support', 'Custom WordPress CMS', '~100 PageSpeed Score', '8-10 Pages']}
              btnText='Purchase Now'
              btnLink='/contact'
            />
          )}
          {tab==='yearly' && (
            <PricingTable 
              title='Orange'
              price='599'
              currency='$'
              timeline='yearly'
              features={['Static responsive website', 'Video marketing', 'Keywords research', 'Facebook campaign', 'eCommerce solution', 'Google adword']}
              btnText='Purchase Now'
              btnLink='/contact'
            />
          )}
          <Spacing lg='25' md='25'/>
        </Section>
      </Section>
    </Section>
  )
}
