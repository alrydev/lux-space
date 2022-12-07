import React from 'react'
import Header from '../parts/Header'
import Footer from '../parts/Footer'
import SiteMap from '../parts/SiteMap'
import ErrorMessage from '../parts/ErrorMessage'

export default function NotFound() {
  return (
    <>
        <Header theme="black"/>

        <ErrorMessage/>

        <SiteMap/>
        <Footer/>
    </>
  )
}


