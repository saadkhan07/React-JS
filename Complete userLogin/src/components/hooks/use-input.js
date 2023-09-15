import { useState } from 'react';

const useInput=(validateValue)=>{
    const [value, setValue] = useState('');
    const [isTouched,setIstouched]=useState(false)
    let valueIsValid = validateValue(value);
    let invalid=isTouched && !valueIsValid

    const changeHandler = (event) => {
        setValue(event.target.value);
        setIstouched(true);
    };

    const blurHandler = () => {
        setIstouched(true);
    };

    const resetValue = () => {
        setValue('')
        setIstouched(false)
    };

    return {value,valueIsValid,invalid,changeHandler, blurHandler, resetValue};
}

export default useInput;

