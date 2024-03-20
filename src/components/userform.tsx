import React, {useState} from 'react';

export const UserForm = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [studyProgram, setStudyProgram] = useState('')
  const [faculty, setFaculty] = useState('')
  const [academicYear, setAcademicYear] = useState('')
  const [email, setEmail] = useState('')
  const [issumbit, setIsSubmit] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  const handleSubmit = async (event:any) => {
    event.preventDefault();
    setIsSubmit(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    try {
      const response = await fetch("http://localhost:4000/v1/users/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          registrationNumber: parseInt(registrationNumber),
          studyProgram,
          faculty,
          academicYear: parseInt(academicYear),
          email
        })
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Something went wrong. Try again");
      }
      setSubmitStatus("Submission successful!");
    } catch(error) {
      console.error("Error", error)
      setSubmitStatus((error as Error).message);
    } finally {
      setIsSubmit(false);

    }
    
    }
  return (
    <div className="w-full max-w-xs sm:max-w-md items-center">
    <h2 className="text-lg font-bold text-white items-center">Tell us about yourself 🚀</h2>  
    <form onSubmit={handleSubmit} className="bg-gradient-to-r from-blue-700 to-green-500 shadow-md rounded px-4 sm:px-8 pt-6 pb-8 mb-2">
    <div className="mb-4">
      <label className="block text-white text-sm font-bold mb-2" htmlFor="username">
        First Name
      </label>
      <input value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
    </div>
    <div className="mb-4">
      <label className="block text-white text-sm font-bold mb-2" htmlFor="username">
        Last Name
      </label>
      <input value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
    </div>
    <div className="mb-4">
      <label className="block text-white text-sm font-bold mb-2" htmlFor="registrationNumber">
        Registration Number
      </label>
      <input value={registrationNumber}
        onChange={(e) => setRegistrationNumber(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="registrationNumber" type="text" placeholder="Registration Number" />
    </div>
    <div className="mb-4">
      <label className="block text-white text-sm font-bold mb-2" htmlFor="studyProgram">
        Study Program
      </label>
      <input value={studyProgram}
        onChange={(e) => setStudyProgram(e.target.value)}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="studyProgram" type="text" placeholder="Study Program" />
    </div>
    <div className="mb-4">
      <label className="block text-white text-sm font-bold mb-2" htmlFor="faculty">
        Faculty
      </label>
      <input value={faculty}
        onChange={(e) => setFaculty(e.target.value)}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="faculty" type="text" placeholder="Faculty" />
    </div>
    <div className="mb-4">
      <label className="block text-white text-sm font-bold mb-2" htmlFor="academicYear">
        Academic Year
      </label>
      <input value={academicYear}
        onChange={(e) => setAcademicYear(e.target.value)}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="academicYear" type="text" placeholder="Academic Year" />
    </div>
    <div className="mb-4">
      <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
        Email
      </label>
      <input value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
    </div>
      <div className="flex items-center justify-center mt-4">
      <button disabled={issumbit} className="bg-orange-500 items-center hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" type="submit">
        {issumbit ? "Submitting..." : "Submit"}
      </button>
    </div>
    <div className="mt-4">
      {submitStatus && <p className="text-center text-red-800">{submitStatus}</p>}
    </div>
  </form>
</div>
  );
};

export default UserForm;