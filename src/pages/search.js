import React from 'react'

import Layout from '../components/Layout'
import SEO from  '../components/seo'
import Search from '../components/Search'
import Menu from '../components/Menu'

const SearchPage = () =>(
    <Layout>
        <SEO tittle = "About"/>
        <Menu/>
        <Search/>
    </Layout>
)
export default SearchPage