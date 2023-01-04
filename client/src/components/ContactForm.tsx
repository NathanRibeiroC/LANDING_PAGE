import "../components/_contactform.scss";
import TextField from "@mui/material/TextField";
import { MuiTelInput } from "mui-tel-input";
import FormControlLabel from "@mui/material/FormControlLabel";
import React from "react";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";

const ContactForm = () => {
  const [phone, setPhone] = React.useState("");

  const handleChange = (newPhone: string) => {
    setPhone(newPhone);
  };

  return (
    <div className="contact-form">
      <h1>Please enter your name as it appears on your ID.</h1>
      <TextField
        id="outlined-basic"
        label="Legal first name"
        variant="outlined"
      />
      <TextField
        id="outlined-basic"
        label="Legal middle name"
        variant="outlined"
      />
      <TextField
        id="outlined-basic"
        label="Legal last name"
        variant="outlined"
      />
      <TextField id="outlined-basic" label="Email address" variant="outlined" />
      <p>
        By submitting my phone number, I agree to receive automated and
        non-automated transactional and marketing calls/texts from Wag!. Consent
        not required; text STOP to 24006 to opt out. Opt out instructions
        subject to change. Message and data rates may apply. Mobile Terms apply.
      </p>
      <MuiTelInput value={phone} onChange={handleChange} />
      <FormGroup>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="I agree to Wag!'s Terms (including a mutual arbitration clause) and Privacy Policy."
        />
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="I confirm that I am a US resident and am over 18"
        />
      </FormGroup>
    </div>
  );
};

export default ContactForm;
