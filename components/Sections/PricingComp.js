"use client";
import PricingExtr from "../Extras/PricingExtr";
import { useState } from "react";
import YearlyPricing from "../Extras/YearlyPricing";

const Pricing = () => {
  const [switchPlan, setSwitchPlan] = useState(true);

  const Truehandler = () => {
    setSwitchPlan(true);
  };

  const Falsehandler = () => {
    setSwitchPlan(false);
  };

  return (
    <>
      <section id="Pricing" className="flex justify-center items-center flex-col gap-8 py-20 overflow-hidden" >
        <h1 className="text-4xl text-center font-semibold sm:text-7xl">
          Pricing for{" "}
          <span
            style={{
              background: "linear-gradient(to right, #6557ff, #aa3fff 80%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Everyone
          </span>{" "}
        </h1>
        <h3 className="font-normal text-sm text-black sm:text-base">
          Affordable for every business that wants to grow.
        </h3>
      </section>
      <div className="flex justify-center items-center my-6 ">
        <div className="flex justify-center items-center gap-2 bg-slate-50 px-1 py-1 rounded-lg">
          <button
            type="submit"
            className="rounded-xl bg-gradient-to-r bg-slate-50 px-6 py-2 text-base font-medium text-black shadow-sm hover:from-slate-50 hover:to-slate-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={Truehandler}
          >
            Bill Monthly
          </button>
          <button
            type="submit"
            className="rounded-xl bg-gradient-to-r bg-slate-50 px-6 py-2 text-base font-medium text-black shadow-sm hover:from-slate-50 hover:to-slate-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={Falsehandler}
          >
            Bill Yearly{" "}
            <span
              className="bg-gradient-to-r from-indigo-500 via-purple-500 to-orange-600 "
              style={{
                color: "transparent",
                backgroundImage:
                  "linear-gradient(to right, indigo-500, purple-500, orange-600)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                textShadow: "-0.1px 0px 0px rgba(0,0,0,0.5)",
              }}
            >
              -16%
            </span>
          </button>
        </div>
      </div>
      {switchPlan && <PricingExtr />}
      {!switchPlan && <YearlyPricing />}
    </>
  );
};

export default Pricing;
