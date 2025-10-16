// src/App.tsx — React + TypeScript component with expandable cards and slightly indented details

import React, { useState } from "react";
import "./index.css";

interface Role {
  title: string;
  name: string;
}

interface Club {
  name: string;
  district: string;
  address: string;
  phone: string;
  email: string;
  website?: string;
  established: string;
  logo?: string;
  roles?: Role[];
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
    roles: [
      { title: "President", name: "Alice Smith" },
      { title: "Secretary", name: "Bob Johnson" },
      { title: "Treasurer", name: "Carol White" },
    ],
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
    roles: [
      { title: "President", name: "David Lee" },
      { title: "Secretary", name: "Emma Brown" },
      { title: "Treasurer", name: "Frank Green" },
    ],
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
    roles: [
      { title: "President", name: "Grace Hall" },
      { title: "Secretary", name: "Henry King" },
      { title: "Treasurer", name: "Ivy Scott" },
    ],
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
    roles: [
      { title: "President", name: "Jack Wilson" },
      { title: "Secretary", name: "Karen Young" },
      { title: "Treasurer", name: "Leo Harris" },
    ],
  },
];

const App: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

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
      <main className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 gap-6">
        {clubs.map((club, idx) => (
          <div
            key={idx}
            className="border-2 border-red-600 rounded-xl p-4 flex flex-col justify-between transition-all duration-300"
          >
            {/* Top Row */}
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

            {/* Basic Info with slight left indent */}
            <div className="mt-2 space-y-1 text-sm text-gray-700 pl-3">
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
            <div className="mt-3 flex justify-center">
              <button
                className="px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-md"
                onClick={() => toggleExpand(idx)}
              >
                {expandedIndex === idx ? "Hide Details" : "View Details"}
              </button>
            </div>

            {/* Expanded Roles Section with slight left indent */}
            <div
              className={`mt-3 text-sm text-gray-700 transition-all duration-300 overflow-hidden pl-3 ${
                expandedIndex === idx ? "max-h-96" : "max-h-0"
              }`}
            >
              {expandedIndex === idx &&
                club.roles?.map((role, rIdx) => (
                  <p key={rIdx}>
                    <span className="font-medium">{role.title}:</span> {role.name}
                  </p>
                ))}
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default App;
