import React from 'react'
import styles from "./Counter.module.scss";


const Counter = () => {
    const CounterLists = [
        {
            number : `1.1k`,
            collectionDuration : `Lifetime`,
            description : `Professionals trust Faces`
        },
        {
            number : `24.5k`,
            collectionDuration : `Lifetime`,
            description : `Consent forms created`
        },
        {
            number : `35.2k`,
            collectionDuration : `Lifetime`,
            description : `Treatments processed`
        }
    ]
  return (
    <section className={`${styles.counterWrapper} pt-100 pb-100`}>
        <div className='container'>
            <div className={`${styles.counterCardsWrapper}`}>
                {CounterLists?.map((items,i) =>{
                    return(
                        <div className={`${styles.counterCard}`} key={i}>
                            <div className={`${styles.wrapContent}`}>
                                <h3 className={`fontNokara fs-48 ${styles.title}`}>{items?.number} </h3>
                                <span className={styles.duration}>{items?.collectionDuration}</span>
                            </div>
                            <p className='fs-20'>{items?.description}</p>
                        </div>
                    )
                })}
                
            </div>
        </div>
    </section>
  )
}

export default Counter