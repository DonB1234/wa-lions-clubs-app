// src/App.tsx — Cleaned React + TypeScript component

import React from "react";
import "./index.css";

interface Club {
  name: string;
  district: string;
  address: string;
  phone: string;
  email: string;
  website?: string;
  established: string;
  logo?: string;
}

const clubs: Club[] = [
  {
    name: "South Perth Lions Club",
    district: "District 201W2",
    address: "South Perth Community Centre, South Perth WA",
    phone: "0412 345 678",
    email: "info@southperthlions.org.au",
    website: "https://southperthlions.org.au",
    established: "1961",
    logo: "/logos/southperth.png",
  },
  {
    name: "Fremantle Lions Club",
    district: "District 201W2",
    address: "Fremantle Hall, Fremantle WA",
    phone: "0413 555 789",
    email: "contact@fremantlelions.org.au",
    website: "https://fremantlelions.org.au",
    established: "1958",
    logo: "/logos/fremantle.png",
  },
  {
    name: "Canning City Lions Club",
    district: "District 201W2",
    address: "Cannington Exhibition Centre, Cannington WA",
    phone: "0415 987 234",
    email: "info@canningcitylions.org.au",
    website: "https://canningcitylions.org.au",
    established: "1967",
    logo: "/logos/canningcity.png",
  },
  {
    name: "Applecross Lions Club",
    district: "District 201W2",
    address: "Applecross Community Hall, Applecross WA",
    phone: "0417 654 321",
    email: "info@applecrosslions.org.au",
    website: "https://applecrosslions.org.au",
    established: "1963",
    logo: "/logos/applecross.png",
  },
];

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center p-4 sm:p-6">
      {/* Header */}
      <header className="w-full max-w-5xl flex flex-col sm:flex-row items-center justify-between mb-4 sm:mb-6">
        <div className="text-center sm:text-left">
          <h1 className="text-2xl sm:text-3xl font-bold text-blue-600 tracking-wide">
            LIONS CLUBS WA
          </h1>
          <p className="text-gray-500 text-sm mt-1">© Don Barba 2025</p>
        </div>
        <div className="mt-3 sm:mt-0 w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
          <img
            src="/logos/lionswa.png"
            alt="Lions WA Logo"
            className="object-cover w-full h-full"
          />
        </div>
      </header>

      {/* Club Cards */}
      <main className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {clubs.map((club, idx) => (
          <div
            key={idx}
            className="border-2 border-red-600 rounded-xl p-4 flex flex-col justify-between"
          >
            {/* Top Row: Club Name + Right Column */}
            <div className="flex justify-between items-start">
              <h2 className="text-lg font-semibold text-gray-800 leading-tight">
                {club.name}
              </h2>

              {/* Right column: Est. + Logo */}
              <div className="flex flex-col items-center space-y-2">
                <div className="bg-pink-400 text-white text-xs font-bold rounded-full w-12 h-12 flex flex-col items-center justify-center">
                  <span>Est.</span>
                  <span>{club.established}</span>
                </div>
                {club.logo && (
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                    <img
                      src={club.logo}
                      alt={`${club.name} logo`}
                      className="object-contain w-full h-full"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Info Section */}
            <div className="mt-2 space-y-1 text-sm text-gray-700">
              <p>
                <span className="font-medium">District:</span> {club.district}
              </p>
              <p>
                <span className="font-medium">Address:</span> {club.address}
              </p>
              <p>
                <span className="font-medium">Phone:</span> {club.phone}
              </p>
              <p>
                <span className="font-medium">Email:</span> {club.email}
              </p>
              {club.website && (
                <p>
                  <span className="font-medium">Website:</span>{" "}
                  <a
                    href={club.website}
                    className="text-blue-500 hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {club.website}
                  </a>
                </p>
              )}
            </div>

            {/* View Details Button */}
            <div className="mt-3 flex justify-end">
              <button className="px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-none">
                View Details
              </button>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default App;
