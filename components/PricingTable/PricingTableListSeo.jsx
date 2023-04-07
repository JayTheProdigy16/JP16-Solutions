import React from 'react'
import { useState } from 'react'
import PricingTable from '.'
import Section from '../Div'
import Spacing from '../Spacing'

export default function PricingTableList() {
  const [tab,setTab] = useState('monthly')
  return (
    <Section className="position-relative">
      <ul className="cs-tab_links cs-style1 cs-mp0 cs-primary_font">
      </ul>
      <Section className="row">
        <Section className="col-lg-4">
          {tab==='monthly' && (
            <PricingTable 
              title='White'
              price='1,000'
              currency='$'
              timeline='monthly'
              features={['Website Audit', 'Custom SEO Strategy', 'On-Page SEO', 'Off-Page SEO', 'Link Building', 'Monthly Reporting']}
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
              price='2,500'
              currency='$'
              timeline='monthly'
              features={['Website Audit', 'Custom SEO Strategy', 'On-Page SEO', 'Off-Page SEO', 'Link Building', 'Monthly Reporting']}
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
              title='Enterprise'
              price='5,000'
              currency='$'
              timeline='monthly'
              features={['Website Audit', 'Custom SEO Strategy', 'On-Page SEO', 'Off-Page SEO', 'Link Building', 'Monthly Reporting']}
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
