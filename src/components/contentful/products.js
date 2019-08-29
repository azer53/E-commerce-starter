import React, { Component } from 'react'
import { graphql, StaticQuery } from 'gatsby'
import SkuCard from './skuCard'



class Skus extends Component {

    render() {
        return (
            <StaticQuery
                query={graphql`
                query MyQuery {
                    allContentfulCourse {
                      edges {
                        node {
                          title
                          node_locale
                        }
                      }
                    }
                  }
                  `}
                render={
                    ({ allContentfulCourse }) => (
                        <>
                            {console.log(allContentfulCourse)}
                            {allContentfulCourse.edges.map(({ node: sku }) => (
                                <SkuCard key={sku.title} sku={sku} />
                            ))}
                        </>
                    )}
            />
        )
    }
}

export default Skus