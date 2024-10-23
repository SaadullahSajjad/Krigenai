import ImageSlider from "../Extras/ImageSlider";
import ImageAppear from "../Extras/ImageAppear";
import Link from "next/link";

const FrontComp = () => {
  return (
    <>
      <section className="flex justify-center items-center flex-col gap-8 py-16">
        <h1 className="text-5xl text-center font-semibold sm:text-7xl">
          Streamline with <br></br>
          <span
            style={{
              background: "linear-gradient(to right, #6557ff, #aa3fff 80%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Automated
          </span>{" "}
          Marketing
        </h1>
        <h3 className="font-semibold text-center text-base text-gray-600">
          #1 Software for Lead Automation & Conversion
        </h3>
        <div className="">
          <Link href="/#Pricing">
          <button
            type="submit"
            className="rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-orange-600 px-8 py-2 text-lg font-semibold text-white shadow-sm hover:from-purple-500 hover:via-indigo-500 hover:to-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            GET STARTED
          </button>
          </Link>
        </div>
      </section>
      <ImageSlider />
      <ImageAppear />
    </>
  );
};

export default FrontComp;
