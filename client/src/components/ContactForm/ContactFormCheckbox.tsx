import "./_contactform.scss";
import { v4 as uuidv4 } from 'uuid';
import { Link } from "react-router-dom";


interface ContactFormCheckboxProps {
    checklabel: JSX.Element|JSX.Element[];
}

const ContactCheckbox = ({checklabel}:ContactFormCheckboxProps) => {

  return (
    <label className="container">{checklabel}
        <input type="checkbox"/>
        <span className="checkmark"></span>
    </label>
  );
};

export default ContactCheckbox;