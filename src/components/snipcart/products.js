import React, { Component } from 'react'
import { graphql, StaticQuery } from 'gatsby'
import SkuCard from './skuCard'



class Skus extends Component {
    render() {
        return (
            <StaticQuery
                query={graphql`
                query MyQuery {
                    allMarkdownRemark {
                      edges {
                        node {
                          id
                          frontmatter {
                            id
                            image
                            price
                            title
                            path
                            description
                          }
                        }
                      }
                    }
                  }
        `}
                render={
                    ({ allMarkdownRemark }) => (
                    <>
                        {allMarkdownRemark.edges.map(({ node: sku }) => (
                            <SkuCard key={sku.id} sku={sku.frontmatter} />
                        ))}
                    </>
                )}
            />
        )
    }
}

export default Skus