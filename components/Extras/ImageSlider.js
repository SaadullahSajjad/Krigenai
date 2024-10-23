import slack from "../../images/slack.JPG";
import zoom from "../../images/zoom.webp";

import Wordpress from "../../images/Wordpress.svg";
import Twilio from "../../images/Twilio.svg";
import stripe from "../../images/stripe.webp";
import shopify from "../../images/shopify.svg";
import QuickBook from "../../images/QuickBook.svg";
import Paypal from "../../images/Paypal.png";
import openai from "../../images/openai.svg";

import insta from "../../images/insta.webp";
import google from "../../images/google.webp";
import face from "../../images/face.webp";

import Image from "next/image";
import classes from "./ImageSlider.module.css";

const ImageSlider = () => {
  return (
    <div
      className="my-16 overflow-hidden"
    >
      <div className={classes.imagecontainer}>
        <Image
          src={slack}
          alt="Picture of Slack logo"
          width={170}
          height={150}
          quality={100}
          priority
          sizes={"50vw"}
        />

        <Image
          src={zoom}
          alt="Picture of Zoom logo"
          width={170}
          height={150}
          quality={100}
          priority
          sizes={"50vw"}
        />
        <Image
          src={Wordpress}
          alt="Picture of Wordpress logo"
          width={170}
          height={150}
          quality={100}
          priority
          sizes={"50vw"}
        />
        <Image
          src={Twilio}
          alt="Picture of Twilio logo"
          width={170}
          height={150}
          quality={100}
          priority
          sizes={"50vw"}
        />
        <Image
          src={stripe}
          alt="Picture of Stripe logo"
          width={170}
          height={150}
          quality={100}
          priority
          sizes={"50vw"}
        />
        <Image
          src={shopify}
          alt="Picture of Shopify logo"
          width={170}
          height={150}
          quality={100}
          priority
          sizes={"50vw"}
        />
        <Image
          src={QuickBook}
          alt="Picture of QuickBook logo"
          width={170}
          height={150}
          quality={100}
          priority
          sizes={"50vw"}
        />
        <Image
          src={Paypal}
          alt="Picture of Paypal logo"
          width={170}
          height={150}
          quality={100}
          priority
          sizes={"50vw"}
        />
        <Image
          src={openai}
          alt="Picture of Openai logo"
          width={170}
          height={150}
          quality={100}
          priority
          sizes={"50vw"}
        />
        <Image
          src={insta}
          alt="Picture of Instagram logo"
          width={170}
          height={150}
          quality={100}
          priority
          sizes={"50vw"}
        />
        <Image
          src={face}
          alt="Picture of Facebook logo"
          width={170}
          height={150}
          quality={100}
          priority
          sizes={"50vw"}
        />
        <Image
          src={google}
          alt="Picture of Google logo"
          width={170}
          height={150}
          quality={100}
          priority
          sizes={"50vw"}
        />
      </div>
    </div>
  );
};

export default ImageSlider;
