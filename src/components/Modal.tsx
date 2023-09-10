import React, { useState } from "react";

type Player = {
    player: string,
};

const Modal = ({ player }: Player) => {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <button
                className="transparent active:bg-blue-500 font-bold px-2 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none ml-3 mb-1"
                type="button"
                onClick={() => setShowModal(true)}
            >
                ❌
            </button>
            {showModal ? (
                <>
                    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            <input type="hidden" name="name" value={player} />
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <form method='get' action='/delete' className="bg-gray-200 shadow-md rounded px-6 pt-5 pb-5 w-full">
                                    <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                                        <h3 className="text-xl text-black font=semibold">Do you want to cancel?</h3>
                                    </div>
                                    <div className="relative p-6 flex-auto">

                                        <input type="hidden" name="name" value={player} />
                                        <label className="block text-black text-sm font-bold mb-1">
                                            Pin #
                                        </label>
                                        <input name="password"type="password" className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />

                                    </div>
                                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                        <button
                                            className="text-red-500 background-transparent font-bold uppercase px-5 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                        >
                                            Close
                                        </button>
                                        <button
                                            className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                            type="submit"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
        </>
    );
};

export default Modal;