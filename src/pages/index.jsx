import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../reducers/user/userSlice';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

export const Index = () => {

    const dispatch = useDispatch();
    const emailField = useRef(null);
    const passworlField = useRef(null);

    const navigate = useNavigate();
 
    const handleSubmit = e => {
        e.preventDefault();
        Axios.get("http://localhost:3000/users")
            .then(response => {
                const users = response.data;
                const userToLog = users.find(user => user.email === emailField.current.value);

               if (userToLog) {
                 if (userToLog.password === passworlField.current.value) {
                    dispatch(setUser({
                        email: userToLog.email,
                        fullName: `${userToLog.first_name} ${userToLog.last_name}`,
                        token: Date.now()
                    }));
                    
                    navigate("/home");
                    
                 }
               } 
            });
    }
    return(
        <div className="row justify-content-center">
            <div className="col-6">
                <h2 className="mb-4">LOGIN FORM</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Email Address</label>
                        <input type="email" className="form-control" ref={emailField}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" ref={passworlField} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

