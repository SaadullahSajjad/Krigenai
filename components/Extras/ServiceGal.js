import Image from "next/image";
import Icon1 from "../../images/icons/i1.webp";
import Icon2 from "../../images/icons/i2.webp"
import Icon3 from "../../images/icons/i3.webp"
import Icon4 from "../../images/icons/i4.webp"
import Icon5 from "../../images/icons/i5.webp"
import Icon6 from "../../images/icons/i6.webp"
import Icon7 from "../../images/icons/i7.webp"
import Icon8 from "../../images/icons/i8.webp"
import Icon9 from "../../images/icons/i9.webp"

const ServicesGallery = () => {
  return (
    <div className="bg-white grid grid-cols-1 px-12 gap-6 py-10 sm:grid-cols-3">
      <div className="flex justify-center items-center flex-col gap-4 px-6 py-6 rounded-3xl" style={{ boxShadow: "0px 2px 30px 0px rgba(170, 63, 255, 0.2)" }}>
      <Image
            src={Icon1}
            alt="Picture of Slack logo"
            width={70}
            height={50}
            quality={100}
            sizes={"100vw"}
            
          />
        <h1 className="text-2xl font-bold text-center">CRM & Sales Pipeline</h1>
        <h3 className=" text-gray-600 text-center">
          Keep your clients close, and your data closer with our automated CRM &
          Sales Pipeline. Never lose a contact again.
        </h3>
      </div>
      <div className="flex justify-center items-center flex-col gap-4 px-6 py-6 rounded-3xl" style={{ boxShadow: "0px 2px 30px 0px rgba(170, 63, 255, 0.2)" }}>
      <Image
            src={Icon2}
            alt="Picture of Slack logo"
            width={70}
            height={50}
            quality={100}
            sizes={"100vw"}
          />
        <h1 className="text-2xl font-bold text-center">
          Website & Funnel Builder
        </h1>
        <h3 className=" text-gray-600 text-center">
          Build a website or funnel like a pro. Designing your website and
          funnels have never been easier.
        </h3>
      </div>
      <div className="flex justify-center items-center flex-col gap-4 px-6 py-6 rounded-3xl" style={{ boxShadow: "0px 2px 30px 0px rgba(170, 63, 255, 0.2)" }}>
      <Image
            src={Icon3}
            alt="Picture of Slack logo"
            width={70}
            height={50}
            quality={100}
            sizes={"100vw"}
          />
        <h1 className="text-2xl font-bold text-center">Automated Marketing</h1>
        <h3 className=" text-gray-600 text-center">
          Our done for you marketing automations can run for weeks, years, and
          even for a lifetime. No prospect goes to waste.
        </h3>
      </div>

      <div className="flex justify-center items-center flex-col gap-4 px-6 py-6 rounded-3xl" style={{ boxShadow: "0px 2px 30px 0px rgba(170, 63, 255, 0.2)" }}>
      <Image
            src={Icon4}
            alt="Picture of Slack logo"
            width={70}
            height={50}
            quality={100}
            sizes={"100vw"}
          />
        <h1 className="text-2xl font-bold text-center">Automated Lead Nurturing</h1>
        <h3 className=" text-gray-600 text-center">
        Nothing better for marketing than scheduling your social media posts for the entire month, all with one click!
        </h3>
      </div>
      <div className="flex justify-center items-center flex-col gap-4 px-6 py-6 rounded-3xl" style={{ boxShadow: "0px 2px 30px 0px rgba(170, 63, 255, 0.2)" }}>
      <Image
            src={Icon5}
            alt="Picture of Slack logo"
            width={70}
            height={50}
            quality={100}
            sizes={"100vw"}
          />
        <h1 className="text-2xl font-bold text-center">
        Automated Lead Conversion
        </h1>
        <h3 className=" text-gray-600 text-center">
        Tailored by our expert sales & marketing teams designed to drive sales & appointment conversions, automatically
        </h3>
      </div>
      <div className="flex justify-center items-center flex-col gap-4 px-6 py-6 rounded-3xl" style={{ boxShadow: "0px 2px 30px 0px rgba(170, 63, 255, 0.2)" }}>
      <Image
            src={Icon6}
            alt="Picture of Slack logo"
            width={70}
            height={50}
            quality={100}
            sizes={"100vw"}
          />
        <h1 className="text-2xl font-bold text-center">All-In-One Conversations</h1>
        <h3 className=" text-gray-600 text-center">
        SMS, Email, Social Media DMs, WhatsApp, Slack. Have conversations with all of your clients and manage them in one place.
        </h3>
      </div>

      <div className="flex justify-center items-center flex-col gap-4 px-6 py-6 rounded-3xl" style={{ boxShadow: "0px 2px 30px 0px rgba(170, 63, 255, 0.2)" }}>
      <Image
            src={Icon7}
            alt="Picture of Slack logo"
            width={70}
            height={50}
            quality={100}
            sizes={"100vw"}
          />
        <h1 className="text-2xl font-bold text-center">Social Media Scheduler​</h1>
        <h3 className=" text-gray-600 text-center">
        Nothing better for marketing than scheduling your social media posts for the entire month, all with one click!
        </h3>
      </div>
      <div className="flex justify-center items-center flex-col gap-4 px-6 py-6 rounded-3xl" style={{ boxShadow: "0px 2px 30px 0px rgba(170, 63, 255, 0.2)" }}>
      <Image
            src={Icon8}
            alt="Picture of Slack logo"
            width={70}
            height={50}
            quality={100}
            sizes={"100vw"}
          />
        <h1 className="text-2xl font-bold text-center">
        Calendar Integration
        </h1>
        <h3 className=" text-gray-600 text-center">
        Say goodbye to Calendly or any other calendar software out there. You can create unlimited calendars within SproutCloud.
        </h3>
      </div>
      <div className="flex justify-center items-center flex-col gap-4 px-6 py-6 rounded-3xl" style={{ boxShadow: "0px 2px 30px 0px rgba(170, 63, 255, 0.2)" }}>
      <Image
            src={Icon9}
            alt="Picture of Slack logo"
            width={70}
            height={50}
            quality={100}
            sizes={"100vw"}
          />
        <h1 className="text-2xl font-bold text-center">Automated Payments</h1>
        <h3 className=" text-gray-600 text-center">
        Integrate with payment providers like Stripe, PayPal, & more. Automate your invoices & proposals to be sent for you.
        </h3>
      </div>
    </div>
  );
};

export default ServicesGallery;

//box-shadow: 0px 2px 30px 0px rgba(170.00000000000009, 63, 255, 0.2);
