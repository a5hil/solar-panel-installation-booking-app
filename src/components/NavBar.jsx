import React from 'react'

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">SPI BOOKING APP</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                            <a className="nav-link" href="/add">Add Customer</a>
                            <a className="nav-link" href="/view">View Customer</a>
                            
                            
                        </div>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link" href="/addinstall">Add Solar Installation Details</a>
                            <a className="nav-link" href="/viewinstall">View Solar Installation Details</a>
                            
                            
                        </div>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            
                            <a className="nav-link" href="/addteam">Add Installation Team Details</a>
                            <a className="nav-link" href="/viewteam">View Installation Team Details</a>
                            
                            
                        </div>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            
                            <a className="nav-link" href="/addpayment">Add Payment Details</a>
                            <a className="nav-link" href="/viewpayment">View Payment Details</a>
                            
                            
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar