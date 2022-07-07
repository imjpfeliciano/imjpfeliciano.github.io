import React from 'react';
import { ThemeProvider } from 'styled-components';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Theme from '../utils/theme';
import {ContactSection, ExperienceSection, PortfolioSection, ServicesSection} from '../components/Sections';

const Home = () => {
    return (
        <ThemeProvider theme={Theme}>
            <Head>
                <title>Home</title>
            </Head>
            <Navbar />
            <ServicesSection />
            <ExperienceSection />
            <PortfolioSection />
            <ContactSection />
        </ThemeProvider>
    );
}

export default Home;