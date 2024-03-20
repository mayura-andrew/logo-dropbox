"use client";
import { useState } from 'react';
import CompetitionDetails from '@/components/description';
import UserForm from "@/components/userform";
import Dropbox from "@/components/dropbox";

export default function Page() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <div className="flex flex-col items-center gap-2 bg-black text-white prose prose-lg max-w-none rounded-xl bg-gradient-to-r from-gray-800 via-black to-gray-">
        <div className="flex flex-col lg:flex-row m-4 lg:m-8 gap-2 lg:gap-4">
          {showDetails ? (
            <>
              <CompetitionDetails />
              <button 
                className="bg-blue-800 hover:bg-blue-700 text-white text-xl font-bold py-2 px-2 rounded mt-4 lg:mt-0 items-stretch" 
                onClick={() => setShowDetails(!showDetails)}
              >
                Submit Your Design (Click here) ➡️
              </button>
            </>
          ) : (
            <>
              <Dropbox />
              <UserForm />
              <button 
                className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded mt-4 lg:mt-0" 
                onClick={() => setShowDetails(!showDetails)}
              >
                About this Competition
                <p className="text-lg font-bold text-white">Rule & Regulations</p>
                <p className="text-blue-300 underline cursor-pointer">(Click here)</p>
                <span className="text-2xl text-white">⬅️</span>
              </button>
            </>
          )}
        </div>   
      </div>
      <p className="text-center text-sm mt-3">Developed by <a href="https://github.com/mayura-andrew" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">@mayura-andrew</a></p>
    </>
  );
}