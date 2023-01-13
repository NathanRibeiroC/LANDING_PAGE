// import "../../components/_contactsection.scss"
import "./_contactsection.scss"
import ContactForm from "../ContactForm/ContactForm";

const HomeForm = () => {

  return (
    <section className="contact-section-div">
      <div className="contact-section-content">
        <div>
        <h1>Become a Dog<br/>Walker with Wag !</h1>
        <h3>Join our community of over 400k Pet Caregivers nationwide</h3>
        </div>
        <ContactForm/>
      </div>
    </section>
  );
};

export default HomeForm;