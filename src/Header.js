import React from 'react';
import { Link } from 'react-router-dom';
function Header() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <div className="container-fluid">
                <div className="navbar-brand text-warning"><i className="fa fa-book fa-lg text-danger"></i> Learn React</div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarCollapse">
                    <ul className="navbar-nav ms-auto mb-2 mb-md-0 ">
                        <li className="nav-item">
                            <Link className="nav-link text-warning" to="/"><i className="fa fa-spinner fa-pulse text-danger"></i> About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-warning" to="/home"><i className="fa fa-home text-danger"></i> Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-warning" to="/resource"><i className="fa fa-address-book text-danger"></i> Resource</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-warning" to="/training"><i className="fa fa-chalkboard-teacher text-danger"></i> Training Details</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-warning" to="/imgUpload"><i className="fa fa-file-upload text-danger"></i> UploadImages</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-warning" to="/FormValidation"><i className="fa fa-filter text-danger"></i> FormValidation</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-warning" to="/vertical-bar"><i className="fa fa-chart-bar text-danger"></i> Chart</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-warning" to="/modal"><i className="fa fa-chart-bar text-danger"></i> Modal</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;