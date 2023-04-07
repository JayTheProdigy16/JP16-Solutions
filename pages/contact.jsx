import { Icon } from '@iconify/react';
import Head from 'next/head';
import React, { useState } from 'react';
import Div from '../components/Div';
import Layout from '../components/Layout';
import PageHeading from '../components/PageHeading';
import SectionHeading from '../components/SectionHeading';
import Spacing from '../components/Spacing';
import ContactInfoWidget from '../components/Widget/ContactInfoWidget';
import bg from '../public/images/contactpagebg.webp'


export default function Contact() {
   // States for contact form fields
   const [name, setname] = useState("");
   const [email, setEmail] = useState("");
   const [projecttype, setProjecttype] = useState("");
   const [phone, setPhone] = useState("");
   const [message, setMessage] = useState("");
 
   //   Form validation state 
   const [errors, setErrors] = useState({});
 
   //   Setting button text on form submission
   const [buttonText, setButtonText] = useState("Send");
 
   // Setting success or failure messages states
   const [showSuccessMessage, setShowSuccessMessage] = useState(false);
   const [showFailureMessage, setShowFailureMessage] = useState(false);
 
   // Validation check method
   const handleValidation = () => {
     let tempErrors = {};
     let isValid = true;
 
     if (name.length <= 0) {
       tempErrors["name"] = true;
       isValid = false;
     }
     if (email.length <= 0) {
       tempErrors["email"] = true;
       isValid = false;
     }
     if (projecttype.length <= 0) {
       tempErrors["projecttype"] = true;
       isValid = false;
     }
     if (message.length <= 0) {
       tempErrors["message"] = true;
       isValid = false;
     }
 
     setErrors({ ...tempErrors });
     console.log("errors", errors);
     return isValid;
   };
 
   //   Handling form submit
 
   const handleSubmit = async (e) => {
     e.preventDefault();
 
     let isValidForm = handleValidation();
 
     if (isValidForm) {
       setButtonText("Sending");
       const res = await fetch("/api/sendgrid", {
         body: JSON.stringify({
           email: email,
           name: name,
           projecttype: projecttype,
           message: message,
         }),
         headers: {
           "Content-Type": "application/json",
         },
         method: "POST",
       });
 
       const { error } = await res.json();
       if (error) {
         console.log(error);
         setShowSuccessMessage(false);
         setShowFailureMessage(true);
         setButtonText("Send");
         return;
       }
       setShowSuccessMessage(true);
       setShowFailureMessage(false);
       setButtonText("Send");
     }
     console.log(name, email, projecttype, phone);
   };

  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="Contact Us | JP16 Solutions" content="Contact Us" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
      <PageHeading
        title="Revolutionary Thinking, Revolutionary Results."
        bgSrc={bg.src}
        pageLinkText="contact"
      />
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading
              title="Do you have a project <br/>in mind?"
              subtitle="Get In Touch"
            />
            <Spacing lg="55" md="30" />
            <ContactInfoWidget withIcon />
            <Spacing lg="0" md="50" />
          </Div>
          <Div className="col-lg-6">
            <form action="#" className="row" onSubmit={handleSubmit}>
              <Div className="col-sm-6">
                <label className="cs-primary_color"htmlFor='name'>Name*</label>
                <input type="text" className="cs-form_field"
                      	value={name}
                        onChange={(e) => {setname(e.target.value);}}
                        name="name"
                />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color" htmlFor='email'>Email*</label>
                <input type="text" className="cs-form_field"
                      	value={email}
                        onChange={(e) => {setEmail(e.target.value);}}
                        name="email"
                />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color" htmlFor='projecttype'>Project Type*</label>
                <input type="text" className="cs-form_field"
                      	value={projecttype}
                        onChange={(e) => {setProjecttype(e.target.value);}}
                        name="projecttype"
                />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color" htmlFor='phone'>Phone*</label>
                <input type="text" className="cs-form_field"
                      	value={phone}
                        onChange={(e) => {setPhone(e.target.value);}}
                        name="phone"
                />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-12">
                <label className="cs-primary_color" htmlFor='message'>Brief description of your project*</label>
                <textarea
                  cols="30"
                  rows="7"
                  name='message'
                  value={message}
                  onChange={(e) => {setMessage(e.target.value);}}
                  className="cs-form_field"
                ></textarea>
                <Spacing lg="25" md="25" />
              </Div>
              <Div className="col-sm-12">
                <button className="cs-btn cs-style1" type='submit'>
                {buttonText}
                <Icon icon="bi:arrow-right" />
                </button>
              </Div>
            </form>
          </Div>
        </Div>
      </Div>
      <Spacing lg="50" md="40" />
      </Layout>
    </>
  );
}
