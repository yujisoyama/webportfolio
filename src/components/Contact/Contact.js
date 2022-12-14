import './Contact.css'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid'
import InstagramIcon from '@material-ui/icons/Instagram'
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import { useState } from 'react'
import axios from 'axios'

const Contact = () => {

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Get in Touch</h2>
      <div className='links'>
        <ul className='icons_contact'>
          <li className='icon_contact'>
            <a href='https://github.com/yujisoyama' target='_blank' rel='noopener noreferrer' aria-label='source code' className='link link--icon'>
                <GitHubIcon style={{fontSize: '45px'}}/>
            </a>
          </li>
          <li className='icon_contact'>
            <a href='https://www.linkedin.com/in/fabioyujisoyama/' target='_blank' rel='noopener noreferrer' aria-label='source code' className='link link--icon'>
                <LinkedInIcon style={{fontSize: '60px'}}/>
            </a>
          </li>
          <li className='icon_contact'>
            <a href='https://www.instagram.com/yuji_soyama/' target='_blank' rel='noopener noreferrer' aria-label='source code' className='link link--icon'>
                <InstagramIcon style={{fontSize: '55px'}}/>
            </a>
          </li>
          <li className='icon_contact'>
            <a href='https://www.facebook.com/yuji.soyama/' target='_blank' rel='noopener noreferrer' aria-label='source code' className='link link--icon'>
                <FacebookIcon style={{fontSize: '58px'}}/>
            </a>
          </li>
          <li className='icon_contact'>
            <a href='https://twitter.com/soyama_yuji' target='_blank' rel='noopener noreferrer'aria-label='source code' className='link link--icon'>
                <TwitterIcon style={{fontSize: '55px'}}/>
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
export default Contact
