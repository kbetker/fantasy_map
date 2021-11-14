import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import "./Navigation.css"

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
         <div className="navElement"><NavLink to="/login">Log In</NavLink></div>
         <div className="navElement"><NavLink to="/signup">Sign Up</NavLink></div>
      </>
    );
  }

  return (
    <div className="navBar">

      <div className="navElement"><NavLink exact to="/">Home</NavLink></div>
      <div className="navElement"> <NavLink exact to="/locations/1">Location 1</NavLink> </div>
      <div className="navElement"> <NavLink exact to="/locations/2">Location 2</NavLink> </div>
      {/* <li> <NavLink exact to="/all/1">All</NavLink> </li> */}
        {isLoaded && sessionLinks}

    </div>
  );
}

export default Navigation;
