import React from 'react';
import { NavLink } from 'react-router-dom';

const navItem = [
  { title: 'Users', path: '/users', image: '../images/icons/users-icon.png' },
  { title: 'Developers', path: '/developers', image: '../images/icons/developers-icon.png' },
  { title: 'Clients', path: '/clients', image: '../images/icons/clients-icon.png' },
  { title: 'Profile', path: '/profile', image: '../images/icons/profile-icon.png' }
]

const SidebarNav = () => {
  return (
    <aside className='sidebar-nav'>
      <nav className='nav'>
        <NavLink to={'/'} className='nav-logo'>
          <span className='link-icon icon icon-home' style={{ backgroundImage: `url('../images/icons/home-icon.png')` }}></span>
          <span className='logo-brand' style={{ backgroundImage: `url('../images/logo.png')` }}></span>
        </NavLink>
        <ul className='nav-links'>
          {navItem?.map((item, key) => {
            return (
              <NavLink to={item.path} key={key} className='nav-link'>
                <span className={`link-icon icon icon-${item.title.toLowerCase()}`} style={{ backgroundImage: `url('${item.image}')` }}></span>
                <span className='sr-only lg:not-sr-only'>{item.title}</span>
              </NavLink>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}

export default SidebarNav;






















// const location = useLocation();
// useLayoutEffect(() => {
//   return () => {};
// }, [ location ]);

// if (location?.pathname !== '/users' && location?.pathname !== '/developers' && location?.pathname !== '/clients' && location?.pathname !== '/profile') {
//   return null;
// }
