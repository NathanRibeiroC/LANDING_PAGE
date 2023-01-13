import "./_whysection.scss";
import defaultCoin from "../../../public/coin-shaped-circle-svgrepo-com.svg";
import bitcoinSampleIcon from "../../../public/coin-type-bitcoin-svgrepo-com.svg";
import euroSampleCoin from "../../../public/coin-type-euro-svgrepo-com.svg";

const WhySection = () => {

  return (
    <section className="why-section">
        <main>
        <h1>Why Wag!?</h1>
        <div>
          <img src={defaultCoin}/>
          <h2>Flexibility</h2>
          <p>Make money on your own time. Set your own schedule. Enjoy the flexibility of choosing how and when you want to work—grab a last minute ASAP walk or plan out walks weeks in advance!</p>
        </div>

        <div>
          <img src={bitcoinSampleIcon}/>
          <h2>Technology</h2>
          <p>Wag! is a fast, friendly, and convenient platform that offers instant pay, real-time GPS tracking, automated report cards, and live chat with clients.<br/><br/></p>
        </div>

        <div>
          <img src={euroSampleCoin}/>
          <h2>Safety</h2>
          <p>Our dedicated 24/7 customer support team sticks by you, and services booked on the Wag! platform may be protected with up to $1M property damage protection. See the customer claims policy for details.</p>
        </div>
        </main>
      
    </section>
  );
};

export default WhySection;