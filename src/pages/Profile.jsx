import Header from "../components/Header";
import Footer from "../components/Footer";
import Aside from "../components/Aside";

const Profile = () => {
  return (
    <div>
      <Header />
      <div className="flex">
        <Aside />
        <div className="flex-1">
          <main className="p-5">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Profile
            </h1>

            <div className="mt-6 w-full h-screen bg-gradient-to-r from-red-900 to-red-700 rounded-md shadow-lg">
              <div className="w-full h-1/6 rounded-t-md bg-gradient-to-r from-red-700 to-red-500 flex items-center p-4">
                <div className="rounded-full w-20 h-20 bg-white border-4 border-red-900"></div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-white">Doe</h3>
                  <h4 className="text-lg text-red-200">John</h4>
                </div>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Profile;
