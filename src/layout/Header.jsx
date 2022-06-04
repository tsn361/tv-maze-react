import { Link } from "react-router-dom";
import { Form, Row} from 'react-bootstrap';
import Nav from './Nav';
import logo  from '../Assets/images/tvm-header-logo.png';

export default function Header() {
  return (
    <div>
      <div className='d-flex header-bg'>
        <div className='container top-nav'>
          <Row>
            <div className="col-6 d-flex py-4">
              <Link to="/">
                <img src={logo} alt="logo" className="logo" style={{height: '50px'}} />
              </Link>
              <div className="ms-5">
                <Form.Control type="text" className="mt-1" placeholder="Search Shows and People " />
              </div>
            </div>
            <div className="col-6 text-end py-4 text-light fs-4">
              <div className="mt-1">
                <Link to="/login" className="me-4">Login</Link>
                <Link to="/register">Register</Link>
              </div>
            </div>
          </Row>
        </div>
      </div>
      <div className="top-nav-bg py-2 text-white">
        <div className="container">
          <Nav />
        </div>
      </div>
    </div>
  );
}