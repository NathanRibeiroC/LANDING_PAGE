import "./_contactform.scss";
import { v4 as uuidv4 } from 'uuid';


interface ContactFormInputProps {
    inputlabel: string
}

const ContactFormInput = ({inputlabel}: ContactFormInputProps) => {

  return (
    <input className="form-input" placeholder={inputlabel}/>
  );
};

export default ContactFormInput;