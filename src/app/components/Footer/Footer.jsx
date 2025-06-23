import React from 'react'
import styles from "./Footer.module.scss"
import LogoImage from "../../../../public/images/footer-logo.svg"
import IconCall from "../../../../public/images/icon-call.svg"
import IconWhatsapp from "../../../../public/images/icon-whatsapp.svg"                      
import IconEmail from "../../../../public/images/icon-email.svg"
import IconLocation from "../../../../public/images/icon-location.svg"
import AppStore from "../../../../public/images/app-store.svg"
import GooglePlay from "../../../../public/images/google-play.svg"
import IconFacebook from "../../../../public/images/icon-facebook.svg"
import IconInstagram from "../../../../public/images/icon-instagram.svg"
import IconLinkdin from "../../../../public/images/icon-linkdin.svg"
import IconYoutube from "../../../../public/images/icon-youtube.svg"
import IconTiktok from "../../../../public/images/icon-tiktok.svg"
import Link from 'next/link'
import Image from 'next/image'
const Footer = () => {
  // contact Information 
  const ContactInfo = [
    {
      imagePath : IconCall,
      url : 'tel:01785558018',
      title : '01785 558018'
    },
    {
      imagePath : IconWhatsapp,
      url : 'https://wa.me/01785558018',
      title : '01785 558018'
    },
    {
      imagePath : IconEmail,
      url : 'mailto:support@facesconsent.com',
      title : 'support@facesconsent.com'
    },
    {
      imagePath : IconLocation,
      url : 'https://maps.app.goo.gl/ir2fsNBpUtbm4GvMA',
      title : `Faces Consent Ltd,
              Staffordshire Technology Park,
              Centaurion House, 27 Anson Ct,
              Stafford ST18 0GB, UK`
    }
  ]

   // Footer Links
   const FooterMenu = [
    {
      MainTitle : `Services`,
      menuLinks : [
        {
          title : `Search Clinics`,
          url : `#`
        },
        {
          title : `Search Treatments`,
          url : `#`
        },
        {
          title : `Training Courses`,
          url : `#`
        },
        {
          title : `Card Machine Companies`,
          url : `#`
        },
        {
          title : `Insurance Companies`,
          url : `#`
        },
        {
          title : `Waste Management Services`,
          url : `#`
        },
        {
          title : `CPD Services`,
          url : `#`
        },
        {
          title : `Complications Consultant`,
          url : `#`
        },
        {
          title : `Free Website Builder`,
          url : `#`
        },
        {
          title : `Finance Options`,
          url : `#`
        },
        {
          title : `Get Aesthetics Insurance`,
          url : `#`
        },
        {
          title : `Get Medical Malpractice Insurance`,
          url : `#`
        },
        {
          title : `Accountancy Services`,
          url : `#`
        },
        {
          title : `Find A Prescriber`,
          url : `#`
        }
      ]
    },
    {
      MainTitle : `About Us`,
      menuLinks : [
        {
          title : `Consent Forms`,
          url : `#`
        },
        {
          title : `Aftercare Forms`,
          url : `#`
        },
        {
          title : `GDPR`,
          url : `#`
        },
        {
          title : `HIPAA Compliance`,
          url : `#`
        },
        {
          title : `Advice, Tips & News`,
          url : `#`
        }
      ]
    },
    {
      MainTitle : `Help`,
      menuLinks : [
        {
          title : `Shipping & Returns`,
          url : `#`
        },
        {
          title : `Help & Support`,
          url : `#`
        },
        {
          title : `General FAQs`,
          url : `#`
        },
        {
          title : `Seller’s FAQs`,
          url : `#`
        },
        {
          title : `Say Hello`,
          url : `#`
        }
      ]
    },
     {
      MainTitle : `Sell`,
      menuLinks : [
        {
          title : `Sell on Faces`,
          url : `#`
        },
        {
          title : `Seller Registration`,
          url : `#`
        },
        {
          title : `Seller List`,
          url : `#`
        }
      ]
    }
   ]

   // Social MediaL Links
   const SocialMediaLinks = [
      {
        icon : IconFacebook,
        title : `Facebook`,
        url : `https://www.facebook.com/`
      },
      {
        icon : IconInstagram,
        title : `Instagram`,
        url : `https://www.instagram.com/`
      },
      {
        icon : IconLinkdin,
        title : `Linkdin`,
        url : `https://www.linkedin.com/`
      },
      {
        icon : IconYoutube,
        title : `Youtube`,
        url : `https://www.youtube.com/`
      },
      {
        icon : IconTiktok,
        title : `Tiktok`,
        url : `https://www.tiktok.com`
      }
   ]
  return (
    <footer className={`${styles.footerWrapper}`}>
      <div className={`container`}>
          <div className={`${styles.footerContent}`}>
            <div className={`${styles.contactWrapper}`}>
                <div className={`${styles.aboutBusiness}`}>
                  <div className={`${styles.footerLogo}`}>
                    <Link href='/'>
                      <Image src={LogoImage} alt='Footer Logo' width={118}  height={72} />
                    </Link>
                  </div>
                  <p>We’re an MHRA Licensed Broker</p>
                </div>
                <div className={`${styles.contactInfo}`}>
                  <h3 className={`fs-20 ${styles.title}`}>Contact</h3>
                  <ul className={`${styles.contactLists}`}>
                    {ContactInfo?.map((items,i) => {
                      return(
                        <li key={i}>
                          <Link href={items?.url} className={`fs-16`}>
                            <Image src={items?.imagePath} alt='icon' width={24}  height={24} className={`${styles.icon}`} />
                            {items?.title}
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </div>
                <div className={`${styles.getClientsCard}`}>
                  <div className={`${styles.content}`}>
                    <h3 className={`fs-20 ${styles.title}`}>Get 7 Clients in 7 days!</h3>
                    <p>Sign-up to our hints and tips of how to get more clients</p>
                  </div>
                  <form action="">
                    <div className={`inputWrapper`}>
                      <input type="email" id='email' placeholder='Email' />
                      {/* <span className='errorMessage'>Please enter valid email</span> */}
                    </div>
                      <button className={`btn ${styles.formButton}`}>Count me in!</button>
                  </form>
                </div>
            </div>
            <div className={`${styles.footerDetailsWrapper}`}>
              <div className={`${styles.footerMenuWrpper}`}>
                {FooterMenu?.map((items, i) => {
                  if (items.MainTitle === 'About Us' && FooterMenu[i + 1]?.MainTitle === 'Help') {
                    return (
                      <div className={styles.menuGroup} key={i}>
                        <h3 className={`fs-20 ${styles.title}`}>{items.MainTitle}</h3>
                        <ul className={styles.contactLists}>
                          {items.menuLinks.map((link, j) => (
                            <li key={j}>
                              <Link href={link.url} className="fs-16">{link.title}</Link>
                            </li>
                          ))}
                        </ul>
                        <div className={`${styles.helpMenu}`}>
                          <h3 className={`fs-20 ${styles.title}`}>{FooterMenu[i + 1].MainTitle}</h3>
                          <ul className={styles.contactLists}>
                            {FooterMenu[i + 1].menuLinks.map((link, j) => (
                              <li key={`help-${j}`}>
                                <Link href={link.url} className="fs-16">{link.title}</Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    );
                  }
                  if (items.MainTitle === 'Help') return null;
                  return (
                    <div className={styles.menuGroup} key={i}>
                      <h3 className={`fs-20 ${styles.title}`}>{items.MainTitle}</h3>
                      <ul className={styles.contactLists}>
                        {items.menuLinks.map((link, j) => (
                          <li key={j}>
                            <Link href={link.url} className="fs-16">{link.title}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
              <div className={`${styles.buttonWrapper}`}>
                  <Link href='https://www.apple.com/in/app-store/' target='_blank' className={`${styles.appBtn}`}>
                    <Image src={AppStore} alt='AppStore' width={143}  height={36} />
                  </Link>
                  <Link href='https://play.google.com/store/' target='_blank' className={`${styles.appBtn}`}>
                    <Image src={GooglePlay} alt='GooglePlay' width={154}  height={36} />
                  </Link>
              </div>
            </div>

          </div>
          <div className={`${styles.bottomFooter}`}>
            <div className={`${styles.copyrightContent}`}>
              <ul className={`${styles.socialMediaWrapper}`}>
                {SocialMediaLinks?.map((items,i) => {
                  return(
                  <li key={i}>
                    <Link href={items?.url} title={items?.title}>
                       <Image src={items?.icon} alt={items?.title} width={16}  height={16} />
                    </Link>
                  </li>
                  )
                })}
                
              </ul>
              <p>© 2024 Faces Consent. All rights reserved.</p>
            </div>
            <ul className={`${styles.policyLinksWrapper}`}>
              <li>
                <Link href='/' className={`${styles.policyLink} fs-16`}>Privacy Policy</Link>
              </li>
              <li>
                <Link href='/' className={`${styles.policyLink} fs-16`}>Terms & Conditions</Link>
              </li>
            </ul>
          </div>
      </div>
    </footer>
  )
}

export default Footer