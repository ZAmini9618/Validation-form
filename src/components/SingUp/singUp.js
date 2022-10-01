import { useState } from 'react';
import './singUp.css';
import { Validate } from '../validete/validate';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notify } from '../toastify/toastify';
import { Link } from 'react-router-dom';

function SingUp() {
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        comfirmPassword: '',
        isAccepet: false
    });
    const [errors, setErrors] = useState({});
    const [toutched, setToutched] = useState({});


    useEffect(() => {
        setErrors(Validate(data,'singup'))

    }, [data])

    const changHandeler = event => {
        if (event.target.name === 'isAccepet') {
            setData({ ...data, [event.target.name]: event.target.checked })
        } else {
            setData({ ...data, [event.target.name]: event.target.value })
            
        }
    }
    const focuseHandeler = event => {
        setToutched({ ...toutched, [event.target.name]: true })
        console.log(event.target.name)
        console.log(event.target.value);
    }

    const submitHandeler = event => {
        event.preventDefault();
        if (!Object.keys(errors).length) {
            notify('You signed up sucssesfully', 'sucsses');
        } else {
            notify('Invalid data!', 'error');
            setToutched({
                name: true,
                email: true,
                password: true,
                comfirmPassword: true,
                isAccepet: true
            })
        }
    }

    return (
        <div className='container'>
            <form onSubmit={submitHandeler} className='formContainer'>
                <h1 className='header'>Sign Up</h1>
                <div className='formField'>
                    <label>Name</label>
                    <input className={(errors.name && toutched.name) ? 'uncompled' : 'formImput'} type="text" name='name' value={data.name} onChange={changHandeler} onFocus={focuseHandeler} />
                    {errors.name && toutched.name && <span>{errors.name}</span>}
                </div>
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
                <div className='formField'>
                    <label>comfirmPassword</label>
                    <input className={(errors.comfirmPassword && toutched.comfirmPassword) ? 'uncompled' : 'formImput'} type="password" name='comfirmPassword' value={data.comfirmPassword} onChange={changHandeler} onFocus={focuseHandeler} />
                    {errors.comfirmPassword && toutched.comfirmPassword && <span>{errors.comfirmPassword}</span>}
                </div>
                <div className='formField'>
                    <div className='checkedBox'>
                        <label>I accept terms of privecy policy</label>
                        <input type="checkbox" name='isAccepet' value={data.isAccepet} onChange={changHandeler} onFocus={focuseHandeler} />
                    </div>
                    {errors.isAccepet && toutched.isAccepet && <span>{errors.isAccepet}</span>}
                </div>
                <div className='formButton'>
                    <Link to='/login'>Login</Link>
                    <button type='submit'>Signup</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
}

export default SingUp;
