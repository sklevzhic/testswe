'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/shared/ui';

export const Hero = () => {
    const router = useRouter();

    return (
        <>
            <section className="">
                <div className="rounded-2xl py-10 overflow-hidden m-5 lg:m-0 2xl:py-16 xl:py-8  lg:rounded-tl-2xl lg:rounded-bl-2xl ">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 gap-14 items-center lg:grid-cols-12 lg:gap32">
                            <div className="w-full xl:col-span-5 lg:col-span-6 2xl:-mx-5 xl:-mx-0">
                                <div className="flex items-center text-sm font-medium text-white justify-center lg:justify-start">
                                    <span className="bg-orange-600 py-1 px-3 rounded-2xl text-xs font-medium text-white mr-3 ">#1</span>
                                    Counter-Strike
                                </div>
                                <h1 className="py-8 text-center text-white font-bold font-manrope text-4xl lg:text-left leading-[70px]">
                                    Master the Battlefield with<span className="text-orange-600"> Counter-Strike </span>Arsenal
                                </h1>
                                <p className=" text-gray-500 text-lg text-center lg:text-left">
                                    Enhance your gaming skills with a wide range of Counter-Strike weapons and gear. Outsmart your opponents and claim victory.
                                    Shop now to upgrade your arsenal.
                                </p>
                                <div className={'flex  mt-3 justify-center lg:justify-start'}>
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
                            <div className="w-full xl:col-span-7  lg:col-span-6 block">
                                <div className="w-full  sm:w-auto lg:w-[60.8125rem] xl:ml-16">
                                    <img src="/images/image.jpg" alt="Dashboard image" className="rounded-3xl object-cover" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
