import React, {useState} from 'react'

const Shows = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handleEmailInput = (event) => {
    console.log("emmail ",event.target.value)
   // setEmail(event.target.value);
  }

  const handlePasswordInput = (event) => {
    console.log("pass: ",event.target.value)
   // setPassword(event.target.value);
  }

    return (
      <div >
        <div >
          <label htmlFor={"email"}>Email</label>
          <input id={"email"} type={"email"} value={email}  onChange={handleEmailInput} />
        </div>
        <div >
          <label htmlFor={"password"}>Password</label>
          <input id={"password"} type={"password"} />
        </div>

        {/ Place login error inside this div. Show the div ONLY if there are login errors. /}
        <div/>

        <div >
          <button>Login</button>
        </div>
      </div>
    );
}

export default Shows;
