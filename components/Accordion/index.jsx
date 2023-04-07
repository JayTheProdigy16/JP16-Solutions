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
      question: 'How long will it take to complete my website?',
      answer: 'Our normal time frame for finishing a website is 3-6 weeks, although this varies depending on the project since the scope and speed of any project are determined by each client. The amount of involvement you can give at the beginning, your feedback, and how quickly the content is delivered all have an impact on how quickly the project is finished. Your timing will also be influenced by the functionality and modifications needed.'
    },
    {
      question: 'Will I be able to update the site myself when it’s finished?',
      answer: 'Yes! We love it when our customers take charge of their website and figure out how to edit their own material. After the conversion, you will have full access to the backend of your new WordPress website, allowing you to simply make simple text updates, photo edits, new product additions, and price changes. However, for more complicated updates and maintenance, such as plugin updates, design or structure modifications, and extensive feature requirements, we do advise hiring a professional (developer).'
    },
    {
      question: 'Do you provide website hosting and domain?',
      answer: 'We do provide website hosting however the domain must be provided by you. Our website hosting services are included in the Halo package which offers hosting, unlimited edits, 24/7 support and lifetime updates starting at $55/month for small businesses looking for the hands-free approach. If you’re looking to have full control over your site and hosting, we can carry out the migration to your new hosting as part of the cost of our website design packages at the end of the initial 6 month term.'
    },
    {
      question: 'Will my website be mobile-friendly?',
      answer: 'Absolutely! More than ever, having a mobile-friendly website is essential! We put a lot of effort into making sure your website is responsive on modern browsers and devices.'
    },
    {
      question: 'How much say-so do I have in the website design process?',
      answer: 'A lot! Your suggestions and comments are very important to the design and growth of this website. We’ll start by asking you a lot of questions about your requirements, preferences, and goals before working with you to create the ideal design. Before we start working on your project, we also ask that you send us some sample websites. Keep in mind that this is your website, and we need your assistance and guidance regarding your ultimate vision. As a team, we eagerly await your suggestions.'
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
