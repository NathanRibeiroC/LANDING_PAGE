import "./_contactform.scss";
import qrCodeForm from "../../../public/qrcode_form.svg";

const ContactFormQrCode = () => {

    return (
        <div className="qr-container">
            <img src={qrCodeForm} className="qr-img"></img>
            <span style={{textAlign:"center"}}>Download the app.</span>
        </div>
    );
  };
  
  export default ContactFormQrCode;