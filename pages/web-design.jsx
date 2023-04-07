import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import Accordion from '../components/Accordion';
import Button from '../components/Button';
import Cta from '../components/Cta';
import Div from '../components/Div';
import IconBox from '../components/IconBox';
import Layout from '../components/Layout';
import PageHeading from '../components/PageHeading';
import SectionHeading from '../components/SectionHeading';
import Spacing from '../components/Spacing';
import { Icon } from '@iconify/react';
import PricingTableList from '../components/PricingTable/PricingTableList';
import MovingText2 from '../components/MovingText/MovingText2'
import icon1 from '../public/images/icons/online-meeting-icon.svg'
import icon2 from '../public/images/icons/design-thinking-icon.svg'
import icon3 from '../public/images/icons/repair-fix-repairing-icon.svg'
import hero from '../public/images/webdevhero.webp'
import mnml from '../public/images/jp16mnmlorange.webp'
import contactbg from '../public/images/contactbg.webp'

export default function ServiceDetails() {
  const router = useRouter();
  const serviceId = router.query.serviceId;

  const serviceData2 = [
    {
      title: 'SEO',
      href: '/seo-services',
    },
    {
      title: 'Digital Marketing',
      href: '/digital-marketing',
    },
    {
      title: 'Web Design',
      href: '/web-design',
    },
  ];
  
  return (
    <>
      <Head>
        <title>Web Design | JP16 Solutions</title>
        <meta name="Web Design | JP16 Solutions" content="Web design and development services brought to you by JP16" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
      <PageHeading 
        title='Web Design & Development'
        bgSrc= {hero.src}
        pageLinkText='web-design'
      />
      <Spacing lg='145' md='80'/>
      <Div className="container">
        <SectionHeading 
          title='Our Design Process' 
          subtitle="If Opportunity Doesn't Knock, Build a Door." 
          variant='cs-style1 text-center'
        />
        <Spacing lg='90' md='45'/>
        <Div className="row">
          <Div className="col-lg-4">
            <IconBox
              icon= {icon1.src}
              title='Kick-off Call'
              subtitle="We get to know you and understand the needs of your business. We perform a deep dive into your specific industry, design trends and your competition to make sure it's you that has the edge."
            />
            <Spacing lg='30' md='30'/>
          </Div>
          <Div className="col-lg-4">
            <IconBox
              icon={icon2.src}
              title='Design & Launch'
              subtitle="We plan, design, and launch an ideal user experience for visitors (your customers)!

              JP16's expert website designers work with you to craft a website that prioritizes your competitive advantage."
            />
            <Spacing lg='30' md='30'/>
          </Div>
          <Div className="col-lg-4">
            <IconBox
              icon= {icon3.src}
              title='Proactive Support'
              subtitle="The new website is up and running! You focus on running your business.

              Our marketing pros take over the hassle of keeping your website up-to-date. Unlimited updates, forever."
            />
            <Spacing lg='30' md='30'/>
          </Div>
        </Div>
      </Div>
      <Spacing lg='120' md='50'/>
      <Div className="container">
        <Div className="row align-items-center">
          <Div className="col-xl-5 col-lg-6">
            <Div className="cs-radius_15 cs-shine_hover_1">
              <img src={mnml.src} alt="Service" className='cs-radius_15 w-100 cs-hidden_mobile' />
            </Div>
            <Spacing lg='0' md='40'/>
          </Div>
          <Div className="col-lg-6 offset-xl-1">
            <h2 className="cs-font_50 cs-m0">Marketable, SEO Ready Sites For All</h2>
            <Spacing lg='50' md='30'/>
            <Div className="row">
              <Div className="col-lg-6">
                <ol style={{ listStyleType: 'disc' }}>
                  <li>Architecture</li>
                  <li>Business</li>
                  <li>Beauty</li>
                  <li>Blog</li>
                  <li>Cannabis</li>
                  <li>Catering</li>
                  <li>Consulting</li>
                  <li>Construction</li>
                  <li>Dental</li>
                  <li>Directory</li>
                  <li>eCommerce</li>
                  <li>Education</li>
                  <li>Entertainment</li>
                  <li>Finance</li>
                  <li>Fitness</li>
                  <li>Franchise</li>
                </ol>
              </Div>
              <Div className="col-lg-6">
                <ol style={{ listStyleType: 'disc' }}>
                  <li>Healthcare</li>
                  <li>HVAC</li>
                  <li>Law</li>
                  <li>Manufacturing</li>
                  <li>Medical</li>
                  <li>Membership</li>
                  <li>Non-profit</li>
                  <li>Pest Control</li>
                  <li>Property Management</li>
                  <li>Real Estate</li>
                  <li>Resorts</li>
                  <li>Security</li>
                  <li>Social Media</li>
                  <li>Travel</li>
                  <li>Many More...</li>
                </ol>
              </Div>
              <Spacing lg='85' md='40'/>
              <Div className="col-sm-12">
              {/* <Button btnLink='/service/service-details' btnText='Web page design' variant='cs-type2'/> */}
                  <Button btnLink='/contact' btnText='Contact Us Today For a Free Consultation!' variant='cs-type'>
                    <Icon icon="bi:arrow-right" />
                  </Button>
                </Div>
            </Div>
          </Div>
        </Div>
      </Div>

      <Spacing lg='150' md='80'/>
      <Div className="container">
        <SectionHeading
          title='No Business Left Behind.' 
          subtitle='Pricing & Plans'
        />
        <Spacing lg='85' md='1'/>
        <PricingTableList/>
      </Div>

      {/* <Spacing lg='150' md='80'/>
      <TestimonialSlider /> */}
      <Spacing lg='145' md='80'/>
      <Div className="container cs-shape_wrap_4">
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-5 col-lg-6">
              <SectionHeading
                title='Some pre questions and answers' 
                subtitle='FAQ’s'
              />
              <Spacing lg='90' md='45'/>
            </Div>
            <Div className="col-lg-6 offset-xl-1">
              <Accordion/>
            </Div>
          </Div>
        </Div>
      </Div>
      <Spacing lg="100" md="10" />
      <Div className= "cs-hidden_mobile"> 
      <MovingText2 data={serviceData2} />
      </Div>
      <Spacing lg='150' md='80'/>
      {/* Start CTA Section */}
      <Div className="container">
        <Cta
          title="Join the <u>Revolution</u>,<br/>Let's Innovate <u>Together</u>."
          btnText="Schedule a Call Today"
          btnLink="/contact"
          bgSrc={contactbg.src}
        />
      </Div>
      {/* End CTA Section */}
      </Layout>
    </>
  );
}
