import React from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <>
<body id="home" data-aos-easing="ease" data-aos-duration="400" data-aos-delay="0" cz-shortcut-listen="true"></body>
    <header className="animate__animated fix animate__slideInDown">


<nav className="navbar navbar-expand-md navbar-white bg-white navbar-transparent">
    <div className="container">
        <Link className="navbar-brand logo" to="/">
            <img src="assets/img/logo_001.png" alt="Logo" className="logo-img"/>
        </Link>
        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#collapsable-menu" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon">
                ☰
            </span>
        </button>
        <div className="navbar-collapse collapse" id="collapsable-menu">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/about">Why LindaPay</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/products">Products</Link>
                </li>
                <li className="nav-item">
                    <div className="dropdown show" id="settings-menu">
                        <Link className="dropdown-toggle" to="#" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Support</Link>
                        <div className="dropdown-menu animate__animated animate__fadeInUp animate__faster" aria-labelledby="dropdownMenuLink">
                            <Link className="dropdown-item" to="/privacy">Dispute Resolution</Link>
                            <Link className="dropdown-item" to="/contact-us">Contact Us</Link>
                        </div>
                    </div>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/pricing">Pricing</Link>
                </li>

                    <li className="nav-item">
                        <Link className="animate__animated nav-link btn btn-outline" to="/login">
                            Login
                        </Link>
                    </li>  
                    <li className="nav-item">
                        <a className="nav-link animate__animated btn btn-solid" href="/signup">Sign-up</a>
                    </li>
                
                
            </ul>
        </div>
    </div>
</nav>

</header>
</>
  )
}

export default Navbar