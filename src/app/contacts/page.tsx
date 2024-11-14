import React from 'react';

export default function ContactsPage() {
    return (
        <>
            <div className="py-6 flex flex-col justify-center sm:py-12">
                <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                    <div className="text-white relative px-4 py-10 bg-indigo-400 shadow-lg sm:rounded-3xl sm:p-20">
                        <div className="text-center bg-indigo-400 pb-6">
                            <h1 className="bg-inherit text-3xl">Contact Us!</h1>
                            <p className="bg-inherit text-gray-300">Fill up the form below to send us a message.</p>
                        </div>
                        <form className={'bg-inherit'}>
                            <input
                                className="shadow mb-4 text-gray-800 bg-gray-200 appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                placeholder="Name"
                                name="name"
                            />
                            <input
                                className="shadow mb-4 text-gray-800 bg-gray-200  appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                                type="email"
                                placeholder="Email"
                                name="email"
                            />
                            <input
                                className="shadow mb-4 text-gray-800 bg-gray-200  appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                placeholder="Subject"
                                name="_subject"
                            />
                            <textarea
                                className="shadow mb-4 min-h-0 text-gray-800 bg-gray-200  appearance-none border rounded h-64 w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Type your message here..."
                                name="message"
                                style={{ height: 121 }}
                                defaultValue={''}
                            />
                            <div className="flex bg-inherit justify-center">
                                <button className="sm:w-fit w-full px-3.5 py-2 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                                    <span className="text-white bg-indigo-600 hover:bg-indigo-800 text-sm font-medium leading-6">Send</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
