import React from 'react';

export default function AboutUsPage() {
    return (
        <>
            <section className="py-24 relative">
                <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                    <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
                        <div className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
                            <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                                <img className=" rounded-xl object-cover" src="/images/about-us1.jpg" alt="about Us image" />
                            </div>

                            <img className="sm:ml-0 ml-auto rounded-xl object-cover" src="/images/about-us2.jpg" alt="about Us image" />
                        </div>

                        <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                            <div className="w-full flex-col justify-center items-start gap-8 flex">
                                <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                                    <h2 className="text-white text-4xl font-bold font-manrope leading-normal lg:text-start text-center">About Us</h2>
                                    <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                                        Playtech provides an easy-to-use marketplace to purchase the best items for Counter-Strike: Global Offensive, including
                                        the AK-47 and the best CSGO knives. High-quality gaming gear shouldn't come at exorbitant prices. We offer low pricing,
                                        allowing gamers of all backgrounds to access top-tier equipment without breaking the bank. At Playtech, you can save up
                                        to 20% on purchases compared to the Steam community market. All items displayed on our site can be quickly delivered to
                                        your Steam account. Start shopping today and unlock your true gaming potential!
                                    </p>
                                </div>

                                <div className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                                    <div className="flex-col justify-start items-start inline-flex">
                                        <h3 className="text-indigo-600 text-4xl font-bold font-manrope leading-normal">100%</h3>
                                        <h6 className="text-gray-500 text-base font-normal leading-relaxed">Satisfied Customers</h6>
                                    </div>

                                    <div className="flex-col justify-start items-start inline-flex">
                                        <h4 className="text-indigo-600  text-4xl font-bold font-manrope leading-normal">20%</h4>
                                        <h6 className="text-gray-500 text-base font-normal leading-relaxed">Average Savings</h6>
                                    </div>

                                    <div className="flex-col justify-start items-start inline-flex">
                                        <h4 className="text-indigo-600  text-4xl font-bold font-manrope leading-normal">1000+</h4>
                                        <h6 className="text-gray-500 text-base font-normal leading-relaxed">Items Available</h6>
                                    </div>
                                </div>
                            </div>

                            <button className="sm:w-fit w-full px-3.5 py-2 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                                <span className="text-white bg-indigo-600 hover:bg-indigo-800 text-sm font-medium leading-6">Start Shopping</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
