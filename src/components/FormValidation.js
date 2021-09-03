import React from "react";
import "../App.css";
import useInput from "../hooks/UseInput";

const FormValidation = () => {
    const firstName = useInput("");
    const lastName = useInput("");
    const email = useInput("");
    const password = useInput("");

    const handleSubmit = e => {

        e.preventDefault();
        if (firstName.errors.errFN.length > 0 || lastName.errors.errLN.length > 0 || email.errors.errEmail.length > 0 || password.errors.errPassword.length > 0) {
            console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
            
        } else if(firstName.value==="" || lastName.value=== "" || email.value=== "" || password.value=== ""){
            console.error("FORM INVALID - DISPLAY ERROR MESSAGE Empty");
            
        }else {
            console.log(`
            --SUBMITTING--
            First Name: ${firstName.value}
            Last Name: ${lastName.value}
            Email: ${email.value}
            Password: ${password.value}
          `);
        }
    };




    //const { formErrors } = state;

    return (
        <div className="container mp-2">
            <div className="row">
                <div className="col-lg-3">
                </div>
                <div className="col-lg-6 text-center">
                    <h1>Create Account</h1>
                    <form onSubmit={handleSubmit} noValidate>
                        {/* <form > */}
                        <div className="mb-3">
                            <label htmlFor="firstName" className="form-label">First Name</label>
                            <input
                                className="form-control"
                                placeholder="First Name"
                                type="text"
                                name="firstName"
                                value={firstName.value}
                                onChange={firstName.onChange}
                            />
                            {firstName.errors.errFN.length > 0 && (
                                <span className="errorMessage">{firstName.errors.errFN}</span>
                            )}


                            <label htmlFor="lastName">Last Name</label>
                            <input
                                className="form-control"
                                placeholder="Last Name"
                                type="text"
                                name="lastName"
                                value={lastName.value}
                                onChange={lastName.onChange}
                            />
                            {lastName.errors.errLN.length > 0 && (
                                <span className="errorMessage">{lastName.errors.errLN}</span>
                            )}
                        </div>

                        <div className="email">
                            <label htmlFor="email">Email</label>
                            <input
                                className="form-control"
                                placeholder="Email"
                                type="email"
                                name="email"
                                value={email.value}
                                onChange={email.onChange}
                            />
                            {email.errors.errEmail.length > 0 && (
                                <span className="errorMessage">{email.errors.errEmail}</span>
                            )}
                        </div>

                        <div className="password">
                            <label htmlFor="password">Password</label>
                            <input
                                className="form-control"
                                placeholder="Password"
                                type="password"
                                name="password"
                                value={password.value}
                                onChange={password.onChange}
                            />
                            {password.errors.errPassword.length > 0 && (
                                <span className="errorMessage">{password.errors.errPassword}</span>
                            )}
                        </div>

                        <div className="createAccount">
                            <button type="submit">Create Account</button>
                            <small>Already Have an Account?</small>
                        </div>

                    </form>
                </div>
                <div className="col-lg-3">
                </div>
            </div>
        </div>
    );

}

export default FormValidation;
