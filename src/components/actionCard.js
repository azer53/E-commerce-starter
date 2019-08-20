
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

class ActionCard extends React.Component {
    render() {
        const bgImage = {
            backgroundImage: "url('https://tailwindcss.com/img/card-left.jpg')"
        };
        return (
            <>
                <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                    <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                        <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                            <p className="w-full text-gray-600 text-xs md:text-sm px-6">xGETTING STARTED</p>
                            <div className="w-full font-bold text-xl text-gray-800 px-6">Lorem ipsum dolor sit amet.</div>
                            <p className="text-gray-800 text-base px-6 mb-5">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
          </p>
                        </a>
                    </div>
                    <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                        <div className="flex items-center justify-start">
                            <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg">Action</button>
                        </div>
                    </div>
                </div>
            </>

        );
    }
}

export default ActionCard



