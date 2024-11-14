'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/shared/ui';

export const AboutUsMain = () => {
    const router = useRouter();

    return (
        <>
            <section className="py-24 relative xl:mr-0 lg:mr-5 mr-0">
                <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                    <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
                        <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                            <div className="w-full flex-col justify-center items-start gap-8 flex">
                                <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                                    {/*<h6 className="text-gray-400 text-base font-normal leading-relaxed">*/}
                                    {/*    About Us*/}
                                    {/*</h6>*/}
                                    <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                                        <h2 className="text-indigo-700 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                                            Level up your gaming experience
                                        </h2>
                                        <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                                            Welcome to CSSKINS, your ultimate destination for weapons and items for the popular game Counter-Strike. As avid
                                            gamers ourselves, we understand the importance of having the right tools at your disposal to conquer the virtual
                                            battlefield. We have a top-notch selection of weapons for severe gamers to dominate opponents. Explore the items and
                                            gear up for victory!
                                        </p>
                                    </div>
                                </div>

                                <div className="w-full flex-col justify-center items-start gap-6 flex">
                                    <div className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                                        <div className="w-full h-full p-3.5 rounded-xl border border-slate-800  hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                            <h4 className="text-2xl font-bold text-white font-manrope leading-9">High-Quality Weapons</h4>
                                            <p className="text-gray-500 text-base font-normal leading-relaxed">
                                                Enhance your gaming skills with our premium weapons.
                                            </p>
                                        </div>

                                        <div className="w-full h-full p-3.5 rounded-xl border border-slate-800 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                            <h4 className="text-2xl font-bold text-white font-manrope leading-9">Wide Variety of Items</h4>
                                            <p className="text-gray-500 text-base font-normal leading-relaxed">
                                                Discover a vast collection of items to customize your gameplay.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="w-full h-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                                        <div className="w-full p-3.5 rounded-xl border border-slate-800 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                            <h4 className="text-2xl font-bold text-white font-manrope leading-9">Competitive Pricing</h4>
                                            <p className="text-gray-500 text-base font-normal leading-relaxed">
                                                Get the best value for your gaming gear without compromising on quality.
                                            </p>
                                        </div>

                                        <div className="w-full h-full p-3.5 rounded-xl border border-slate-800 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                            <h4 className="text-2xl font-bold text-white font-manrope leading-9">Customer Satisfaction</h4>
                                            <p className="text-gray-500 text-base font-normal leading-relaxed">
                                                Our top priority is ensuring your satisfaction with every purchase.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={'flex justify-start'}>
                                <Button
                                    variant={'primary'}
                                    onClick={() => {
                                        router.push('/shop');
                                    }}
                                >
                                    Start Shopping
                                </Button>
                            </div>
                        </div>

                        <div className="w-full lg:justify-start justify-center items-start flex">
                            <div className="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-indigo-600 rounded-3xl sm:border border-gray-200 relative">
                                <img className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover" src="/images/image.jpg" alt="Counter-Strike items" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
