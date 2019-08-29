
import React from "react"

const formatPrice = (amount, currency) => {
    let price = amount.toFixed(2)
    let numberFormat = new Intl.NumberFormat(["en-US"], {
        style: "currency",
        currency: currency,
        currencyDisplay: "symbol",
    })
    return numberFormat.format(price)
}

const SkuCard = class extends React.Component {
    render() {
        const sku = this.props.sku
        return (

            <>
                <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                    <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                        <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                            <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                                Price: {formatPrice(sku.price, "EUR")}
                            </p>
                            <div className="w-full font-bold text-xl text-gray-800 px-6">{sku.title}</div>
                            <p className="text-gray-800 text-base px-6 mb-5">
                                {sku.description}
                            </p>
                        </a>
                    </div>
                    <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                        <div className="flex items-center justify-start">
                            <button
                                className='snipcart-add-item buyBtn mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg'
                                data-item-id={sku.id}
                                data-item-price={sku.price}
                                data-item-image={sku.image}
                                data-item-name={sku.title}
                                data-item-description={sku.description}
                                data-item-url='http://localhost:8000/snipcart'>
                                Buy S
</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default SkuCard

