import React, {useState} from "react";
import { validateEmail } from "../../utils/helper"

function Contact() {

  const [userName, setUserName] = useState('');
  const [email, setEmail] =useState('');
  const [message, setMessage]=useState('');
  const [error, setError] = useState('');
  
  const handleInputChange = (e) => {
      // Getting the value and name of the input which triggered the change
      const { target } = e;
      const inputType = target.name;
      const inputValue = target.value;
  
      // Based on the input type, we set the state of either email, username, and password
      if (inputType === 'Email') {
        setEmail(inputValue);
        setError('')
      } else if (inputType === 'Name') {
        setUserName(inputValue);
        setError('')
      } else {
        setMessage(inputValue);
        setError('')
      }
    };

    const handleClick = (e) => {
      e.preventDefault();
      if(!userName || !email || !message) {
        setError('You are missing a required field!')
      }
    }

  const handleFormSubmit = (e) => {
      e.preventDefault();

  if (!validateEmail(email) || !userName) {
    setError("Invalid Email Address")
    // We want to exit out of this code block if something is wrong so that the user can correct it
    return;
    // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
  }
  if(!userName || !email || !message) {
    setError('You are missing a required field!')
    return;
  }
      console.log("Name: " + userName);
      console.log("Email: " + email);
      console.log("Message: " + message);
  }
  return (
    <div onClick={handleClick} className="Contact backgroundImage h-[85%] border-y-4 border-white overflow-auto">
      <div className="grid grid-cols-1 place-items-center content-center my-20">
        <div className="w-96 h-96 bg-teal-100/70 border-4 border-slate-400 rounded-md shadow-lg shadow-black place-items-center content-around">
          <form className="grid grid-cols-1 place-items-center content-between">
            <h2>Looking forward to your inquiry!</h2>
            {error && <h2 className="text-red-700">{error}</h2>}
            <label htmlFor="Name">Name:</label>
            <input
              type="text"
              name="Name"
              onChange={handleInputChange}
              value={userName}
            />
            <br />
            <label htmlFor="Email">Email:</label>
            <input
              type="text"
              name="Email"
              onChange={handleInputChange}
              value={email}
            />
            <br />
            <label htmlFor="message">Message:</label>
            <textarea
              name="message"
              onChange={handleInputChange}
              className="w-[90%]"
              value={message}
            />
            <br />
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-max"
              onClick={handleFormSubmit}
            >
              Submit!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
