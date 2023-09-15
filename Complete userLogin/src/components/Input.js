import { Fragment,useEffect,React,memo} from "react";
import { MDBInput } from "mdb-react-ui-kit";
import useInput from "./hooks/use-input";

const Input = (props) => {
  const {
    value: mailValue,
    valueIsValid: nameIsValid,
    changeHandler: mailChangeHandler,
    blurHandler: mailBlurHandler,
    resetValue:mailReset
  } = useInput((val) => val && val.includes('@'));

  const {
    value: passValue,
    valueIsValid: passIsValid,
    changeHandler: passChangeHandler,
    blurHandler: passBlurHandler,
    resetValue:passReset
  } = useInput((val) =>val && val.trim().length >= 8);

  useEffect(() => {
    if (nameIsValid && passIsValid) {
      props.onSubmit(true, mailValue, passValue);
      console.log('hellu')                   
    }
  }, [nameIsValid, passIsValid, mailValue, passValue,props]);
  return ( 
    <Fragment>
      <MDBInput
        wrapperClass="mb-4"
        label="Email address"
        id="form1"
        type="email"
        value={mailValue}
        onChange={mailChangeHandler}
        onBlur={mailBlurHandler}

      />
      <MDBInput
        wrapperClass="mb-4"
        label="Password"
        id="form2"
        type="password"
        value={passValue}
        onChange={passChangeHandler}
        onBlur={passBlurHandler}
      />
    </Fragment>
  );
};

export default memo(Input);
