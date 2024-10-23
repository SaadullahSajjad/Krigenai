"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "../../images/logo.png";
import { useState } from "react";

const HeaderComp = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      style={{
        position: "sticky",
        zIndex: "10",
        top: "0",
        left: "0",
        right: "0",
      }}
    >
      <div className="flex justify-center items-center sticky">
        <nav
          className="mx-auto flex w-11/12 my-6 max-w-7xl items-center justify-between p-4 lg:px-8 rounded-full"
          aria-label="Global"
          style={{
            backgroundColor: "#E6E6E675",
            backdropFilter: "blur(10px)",
            border: "1px solid white",
          }}
        >
          <div className="flex lg:flex-1 lg:justify-start">
            <h1>
              <Link href="/">
                <Image
                  src={logo}
                  alt="Picture of the KRIGEN LOGO"
                  width={150}
                  height={150}
                  quality={100}
                  priority
                  sizes={"100vw"}
                  style={{
                    objectFit: "cover",
                  }}
                />
              </Link>
            </h1>
          </div>

          <div className="hidden lg:flex lg:gap-x-12">
            <h2 className="text-gray-600 hover:text-black">
              <Link
                href="https://youtu.be/FXm8718dm3k?si=CGocdPMp1W8Gziny"
                target="_blank"
              >
                Watch Demo
              </Link>
            </h2>

            <h2 className="pl-4 text-gray-600 hover:text-black">
              <Link href="/#Pricing">Pricing</Link>
            </h2>

            <h2 className="text-gray-600 hover:text-black">
              <Link href="https://calendar.krigen.ai/" target="_blank">
                Book Call
              </Link>
            </h2>
          </div>
          <div className="hidden justify-center  sm:flex sm:flex-1 lg:justify-end">
            <button
              type="submit"
              className="rounded-xl bg-gradient-to-r bg-black px-8 py-2 text-lg font-medium text-white shadow-sm hover:from-indigo-500 hover:via-purple-500 hover:to-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <Link href="https://app.krigen.ai/" target="_blank">
                LOG IN
              </Link>
            </button>
          </div>
          <div
            className="flex lg:hidden"
            style={{
              backgroundColor: "#e1d2d275",
              padding: "10px 10px",
              borderRadius: "10px",
            }}
          >
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="14"
                viewBox="0 0 22 14"
              >
                <g
                  fill="none"
                  fillRule="evenodd"
                  stroke="#000"
                  strokeLinecap="square"
                  strokeWidth="2"
                >
                  <path
                    d="M0 1L20 1M0 7L20 7M0 13L15 13"
                    transform="translate(1)"
                  ></path>
                </g>
              </svg>
            </button>
          </div>
        </nav>
      </div>

      {mobileMenuOpen && (
        <div className="overlay" onClick={() => setMobileMenuOpen(false)}></div>
      )}
      {mobileMenuOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div
            className="fixed inset-0"
            onClick={() => setMobileMenuOpen(false)}
          ></div>
          <div
            className="fixed inset-y-0 right-0 w-full mt-6 h-96 overflow-y-auto bg-pink-50 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
            style={{
              borderRadius: "50px",
              animation: "slideIn 0.5s forwards",
              zIndex: "300",
            }}
          >
            <div className="flex items-center justify-between">
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                <Image
                  src={logo}
                  alt="Picture of the KRIGEN LOGO"
                  width={150}
                  height={150}
                  quality={100}
                  priority
                  sizes={"100vw"}
                  style={{
                    objectFit: "cover",
                  }}
                />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <a
                    href="https://www.youtube.com/watch?v=FXm8718dm3k"
                    target="_blank"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Watch Demo
                  </a>
                  <a
                    href="/#Pricing"
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Pricing
                  </a>
                  <a
                    href="https://calendar.krigen.ai/"
                    target="_blank"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Book Call
                  </a>
                </div>
                <div className="py-6">
                  <button
                    type="submit"
                    className="rounded-xl bg-gradient-to-r bg-black px-8 py-2 text-lg font-medium text-white shadow-sm hover:from-indigo-500 hover:via-purple-500 hover:to-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    <Link href="https://app.krigen.ai/" target="_blank">
                      LOG IN
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default HeaderComp;
