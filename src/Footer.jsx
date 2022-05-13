import React from 'react'
import "./Footer.css"
import Logo from './images/GALOGO-1.png';
import Logo2 from './images/GALOGO-2.png';
import GmailLogo from "./images/gmail-logo.png"
import InstaLogo from "./images/insta-logo.png"

function Footer() {
    return (
        <div className="footer">
            <div className="card-cont">
                <div className="card">
                    <div className="card-img-cont">
                        <img className="card-img" src={Logo} alt=""/>
                    </div>
                    <div className="card-txt">
                        <h2 className="card-main-text">База знаний</h2>
                        
                        <span className="card-sub-text"><a href="#">Ответим на все ваши вопросы о платформе (нажмите)</a></span>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img-cont">
                        <img className="card-img" src={GmailLogo} alt=""/>
                    </div>
                    <div className="card-txt">
                        <h2 className="card-main-text">Свяжитесь с нами по электронной почте </h2>
                        
                        <span className="card-sub-text"><a href="mailto:desis1tinfo@gmail.com">desis1tinfo@gmail.com (нажмите)</a></span>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img-cont">
                        <img className="card-img" src={InstaLogo} alt=""/>
                    </div>
                    <div className="card-txt">
                        <h2 className="card-main-text">Наш Instagram</h2>
                        
                        <span className="card-sub-text"><a href="https://www.instagram.com/binary_qod/">@binary_qod (click)</a></span>
                    </div>
                </div>
            </div>

            <div className="footer-info-cont">
                <div className="footer-info">
                    <img className="footer-logo" src={Logo2} alt=""/>
                </div>
                <div className="contact-info">
                    <h1><a className="phone-number" href="tel:996 (552) 60 17 77 ">ТЕЛЕФОН: +996 552 60 17 77 (Click to call)</a></h1>
                    
                </div>
            </div>
        </div>
    )
}

export default Footer;
