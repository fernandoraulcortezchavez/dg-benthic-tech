import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from 'react-router-dom'


export default function Layout() {
    return (
        <>
        {/* HEADER */}
        <Header />

        {/* MAIN */}
        <main>
            {/* WELCOME SECTION */}
            <section id="welcome" className="bg-primary welcome">
            <div className="content-wrap">
                <h2>Deep Solutions for Human Health</h2>
                <p>Welcome to the Benthic Technologies Internal Network.</p>
                <p>At Benthic, we believe that the world’s greatest challenges require us to look deeper. Founded in 2018 in the historic mining district of Helena, Montana, our state-of-the-art facility bridges the gap between extreme environments and cellular revolution. By isolating and studying extremophilic organisms from deep-earth ecosystems, our dedicated team is unlocking the keys to advanced bioremediation, cellular longevity, and unprecedented neural-regeneration therapies.</p>
                <i>“Where nature meets the extreme, Benthic finds the cure.”</i>
            </div>
            </section>

            <Outlet />
        </main>

        {/* FOOTER */}
        <Footer />

        </>
    );
}