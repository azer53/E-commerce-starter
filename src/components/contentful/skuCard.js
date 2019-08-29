
import React from "react"
import Img from "gatsby-image"


const SkuCard = class extends React.Component {

    render() {
        const sku = this.props.sku
        return (

            <>
                <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                    <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                        <div className="flex flex-wrap no-underline hover:no-underline">
                            <p className="w-full text-gray-600 text-xs md:text-sm px-6">{sku.skillLevel}</p>
                            <div className="w-full font-bold text-xl text-gray-800 px-6">{sku.title}</div>
                            <Img fluid={sku.image.fluid} className="w-full my-2 rounded-sm mx-1"/>
                            <p className="text-gray-800 text-base px-6 mb-5" dangerouslySetInnerHTML={{ __html: sku.description.description }}>
                            </p>
                        </div>
                    </div>
                    <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                        <div className="flex items-center justify-start">
                            <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg">Buy</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default SkuCard

