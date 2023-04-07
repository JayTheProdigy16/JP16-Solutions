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
      question: 'What if I don’t have an ads account?',
      answer: 'No problem. JP16 account managers will create a new ad account on Google or Bing to manage your PPC campaign(s).'
    },
    {
      question: 'How can I lower the cost of PPC advertising?',
      answer: 'Let us know your budget, and we can adjust the campaign targeting to fit your needs. Limiting your campaign by geolocation, time of day, day of week, and keywords can help keep PPC ad budgets lower and help you get started. As you gain more business, our account managers will suggest budget changes to expand ad targeting and attract more clicks.'
    },
    {
      question: 'How often is my PPC account updated?',
      answer: 'We manage accounts daily and make weekly optimizations. This allows us to monitor the changes and continue to improve your campaign. These updates will be noted in your monthly emailed report.'
    },
    {
      question: 'What are the types of digital advertising?',
      answer: 'There are several different digital advertising options available. Not all of them are “pay per click,” either. Some can be pay by impressions. Advertising options include programmatic display ads, social media ads, shopping ads, video ads, and more. Our account managers will work with you to build the campaign right for your business and goals.'
    },
    {
      question: 'Do I need a pay per click advertising agency to run ads?',
      answer: 'No, you can manage PPC campaigns on your own. We are biased, but we believe hiring an agency like JP16 is the best choice for any business that doesn’t have a dedicated PPC specialist on staff since management mistakes can be very costly.'
    },
    {
      question: 'SEO vs PPC which is better?',
      answer: 'Why say ‘or’ when you can say ‘and’? SEO and PPC are both keyword driven tactics and support each other in a digital marketing campaign. If your budget only allows for one or the other, consider how fast you need results. SEO requires months of work to see return; whereas PPC can start showing results within days.'
    },
    {
      question: 'What is a PPC consultant?',
      answer: 'A PPC consultant is a person specialized in paid search or pay per click campaigns. Our PPC consultants are certified and take ongoing training to stay up to date with the latest industry changes.'
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
