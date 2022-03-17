import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

export const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__option">
          <article className="contact__option">
            <MdOutlineEmail/>
            <h4>Email</h4>
            <h5>andersonfelpe123@gmail.com</h5>
            <a href="mailto:andersonfelipe9778@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine/>
            <h4>Messenger</h4>
            <h5>Felipe Anderssom</h5>
            <a href="https://m.me/anderson.felipe.9279807" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp/>
            <h4>WhatsApp</h4>
            <h5>159999999</h5>
            <a href="https://api.whatsapp.com/send?phone='15997952170'" target='_blank'>Send a message</a>
          </article>
        </div>
      </div>
    </section>
  )
}
export default Contact