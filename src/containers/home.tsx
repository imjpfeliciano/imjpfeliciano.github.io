import React from 'react';
import { ThemeProvider } from 'styled-components';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Theme from '../utils/theme';
import {ContactSection, ExperienceSection, PortfolioSection, ServicesSection} from '../components/Sections';
import AboutSection from '../components/Sections/about';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <ThemeProvider theme={Theme}>
            <Head>
                <title>Home</title>
            </Head>
            <Navbar />
            <AboutSection />
            <ServicesSection />
            <ExperienceSection />
            <PortfolioSection />
            <ContactSection />
            <Footer />
        </ThemeProvider>
    );
}

export default Home;