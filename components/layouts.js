import '../styles/common.css';
import Head from 'next/head';
import Link from 'next/link';
import Penguin from '../images/penguin.png';
import SpMenuToggleIcon from './spMenuToggleIcon';

/**
 * Penguinone 2019 common layout.
 */
const Layouts = (props) => {
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
                        <li className="md:px-2 md:border-l-2 md:border-r-2"><Link href="/"><a>Top</a></Link></li>
                        <li className="md:px-2 md:border-r-2"><Link href="/profile"><a>About me</a></Link></li>
                        <li className="md:px-2 md:border-r-2"><a href="https://kuropen.goat.me/" target="_blank" rel="noopener">Y.O.N.O. (Blog)</a></li>
                        <li className="md:px-2 md:border-r-2"><a href="https://twitter.com/kuropen_aizu" target="_blank" rel="noopener">Twitter</a></li>
                        <li className="md:px-2 md:border-r-2"><a href="https://facebook.com/yuda.hirochika" target="_blank" rel="noopener">Facebook</a></li>
                        <li className="md:px-2 md:border-r-2"><a href="https://gingadon.com/@kuropen" target="_blank" rel="noopener">Mastodon (ActivityPub)</a></li>
                    </ul>
                </nav>
                <section id="main">
                    {props.children}
                </section>
                <footer className="py-4 pr-4 text-right">
                    <address>All rights reserved. Copyright &copy; Kuropen.</address>
                </footer>
            </div>
        </div>
    );
};

export default Layouts;
