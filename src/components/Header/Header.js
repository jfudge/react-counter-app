import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav className="navbar fixed-top navbar-dark bg-primary">         
        <a className="navbar-brand text-white float-left" href="#">         
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
            <span className="navbar-toggler-icon"></span>
            </button>
            <span className="counter">COUNTER APP</span>
        </a>    
        <div className="navbar-collapse collapse" id="collapsingNavbar">
          <ul className="navbar-nav">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/page1">Page1</Link>
            <Link className="nav-link" to="/page2">Page2</Link>
            <Link className="nav-link" to="/page3">Page3</Link>  
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;