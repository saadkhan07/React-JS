import React, { useState, useCallback } from "react";
import { MDBContainer, MDBCheckbox, MDBBtn } from "mdb-react-ui-kit";
import Logos from "./components/logos";
import Input from "./components/Input";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  const [creditentails, setCreditentials] = useState({
    mail: "",
    password: "",
    allOk:false
  });
  const formSubmitHandler = async (event) => {
    event.preventDefault();
    
    if (!creditentails.allOk) {
      console.log("Any of the inputs isn't valid!!");
      console.log(creditentails.mail,creditentails.password)
      return;
    }
  
    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ creditentails }),
      });
  
      if (!response.ok) {
        const data = await response.json();
        throw new Error( data.message || "Network response was not ok");
      }
  
      const data = await response.json();
      console.log(data.message);
    } catch (error) {


      console.error("Error:", error.message);

    }
  };

  const inputChechHandler = useCallback((val, mail, pass) => {
    if (val) {
      setCreditentials({
        mail:mail,
        password:pass,
        allOk:val
      })
    }
  },[]);

  return (
    <form onSubmit={formSubmitHandler}>
      <MDBContainer className="p-5 my-5 d-flex flex-column w-50 rounded">
        <Input
          onSubmit= { inputChechHandler}
        />

        <div className="d-flex justify-content-between mx-3 mb-4">
          <MDBCheckbox name="flexCheck" value="" label="Remember me" />
          <a href="!#">Forgot password?</a>
        </div>
        <MDBBtn className="mb-4" type="submit">
          Sign in
        </MDBBtn>
        <div className="text-center">
          <p>
            Not a member? <a href="#!">Register</a>
          </p>
          <p>or sign up with:</p>

          <Logos />
        </div>
      </MDBContainer>
    </form>
  );
}

export default App;
