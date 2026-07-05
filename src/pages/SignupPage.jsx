import { useState } from "react";

export default function SignupPage() {


   const [userInfo, setUserInfo] = useState({
    name:"",
    email:"",
    password:"",
    confirmpassword:"",
   })

const submitHandler=(e)=>
{e.preventDefault()
  console.log("from submitted")
  console.log("userInfo:",userInfo)
}

const changeHandler=(e)=>{
  const key=e.target.name;
  const value=e.target.value;

  setUserInfo({
    ...userInfo,
    [key]:value
  })}


  return (

    <div style={{ borderRadius:"11px",width: "349px",padding:"34px", margin: "20px auto", backgroundColor:"rgba(229, 255, 152, 1)" }}>
      <h2>Register</h2>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          style={{ width: "94%", padding: "8px", marginBottom: "10px" }}
          value={userInfo.name}
          onChange={changeHandler}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          style={{ width: "94%", padding: "8px", marginBottom: "10px" }}
          value={userInfo.email}
          onChange={changeHandler}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          style={{ width: "94%", padding: "8px", marginBottom: "10px" }}
          value={userInfo.password}
          onChange={changeHandler}
        />
        <input
          type="password"
          name="confirmpassword"
          placeholder="Confirm Password"
          style={{ width: "94%", padding: "8px", marginBottom: "10px" }}
          value={userInfo.confirmpassword}
          onChange={changeHandler}
        />
        <button
          type="submit"
          style={{
            padding: "8px",
            backgroundColor: "#222",
            color: "white",
            border: "none",

          }}
          value="Register"
        >
          Register
        </button>
      </form>

    </div>
  );
}






