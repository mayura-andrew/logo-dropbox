import React from "react";


const Contact = () => {
    return (
        <div className="p-6 bg-black rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mt-2 mb-1">Contact Details:</h2>
          <p>For any queries or further information, feel free to reach out to us:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Email: <a href="mailto:mayuraalahakoon@gmail.com" className="text-blue-500 underline">info@example.com</a></li>
            <li>Phone: <a href="tel:+1234567890" className="text-blue-500 underline">+1234567890</a></li>
            <li>Address: The Open University Of Sri Lanka</li>
          </ul>
        </div>
    )
}

export default Contact;