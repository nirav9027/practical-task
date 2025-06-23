import React from 'react'
import styles from "./Cta.module.scss";
import Link from 'next/link';
import Image from 'next/image';
import AppStore from "../../../../../../public/images/app-store.svg"
import GooglePlay from "../../../../../../public/images/google-play.svg"    
import CtaImage from "../../../../../../public/images/cta-image.png"
const Cta = () => {
  return (
    <section className={`${styles.ctaWrapper} mt-200`}>
        <div className='container'>
            <div className={`${styles.ctaCardWrapper}`}>
                <div className={`${styles.cardContent}`}>
                    <h2 className={`h4 ${styles.title}`}>Spend time where it matters. Start using Faces today.</h2>
                    <p>Start using Faces today and receive £50 to spend in the marketplace.</p>
                    <div className={`${styles.buttonWrapper}`}>
                        <Link href='https://www.apple.com/in/app-store/' target='_blank' className={`${styles.appBtn}`}>
                            <Image src={AppStore} alt='AppStore' width={143}  height={36} />
                        </Link>
                        <Link href='https://play.google.com/store/' target='_blank' className={`${styles.appBtn}`}>
                            <Image src={GooglePlay} alt='GooglePlay' width={154}  height={36} />
                        </Link>
                    </div>
                </div>
                <div className={`${styles.imageBox}`}>
                     <Image src={CtaImage} alt='CtaImage' width={429}  height={424} />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Cta