import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import MainHeader from './MainHeader';
import NavLinks from './NavLinks'
import SiderDrawer from './SideDrawer'
import Backdrop from '../UIElement/Backdrop'
import './MainNavigation.css';

const MainNavigation = props => {

    const [drawerIsOpen, setDrawerIsOpen] = useState(false)

    const openDrawerHandler = () => {
        setDrawerIsOpen(true);
    }
    const closeDrawerHandler = () => {
        setDrawerIsOpen(false);
    }
    return (
        <React.Fragment>
            {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
            <SiderDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
                <nav className="main-navigation__drawer-nav">
                    <NavLinks />
                </nav>
            </SiderDrawer>
            <MainHeader>
                <button className="main-navigation__menu-btn" onClick={openDrawerHandler}>
                    <span />
                    <span />
                    <span />
                </button>
                <h1 className="main-navigation__title">
                    <Link to="/">Mezoo</Link>
                </h1>
                <nav className='main-navigation__header-nav'>
                    <NavLinks />
                </nav>
            </MainHeader>
        </React.Fragment>
    );
};

export default MainNavigation;
