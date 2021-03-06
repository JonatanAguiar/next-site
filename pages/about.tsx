import Navigation from "@components/navigation";
import Head from 'next/head';

export default function About() {
    return (
        <>
            <Head>
                <title>About</title>
            </Head>
            <Navigation/>
            <header>
                <h2>Valeu pela visita!</h2>
            </header>
        </>
    );
}