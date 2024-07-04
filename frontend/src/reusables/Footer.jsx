import React from "react";

const Footer = () => {
    return(
    <>
        {/*footer*/}
        <div className="max-w-3xl mx-auto text-purple-lightest">
            <div className="md:flex md:justify-between px-6 sm:px-8 py-12">
                {/* Relevant Links */}
                <div className="flex flex-wrap">
                    <div className="w-1/3 mb-2 md:mb-3 text-center md:text-left"><a className="hover:text-white" href="https://canrc.org/beliefs">Relevant Link</a></div>
                    <div className="w-1/3 mb-2 md:mb-3 text-center md:text-left"><a className="hover:text-white" href="https://canrc.org/worship">Relevant Link</a></div>
                    <div className="w-1/3 mb-2 md:mb-3 text-center md:text-left"><a className="hover:text-white" href="https://canrc.org/study">Relevant Link</a></div>
                    <div className="w-1/3 mb-2 md:mb-3 text-center md:text-left"><a className="hover:text-white" href="https://canrc.org/publications">Relevant Link</a></div>
                    <div className="w-1/3 mb-2 md:mb-3 text-center md:text-left"><a className="hover:text-white" href="https://canrc.org/missions">Relevant Link</a></div>
                    <div className="w-1/3 mb-2 md:mb-3 text-center md:text-left"><a className="hover:text-white" href="https://canrc.org/organizations">Relevant Link</a></div>
                    <div className="w-1/3 mb-2 md:mb-3 text-center md:text-left"><a className="hover:text-white" href="https://canrc.org/government">Relevant Link</a></div>
                    <div className="w-1/3 mb-2 md:mb-3 text-center md:text-left"><a className="hover:text-white" href="https://canrc.org/history">Relevant Link</a></div>
                    <div className="w-1/3 mb-2 md:mb-3 text-center md:text-left"><a className="hover:text-white" href="https://canrc.org/unity">Relevant Link</a></div>
                </div>
                {/* Acknowledgement Section */}
                <div className="mt-8 md:mt-0 flex flex-col justify-center text-center md:text-right text-sm md:text-base">
                    <div className="md:whitespace-nowrap mb-3">© 2024 Committee for the Canadian Reformed Website.</div>
                    <div className="md:whitespace-nowrap md:mb-3">Website by <a className="text-white hover:underline" href="https://churchsocial.com" rel="noopener" target="_blank"> </a> and <a className="text-white hover:underline" href="https://compasscreative.ca" target="_blank">  </a>.</div>
                </div>
            </div>
        </div>
    </>
    );
}

export default Footer;