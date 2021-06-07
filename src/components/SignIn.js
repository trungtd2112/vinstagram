import React, {useState} from 'react';
import validation from './validation';
import {BrowserRouter, Redirect, Route, Switch, Link} from 'react-router-dom';
import PathString from '../constants/PathString';

const SignUp = () => {
    const [values, setValues] = useState({
        email: "",
        password: "",

    });
    const [errors, setErrors] = useState({});
    const handleForm = (event) => {
        event.preventDefault();
        setErrors(validation(values));
    };
    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        })
    }
    return (
        <div className="container1">
            <div>
                {/* <a className="buttonRedireact" href="">Sign Up</a> */}
                <Link to={PathString.SignUp} className="buttonRedireact">Sign Up</Link>
            </div>
            <div className="content">
                <div className="app-wrapper">
                    <div>
                        <h2 className="title">Vinstagram</h2>
                    </div>
                    <form className="form-wrapper">
                        <div className="email">
                            <label className="label">メール</label>
                            <input 
                                className="input" 
                                type="email" 
                                name="email"
                                value={values.email} 
                                onChange={handleChange}
                            />
                            {errors.email && <p className="error">{errors.email}</p>}
                        </div>
                        
                        <div className="password">
                            <label className="label">パスワード</label>
                            <input 
                                className="input" 
                                type="password" 
                                name="password" 
                                value={values.password} 
                                onChange={handleChange}
                            />
                            {errors.password && <p className="error">{errors.password}</p>}
                        </div>
                        <div className="password">
                            <input type="checkbox" name="account" value="Bike"></input>
                            <label for="account"> アカウントを覚える</label><br></br>
                        </div>
                        <div>
                            <button className="submit" onClick={handleForm}>
                                ログイン                
                            </button>
                        </div>

                    </form>
                </div>
                
                
            </div>
        </div>
    )
}
export default SignUp;