import React from "react";

const Navbar = () => {

    return (
    <>
        <div className="mx-auto max-w-3xl px-6 pt-6 pb-4 sm:p-8 flex flex-wrap sm:items-center xl:items-end">
            <div className="flex-grow">
                <a className="inline-block max-w-xs" href="https://canrc.org">
                    <svg className="fill-white block max-w-full" width="300" height="56" viewBox="0 0 344 64">
                    </svg>
                </a>
            </div>

            {/* Navlinks */ }
            <nav className="mt-4 sm:mt-6 xl:mt-0 w-full xl:w-auto xl:mb-2 flex flex-wrap text-white sm:order-2">
                <a className="order-0 sm:order-0 w-1/3 sm:w-auto leading-tight md:leading-none text-base xs:text-lg font-medium sm:mr-4 md:mr-6 hover:text-white hover:translateY-1px transition-1s text-purple-lightest" href="https://canrc.org/federation">Nission</a>
                <a className="order-0 sm:order-0 text-center sm:text-left w-1/3 sm:w-auto leading-tight md:leading-none text-base xs:text-lg font-medium sm:mr-4 md:mr-6 hover:text-white hover:translateY-1px transition-1s text-purple-lightest" href="https://canrc.org/churches">Connect</a>
                <a className="order-3 sm:order-0 text-center sm:text-left w-1/3 sm:w-auto leading-tight md:leading-none text-base xs:text-lg font-medium sm:mr-4 md:mr-6 hover:text-white hover:translateY-1px transition-1s text-purple-lightest" href="https://canrc.org/ministers">Activities</a>
                <a className="order-2 sm:order-0 w-1/3 sm:w-auto leading-tight md:leading-none text-base xs:text-lg font-medium sm:mr-4 md:mr-6 hover:text-white hover:translateY-1px transition-1s text-purple-lightest" href="https://canrc.org/assemblies">Contact Us</a>
                <a className="order-1 sm:order-0 text-right sm:text-left w-1/3 sm:w-auto leading-tight md:leading-none text-base xs:text-lg font-medium sm:mr-4 md:mr-6 hover:text-white hover:translateY-1px transition-1s text-purple-lightest" href="https://canrc.org/news">Give</a>
            </nav>
            {/* Extra - <div className="mt-4 sm:mt-0 w-full sm:w-auto xl:order-last"> */}
        </div>

        {/* Check closing tag here if any issues */}
        <div className="bg-white overflow-hidden"/>

        {/* Hero Banner */ }    
        <div className="py-8 xs:py-16 md:py-24 lg:py-40 px-6 sm:px-8 bg-cover text-white text-center flex flex-col justify-center items-center" style="background-image: url(/img/banner.jpg); background-position: 85%;">
            <div className="text-base xs:text-lg md:text-xl lg:text-2xl leading-tight">The official website of The Redeemed Christian Church of God <span className="whitespace-nowrap"> <br/> House of Peace Parish</span></div>
            <div className="mt-8 font-serif font-bold text-4xl xs:text-5xl md:text-6xl lg:text-8xl">
                <div>You Are Welcome</div>
                <div>To God's Presnce</div>
            </div>
            {/* Enter Link to Missions Page */}
            <a className="block mt-8 xs:mt-12 rounded bg-teal hover:shadow-lg hover:translateY-1px transition-1s w-full xs:w-auto xs:px-4 lg:px-12 py-4 xs:text-xl lg:text-2xl" href="">Learn more about R.C.C.G HOP</a>
        </div>
    </>  
    );
}

export default Navbar
