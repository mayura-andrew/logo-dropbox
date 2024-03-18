import React from 'react';

const UserForm = () => {
  return (
    <div className="w-full max-w-xs ml-4">
  <h2 className="text-lg font-bold text-black">Tell about you</h2>
  <form className="bg-black shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
      <label className="block text-white text-sm font-bold mb-2" htmlFor="username">
        Name
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
    </div>
    <div className="mb-4">
      <label className="block text-white text-sm font-bold mb-2" htmlFor="registrationNumber">
        Registration Number
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="registrationNumber" type="text" placeholder="Registration Number" />
    </div>
    <div className="mb-4">
      <label className="block text-white text-sm font-bold mb-2" htmlFor="studyProgram">
        Study Program
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="studyProgram" type="text" placeholder="Study Program" />
    </div>
    <div className="mb-4">
      <label className="block text-white text-sm font-bold mb-2" htmlFor="faculty">
        Faculty
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="faculty" type="text" placeholder="Faculty" />
    </div>
    <div className="mb-4">
      <label className="block text-white text-sm font-bold mb-2" htmlFor="academicYear">
        Academic Year
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="academicYear" type="text" placeholder="Academic Year" />
    </div>
    <div className="mb-6">
      <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
        Email
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
    </div>
    <div className="flex items-center justify-between">
      <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
        Submit
      </button>
    </div>
  </form>
</div>
  );
};

export default UserForm;