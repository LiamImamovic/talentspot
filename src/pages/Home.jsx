import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl w-full">
        <div
          className="absolute top-0 left-0 right-0 bottom-0 bg-no-repeat opacity-30 md:opacity-100"
          style={{ backgroundImage: 'url("src/img/background.jpeg")' }}
        ></div>
        <div className="py-24 sm:py-32 md:py-40 relative">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl gap-16 sm:gap-y-24 flex flex-col">
            <div className="text-center relative z-10">
              <div className="mb-10">
                <a
                  href="/"
                  className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium text-xs gap-x-1.5 px-2.5 py-1.5 dark:bg-primary-700/20 dark:ring-1 dark:ring-primary-900 dark:hover:bg-primary-700/40 dark:text-white inline-flex items-center rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    className="icon flex-shrink-0 h-4 w-4"
                    width="1em"
                    height="1em"
                    viewBox="0 0 256 256"
                  >
                    <path
                      fill="currentColor"
                      d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88M80 108a12 12 0 1 1 12 12a12 12 0 0 1-12-12m96 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-1.07 48c-10.29 17.79-27.4 28-46.93 28s-36.63-10.2-46.92-28a8 8 0 1 1 13.84-8c7.47 12.91 19.21 20 33.08 20s25.61-7.1 33.07-20a8 8 0 0 1 13.86 8"
                    ></path>
                  </svg>
                  <span>Made by a baller</span>
                </a>
              </div>
              <h1 className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-7xl">
                Elevate your visibility with{" "}
                <span className="text-primary">talentspot</span>&apos;s
                innovative solution
              </h1>
              <p className="mt-6 text-lg tracking-tight text-gray-600 dark:text-gray-300 max-w-[730px] mx-auto">
                Embark on an exhilarating journey with talent
                <span className="text-primary">spot</span>{" "}
                <span className="font-bold">
                  – where every kick becomes an opportunity.{" "}
                </span>
                Your ascent begins now.
              </p>
              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 justify-center">
                <a
                  className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 rounded-full text-base gap-x-2.5 px-3.5 py-2.5 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 bg-white hover:bg-gray-50 disabled:bg-white dark:disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 dark:bg-white dark:hover:bg-gray-200 dark:text-black font-bold inline-flex items-center"
                  href="/login"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    className="icon flex-shrink-0 h-6 w-6"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7a15.53 15.53 0 0 1-.311.06a15.09 15.09 0 0 1-2.448-2.448a14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306a4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0"
                    ></path>
                  </svg>
                  Oh Hell Yes
                </a>
              </div>
            </div>

            <div className="fade-out-image">
              <img
                src="/src/img/list-players.webp"
                alt="list players"
                className="w-full rounded-md shadow-xl ring-1 ring-gray-300 dark:ring-gray-700"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
