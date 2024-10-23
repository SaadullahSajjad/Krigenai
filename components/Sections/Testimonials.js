import TestimonialsSlider from "../Extras/TestiSlider";
import Link from "next/link";

const Testimonials = () => {
  return (
    <>
      <section className="flex justify-center items-center bg-white flex-col gap-8 py-20 overflow-hidden">
        <h1 className="text-4xl text-center font-semibold sm:text-7xl">
          What our
          <span
            style={{
              background: "linear-gradient(to right, #6557ff, #aa3fff 80%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {" "}
            clients
          </span>{" "}
          are saying
        </h1>
        <h3 className="font-normal text-center text-sm text-black sm:text-base">
          Prioritize what is important like some of our other owners.
        </h3>
        <div className="">
          <Link href="/#Pricing">
            {" "}
            <button
              type="submit"
              className="rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-orange-600 px-8 py-2 text-lg font-semibold text-white shadow-sm hover:from-purple-500 hover:via-indigo-500 hover:to-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              GET STARTED
            </button>
          </Link>
        </div>

        <TestimonialsSlider />
      </section>
    </>
  );
};

export default Testimonials;
