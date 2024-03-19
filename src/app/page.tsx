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
        <div className="flex flex-col lg:flex-row m-8 gap-4">
          {showDetails && <CompetitionDetails />}
          <UserForm />
          <Dropbox />
          <button 
            className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded " 
            onClick={() => setShowDetails(!showDetails)}
          >
            {showDetails ? 'Hide Details ⬆️ ' : 'About Competition ⬅️'}
          </button>
        </div>   
      </div>
    </>
  );
}