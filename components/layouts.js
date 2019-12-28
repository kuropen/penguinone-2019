import '../styles/common.css';
import Head from 'next/head';
import Link from 'next/link';
import Penguin from '../images/penguin.png';
import React from 'react';
import SpMenuToggleIcon from './spMenuToggleIcon';

/**
 * Penguinone 2019 common layout.
 */
const Layouts = (props) => {
    let innerContent;
    if (props.title) {
        let subMenu = (<React.Fragment/>);
        if (props.subMenu) {
            subMenu = props.subMenu;
        }
        innerContent = (
            <section id="main" className="md:flex md:flex-row">
                <div className="md:w-1/4 md:pr-6 md:text-right">
                    <h2 className="no-default-size text-3xl md:text-4xl">{props.title}</h2>
                    {subMenu}
                </div>
                <div className="md:w-3/4 pr-4">
                    {props.children}
                </div>
            </section>
        );
    } else {
        innerContent = (
            <section id="main">
                <div className="md:w-10/12 mx-auto">
                    {props.children}
                </div>
            </section>
        );
    }
    return (
        <div>
            <Head>
                <title key="title">Penguinone</title>
            </Head>
            <header className="flex flex-row items-center md:justify-center py-4 mb-4 bg-black text-white kp-gradientBorder1">
                <div className="mx-2">
                    <img className="h-12 w-12 rounded-full" src={Penguin} alt="" />
                </div>
                <div className="flex-grow md:flex-grow-0">
                    <h1 className="text-xl font-bold">Penguinone</h1>
                </div>
                <SpMenuToggleIcon />
            </header>
            <div className="container mx-auto px-2 md:px-0">
                <nav id="navigation" className="hidden md:block kp-gradientBorder2 md:pb-2 md:mb-4">
                    <h2 className="font-semibold text-lg md:hidden">Menu</h2>
                    <ul className="md:flex md:flex-row md:justify-center">
                        <li className="md:px-2 md:border-l-2 md:border-r-2"><Link href="/index" as="/"><a>Top</a></Link></li>
                        <li className="md:px-2 md:border-r-2"><Link href="/profile"><a>About me</a></Link></li>
                        <li className="md:px-2 md:border-r-2"><Link href="/blog/index" as="/blog"><a>Blog</a></Link></li>
                        <li className="md:px-2 md:border-r-2"><a href="https://twitter.com/kuropen_aizu" target="_blank" rel="noopener">Twitter</a></li>
                        <li className="md:px-2 md:border-r-2"><a href="https://facebook.com/yuda.hirochika" target="_blank" rel="noopener">Facebook</a></li>
                        <li className="md:px-2 md:border-r-2"><a href="https://gingadon.com/@kuropen" target="_blank" rel="noopener">Mastodon (ActivityPub)</a></li>
                    </ul>
                </nav>
                {innerContent}
                <footer className="py-4 px-4 md:flex md:flex-row">
                    <p className="md:w-1/2">Copyright &copy; Kuropen. </p>
                    <p className="md:w-1/2 md:text-right"><Link href="/copyright"><a className="underline">著作権と使用しているコンポーネントについて</a></Link></p>
                </footer>
            </div>
        </div>
    );
};

export default Layouts;
