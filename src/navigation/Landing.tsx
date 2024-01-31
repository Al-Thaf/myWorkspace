import React, { useState } from 'react'
import { NavBarProps, NavLinkProps } from './types'
import './styles.css'
import navLinks from './nav';

const NavBar: React.FC<NavBarProps> = ({ links, onLinkClick }) => {
    return (
        <div className="navbar">
            {links.map((link, index) => (
                <div key={index} className="nav-item" onClick={() => onLinkClick(link)}>
                    {link}
                </div>
            ))}
        </div>
    );
}

function Landing() {
    const [activeLink, setActiveLink] = useState<NavLinkProps | undefined>(navLinks[0]);

    const handleLinkClick = (link: string) => {
        const active = navLinks.find((nav) => nav.path === link)
        setActiveLink(active);

    };

    return (
        <div className="App">
            <NavBar links={navLinks.map((nav) => nav.path)} onLinkClick={handleLinkClick} />
            {activeLink?.component && (
                <div className="content">
                    {activeLink?.component}

                </div>
            )}

        </div>
    )
}

export default Landing