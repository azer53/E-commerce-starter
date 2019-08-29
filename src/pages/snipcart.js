import React from "react"
import Layout from "../components/layout"
import Hero from "../components/smallHero"
import CallToAction from "../components/callToAction"
import SEO from "../components/seo"
import Products from "../components/snipcart/products"
import { Helmet } from "react-helmet";




const IndexPage = () => (
  <Layout>
{/*     <Helmet>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
      <script src="https://cdn.snipcart.com/scripts/2.0/snipcart.js" id="snipcart" data-api-key="ODg0NTFhZTEtZThkMy00OWJlLWIwZmEtOTVhZDk0MjYzMjljNjM3MDIwNTgxMjc3Njg5NjA0"></script>
      <link href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css" type="text/css" rel="stylesheet" />
    </Helmet> */}
    <SEO title="Commerce 2020" />
    <Hero></Hero>
    <section className="bg-white border-b py-8">

      <div className="container mx-auto flex flex-wrap pt-4 pb-12">

        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">Snipcart</h1>

        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <Products />


      </div>

    </section>


    <CallToAction></CallToAction>



  </Layout >
)

export default IndexPage
