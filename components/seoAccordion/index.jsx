import React from 'react'
import { useState } from 'react'
import Div from '../Div'

export default function Accordion() {
  const [selected, setSelected] = useState(0)
  const handelToggle = (index) => {
    if(selected === index) {
      return setSelected(null)
    }
    setSelected(index)
  }
  const accordionData = [
    {
      question: 'What does SEO stand for?',
      answer: 'As you may know, SEO stands for Search Engine Optimization. But what does that mean? And what does search engine optimization entail? In short, SEO is focused upon acquiring website traffic and high search result rankings organically. By organic, we mean without paying for web traffic via pay-per-click ads, among other methods. Within SEO, there’s a wide variety of strategies to accomplish the aforementioned goals—some of which are more effective than others. This could be anything from developing website content around keywords related to your industry to maintaining a strong presence across multiple social media platforms. SEO practices and strategies are constantly changing to remain effective as internet search engines continuously update algorithms.'
    },
    {
      question: 'How much does SEO cost?',
      answer: "To answer this question our SEO team would need to know more information about your business. We can tell you one thing though, from our 14+ years of analysing thousands of SEO campaigns, the biggest reason why most campaigns fail (possibly yours in the past too), is that the company fails to properly assess the amount of work required to get you a great result and ROI. That being said, our SEO packages range from $1000-10,000 per month with no-contract."
    },
    {
      question: 'How long does SEO take?',
      answer: 'To answer this question depends greatly on where you are today, what SEO has been done before, and what your competition levels are like. As a general rule of thumb, most websites on page 2 can be brought to the first page inside 3 months. As for a brand new website, you’re looking closer to 6+ months to get good first page rankings on competitive keywords. During that time your leads and traffic will increase gradually and regularly, but the big wins are once you hit the top half of the first page.'
    },
    {
      question: 'Can you get me to #1 on Google?',
      answer: 'Our team of SEO specialists will get you to the best possible position for your market, and flood your business with new organic traffic. From our SEO experience, it’s better to focus on ranking your business for the right keywords than just chasing #1’s. If #1 is possible for the right terms, then we’ll give it everything to get you there.'
    },
    {
      question: 'Will my results drop if I stop doing SEO?',
      answer: 'SEO is much like going to the gym. After working out for 12-months straight, you’re going to be in great shape, and even if you stop for 3-months, you’re going to maintain a pretty good physique. However over time your results will drop off, and you’ll need a tune up. The same is true for your SEO. Everything we do is permanent & long term, however with time your competition may work and out-rank you. If this happens after your campaign ends, simply give our SEO team a call and we will walk you through how we fix it.'
    },
    {
      question: 'I’ve done SEO before and it hasn’t worked, why are you different?',
      answer: 'If SEO hasn’t worked then one of four things has occurred: 1. You’ve been ripped off by a scammer – Sadly there are a lot in this SEO industry, and if this has happened to you, we’re truly sorry – stopping these people is the reason our team is so passionate about Search Engine Optimization. 2. You were working with a website designer, developer, or marketing agency –  SEO is a lot like brain surgery. It’s a very detailed, specific skillset that very few people truly possess. A lot of website design, marketing, or graphic design companies offer ‘SEO’ as a service, however they are not experienced in the craft. They are good at many things, but you don’t want your logo designer doing your SEO. 3. Your SEO company didn’t know what they were doing – This is much more common than you would think. You see, lots of people start ‘SEO’ companies after watching a few YouTube videos, or buying a $4 e-Book. They think that they can learn along the way, and sadly, they convince many business owners that they know what they are doing when they truly have no clue. SEO, is a skill set that takes time to master and hiring a newbie disguised as a guru will leave you disappointed in your rankings. 4. Your company didn’t do enough to beat tough competition – If you paid $100, or even $500/month for SEO in the past, then chances are your campaign wasn’t aggressive enough, or have enough effort and resources required to beat out tough competition. As the saying goes, “If you think a professional is expensive, wait until you work with an amateur”. Our SEO specialists can generally pinpoint with sniper like precision why your past campaign hasn’t worked in minutes. Our SEO team can look at all of your website statistics and compare them directly with your competitors.  Let us show you why your SEO efforts in the past haven’t worked.'
    },
    {
      question: 'Do I need to sign a contract?',
      answer: 'No. Our SEO team believes that if a company needs to lock you in with a long term SEO contract, they aren’t confident in their abilities to delivery quality, effective work that will keep you happy with the results on a monthly basis.'
    },
    {
      question: 'How do we get started?',
      answer: 'We know that you’re busy running your business, so our SEO team has made getting started as easy as possible. Contact us for a free consultation. We’ll have a quick chat (over the phone or Zoom), discuss your SEO investment & our team will send you over a quick questionnaire. This generally takes about 15-minutes to fill out, and once it’s done, our SEO specialists will take over and will handle every aspect of your SEO, so you can return to running your business.'
    },
  ]
  return (
    <Div className="cs-accordians cs-style1">
      {accordionData.map((item, index)=>(
        <Div className={`cs-accordian ${selected===index?'active':''}`} key={index}>
          <Div className="cs-accordian_head" onClick={()=>handelToggle(index)}>
            <h2 className="cs-accordian_title">{item.question}</h2>
            <span className="cs-accordian_toggle cs-accent_color">
              <svg width={15} height={8} viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0L7.5 7.5L15 0H0Z" fill="currentColor" />
              </svg>                    
            </span>
          </Div>
          <Div className='cs-accordian_body'>
            <Div className="cs-accordian_body_in">{item.answer}</Div>
            </Div>
        </Div>
      ))}
    </Div>
  )
}
