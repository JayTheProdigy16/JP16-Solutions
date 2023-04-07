import Head from 'next/head';
import React, { useEffect } from 'react';

import dynamic from 'next/dynamic';

const Card = dynamic(() => import('../components/Card'));
const Cta = dynamic(() => import('../components/Cta'));
const Div = dynamic(() => import('../components/Div'));
const Hero = dynamic(() => import('../components/Hero'));
const Layout = dynamic(() => import('../components/Layout'));
const MovingText = dynamic(() => import('../components/MovingText'));
const SectionHeading = dynamic(() => import('../components/SectionHeading'));
const Spacing = dynamic(() => import('../components/Spacing'));
const ServiceList = dynamic(() => import('../components/ServiceList'));
import service1 from '../public/images/service_1.webp'
import service2 from '../public/images/service_2.webp'
import service3 from '../public/images/service_3.webp'
import service4 from '../public/images/service_4.webp'
import contactbg from '../public/images/contactbg.webp'

export default function Home() {
  // Hero Social Links
  const heroSocialLinks = [
    {
      name: 'Facebook',
      links: 'https://www.facebook.com/JP16Solutions',
    },
    {
      name: 'Instagram',
      links: 'https://www.instagram.com/JP16Solutions/',
    },
    {
      name: 'Twitter',
      links: 'https://twitter.com/JP16Solutions',
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Head>
        <title>Home - JP16 Solutions</title>
        <meta name="Homepage" content="JP16 Solutions Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
      {/* Start Hero Section */}
      <Hero
        title="We Help Establish <br/>Digital Dominance"
        subtitle="Your Web Design, SEO, and Marketing Needs Met By a Team of Skilled Prodigies"
        btnText="Let's Innovate Together"
        btnLink="/contact"
        scrollDownId="#service"
        socialLinksHeading="Follow Us"
        heroSocialLinks={heroSocialLinks}
      />
      {/* End Hero Section */}

      {/* Start About us Section */}
                  <Div className="container">
        <Spacing lg="100" md="80" />
        <SectionHeading
          title="Under-Promise, Over-Deliver"
          subtitle="About Us"
          variant="cs-style1 text-center"
        />
        <Spacing lg="25" md="45" />
        <p className="cs-m0 text-center">
        JP16 is a website design and marketing firm that strives to exceed expectations by under-promising and over-delivering. We understand the value of having a strong online presence, and our team of skilled professionals is committed to developing custom solutions tailored to our clients’ specific requirements. We take pride in our ability to provide high-quality work that exceeds our clients’ expectations, resulting in long-term relationships and continued success. We collaborate and communicate closely with our clients to ensure that their vision is realized in the most effective and efficient way possible. Our goal at JP16 is to provide services that not only meet, but exceed our clients’ expectations.
        </p>
        <Spacing lg="50" md="55" />
      </Div>
      {/* End About us Section */}

      {/* Start Services Section */}
      <Spacing lg="50" md="80" />
      <Div className="container">
        <SectionHeading
          title="Our core services"
          subtitle="Services"
          variant="cs-style1 text-center"
        />
        <Spacing lg="70" md="45" />
        <ServiceList />
      </Div>
      {/* End Services Section */}

      {/* Start MovingText Section */}
      <Spacing lg="100" md="70" />
      <MovingText text="The New Standard Of Business Scaling." />
      <Spacing lg="100" md="70" />
      {/* End MovingText Section */}

      {/* Start Together Section */}
      <Div className="container">
        <Spacing lg="0" md="80" />
        <h2 className="cs-font_38 text-center">How Our Services Work Together</h2>
        <Spacing lg="1" md="45" />
        <p className="cs-m0">
A well-designed website can have a substantial influence on a company’s online success. When a website is well-designed, it is simpler for visitors to navigate, discover what they are searching for, and interact with the material. This increases conversions because users are more likely to perform wanted actions such as making a purchase or filling out a form. Furthermore, a well-designed website can boost inbound traffic because search engines prefer websites that are user-friendly, have pertinent content, and are search engine optimized. This means that a company with a well-designed website is more likely to show at the top of search engine results sites, driving more traffic to the site.
This heavily assists social media marketing endeavors. When social media users visit a company’s website and find it to be user-friendly, they are more likely to interact with the content and share it with their own fans. This can result in greater social media exposure and traffic. Furthermore, a social sharing-optimized website can make it simple for users to share content on their social media accounts, increasing the impact of the business’s message. Overall, a well-designed website can be an effective instrument for boosting sales, generating inbound traffic, and extending the reach of social media marketing efforts.
        </p>
        <Spacing lg="1" md="45" />
        <Spacing lg="125" md="55" />
      </Div>
      {/* End Together Section */}

            {/* Start Service Section */}
            <Spacing lg="75" md="80" />
      <Div id="service">
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="Services we can help you with"
                subtitle="Revolutionary Thinking, Revolutionary Results"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-8">
              <Div className="row">
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Website Design"
                    link="/web-design"
                    src= {service1.src}
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Website Development"
                    link="/web-design"
                    src= {service2.src}
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Digital Marketing"
                    link="/digital-marketing"
                    src= {service3.src}
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="SEO"
                    link="/seo-services"
                    src= {service4.src}
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      <Spacing lg="50" md="80" />
      {/* End Service Section */}

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
