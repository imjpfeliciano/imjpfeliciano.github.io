const currentYear = new Date().getFullYear();

const Footer = () => {
    return (
        <footer className='dark:text-white font-bold font-2xl flex flex-col items-center justify-center pb-[4rem]'>
            <span>© Copyright {currentYear}. All Rights Reserved.</span>
            <span>
                Made with <span className='text-red-500'>❤</span> by{" "}
                <a
                    href='https://github.com/imjpfeliciano'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-700 dark:text-lime-400'
                >
                    Jonathan Peraza F
                </a>
            </span>
        </footer>
    )
}

export default Footer;