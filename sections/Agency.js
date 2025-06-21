import Banner from "@/components/Banner"
import Brand from "@/components/Brand"
import Testimonial from "@/components/Testimonial"
import { Title, TitleSm } from "@/components/common/Title"

const Agency = () => {
  return (
    <>
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='ABOUT AGENCY' /> <br />
            <br />
            <Title title='The last digital agency you will ever need!' className='title-bg' />
          </div>

          <div className='content flex1'>
            <div className='left w-60 py'>
              <TitleSm title='Turning your business ideas into smart digital products' />
              <p className='desc-p'>We specialize in Website Development, Influencer Marketing, Social Media Management, and Branding & Creative Services. Whether you're a startup, creator, or established brand, we deliver end-to-end digital solutions that drive results. From building sleek websites to managing your online presence and boosting your brand, we do it all — with creativity, precision, and passion.</p>
              <div className='grid-3'>
                <div className='box'>
                  <h1 className='indigo'>1+</h1>
                  <h3>Years of experience</h3>
                </div>
                <div className='box'>
                  <h1 className='indigo'>10+</h1>
                  <h3>Successful cases</h3>
                </div>
                <div className='box'>
                  <h1 className='indigo'>1K+</h1>
                  <h3>Influencers</h3>
                </div>
              </div>
            </div>
            <div className='right w-40 ml'>
              <img src='/images/s1.jpg' alt='Img' className='round' width='100%' height='100%' />
            </div>
          </div>

          <div className='content flex'>
            <div className='left w-40 py'>
              <img src='/images/s4.jpg' alt='Img' className='round' width='100%' height='100%' />
            </div>
            <div className='right w-60 ml'>
              <TitleSm title='Our mission' />
              <br />
              <p className='misson-p'>Our mission is to empower brands, creators, and businesses with innovative digital solutions that drive growth and create lasting impact. We aim to deliver exceptional services in website development, influencer marketing, social media management, and branding, helping our clients stand out in a crowded digital landscape.</p>
            </div>
          </div>
        </div>
      </section>

      <Brand />
      <Testimonial />
      <Banner />
      <br />
      <br />
      <br />
      <br />
    </>
  )
}

export default Agency
