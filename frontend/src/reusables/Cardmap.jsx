import React from "react";

const Cardmap = () => {

    return (
        <>
        {/* Dynamic Card Map */ }
        <div className="bg-grey-lighter">
            <div className="mx-auto max-w-2xl px-6 sm:px-8 py-10 sm:py-12 flex flex-col items-center sm:block">
                <div className="sm:flex sm:flex-wrap sm:-mr-8">
                    {/* Card 1 */}
                    <div className="sm:w-1/3 sm:pr-8 sm:flex sm:justify-center">
                        <a className="group hover:translateY-1px transition-1s flex items-center sm:block" href="https://canrc.org/beliefs">
                        {/* svg path like bible icon = who we are icon , church icon = where to find us general syn = a word from the head pastor */}
                            <div className="ml-4 sm:ml-0">
                                <div className="sm:mt-3 sm:text-center text-xl font-medium text-grey-dark group-hover:text-teal"><span className="whitespace-nowrap">What we</span> Believe</div>
                                <div className="mt-1 mt:mt-2 sm:text-center text-base text-grey-dark group-hover:text-teal">Bible, Creeds &amp; Confessions</div>
                            </div>
                        </a>
                    </div>
                    {/* Card 2 */}
                    <div className="mt-6 sm:mt-0 sm:w-1/3 sm:pr-8 sm:flex sm:justify-center">
                        <a className="group hover:translateY-1px transition-1s flex items-center sm:block" href="https://canrc.org/churches">
                            {/* svg path like bible icon = who we are icon , church icon = where to find us general syn = a word from the head pastor */}
                            <div className="ml-4 sm:ml-0">
                                <div className="sm:mt-3 sm:text-center text-xl font-medium text-grey-dark group-hover:text-teal"><span className="whitespace-nowrap">Find a</span> Church</div>
                                <div className="mt-1 mt:mt-2 sm:text-center text-base text-grey-dark group-hover:text-teal">70 Congregations</div>
                            </div>
                        </a>
                    </div>
                    {/* Card 3 */}
                    <div className="mt-6 sm:mt-0 w-full sm:w-1/3 sm:pr-8 sm:flex sm:justify-center">
                        <a className="group hover:translateY-1px transition-1s flex items-center sm:block" href="https://canrc.org/assemblies/general-synod/2025">
                        {/* svg path like bible icon = who we are icon , church icon = where to find us general syn = a word from the head pastor */}
                            <div className="ml-4 sm:ml-0">
                                <div className="sm:mt-3 sm:text-center text-xl font-medium text-grey-dark group-hover:text-teal">General <span className="whitespace-nowrap">Synod 2025</span></div>
                                <div className="mt-1 mt:mt-2 sm:text-center text-base text-grey-dark group-hover:text-teal">Aldergrove</div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div> 

        <div className="mx-auto max-w-3xl px-6 sm:px-8 my-12 lg:mt-24 lg:mb-16">
            <div className="lg:flex">
                {/* LHS - Display Heading */}
                <div className="lg:w-1/3">
                    {/* This will start off being the active display and will use usestates to alternate as the user clicks on the other links */}
                    <div className="font-serif font-bold text-5xl md:text-6xl text-grey">Who We Are</div>
                    <div className="mt-4 hidden lg:flex">
                        {/* Replace with location icon */}
                        <svg className="w-4 h-4 mr-2 fill-teal" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M16 2h4v15a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V0h16v2zm0 2v13a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4h-2zM2 2v15a1 1 0 0 0 1 1h11.17a2.98 2.98 0 0 1-.17-1V2H2zm2 8h8v2H4v-2zm0 4h8v2H4v-2zM4 4h8v4H4V4z"></path></svg>
                        <a className="text-teal hover:underline" href="https://canrc.org/news">Where We Are</a>
                    </div>
                    <div className="mt-4 hidden lg:flex">
                        {/* Replace with pastpr's address icon */}
                        <svg className="w-4 h-4 mr-2 fill-rss-orange" viewBox="0 0 402 403" xmlns="http://www.w3.org/2000/svg"><g fillRule="nonzero"><path d="M54.816 292.382c-15.229 0-28.169 5.331-38.831 15.988C5.33 319.026 0 331.969 0 347.197c0 15.232 5.325 28.172 15.985 38.828 10.662 10.657 23.606 15.988 38.831 15.988 15.227 0 28.168-5.331 38.828-15.988 10.656-10.656 15.986-23.596 15.986-38.828 0-15.229-5.33-28.171-15.986-38.827-10.657-10.657-23.598-15.988-38.828-15.988zM181.01 221.002c-21.51-21.698-46.158-38.97-73.948-51.816-27.79-12.85-56.914-20.511-87.366-22.985h-1.425c-4.949 0-9.042 1.619-12.275 4.854C1.997 154.477 0 158.953 0 164.472v38.543c0 4.757 1.569 8.85 4.708 12.279 3.14 3.429 7.089 5.332 11.848 5.708 43.586 4.189 80.845 21.752 111.773 52.678 30.93 30.926 48.49 68.187 52.677 111.771.382 4.764 2.284 8.712 5.712 11.847 3.427 3.148 7.517 4.72 12.275 4.72h38.545c5.517 0 9.989-1.995 13.415-5.996 3.621-3.812 5.236-8.381 4.863-13.709-2.478-30.447-10.14-59.573-22.987-87.361-12.846-27.792-30.121-52.438-51.819-73.95z"></path><path d="M367.728 239.701c-20.365-45.585-48.345-86.078-83.936-121.482-35.405-35.594-75.896-63.572-121.485-83.939C116.723 13.917 68.996 2.494 19.126.02h-.855c-4.949 0-9.136 1.713-12.563 5.14C1.903 8.583 0 12.964 0 18.294v40.825c0 4.76 1.667 8.897 4.996 12.419 3.33 3.523 7.373 5.376 12.132 5.57 40.924 2.478 79.799 12.188 116.63 29.127 36.83 16.94 68.806 38.972 95.93 66.09 27.118 27.123 49.149 59.101 66.089 95.931 16.94 36.836 26.557 75.705 28.839 116.627.195 4.764 2.046 8.809 5.564 12.139 3.524 3.329 7.762 4.999 12.71 4.999h40.823c5.331 0 9.701-1.902 13.134-5.715 3.809-3.806 5.517-8.274 5.144-13.415-2.471-49.874-13.898-97.6-34.263-143.19z"></path></g></svg>
                        <a className="hover:underline text-rss-orange" href="https://canrc.org/news/rss" target="_blank" rel="noreferrer noopener">A Word from the Head Pastor</a>
                    </div>
                </div>

                {/* RHS - Display Content */}
                <div className="mt-8 lg:mt-0 lg:w-2/3 lg:pl-12 xl:pl-24 max-w-md lg:max-w-full">
                    <div className="pb-6 mb-6 md:pb-10 md:mb-10 xl:pb-12 xl:mb-12 border-b">
                        <a href="https://canrc.org/news/2711" className="font-semibold text-3xl hover:bg-grey-lighter leading-tight">Lorem ipsum dolor sit amet</a>
                        <div className="mt-3 md:text-xl text-grey-darker flex flex-wrap items-center">
                            <span className="mr-2 mb-1 text-red">XXXXXXXXXXX</span>
                                <a href="https://canrc.org/churches/burlington-waterdown-rehoboth" className="mr-1 mb-1 inline-block bg-teal hover:bg-teal-dark rounded px-3 py-1 text-white text-sm">Lorem ipsum</a>
                                <a href="https://canrc.org/churches/burlington-ebenezer" className="mr-1 mb-1 inline-block bg-teal hover:bg-teal-dark rounded px-3 py-1 text-white text-sm">Lorem ipsum</a>
                        </div>
                        <div className="mt-8 content text-xl" data-turbolinks="false">
                            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                        </div>
                    </div>
                </div>

                <div className="mt-4 lg:hidden flex">
                    <svg className="w-4 h-4 mr-2 fill-teal" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M16 2h4v15a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V0h16v2zm0 2v13a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4h-2zM2 2v15a1 1 0 0 0 1 1h11.17a2.98 2.98 0 0 1-.17-1V2H2zm2 8h8v2H4v-2zm0 4h8v2H4v-2zM4 4h8v4H4V4z"></path>
                    </svg>
                    <a className="text-teal hover:underline" href="https://canrc.org/news">View full news archive</a>
                </div>
                <div className="mt-4 lg:hidden flex">
                    <svg className="w-4 h-4 mr-2 fill-rss-orange" viewBox="0 0 402 403" xmlns="http://www.w3.org/2000/svg">
                        <g fillRule="nonzero">
                            <path d="M54.816 292.382c-15.229 0-28.169 5.331-38.831 15.988C5.33 319.026 0 331.969 0 347.197c0 15.232 5.325 28.172 15.985 38.828 10.662 10.657 23.606 15.988 38.831 15.988 15.227 0 28.168-5.331 38.828-15.988 10.656-10.656 15.986-23.596 15.986-38.828 0-15.229-5.33-28.171-15.986-38.827-10.657-10.657-23.598-15.988-38.828-15.988zM181.01 221.002c-21.51-21.698-46.158-38.97-73.948-51.816-27.79-12.85-56.914-20.511-87.366-22.985h-1.425c-4.949 0-9.042 1.619-12.275 4.854C1.997 154.477 0 158.953 0 164.472v38.543c0 4.757 1.569 8.85 4.708 12.279 3.14 3.429 7.089 5.332 11.848 5.708 43.586 4.189 80.845 21.752 111.773 52.678 30.93 30.926 48.49 68.187 52.677 111.771.382 4.764 2.284 8.712 5.712 11.847 3.427 3.148 7.517 4.72 12.275 4.72h38.545c5.517 0 9.989-1.995 13.415-5.996 3.621-3.812 5.236-8.381 4.863-13.709-2.478-30.447-10.14-59.573-22.987-87.361-12.846-27.792-30.121-52.438-51.819-73.95z"></path><path d="M367.728 239.701c-20.365-45.585-48.345-86.078-83.936-121.482-35.405-35.594-75.896-63.572-121.485-83.939C116.723 13.917 68.996 2.494 19.126.02h-.855c-4.949 0-9.136 1.713-12.563 5.14C1.903 8.583 0 12.964 0 18.294v40.825c0 4.76 1.667 8.897 4.996 12.419 3.33 3.523 7.373 5.376 12.132 5.57 40.924 2.478 79.799 12.188 116.63 29.127 36.83 16.94 68.806 38.972 95.93 66.09 27.118 27.123 49.149 59.101 66.089 95.931 16.94 36.836 26.557 75.705 28.839 116.627.195 4.764 2.046 8.809 5.564 12.139 3.524 3.329 7.762 4.999 12.71 4.999h40.823c5.331 0 9.701-1.902 13.134-5.715 3.809-3.806 5.517-8.274 5.144-13.415-2.471-49.874-13.898-97.6-34.263-143.19z"></path>
                        </g>
                    </svg>
                    <a className="hover:underline text-rss-orange" href="https://canrc.org/news/rss" target="_blank" rel="noreferrer noopener">Latest news via RSS</a>
                </div>
            </div>
        </div>
        </>
    );
}

export default Cardmap