import { useState } from "react";

const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    const [errors, setErrors] = useState({errFN:"",errLN:"",errEmail:"",errPassword:""});

    const emailRegex = RegExp(
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    );

    const handleChange = e => {
        e.preventDefault();
        setValue(e.target.value);
        const { name, value } = e.target;
        

        switch (name) {
            case "firstName":
                if (value.length < 3) {
                    setErrors({errFN:"minimum 3 characaters required"});
                    
                }
                else{
                    setErrors({errFN:""});
                }
                break;
            case "lastName":
                if (value.length < 3) {
                    setErrors({errLN:"minimum 3 characaters required"});
                    
                }
                else{
                    setErrors({errLN:""});
                }
                break;
            case "email":
                 if (emailRegex.test(value)!==true) {
                    setErrors({errEmail:"invalid email address"});
                }
                else{
                    setErrors({errEmail:""});
                }
                break;
            case "password":
                if (value.length < 6) {
                    setErrors({errPassword:"minimum 6 characaters required"});
                }
                else{
                    setErrors({errPassword:""});
                }
                break;
                
            default:
                break;
        }

        // this.setState({ formErrors, [name]: value }, () => console.log(state));
    };

    return {
        value,
        errors,
        onChange: handleChange

    };
};

export default useInput;