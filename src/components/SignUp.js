import React, {useContext, useState} from 'react';
import validation from './validation';
import {Link, useHistory} from 'react-router-dom';
import PathString from '../constants/PathString';
import axios from 'axios';
import { UserContext } from '../contexts/userContext';

const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file)
        fileReader.onload = () => {
            resolve(fileReader.result);
            }
        fileReader.onerror = (error) => {
            reject(error);
            }
    })
}

const SignUp = () => {
    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        repassword: "",
        avatar: null,
    });
    const [errors, setErrors] = useState({});
    const { setUserDetail } = useContext(UserContext);
    const history = useHistory();

    const handleForm = async (event) => {
        event.preventDefault();
        setErrors(validation(values));
        console.log(values)

        try {
            const response = await axios.post('https://sheltered-coast-77536.herokuapp.com/api/auth/register', values);
            console.log(response.data);
            setUserDetail(response.data.user);
            history.push('/home');
        } catch (error) {
            console.log(error);
        }
    };
    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        })
    }

    const handleUploadImage = async event => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            const base64 = await convertBase64(img);
            setValues({
                ...values,
                avatar: base64,
            });
        }
    }
    return (
        <div className="container1">
            <div>
                {/* <a className="buttonRedireact" href="">Login</a> */}
                <Link to={PathString.SignIn} className="buttonRedireact">サインイン</Link>
            </div>
            <div className="content">
                <div className="app-wrapper">
                    <div>
                        <h2 className="title">Vinstagram</h2>
                    </div>
                    <form className="form-wrapper">
                        <div className="email">
                            <label className="label">ユーザー名</label>
                            <input 
                                className="input" 
                                type="text" 
                                name="username"
                                value={values.username} 
                                onChange={handleChange}
                            />
                            {errors.email && <p className="error">{errors.email}</p>}
                        </div>
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
                                name="avatar"
                                onChange={handleUploadImage}
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