import Header from "../components/Header";
import Footer from "../components/Footer";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl w-full">
        <div className="py-24 sm:py-32">
          <div className=" mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl gap-16 sm:gap-y-24 grid lg:grid-cols-2 lg:items-center">
            <div className="lg:order-last">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
                <span className="text-primary"> Sign in</span> or{" "}
                <span className="text-primary">Sign up</span> to continue
              </h2>

              <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
                <a>
                  <button
                    type="button"
                    className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-base gap-x-2.5 px-3.5 py-2.5 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center"
                  >
                    with google
                  </button>
                </a>
              </p>
            </div>
            <div className="fade-out-image">
              <img
                src="/src/img/list-players.webp"
                alt=""
                className="w-full rounded-md shadow-xl ring-1 ring-gray-300 dark:ring-gray-700"
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Login;
