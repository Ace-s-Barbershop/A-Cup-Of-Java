// import React, { Component } from "react";
// import AppRouter from "../Components/AppRouter";
// import AcesBarbershopLogo from "../asset/images/AcesBarbershopLogo.jpg";

// export default class Navbar extends Component {
//   render() {
//     //component for each link?

//     return (
//       <nav className="nav" id="navbar">
//         <div className="nav-content">
//           <img
//             //src={logo}
//             src={AcesBarbershopLogo}
//             className="nav-logo"
//             alt="Logo"
//           />
//           <ul className="nav-items home">
//             <li className="home">
//               <a href="/Home">Home</a>
//             </li>
//             <li className="nav-items appointments">
//               <a href="/appointment">Book Appointment</a>
//             </li>
//             <li className="Barbers">
//               <a href="/barber">Barbers </a>
//             </li>
//             <li className="Signin">
//               <a href="/SignIn">Sign In</a>
//             </li>
//             <li className="signup">
//               <a href="/signup">Sign Up</a>
//             </li>
//           </ul>
//           <AppRouter />
//         </div>
//       </nav>
//     );
//   }
// }

// import React, { useState } from "react";
// import AppRouter from "../Components/AppRouter";
// import AcesBarbershopLogo from "../asset/images/AcesBarbershopLogo.jpg";
// import {
//   MDBContainer,
//   MDBNavbar,
//   MDBNavbarBrand,
//   MDBNavbarToggler,
//   MDBNavbarNav,
//   MDBNavbarItem,
//   MDBNavbarLink,
//   MDBIcon,
//   MDBCollapse,
// } from "mdb-react-ui-kit";

// export default function Navbar() {
//   const [showNavSecond, setShowNavSecond] = useState(false);

//   return (
//     <MDBNavbar expand="lg" light bgColor="light">
//       <MDBContainer fluid>
//         <MDBNavbarBrand>Ace's BarberShop</MDBNavbarBrand>
//         <MDBIcon icon="bars" fas />
//         <MDBCollapse navbar show={showNavSecond}>
//           <MDBNavbarNav>
//             <MDBNavbarLink active aria-current="page" href="/Home">
//               Home
//             </MDBNavbarLink>
//             <MDBNavbarLink href="/about">About Us</MDBNavbarLink>
//             <MDBNavbarLink href="/Appointment">Book Appointment</MDBNavbarLink>
//             <MDBNavbarLink href="/signup">Sign Up Here</MDBNavbarLink>
//             <MDBNavbarLink disabled href="#" tabIndex={-1} aria-disabled="true">
//               Disabled
//             </MDBNavbarLink>
//             <AppRouter />
//           </MDBNavbarNav>
//         </MDBCollapse>
//       </MDBContainer>
//     </MDBNavbar>
//   );
// }
import React, {useEffect, useState} from "react"
import AppRouter from "./AppRouter"
import "../asset/css/style.css"
import Sidebar from "./sidebar"
import axios from "axios";
import object from "../views/object";



// export default function navbar(){
  const navbar = () =>{

  const [userData, setUserData] = useState([]);
  const [toggle, setToggle] = useState();
  const [toggleNavbar, setToggler] = useState();

  let obj = new object();
  
  useEffect(() =>{
    axios
    .get("http://localhost:5500/api/profile")
    .then((res) => {
      // console.log(res);
      setUserData(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);

  useEffect(() =>{
    if(userData.firstname != null){
      setToggle("My Profile")
      setToggler("/MyProfile")
    }
    else{
      setToggle("Login")
      setToggler("/login")
    }
  })

  return(
      <div id ="nav-App">
          <Sidebar/>
          <nav id="nav-firstNav">
            <a href={toggleNavbar}id="nav-twonav" className ="toggle"> {toggle} </a>
            <a href="/appointment" id="nav-twonav"> Appointment </a> 
          </nav> 
          <div clsss = "navbar-gap">
            <AppRouter/>
          </div>
      </div>
  )
};
export default navbar;