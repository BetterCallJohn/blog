import React from 'react'
import Link from 'next/link'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCoffee} from "@fortawesome/free-solid-svg-icons/faCoffee";

const Header = () => {

    const [opened, toggle] = React.useState(false);

    return (
        <header className="flex items-center w-full justify-between ">
            <div>
                <nav className={`primaryNav ${opened ? "is-active" : ""}`} onClick={() => {
                    toggle(!opened)
                }}>
                    <a href="/blog">Blog</a>
                    <a href="/podcast">Podcast</a>
                    {/*<a href="#">Parcours</a>*/}
                </nav>
            </div>

            <Link href="/">
                <a className="flex">
                    <img src="/assets/img/logo@2x.png" alt="Jonathan Martin - BetterCallJohn" width="63"
                         className=" pt-4"/>
                </a>
            </Link>

            <div className="group cursor-pointer relative inline-block">
                <a href="https://calendly.com/jonathan-ekoha/connected-coffee" target="_blank">
                    <FontAwesomeIcon icon={faCoffee} size="lg" color="#102233"/>
                </a>
                <div
                    className="opacity-0 w-40 bg-black text-white text-center text-xs rounded-lg py-2 absolute z-10 group-hover:opacity-100  top-full right-full -mr-8 mt-2 mb-2 px-3 pointer-events-none">
                    Discutons autour d'un remote café ?
                    <svg xmlns="http://www.w3.org/2000/svg"
                         className="absolute text-black h-2 w-full right-0 bottom-full" x="0px" y="0px"
                         viewBox="0 0 255 255">
                        <polygon transform="translate(2000, 250) scale(1, -1)" className="fill-current"
                                 points="0,0 127.5,127.5 255,0"/>
                    </svg>
                </div>
            </div>
        </header>
    )
}

export default Header
