import { Link, useNavigate } from "react-router-dom";
import {useCookies} from 'react-cookie'

export function Header(){
    const [cookies,setCookie,removeCookie]=useCookies();
    const navigate = useNavigate();
    
    function handleLogOut(){
        removeCookie(['user-id'])
    }

    return(
        <header className='d-flex justify-content-between p-2 m-2 bg-dark text-white'>
            <div>
            <h3><Link className='text-white text-decoration-none' to="/">Video-Tutorial</Link></h3>
            </div>
            <div>
                {
                    cookies['user-id']==undefined ?
                    <div>
                        <Link to="/login" className='btn btn-danger'>Signin</Link>
                        <Link to="/admin-login" className='btn btn-danger ms-2'>Admin Signin</Link>
                    </div>:
                    <div>
                        <b>{cookies['user-id']} </b>
                        <Link to='/login' onClick={handleLogOut} className="ms-2 btn btn-danger">Logout</Link>
                    </div>
                }
            </div>
      </header>
    )
}