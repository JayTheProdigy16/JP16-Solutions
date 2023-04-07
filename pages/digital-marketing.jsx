import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import Accordion from '../components/marketingAccordion';
import Button from '../components/Button';
import Cta from '../components/Cta';
import Div from '../components/Div';
import IconBox from '../components/IconBox';
import Layout from '../components/Layout';
import PageHeading from '../components/PageHeading';
import SectionHeading from '../components/SectionHeading';
import Spacing from '../components/Spacing';
import { Icon } from '@iconify/react';
import MovingText2 from '../components/MovingText/MovingText2'
import TimelineSlider from '../components/Slider/TimelineSlider';
import digitalmarketing from '../public/images/marketinghero.webp'
import icon1 from '../public/images/icons/lead-generation-icon.svg'
import icon2 from '../public/images/icons/marketing-automation-icon.svg'
import icon3 from '../public/images/icons/man-with-megaphone-icon.svg'
import mnml from '../public/images/icons/jp16mnmlwhite.webp'
import contactbg from '../public/images/contactbg.webp'
import Image from 'next/image';
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
        <title>Digital Marketing Services | JP16 Solutions</title>
        <meta name="Digital Marketing Services" content="Professional Digital Marketing Services" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
      <PageHeading 
        title='Digital Marketing'
        bgSrc={digitalmarketing.src}
        pageLinkText='digital-marketing'
      />
      <Spacing lg='145' md='80'/>
      <Div className="container">
        <SectionHeading 
          title='Our Marketing Process' 
          subtitle="Never Let an Ad Write a Check Your Website Can't Cash" 
          variant='cs-style1 text-center'
        />
        <Spacing lg='90' md='45'/>
        <Div className="row">
          <Div className="col-lg-4">
            <IconBox
              icon= {icon1.src}
              title='Strategize'
              subtitle="Creating a roadmap for success
              This step involves developing a comprehensive digital marketing strategy that aligns with your business objectives. It includes conducting market research, analyzing your competitors, identifying your target audience, and outlining specific goals and KPIs to measure success."
            />
            <Spacing lg='30' md='30'/>
          </Div>
          <Div className="col-lg-4">
            <IconBox
              icon= {icon2.src}
              title='Optimize'
              subtitle="Fine-tuning your digital presence
              In this step, you'll optimize your website, social media profiles, and other digital assets to ensure they're user-friendly, search engine optimized, and aligned with your brand. It also involves developing compelling content that resonates with your audience and building a community around your brand."
            />
            <Spacing lg='30' md='30'/>
          </Div>
          <Div className="col-lg-4">
            <IconBox
              icon= {icon3.src}
              title='Amplify'
              subtitle="Maximizing your reach and impact
              In this final step, you'll focus on expanding your reach and increasing your impact. This includes running paid advertising campaigns, leveraging influencers and partnerships, and building targeted email marketing campaigns. The goal is to attract and convert new customers while keeping existing ones engaged and loyal."
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
             <Image src={mnml.src} alt="Service2" className='cs-radius_15 w-100 cs-hidden_mobile' width={800} height={600} />
            </Div>
            <Spacing lg='0' md='40'/>
          </Div>
          <Div className="col-xl-6 offset-xl-1">
            <TimelineSlider />
            <Spacing lg='150' md='40'/>
            <Div className="col-sm-12">
              {/* <Button btnLink='/service/service-details' btnText='Web page design' variant='cs-type2'/> */}
                  <Button btnLink='/contact' btnText='Contact Us Today For a Free Consultation!' variant='cs-type2'>
                    <Icon icon="bi:arrow-right" />
                  </Button>
                </Div>
          </Div>
        </Div>
      </Div>

      <Spacing lg="100" md="10" />
      <Div className= "cs-hidden_mobile"> 
      <MovingText2 data={serviceData2} />
      </Div>      <Spacing lg='150' md='80'/>

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
      <Spacing lg='150' md='80'/>
      {/* Start CTA Section */}
      <Div className="container">
        <Cta
          title="Join the <u>Revolution</u>,<br/>Let's Innovate <u>Together</u>."
          btnText="Schedule a Call Today"
          btnLink="/contact"
          bgSrc= {contactbg.src}
        />
      </Div>
      {/* End CTA Section */}
      </Layout>
    </>
  );
}
