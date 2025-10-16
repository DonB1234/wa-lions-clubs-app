// src/App.tsx — React + TypeScript with perfectly aligned red icons

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
  // ... same clubs array as before ...
];

const App: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  // Perfectly aligned red circle icon
  const Icon = () => (
    <span className="inline-block w-2.5 h-2.5 bg-red-600 rounded-full mr-2 flex-shrink-0"></span>
  );

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
            className="border-2 border-red-600 rounded-xl p-4 flex flex-col justify-between transition-all duration-300 bg-white shadow"
          >
            {/* Top Row */}
            <div className="flex justify-between items-start">
              <h2 className="text-lg font-semibold text-gray-800 leading-tight">
                {club.name}
              </h2>
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

            {/* Basic Info with reduced spacing */}
            <div className="mt-2 text-sm text-gray-700 pl-3 space-y-1">
              <p className="flex items-center">
                <Icon />
                <span className="font-medium mr-1">District:</span> {club.district}
              </p>
              <p className="flex items-center">
                <Icon />
                <span className="font-medium mr-1">Address:</span> {club.address}
              </p>
              <p className="flex items-center">
                <Icon />
                <span className="font-medium mr-1">Phone:</span> {club.phone}
              </p>
              <p className="flex items-center">
                <Icon />
                <span className="font-medium mr-1">Email:</span> {club.email}
              </p>
              {club.website && (
                <p className="flex items-center">
                  <Icon />
                  <span className="font-medium mr-1">Website:</span>
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
                className="px-12 py-2 bg-red-600 text-white text-sm font-medium rounded-md w-full max-w-xs"
                onClick={() => toggleExpand(idx)}
              >
                {expandedIndex === idx ? "Hide Details" : "View Details"}
              </button>
            </div>

            {/* Expanded Roles */}
            <div
              className={`mt-3 text-sm text-gray-700 transition-all duration-300 overflow-hidden pl-3 space-y-1 ${
                expandedIndex === idx ? "max-h-96" : "max-h-0"
              }`}
            >
              {expandedIndex === idx &&
                club.roles?.map((role, rIdx) => (
                  <p key={rIdx} className="flex items-center">
                    <Icon />
                    <span className="font-medium mr-1">{role.title}:</span> {role.name}
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
