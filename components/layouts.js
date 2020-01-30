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
    let title;
    if (props.title) {
        let subMenu = (<React.Fragment/>);
        if (props.subMenu) {
            subMenu = props.subMenu;
        }
        innerContent = (
            <section id="main" className="md:flex md:flex-row">
                <div className="md:w-1/4 md:pr-6 md:text-right">
                    <h2 className="no-default-size noto text-3xl md:text-4xl">{props.title}</h2>
                    {subMenu}
                </div>
                <div className="md:w-3/4 md:pr-4">
                    {props.children}
                </div>
            </section>
        );
        title = `${props.title} - Penguinone`;
    } else {
        innerContent = (
            <section id="main">
                <div className="md:w-10/12 mx-auto">
                    {props.children}
                </div>
            </section>
        );
        title = 'Penguinone';
    }
    return (
        <div>
            <Head>
                <title key="title">{title}</title>
                <link href="https://fonts.googleapis.com/css?family=Noto+Sans|Sawarabi+Gothic" rel="stylesheet" />
                <link rel="icon" type="image/png" href={Penguin} key="favicon" />
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
                        <li className="md:px-2 md:border-l-2 md:border-r-2"><a href="/">Top</a></li>
                        <li className="md:px-2 md:border-r-2"><Link href="/profile"><a>About me</a></Link></li>
                        <li className="md:px-2 md:border-r-2"><Link href="/portfolio/index" as="/portfolio"><a>Portfolio</a></Link></li>
                        <li className="md:px-2 md:border-r-2"><Link href="/blog/index" as="/blog"><a>Blog</a></Link></li>
                        <li className="md:px-2 md:border-r-2"><Link href="/social/index" as="/social"><a>SNS Accounts</a></Link></li>
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
