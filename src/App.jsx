import { Routes, Route, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
//Components
import { Home } from './pages/Home'
import { Index } from './pages/index';
import { Cart } from './pages/Cart';

export const App = () => {

  const { totalCount } = useSelector(state => state.cart);

  return (
          <div className="container">
            <div className="d-flex py-4">
            <Link className='btn btn-info mx-2'  to='/'>Login</Link>
            <Link className='btn btn-info mx-2' to='/home'>Home</Link>
            {/* <Link className='btn btn-info mx-2' to='/cart'>Cart</Link> */}
            <div className="ms-auto">
              <Link className='btn btn-primary position-relative' to='/cart'>
                Cart
                <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>
                  { totalCount }
                  <span className='visually-hidden'>Produsts in Cart</span>  
                </span>
              </Link>
            </div>
            </div>
            <hr />
            <Routes>
              <Route path='/' element={<Index />} />
              <Route path='/home' element={<Home />}/>   
              <Route path='/cart' element={<Cart />}/>            
            </Routes>
            </div>         
        )
}

export default App
