import { Title, TitleSm } from "@/components/common/Title";
import React from "react";
import { AiFillBehanceCircle, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";
import { FiHeadphones, FiHelpCircle } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

const Contact = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "78fe660f-9292-4ce3-ad35-8b413d3fa0e6");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });

    const result = await response.json();
    if (result.success) {
      console.log(result);
      alert("Form submitted successfully!");
      event.target.reset();
    } else {
      alert("Failed to submit form. Please try again.");
    }
  };

  return (
    <section className='contact bg-top'>
      <div className='container'>
        <div className='heading-title'>
          <TitleSm title='CONTACT' /> <br />
          <br />
          <Title title="Let's start right now!" className='title-bg' />
        </div>

        <div className='content py flex1'>
          {/* LEFT SIDE */}
          <div className='left w-30'>
            <div className='contact-deatils'>
              <div className='box'>
                <FiHeadphones size={30} className='icons' />
                <h3>+91 0000000000</h3>
                <span>Call us: Mon - Fri 9:00 - 19:00</span>
              </div>
              <div className='box'>
                <IoLocationOutline size={30} className='icons' />
                <h3>Dewas, Madhya Pradesh</h3>
                <span>89 B / Nimad Nagar Itawa</span>
              </div>
              <div className='box'>
                <FiHelpCircle size={30} className='icons' />
                <h3>digitalberojgarwork@gmail.com</h3>
                <span>Drop us a line anytime!</span>
              </div>
              <div className='box'>
                <BiUserCircle size={30} className='icons' />
                <h3>digitalberojgarwork@gmail.com</h3>
                <span>Career at Digital Berojgar</span>
              </div>
            </div>

            {/* <ul className='social-icons'>
              <li className='icon'>
                <BsFacebook size={25} />
              </li>
              <li className='icon'>
                <AiFillInstagram size={25} />
              </li>
              <li className='icon'>
                <AiFillLinkedin size={25} />
              </li>
            </ul> */}
          </div>

          {/* RIGHT SIDE */}
          <div className='right w-70'>
            <TitleSm title='Make an online enquiry' />
            <p className='desc-p'>
              Got questions? Ideas? Fill out the form below to get our proposal.
            </p>

            <form onSubmit={handleSubmit}>
              <div className='grid-2'>
                <div className='inputs'>
                  <label>Name</label>
                  <input type='text' name='name' required />
                </div>
                <div className='inputs'>
                  <label>Email</label>
                  <input type='email' name='email' required />
                </div>
              </div>

              <div className='grid-2'>
                <div className='inputs'>
                  <label>Budget</label>
                  <input type='text' name='budget' />
                </div>
                <div className='inputs'>
                  <label>Timeframe</label>
                  <input type='text' name='timeframe' />
                </div>
              </div>

              <div className='inputs'>
                <label>Tell us a bit about your project *</label>
                <textarea name='message' rows='10' required></textarea>
              </div>

              <button type='submit' className='button-primary'>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
