// eslint-disable-next-line no-unused-vars
import React, {useEffect, useRef, useState} from 'react';
import {NavLink} from "react-router-dom";
import logo from '@/assets/judoaslife.png';
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";


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
    const [toggle, setToggle] = useState(false)
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setToggle(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, []);

    const handleToggle = () => {
        setToggle(!toggle)
    }

    const closeMenu = () => {
        setToggle(false)
    }

    return (
        <header>
            <nav className="fixed top-0 left-0 right-0 bg-white z-10 opacity-90">

                <div
                    className="flex flex-wrap items-center justify-between mx-auto px-6 cursor-pointer border border-b-red-600">
                    <a href="/">
                        <img src={logo} width={75} alt="logo"/>
                    </a>

                    <div className="mobile-menu block md:hidden" onClick={handleToggle}>
                        {
                            !toggle ? (
                                <button
                                    // onClick={() => setToggle(true)}
                                    className="flex items-center px-3 py-2 border rounded border-red-600 text-red-600 hover:text-slate-400 hover:border-slate-400">
                                    <Bars3Icon className="h-5 w-5"/><p><span>Menu</span></p>
                                </button>
                            ) : (
                                <button
                                    ref={menuRef}
                                    onClick={closeMenu}
                                    // onClick={() => setToggle(false)}
                                    className="flex items-center px-3 py-2 border rounded border-red-600 text-red-600 hover:text-slate-400 hover:border-slate-400">
                                    <XMarkIcon className="h-5 w-5"/><p><span>Fermer</span></p>
                                </button>
                            )
                        }
                    </div>

                    {/*<div*/}
                    {/*    className="mobile-menu md:hidden flex items-center px-3 py-2 border rounded border-red-600 text-red-600 hover:text-slate-400 hover:border-slate-400"*/}
                    {/*    onClick={handleToggle}>*/}
                    {/*    {toggle ? <XMarkIcon className=" h-5 w-5" ref={menuRef} onClick={closeMenu}/> :*/}
                    {/*        <Bars3Icon className=" h-5 w-5"/>}*/}
                    {/*    {toggle ? <p><span>Fermer</span></p> :*/}
                    {/*        <p><span>Menu</span></p>}*/}
                    {/*</div>*/}

                    <div className={`${
                        !toggle ? " hidden" : " flex"
                    } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
                    >
                        <ul className=" list-none flex justify-end items-start flex-1 flex-col bg-white p-3 rounded-xl">
                            {navigation.map((nav, index) => (
                                <li
                                    key={index}
                                    className=" block py-3 font-Barlow font-bold text-slate-400 xl:text-base lg:text-sm
                        md:text-xs rounded md:p-0 hover:text-red-600 "
                                >
                                    <NavLink to={nav.id}
                                             className={'[&.active]:text-red-600 [&.active]:border-b-2 border-red-600 py-1'}
                                    >
                                        {nav.title}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className=" menu hidden md:block md:w-auto" id=" navbar">
                        <ul className=" items-center flex p-8 md:p-0 md:flex-row md:space-x-8">
                            {
                                navigation.map((nav, index) => (
                                    <li key={index}
                                        className=" block pl-3 pr-4 font-bold text-slate-400 xl:text-base
                        lg:text-sm md:text-xs rounded md:p-0 hover:text-red-600 "
                                    >
                                        <NavLink to={nav.id}
                                                 className={'[&.active]:text-red-600 [&.active]:border-b-2 border-red-600 py-3'}>
                                            {nav.title}
                                        </NavLink>
                                    </li>
                                ))
                            }


                        {/*    <div className=" lg:space-y-1 md:space-y-2">*/}
                        {/*        <a href={"/connexion"}*/}
                        {/*           className=" font-Barlow font-bold lg:text-base md:text-sm text-red-600 px-5*/}
                        {/*inline-block py-3 w-full sm:w-fit rounded-md border border-red-600 hover:bg-slate-400*/}
                        {/*hover:text-white mx-4">*/}
                        {/*            Connexion*/}
                        {/*        </a>*/}
                        {/*        <a href={"/deconnexion"}*/}
                        {/*           className=" font-Barlow font-bold lg:text-base md:text-sm text-white bg-red-600 px-5*/}
                        {/*inline-block py-3 w-full sm:w-fit rounded-md border border-red-600 hover:bg-slate-400*/}
                        {/*hover:text-red-600">*/}
                        {/*            Déconnexion*/}
                        {/*        </a>*/}
                        {/*    </div>*/}

                        </ul>
                    </div>

                </div>
            </nav>
        </header>
    );
};

export default Header;
