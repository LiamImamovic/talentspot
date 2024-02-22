import Header from "../components/Header";
import Footer from "../components/Footer";
import Aside from "../components/Aside";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const InputField = ({ label, value, onChange, placeholder }) => (
  <div className="grid grid-cols-2 border-b border-white">
    <div className="px-4 py-2 font-bold">{label}</div>
    <div className="px-4 py-2">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="bg-gray-600 px-2 py-1 rounded-md w-full"
      />
    </div>
  </div>
);

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
    seasons: [
      { season: "2022-2023", club: "USLCF" },
      { season: "2021-2022", club: "Union College" },
      { season: "2020-2021", club: "Union College" },
      { season: "2019-2020", club: "USLCF" },
      { season: "2018-2019", club: "FCEMA/USLCF" },
    ],
  });

  const [userInfo, setUserInfo] = useState({ ...initialUserInfo });
  const [isModified, setIsModified] = useState(false);

  const handleChange = (field, value, index) => {
    if (field === "season" || field === "club") {
      const updatedSeasons = [...userInfo.seasons];
      updatedSeasons[index][field] = value;
      setUserInfo((prevInfo) => ({
        ...prevInfo,
        seasons: updatedSeasons,
      }));
    } else {
      setUserInfo((prevInfo) => ({
        ...prevInfo,
        [field]: value,
      }));
    }
    setIsModified(true);
  };

  const handleSave = () => {
    console.log("Saving changes:", userInfo);
    setIsModified(false);
    setInitialUserInfo({ ...userInfo });
  };

  const handleCancel = () => {
    setUserInfo({ ...initialUserInfo });
    setIsModified(false);
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

            <div className="mt-6  pb-6 w-full h-full bg-gray-900 rounded-md shadow-lg">
              <div className="w-full h-1/6 rounded-t-md bg-gray-700 flex items-center p-4">
                <div className="rounded-full w-20 h-20 bg-white border-4 border-gray-900"></div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-white">Doe</h3>
                  <h4 className="text-lg text-gray-200">John</h4>
                </div>
              </div>
              <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-y-8 p-6">
                <InputField
                  label="Prénom"
                  value={userInfo.firstName}
                  onChange={(value) => handleChange("firstName", value)}
                />
                <InputField
                  label="Nom"
                  value={userInfo.lastName}
                  onChange={(value) => handleChange("lastName", value)}
                />
                <InputField
                  label="Email"
                  value={userInfo.email}
                  onChange={(value) => handleChange("email", value)}
                />
                <InputField
                  label="Genre"
                  value={userInfo.gender}
                  onChange={(value) => handleChange("gender", value)}
                />
                <InputField
                  label="Date de naissance "
                  value={userInfo.birthDate}
                  onChange={(value) => handleChange("birthDate", value)}
                />
                <InputField
                  label="Taille"
                  value={userInfo.height}
                  onChange={(value) => handleChange("height", value)}
                />
                <InputField
                  label="Ville"
                  value={userInfo.city}
                  onChange={(value) => handleChange("city", value)}
                />
                <InputField
                  label="Poste"
                  value={userInfo.position}
                  onChange={(value) => handleChange("position", value)}
                />
                <InputField
                  label="Pied"
                  value={userInfo.foot}
                  onChange={(value) => handleChange("foot", value)}
                />
                <InputField
                  label="Niveau"
                  value={userInfo.level}
                  onChange={(value) => handleChange("level", value)}
                />
                <InputField
                  label="Club"
                  value={userInfo.club}
                  onChange={(value) => handleChange("club", value)}
                />
                <InputField
                  label="highlight"
                  value={userInfo.highlight}
                  onChange={(value) => handleChange("highlight", value)}
                />
              </div>

              <h3 className="text-lg font-bold text-white mb-2 pl-6">
                Saisons précédentes
              </h3>
              <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-y-8 p-6">
                {userInfo.seasons.map((season, index) => (
                  <div key={index} className="bg-gray-800 rounded-md p-4 mr-4">
                    <h3 className="text-lg font-bold text-white mb-2">{`Saison ${season.season}`}</h3>
                    <input
                      type="text"
                      value={season.club}
                      onChange={(e) =>
                        handleChange("club", e.target.value, index)
                      }
                      placeholder="Nom du club"
                      className="bg-gray-700 px-2 py-1 rounded-md w-full mb-2"
                    />
                  </div>
                ))}
              </div>
              {isModified && (
                <div className="flex justify-center">
                  <button
                    onClick={handleSave}
                    className="bg-green-500 text-white px-4 py-2  rounded-md mr-2"
                  >
                    Enregistrer
                  </button>
                  <button
                    onClick={handleCancel}
                    className="bg-gray-600 text-white px-4 py-2 rounded-md"
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
