import Link from "next/link"
import { TitleLogo } from "./Title"
import { BsFacebook } from "react-icons/bs"
import { AiFillBehanceCircle, AiFillInstagram, AiFillLinkedin } from "react-icons/ai"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='grid-4'>
            <div className='logo'>
              <TitleLogo title='Berojgar' caption='Digital' className='logobg' />
              <br />
              <span>
                Questions? Reach us <br /> Monday – Friday from 9 am to 7 pm
              </span>
              <br />
              <br />
              <h3>+91 0000000000</h3>
              <br />
              <Link href={"/contact"}><button className='button-primary'>Request for quote</button></Link>
            </div>
            <ul>
              <h3>COMPANY</h3>
              <li>
                <Link href='/agency'>About agency</Link>
              </li>
              <li>
                <Link href='/team'>Our team</Link>
              </li>
              <li>
                <Link href='/showcase'>Showcase</Link>
              </li>
              <li>
                <Link href='/blogs'>Blog</Link>
              </li>
              
              <li>
                <Link href='/contact'>Contact</Link>
              </li>
            </ul>
            <ul>
              <h3>SERVICES</h3>
              <li>
                <Link href='/'>Web Development</Link>
              </li>
              <li>
                <Link href='/'>Branding & Creative Services</Link>
              </li>
              <li>
                <Link href='/'>Influencer Marketing</Link>
              </li>
              <li>
                <Link href='/'>Social Media Managment</Link>
              </li>
            </ul>
            <ul>
              <h3>CONNECT</h3>
              <div className='connect'>
                <li>
                  <Link href='https://www.facebook.com/profile.php?id=61558315373769'>
                    <BsFacebook size={25} />
                  </Link>
                </li>
                
                <li>
                  <Link href='https://www.instagram.com/digitalberojgar/'>
                    <AiFillInstagram size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='https://www.linkedin.com/company/digital-berojgar'>
                    <AiFillLinkedin size={25} />
                  </Link>
                </li>
              </div>
            </ul>
          </div>
          <div className='legal connect py'>
            <div className='text'>
              <span>© 2025 Digitalberojgar. ALL RIGHTS RESERVED.</span>
            </div>
            <div className='connect'>
              <span>Digital Agency</span>
              <span> &nbsp; | &nbsp; </span>
            <span>
                {/* <Link href='/termCondition'> */}
                    TERMS & CONDITIONS
                  {/* </Link> */}
                  </span>
              
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
//termCondition
export default Footer
