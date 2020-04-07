import * as React from 'react';
import './App.css';


const Login = () => {

    const [{username, password}, setCredentials] = React.useState({
        username: '',
        password:''
    });
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Tadam');

    };


    return (
        <React.Fragment>
        <div className="container-fluid top-level">
            <div className="row justify-content-center">
                <div className="col-12 col-sm-6 col-md-3">
                <img src="https://i.ya-webdesign.com/images/people-icon-png.png" alt="" className="login-img" />
                <form className="form-container" onSubmit={handleSubmit}>
                    <h4 className="text-center font-weight-bold">Login Form</h4>
                    <div className="form-group">
                        <input  
                            className="form-control" 
                            placeholder = 'Username'
                            value = {username}
                            onChange = {(e) => setCredentials({
                                username: e.target.value,
                                password
                            })}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                        className="form-control"
                        placeholder = "Password"
                        type="password"
                        value = {password}
                        onChange = {(e) => setCredentials({
                            username,
                            password:e.target.value
                        })}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Login</button>
                </form>
                </div>
            </div>
        </div>
    </React.Fragment>
    )
    
};


export default  Login;