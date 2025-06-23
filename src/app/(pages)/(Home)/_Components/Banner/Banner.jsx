import React from 'react'
import styles from "./Banner.module.scss"
import Link from 'next/link'

const Banner = () => {
  return (
    <section className={`${styles.bannerWrapper}`}>
      <div className='container'>
        <div className={`${styles.bannerContent}`}>
            <h1 className={`${styles.title} fontNokara`}>All-in-one <br /> Aesthetics solution</h1>
            <p className={`fs-20`}>Faces helps you attract more clients, streamline bookings, manage consent forms, and purchase products to supercharge your business.</p>
            <Link href="#" className={`btn ${styles.bannerBtn}`}>Get Faces for Free</Link>
            <span className={`${styles.creditText}`}>✌️No credit card needed. Completely free! <br /> Start using Faces today and receive £50 to spend in the marketplace.</span>
        </div>
      </div>
    </section>
  )
}

export default Banner