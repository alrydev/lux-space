import React from 'react'
import Header from '../parts/Header'
// import Hero from '../parts/Hero'
// import JustArrived from '../parts/HomePage/JustArrived'
// import BrowseRoom from '../parts/HomePage/BrowseRoom'
import Client from '../parts/Client'
import SiteMap from '../parts/SiteMap'
import Footer from '../parts/Footer'
import Breadcrumb from '../components/Breadcrumb'
import ProductDetails from '../parts/Details/ProductDetails'
import Suggestions from '../parts/Details/Suggestions'

export default function HomePage() {
  return (
    <>
        <Header theme="black"/>
        <Breadcrumb list={[
          {url:"/", name:"Home"},
          {url:"/categories/1232", name:"Office Room"},
          {url:"/categories/1232/products/9283", name:"Details"}
        ]}/>
        <ProductDetails/>
        <Suggestions/>
        <Client/>
        <SiteMap/>
        <Footer/>
    </>
  )
}
