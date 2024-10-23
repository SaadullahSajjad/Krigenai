import classes from "./TestiSlider.module.css";
import Image from "next/image";
// import c1 from "../../images/c1.jpg";
// import c2 from "../../images/c2.jpg";
// import c3 from "../../images/c3.jpg";

import coma from "../../images/comas.svg";

const TestimonialsSlider = () => {
  return (
    <div className="my-16 overflow-hidden">
      <div className={classes.imagecontainer}>
        <div className="flex gap-14 w-8/12 bg-slate-50 rounded-3xl px-4 py-2 overflow-hidden">
          <div className="flex justify-center items-center">
            <img
              src="/c1.jpg"
              alt="first service user"
              style={{ borderRadius: "100%" }}
            ></img>
          </div>
          {/* <Image
            src={c1}
            alt="Picture of Slack logo"
            className="rounded-full"
            width={200}
            height={70}
            quality={100}
            sizes={"100vw"}
          /> */}

          <div className="flex flex-col gap-16 pt-20">
            <div className="flex justify-center items-center">
              <p className="italic font-semibold text-xl text-center w-10/12">
                “Krigen.ai automated aspects of my business that I never thought
                could be automated. I have also saved a significant amount of
                money on outsourced work.”
              </p>
            </div>
            <div className="flex justify-between">
              <div>
                <h1 className="font-bold">Emily Johnson</h1>
                <h3 className="text-gray-600">Chief Executive Officer (CEO)</h3>
              </div>
              <Image
                src={coma}
                alt="Picture of Slack logo"
                width={30}
                height={50}
                quality={100}
                sizes={"100vw"}
              />
            </div>
          </div>
        </div>

        <div className="flex gap-14 w-8/12 bg-slate-50 rounded-3xl px-4 py-4 overflow-hidden">
          <div className="flex justify-center items-center">
            <img
              src="/c2.jpg"
              alt="second service user"
              style={{ borderRadius: "100%" }}
            ></img>
          </div>
          {/* <Image
            src={c2}
            alt="Picture of Slack logo"
            className="rounded-full"
            width={200}
            height={70}
            quality={100}
            sizes={"100vw"}
          /> */}

          <div className="flex flex-col gap-16 pt-20">
            <div className="flex justify-center items-center">
              <p className="italic font-semibold text-xl text-center w-10/12">
                “Automating all my business operations with this software has
                been a game changer. It is user-friendly and incredibly
                effective.”
              </p>
            </div>
            <div className="flex justify-between">
              <div>
                <h1 className="font-bold">Michael Smith</h1>
                <h3 className="text-gray-600">Operations Manager</h3>
              </div>
              <Image
                src={coma}
                alt="Picture of Slack logo"
                width={30}
                height={50}
                quality={100}
                sizes={"100vw"}
              />
            </div>
          </div>
        </div>

        <div className="flex gap-14 w-8/12 bg-slate-50 rounded-3xl px-4 py-4 overflow-hidden">
          <div className="flex justify-center items-center">
            <img
              src="/c3.jpg"
              alt="third service user"
              style={{ borderRadius: "100%" }}
            ></img>
          </div>
          {/* <div>
            <Image
              src={c3}
              alt="Picture of Slack logo"
              className="rounded-full"
              width={200}
              height={70}
              quality={100}
              sizes={"100vw"}
            />
          </div> */}
          <div className="flex flex-col gap-16 pt-20">
            <div className="flex justify-center items-center">
              <p className="italic font-semibold text-xl text-center w-10/12">
                “The team at Krigen.ai has greatly streamlined how we operate.
                Their communication was top-notch and we are very satisfied!”
              </p>
            </div>
            <div className="flex justify-between">
              <div>
                <h1 className="font-bold">David Thompson</h1>
                <h3 className="text-gray-600">
                  Chief Technology Officer (CTO)
                </h3>
              </div>
              <Image
                src={coma}
                alt="Picture of Slack logo"
                width={30}
                height={50}
                quality={100}
                sizes={"100vw"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSlider;
