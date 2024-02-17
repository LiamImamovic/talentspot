const Header = () => {
  return (
    <header className="bg-bg-primary backdrop-blur border-b border-gray-200 dark:border-gray-800 -mb-px sticky top-0 z-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center justify-between gap-3 h-16">
        <div className="lg:flex-1 flex items-center gap-1.5">
          <a className="flex-shrink-0 font-bold text-xl text-gray-900 dark:text-white inline-flex items-center">
            talent
            <span className="text-primary">spot</span>
          </a>
        </div>

        <div className="flex items-center justify-end lg:flex-1 gap-1.5">
          <div className="flex items-center gap-4">
            <a
              className="flex-shrink-0 rounded-md text-sm gap-x-1.5 px-2.5 py-1.5 shadow-sm text-white bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 inline-flex items-center font-bold"
              href="/login"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                className="icon flex-shrink-0 h-5 w-5"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                data-v-eb980f1d=""
              >
                <path
                  fill="currentColor"
                  d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4m0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4"
                ></path>
              </svg>{" "}
              Sign in
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
