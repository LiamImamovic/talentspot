import Header from "../components/Header";
import Footer from "../components/Footer";
import Aside from "../components/Aside";
import { useState } from "react";

const Profile = () => {
  const [initialUserInfo, setInitialUserInfo] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@gmail.com",
    gender: "Homme",
    birthDate: "12/05/2001",
    height: "1m98",
    city: "Bordeaux",
    position: "Gardien de but",
    foot: "Gauche",
    level: "Nationale 3",
    club: "Andernos Sport FC",
    highlight: "Youtube URL",
  });

  const [userInfo, setUserInfo] = useState({ ...initialUserInfo });
  const [isModified, setIsModified] = useState(false);

  const handleChange = (field, value) => {
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      [field]: value,
    }));
    setIsModified(true);
  };

  const handleSave = () => {
    // Perform save action (update user info, API call, etc.)
    // For now, let's just log the updated user info
    console.log("Saving changes:", userInfo);

    // Reset isModified state
    setIsModified(false);

    // You can also reset initialUserInfo if needed
    setInitialUserInfo({ ...userInfo });
  };

  const handleCancel = () => {
    // Reset userInfo to initial state on cancel
    setUserInfo({ ...initialUserInfo });
    setIsModified(false); // Reset isModified state
  };

  return (
    <div>
      <Header />
      <div className="flex flex-col items-start	lg:flex-row lg:items">
        <Aside />
        <div className="flex-1">
          <main className="p-5">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Profile
            </h1>

            <div className="mt-6  pb-6 w-full h-full bg-gradient-to-r from-green-900 to-green-700 rounded-md shadow-lg">
              <div className="w-full h-1/6 rounded-t-md bg-gradient-to-r from-green-700 to-green-500 flex items-center p-4">
                <div className="rounded-full w-20 h-20 bg-white border-4 border-green-900"></div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-white">Doe</h3>
                  <h4 className="text-lg text-green-200">John</h4>
                </div>
              </div>
              <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-y-8 p-6">
                <div className="grid grid-cols-2 border-b border-white">
                  <div className="px-4 py-2 font-bold">Prénom</div>
                  <div className="px-4 py-2">
                    <input
                      type="text"
                      value={userInfo.firstName}
                      onChange={(e) =>
                        handleChange("firstName", e.target.value)
                      }
                      className="bg-green-400 px-2 py-1 rounded-md w-full"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 border-b border-white">
                  <div className="px-4 py-2 font-bold">Nom</div>
                  <div className="px-4 py-2">
                    <input
                      type="text"
                      value={userInfo.lastName}
                      onChange={(e) => handleChange("lastName", e.target.value)}
                      className="bg-green-400 px-2 py-1 rounded-md w-full"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 border-b border-white">
                  <div className="px-4 py-2 font-bold">Email</div>
                  <div className="px-4 py-2">
                    <input
                      type="text"
                      value={userInfo.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      className="bg-green-400 px-2 py-1 rounded-md w-full"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 border-b border-white">
                  <div className="px-4 py-2 font-bold">Genre</div>
                  <div className="px-4 py-2">
                    <input
                      type="text"
                      value={userInfo.gender}
                      onChange={(e) => handleChange("gender", e.target.value)}
                      className="bg-green-400 px-2 py-1 rounded-md w-full"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 border-b border-white">
                  <div className="px-4 py-2 font-bold">Date de naissance</div>
                  <div className="px-4 py-2">
                    <input
                      type="text"
                      value={userInfo.birthDate}
                      onChange={(e) =>
                        handleChange("birthDate", e.target.value)
                      }
                      className="bg-green-400 px-2 py-1 rounded-md w-full"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 border-b border-white">
                  <div className="px-4 py-2 font-bold">Taille</div>
                  <div className="px-4 py-2">
                    <input
                      type="text"
                      value={userInfo.height}
                      onChange={(e) => handleChange("height", e.target.value)}
                      className="bg-green-400 px-2 py-1 rounded-md w-full"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 border-b border-white">
                  <div className="px-4 py-2 font-bold">Ville</div>
                  <div className="px-4 py-2">
                    <input
                      type="text"
                      value={userInfo.city}
                      onChange={(e) => handleChange("city", e.target.value)}
                      className="bg-green-400 px-2 py-1 rounded-md w-full"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 border-b border-white">
                  <div className="px-4 py-2 font-bold">Poste</div>
                  <div className="px-4 py-2">
                    <input
                      type="text"
                      value={userInfo.position}
                      onChange={(e) => handleChange("position", e.target.value)}
                      className="bg-green-400 px-2 py-1 rounded-md w-full"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 border-b border-white">
                  <div className="px-4 py-2 font-bold">Pied</div>
                  <div className="px-4 py-2">
                    <input
                      type="text"
                      value={userInfo.foot}
                      onChange={(e) => handleChange("foot", e.target.value)}
                      className="bg-green-400 px-2 py-1 rounded-md w-full"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 border-b border-white">
                  <div className="px-4 py-2 font-bold">Niveau</div>
                  <div className="px-4 py-2">
                    <input
                      type="text"
                      value={userInfo.level}
                      onChange={(e) => handleChange("level", e.target.value)}
                      className="bg-green-400 px-2 py-1 rounded-md w-full"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 border-b border-white">
                  <div className="px-4 py-2 font-bold">Club</div>
                  <div className="px-4 py-2">
                    <input
                      type="text"
                      value={userInfo.club}
                      onChange={(e) => handleChange("club", e.target.value)}
                      className="bg-green-400 px-2 py-1 rounded-md w-full"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 border-b border-white">
                  <div className="px-4 py-2 font-bold">Highlight</div>
                  <div className="px-4 py-2">
                    <input
                      type="text"
                      value={userInfo.highlight}
                      onChange={(e) =>
                        handleChange("highlight", e.target.value)
                      }
                      className="bg-green-400 px-2 py-1 rounded-md w-full"
                    />
                  </div>
                </div>
              </div>
              {isModified && (
                <div className="flex justify-center">
                  <button
                    onClick={handleSave}
                    className="bg-green-500 text-white px-4 py-2 rounded-md mr-2"
                  >
                    Enregistrer
                  </button>
                  <button
                    onClick={handleCancel}
                    className="bg-gray-500 text-white px-4 py-2 rounded-md"
                  >
                    Annuler
                  </button>
                </div>
              )}
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Profile;
