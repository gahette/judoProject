// eslint-disable-next-line no-unused-vars
import React from 'react';
import {NavLink} from "react-router-dom";


const navigation = [
    {
        title: "Accueil",
        id: "/",
    },
    {
        title: "L'histoire des arts martiaux au Japon",
        id: "/martial",
    },
    {
        title: "L'histoire du judo en France",
        id: "/story",
    },
    {
        title: "Les techniques de judo",
        id: "/technique",
    }
]
const Header = () => {
    return (
        <div>
            <header>
                <nav>
                    <ul>
                        {navigation.map((nav, index) => (
                            <li key={index}>
                                <NavLink to={nav.id}>
                                    {nav.title}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Header;
