import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "b11e7668-dbfa-4c99-901d-490e33936806");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
      };


  return (
    <div className='contact' id='contact'>
        <div className='contact-title'>
            <h1>Get in Touch</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className='contact-section'>
            <div className='contact-left'>
                <h1>Let's Talk</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A molestias vel cumque fugit facilis tenetur. Sed soluta aspernatur enim nesciunt officia rem incidunt dolores odit consequatur! Ad ab excepturi iusto.</p>
                <div className='contact-details'>
                    <div className='contact-detail'>
                        <img src={mail_icon} alt="" /><p>test@gmail.com</p>                        
                    </div>
                    <div className='contact-detail'>
                        <img src={call_icon} alt="" /><p>+12456789</p>
                    </div>
                    <div className='contact-detail'>
                        <img src={location_icon} alt="" /><p>Lellopitiya, Ratnapura, Sri Lanka</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className='contact-right'>
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter Your Name' name='name' />
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter Your Email' name='email' />
                <label htmlFor="">Write Your message Here</label>
                <textarea name="message" rows="8" placeholder='Enter Your Message here'></textarea>
                <button type='submit' className='contact-submit'>Submit Now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact