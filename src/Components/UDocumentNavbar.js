import React from 'react';
import logo from '../images/Logos-04.png';

function UDocumentNavbar() {
    return (
        <>
          <div className="main-header side-header sticky sticky-pin" style={{marginBottom:"-64px"}}>
            <div className="container-fluid">
                <div className="main-header-left">
                  <img src={logo} style={{width: '150px', height: 'auto'}} alt=""/>
                </div>
                <div className="main-header-center">
                    <div className="responsive-logo">
                        <a href="/">
                          <img src={logo} className="mobile-logo" alt="logo" />
                        </a> 
                    </div>
                </div>
                <div className="main-header-right">
                    
                    <div className="dropdown main-profile-menu">
                        <a className="nav-link icon" href=""> <i className="fe fe-user header-icons"></i> </a>
                        
                        <div className="dropdown-menu">
                            <div className="header-navheading">
                                <h6 className="main-notification-title">Sonia Taylor</h6>
                                <p className="main-notification-text">Web Designer</p>
                            </div>
                            <a className="dropdown-item border-top" href="profile.html"> <i className="fe fe-user"></i> My Profile </a> <a className="dropdown-item" href="profile.html"> <i className="fe fe-edit"></i> Edit Profile </a>
                            <a className="dropdown-item" href="profile.html"> <i className="fe fe-settings"></i> Account Settings </a> <a className="dropdown-item" href="profile.html"> <i className="fe fe-settings"></i> Support </a>
                            <a className="dropdown-item" href="profile.html"> <i className="fe fe-compass"></i> Activity </a> <a className="dropdown-item" href="signin.html"> <i className="fe fe-power"></i> Sign Out </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="jumps-prevent" style={{paddingTop: "64px"}}></div>
        <div className="mobile-main-header">
            <div className="mb-1 navbar navbar-expand-lg nav nav-item navbar-nav-right responsive-navbar navbar-dark">
                <div className="collapse navbar-collapse" id="navbarSupportedContent-4">
                    <div className="d-flex order-lg-2 ml-auto">
                        
                        <div className="dropdown main-profile-menu">
                            <a className="d-flex" href="#">
                                <span className="main-img-user"><img alt="avatar" src="./assets/img/users/1.jpg" /></span>
                            </a>
                            <div className="dropdown-menu">
                                <div className="header-navheading">
                                    <h6 className="main-notification-title">Sonia Taylor</h6>
                                    <p className="main-notification-text">Web Designer</p>
                                </div>
                                <a className="dropdown-item border-top" href="profile.html"> <i className="fe fe-user"></i> My Profile </a> <a className="dropdown-item" href="profile.html"> <i className="fe fe-edit"></i> Edit Profile </a>
                                <a className="dropdown-item" href="profile.html"> <i className="fe fe-settings"></i> Account Settings </a> <a className="dropdown-item" href="profile.html"> <i className="fe fe-settings"></i> Support </a>
                                <a className="dropdown-item" href="profile.html"> <i className="fe fe-compass"></i> Activity </a> <a className="dropdown-item" href="signin.html"> <i className="fe fe-power"></i> Sign Out </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>                    
    )
}

export default UDocumentNavbar;
