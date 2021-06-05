import React, {useState} from 'react';
import validation from './validation';
import {Link} from 'react-router-dom';
import PathString from '../constants/PathString';
const SignUp = () => {
    const [values, setValues] = useState({
        email: "",
        password: "",
        repassword: "",
        image: "",

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
        <div className="container">
            <div>
                {/* <a className="buttonRedireact" href="">Login</a> */}
                <Link to={PathString.SignIn} className="buttonRedireact">Sign In</Link>
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
                            <label className="label">確認パスワード</label>
                            <input 
                                className="input" 
                                type="password" 
                                name="repassword"
                                value={values.repassword} 
                                onChange={handleChange}
                            />
                            {errors.password && <p className="error">{errors.password}</p>}
                            {errors.repassword && <p className="error">{errors.repassword}</p>}
                        </div>

                        <div className="email">
                            <label className="label">イメージ</label>
                            <input
                                className="input"   
                                type="file" 
                                name="image"
                                value={values.image} 
                                onChange={handleChange}
                            />
                            {errors.image && <p className="error">{errors.image}</p>}
                        </div>

                        <div>
                            <button className="submit" onClick={handleForm}>
                                サインアップ 
                            </button>
                        </div>
                    </form>
                </div>
                
                
            </div>
        </div>
    )
}
export default SignUp;