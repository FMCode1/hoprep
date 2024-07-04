import React from "react";

const Hero = () => {
    return (
        <>
            {/* Hero Banner */ }    
            <div className="py-8 xs:py-16 md:py-24 lg:py-40 px-6 sm:px-8 bg-cover text-white text-center flex flex-col justify-center items-center" style={{ backgroundImage: "url(/img/banner.jpg); background-position: 85%;" }}>
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

export default Hero