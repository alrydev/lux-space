import React from 'react'
import Header from '../parts/Header'
import Footer from '../parts/Footer'
import Breadcrumb from '../components/Breadcrumb'
import SiteMap from '../parts/SiteMap'
import ShoppingCart from '../parts/Cart/ShoppingCart'
import ShippingDetails from '../parts/Cart/ShippingDetails'

export default function HomePage() {
  return (
    <>
        <Header theme="black"/>
        <Breadcrumb list={[
          {url:"/", name:"Home"},
          {url:"/cart", name:"Shopping Cart"},
        ]}/>
    <section className="md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex -mx-4 flex-wrap">
            <ShoppingCart/>
            <ShippingDetails/>
        </div>
      </div>
    </section>
        <SiteMap/>
        <Footer/>
    </>
  )
}
