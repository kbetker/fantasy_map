import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';

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
         <li><NavLink to="/login">Log In</NavLink></li>
         <li><NavLink to="/signup">Sign Up</NavLink></li>
      </>
    );
  }

  return (
    <ul>

      <li><NavLink exact to="/">Home</NavLink></li>
      <li> <NavLink exact to="/locations/1">Location 1</NavLink> </li>
      <li> <NavLink exact to="/locations/2">Location 2</NavLink> </li>
      {/* <li> <NavLink exact to="/all/1">All</NavLink> </li> */}
        {isLoaded && sessionLinks}

    </ul>
  );
}

export default Navigation;
