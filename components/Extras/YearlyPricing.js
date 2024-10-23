import Link from "next/link";

const YearlyPricing = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-10 sm:flex-row">
      <div className="flex flex-col gap-16 px-6 py-16 bg-white w-80 h-auto rounded-2xl shadow-2xl shadow-zinc-400">
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-lg">Standard</h2>
          <h1 className="font-bold text-3xl underline">$970</h1>
          <h3 className="text-gray-600 text-base">Software Included</h3>
        </div>
        <div className="flex flex-col gap-3 text-base">
          <p className="flex gap-2">
            <span className="text-green-400">✔</span>Business Setup &
            Integration
          </p>
          <p className="flex gap-2">
            <span className="text-green-400">✔</span>CRM & Pipeline
          </p>
          <p className="flex gap-2">
            <span className="text-green-400">✔</span>Website Builder
          </p>
          <p className="flex gap-2">
            <span className="text-green-400">✔</span>Webchat
          </p>
          <p className="flex gap-2">
            <span className="text-green-400">✔</span>Reputation management
          </p>

          <p className="flex gap-2">
            <span className="text-green-400">✔</span>All-In-One Conversations
          </p>
          <p className="flex gap-2">
            <span className="text-green-400">✔</span>Task Management
          </p>
          <p className="flex gap-2">
            <span className="text-green-400">✔</span>Calendar Management
          </p>
          <p className="flex gap-2">
            <span className="text-green-400">✔</span>Social Planner
          </p>
          <p className="flex gap-2">
            <span className="text-green-400">✔</span>Email Marketing
          </p>
          <p className="flex gap-2">
            <span className="text-green-400">✔</span>24/7 Live Chat & Zoom
            Support
          </p>
        </div>
        <div className="mt-20 flex justify-center items-center">
          <Link
            href="https://buy.stripe.com/3csbJzaWW02F98IeUZ"
            target="_blank"
          >
            {" "}
            <button
              type="submit"
              className="rounded-xl bg-gradient-to-r bg-black px-20 py-2 text-lg font-medium text-white shadow-sm hover:from-indigo-500 hover:via-purple-500 hover:to-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get Started
            </button>{" "}
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-16 px-6 py-16 bg-white w-80 h-full rounded-2xl shadow-2xl shadow-zinc-600">
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-lg">Enhanced</h2>
          <h1 className="font-bold text-3xl underline">$2970</h1>
          <h3 className="text-gray-600 text-base">
            Software, AI & Automations
          </h3>
        </div>
        <div className="flex flex-col gap-3 text-base">
          <p className="flex gap-2">
            <span className="text-green-400">✔</span>
            <b>Everything in Standard+</b>
          </p>
          <p className="flex gap-2">
            <span className="text-green-400">✔</span>Unlimited Seats & Unlimited
            Contacts
          </p>
          <p className="flex gap-2">
            <span className="text-green-400">✔</span>AI-Automation Integration
          </p>
          <p className="flex gap-2">
            <span className="text-green-400">✔</span>Lead Intake Automations
          </p>
          <p className="flex gap-2">
            <span className="text-green-400">✔</span>Sales & Marketing
            Automations
          </p>
          <p className="flex gap-2">
            <span className="text-green-400">✔</span>Website Integration &
            Hosting
          </p>
          <p className="flex gap-2">
            <span className="text-green-400">✔</span>WhatsApp & Slack
            Integration
          </p>
          <p className="flex gap-2">
            <span className="text-green-400">✔</span>Automatic SEO Optimization
            Tool
          </p>
          <p className="flex gap-2">
            <span className="text-green-400">✔</span>Affiliate Program &
            Management
          </p>
          <p className="flex gap-2">
            <span className="text-green-400">✔</span>Memberships & Community
            Builder
          </p>
        </div>
        <div className="mt-5 flex justify-center items-center">
          <Link
            href="https://buy.stripe.com/bIY3d33uu8zbdoY007"
            target="_blank"
          >
            {" "}
            <button
              type="submit"
              className="rounded-xl bg-gradient-to-r bg-black px-20 py-2 text-lg font-medium text-white shadow-sm hover:from-indigo-500 hover:via-purple-500 hover:to-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get Started
            </button>{" "}
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-16 px-6 py-6 bg-white w-80 h-full rounded-2xl shadow-2xl shadow-zinc-600">
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-lg">Elite Plan</h2>
          <h1 className="font-bold text-3xl underline">$9970</h1>
          <h3 className="text-gray-600 text-base">Software with Service</h3>
        </div>
        <div className="flex flex-col gap-3 text-base">
          <p className="flex gap-2">
            <span className="text-green-400">✔</span>
            <b>Everything in Enhanced+</b>
          </p>
          <p className="flex gap-2">
            <span className="text-green-400">✔</span>Email Campaign Management
            (Up to 4 email campaigns per month)
          </p>
          <p className="flex gap-2">
            <span className="text-green-400">✔</span>WhatsApp and SMS Marketing
            (Up to 1000 messages per month)
          </p>
          <p className="flex gap-2">
            <span className="text-green-400">✔</span>Existing Workflow
            Optimization
          </p>
          <p className="flex gap-2">
            <span className="text-green-400">✔</span>Creation or optimization of
            up to 1 landing page per month
          </p>
          <p className="flex gap-2">
            <span className="text-green-400">✔</span>Priority Email Support:
            Response within 24 hours Automations
          </p>
          <p className="flex gap-2">
            <span className="text-green-400">✔</span>Monthly Strategy Session:
            1-hour consultation call to discuss campaign strategies
          </p>
        </div>
        <div className="mt-24 flex justify-center items-center">
          <Link
            href="https://buy.stripe.com/dR6dRHaWW16JgBaaEN"
            target="_blank"
          >
            <button
              type="submit"
              className="rounded-xl bg-gradient-to-r bg-black px-20 py-2 text-lg font-medium text-white shadow-sm hover:from-indigo-500 hover:via-purple-500 hover:to-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default YearlyPricing;
