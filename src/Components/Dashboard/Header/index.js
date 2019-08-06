import React from 'react';
import YIF from '../../Home/img/YIFl.png'


class Hedder extends React.Component{

  render() {

    
    return (
      <div >
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"></link>
      <div className="navbar-fixed">
      <nav className="nav-wrapper" style={{backgroundColor:"#3f51b5"}}>
          <div className="container">
              <a href="#!" className="brand-logo">YIF</a>
              <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
              <ul className="right hide-on-med-and-down">
              <li><a href="#" className=" waves-effect waves-dark">Gallery</a></li>
              <li><a href="#" className=" waves-effect waves-dark" >Services</a></li>
              <li><a href="#" className=" waves-effect waves-dark">Events</a></li>
              <li><a href="#" className=" waves-effect waves-dark">Contact Us</a></li>
              <li><a href="/login" className="waves-effect waves-dark">
                  Logout
              </a></li>
              </ul>
          </div>    
      </nav>
  </div>
  
      <ul className="sidenav" id="mobile-demo">
              <li>
                  <div className="user-view background">
                      <img src={YIF}/>
                  </div>
              </li>
      <li><a href="#">
              <span>Gallery</span>
              <i className="material-icons right">monochrome_photos</i>
      </a></li>
      <li><a href="#">
              <span>Services</span>
              <i className="material-icons right">input</i>
      </a></li>
      <li><a href="#">
              <span>Events</span>
              <i className="material-icons right">event</i>
      </a></li>
      <li><a href="#"> <span>Contact Us</span>
          <i className="material-icons right">feedback</i></a></li>
          <li><a href="#">
                  <span>Login</span>
                  <i className="material-icons right">person</i>
              </a></li>
      </ul>
      

                </div>
                
     
    );
  }
}

export default Hedder;