import React from 'react';
import { ThemeProvider } from 'styled-components';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Theme from '../utils/theme';
import Card from '../components/ui/Card';

const Home = () => {
    return (
        <ThemeProvider theme={Theme}>
            <Head>
                <title>Home</title>
            </Head>
            {/* <Navbar /> */}
            <Card>
                <h1>Maintenance break</h1>
            </Card>
        </ThemeProvider>
    );
}

export default Home;