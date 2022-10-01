import { useState } from 'react';
import { Validate } from '../validete/validate';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { notify } from '../toastify/toastify';
import 'react-toastify/dist/ReactToastify.css';
import './login.css'
import { Link } from 'react-router-dom';


function Login() {

    const [data, setData] = useState({
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState({});
    const [toutched, setToutched] = useState({});
    const changHandeler = event => {
        setData({ ...data, [event.target.name]: event.target.value })
    }
    const focuseHandeler = event => {
        setToutched({ ...toutched, [event.target.name]: true })
    }
    const submitHandeler = event => {
        event.preventDefault();
        if (!Object.keys(errors).length) {
            notify('You loged in sucssesfully', 'sucsses');
        } else {
            notify('Invalid data!', 'error');
            setToutched({
                email: true,
                password: true,
            })
        }
    }

    useEffect(() => {
        setErrors(Validate(data, 'login'))

    }, [data])


    return (
        <div className='container'>
            <form onSubmit={submitHandeler} className='formContainer'>
                <h1 className='header'>Log in</h1>
                <div className='formField'>
                    <label>Email</label>
                    <input className={(errors.email && toutched.email) ? 'uncompled' : 'formImput'} type="text" name='email' value={data.email} onChange={changHandeler} onFocus={focuseHandeler} />
                    {errors.email && toutched.email && <span>{errors.email}</span>}
                </div>
                <div className='formField'>
                    <label>Password</label>
                    <input className={(errors.password && toutched.password) ? 'uncompled' : 'formImput'} type="password" name='password' value={data.password} onChange={changHandeler} onFocus={focuseHandeler} />
                    {errors.password && toutched.password && <span>{errors.password}</span>}
                </div>

                <div className='formButton'>
                    <Link to='/singup'>Sign up</Link>
                    <button type='submit'>Login</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
}

export default Login;
