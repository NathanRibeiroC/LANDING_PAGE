import "./_contactform.scss";
import React from "react";
import ContactFormInput from "./ContactFormInput";
import ContactCheckbox from "./ContactCheckbox";
import { Link } from "react-router-dom";
import ContactFormQrCode from "./ContactFormQrCode";


const ContactForm = () => {

  const checklabel1: JSX.Element = <span className="check-text">I agree to Wag!'s <Link to={"/terms"} className={"inline-link"}>Terms</Link> (including a <Link to={"/terms"} className={"inline-link"}>mutual arbitration clause</Link>) and <Link to={"/terms"} className={"inline-link"}>Privacy Policy</Link>.</span>;
  const checklabel2: JSX.Element = <span className="check-text">I confirm that I am a US resident and am over 18.</span>;

  return (
    <div className="contact-form">
      <h1>Please enter your name as it appears on your ID.</h1>
      <ContactFormInput inputlabel={"Legal first name"}/>
      <ContactFormInput inputlabel={"Legal middle name"}/>
      <ContactFormInput inputlabel={"Legal last name"}/>
      <ContactFormInput inputlabel={"Email address"}/>
      <p className="use-terms">
        By submitting my phone number, I agree to receive automated and
        non-automated transactional and marketing calls/texts from Wag!. Consent
        not required; text STOP to 24006 to opt out. Opt out instructions
        subject to change. Message and data rates may apply. <Link to={"/terms"} className={"inline-link"}>Mobile Terms</Link> apply.
      </p>
      <ContactCheckbox checklabel={checklabel1}/>
      <ContactCheckbox checklabel={checklabel2}/>
      <ContactFormQrCode/>
    </div>
  );
};

export default ContactForm;
