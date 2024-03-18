"use client";
import { useState } from 'react';
import CompetitionDetails from '@/components/description';
import UserForm from "@/components/userform";
import Dropbox from "@/components/dropbox";

export default function Page() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <div className="flex flex-col items-center gap-2">
        <div className="flex flex-col lg:flex-row m-8 gap-4">
          {showDetails && <CompetitionDetails />}
          <Dropbox />
          <UserForm />
          <button 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded " 
            onClick={() => setShowDetails(!showDetails)}
          >
            {showDetails ? 'Hide Details ⬆️ ' : 'About Competition ⬅️'}
          </button>
        </div>   
      </div>
    </>
  );
}