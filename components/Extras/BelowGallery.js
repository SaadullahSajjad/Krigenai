import classes from "./BelowGallery.module.css";
import Link from "next/link";

const BelowGallery = () => {
  return (
    <div className="bg-white py-14">
      <div className={classes.back}>
        <h1
          style={{
            background: "linear-gradient(to right, #6557ff, #aa3fff 80%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          className=" text-2xl font-bold text-center sm:text-4xl"
        >
          Collaboration and Sharing
        </h1>
        <h3 className="text-white text-sm text-center sm:text-base">
          Share responsibilities, collaborate with team members, delegating
          tasks, leaving notes, and sharing files.
        </h3>
        <div>
          <Link href="https://calendar.krigen.ai/" target="_blank">
            <button
              type="submit"
              className="rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-orange-600 px-8 py-2 text-lg font-semibold text-white shadow-sm hover:from-purple-500 hover:via-indigo-500 hover:to-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Book A Call
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BelowGallery;
