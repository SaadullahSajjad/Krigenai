import ServicesGallery from "../Extras/ServiceGal";
import BelowGallery from "../Extras/BelowGallery";
import Link from "next/link";

const ServicesComp = () => {
  return (
    <>
      <section className="flex justify-center items-center bg-white flex-col gap-8 py-20">
        <h1 className="text-5xl text-center font-semibold sm:text-7xl">
          <span
            style={{
              background: "linear-gradient(to right, #6557ff, #aa3fff 80%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Everything
          </span>{" "}
          You Need.
        </h1>
        <h3 className="font-normal text-base text-black">
          Software that has it all, and then some.
        </h3>
        <div className="">
          <Link href="https://www.youtube.com/watch?v=FXm8718dm3k" target="_blank">
          <button
            type="submit"
            className="rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-orange-600 px-8 py-2 text-lg font-semibold text-white shadow-sm hover:from-purple-500 hover:via-indigo-500 hover:to-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            WATCH DEMO
          </button>
          </Link>
        </div>
      </section>
      <ServicesGallery />
      <BelowGallery />

    </>
  );
};

export default ServicesComp;
