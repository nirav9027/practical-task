import React from 'react'
import styles from "./JoinUs.module.scss"
import Image from 'next/image'
import UserImage1 from "../../../../../../public/images/user-image-1.png"
import UserImage2 from "../../../../../../public/images/user-image-2.png"
import UserImage3 from "../../../../../../public/images/user-image-3.png"
import ManageBusinessImage from "../../../../../../public/images/manage-business-image.png"
import TrustpilotImage from "../../../../../../public/images/trustpilot-image.svg"

const JoinUs = () => {
    const userLists = [UserImage1,UserImage1,UserImage1,UserImage2,UserImage3]
  return (
   <section className={`${styles.joinUsWrapper} pt-100`}>
      <div className='container'>
        <div className={`${styles.joinUsInnerWrappr}`}>
            <div className={`${styles.joinUsContent}`}>
                <h2 className={`h4 fontNokara ${styles.title}`}>Join 1137+ professionals managing their business with Faces.</h2>
                <div className={`${styles.reviewsWrapper}`}>
                    <div className={`${styles.usersWrapper}`}>
                        {userLists?.map((items,i) => {
                            return(
                                <div className={`${styles.userImageBox}`} key={i}>
                                    <Image src={items} alt='user image' width={36}  height={36} />
                                </div>
                            )
                        })}
                    </div>
                    <div className={`${styles.ratingsWrapper}`}>
                        <div className={`${styles.strasWrapper}`}>
                            <i className='icon icon-star'></i>
                            <i className='icon icon-star'></i>
                            <i className='icon icon-star'></i>
                            <i className='icon icon-star'></i>
                            <i className='icon icon-star'></i>
                        </div>
                        <span className={styles.rates}>4.8 <span>“Excellent”</span></span>
                    </div>
                </div>
                <div className={`${styles.trustPilotCard}`}>
                    <span>854 customer reviews on their experiences on</span>
                    <Image src={TrustpilotImage} alt='user image' width={60}  height={28} />
                </div>
            </div>
            <div className={`${styles.imageBox}`}>
                <Image src={ManageBusinessImage} alt='user image' width={600}  height={557} />
            </div>
        </div>
      </div>
    </section>
  )
}

export default JoinUs