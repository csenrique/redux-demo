import { useSelector, useDispatch } from 'react-redux';
import { setUser, unsetUser } from './reducers/user/userSlice';

export const App = () => {
  const dispatch = useDispatch();
  const { email, fullName } = useSelector(state => state.user);

  return (
          <div className="container">
            <h1>Hello World!!</h1>
            <h2>{ fullName }</h2>
            <p>El email en el Strore es : {email} </p>
            <button className='btn btn-primary'
            onClick={() => {
              dispatch(setUser({
                email: "cristobal2424@yahoo.es",
                fullName: "Cristobal Sanchez",
                token: "1234567890"
              }));
            }}
            >Set User</button>
             <button className='btn btn-danger'
            onClick={ () => dispatch(unsetUser()) }
            >Unset User</button>
          </div>
        )
}

export default App
