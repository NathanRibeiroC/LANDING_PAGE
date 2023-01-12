import "./_contactform.scss";
import React from "react";
import ContactFormInput from "./ContactFormInput";
import ContactCheckbox from "./ContactFormCheckbox";
import { Link } from "react-router-dom";
import ContactFormQrCode from "./ContactFormQrCode";
import ContactFormButton from "./ContactFormButton";


const ContactForm = () => {

  const checklabel1: JSX.Element = <span className="check-text">I agree to Wag!'s <Link to={"/terms"} className={"inline-link"}><strong>Terms</strong></Link> (including a <Link to={"/terms"} className={"inline-link"}><strong>mutual arbitration clause</strong></Link>) and <Link to={"/terms"} className={"inline-link"}><strong>Privacy Policy</strong></Link>.</span>;
  const checklabel2: JSX.Element = <span className="check-text">I confirm that I am a US resident and am over 18.</span>;

  return (
    <div className="contact-form">
      <h1 className="contact-form-main-header grid-col-span-2">Please enter your name as it appears on your ID.</h1>
      <div className="contact-form-input-and-qr-div">
        <ContactFormInput inputlabel={"Legal first name"}/>
        <ContactFormInput inputlabel={"Legal middle name"}/>
        <ContactFormInput inputlabel={"Legal last name"}/>
        <ContactFormInput inputlabel={"Email address"}/>
      </div>
        <ContactFormQrCode/>
      <div className="check-div grid-col-span-2">
      <p className="use-terms grid-col-span-2">
        By submitting my phone number, I agree to receive automated and
        non-automated transactional and marketing calls/texts from Wag!. Consent
        not required; text STOP to 24006 to opt out. Opt out instructions
        subject to change. Message and data rates may apply. <Link to={"/terms"} className={"inline-link"}><strong>Mobile Terms</strong></Link> apply.
      </p>
        <ContactCheckbox checklabel={checklabel1}/>
        <ContactCheckbox checklabel={checklabel2}/>
      </div>
        <ContactFormButton/>
    </div>
  );
};

export default ContactForm;
