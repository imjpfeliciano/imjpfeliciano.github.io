const currentYear = new Date().getFullYear();

const Footer = () => {
    return (
        <footer className='dark:text-white font-bold font-2xl flex flex-row items-center justify-center'>© Copyright {currentYear}. All Rights Reserved.</footer>
    )
}

export default Footer;