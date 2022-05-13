import React from 'react';
import './HomeContainer.css';
import PubgCraftonIcon from './images/pubg crafton.png';
import TencentLogo from './images/tencentgames1.png';
import QuantumLogo from './images/quantum.png';
import PubgLogo from './images/chess.png';
import Jamaica from './images/jamaica.png'
import { Link } from "react-router-dom";



function HomeContainer() {
    return (
        <div className="home-container">
            <div className="grid-1">
                    <div className="main-text">
                        <div className="text-box">
                            <h1 className="prm-text">Gamerz Arena</h1>
                            <h1 className="prm-text">Chess mobile Tournament</h1>
                            
                            <Link to="./moreinfo"><button className="more-btn">Больше информации</button></Link>
                              
                        </div>
                    </div>
                    <div className="footer-1">
                    <img className="pubg-icon" src={PubgCraftonIcon} alt=""/>
                        <img className="tencent-icon" src={TencentLogo} alt="" srcset=""/>
                        <img className="quanton-icon" src={QuantumLogo} alt=""/>
                        <img className="jamaica-icon" src={Jamaica} alt=""/>
                        <h2 className="nse-icon">NSE</h2>
                    </div>
                    {/* <div className="footer">
                        <img className="pubg-icon" src={PubgCraftonIcon} alt=""/>
                        <img className="tencent-icon" src={TencentLogo} alt="" srcset=""/>
                        <img className="quanton-icon" src={QuantumLogo} alt=""/>
                        <img className="jamaica-icon" src={Jamaica} alt=""/>
                        <h2 className="nse-icon">NSE</h2>
                    </div> */}
                </div>

            <div className="grid-2">
                <div className="gird-2-info-cont">
                    <div className="gird-2-logo-cont">
                        <img className="grid-2-logo" src={PubgLogo} alt=""/>
                        <div className="grid-2-info">
                            <h2 className="admission-price">стоимость входного билета 500 сом</h2>
                            <h2 className="date">Дата 16 май 2022</h2>
                            {/* <a href="https://docs.google.com/forms/d/e/1FAIpQLSdfoQ9ZVqXhWAW-41wrkZUEAz14506XtkYDTuTDYxDzbQN1Kg/viewform?usp=sf_link"><button className="register-btn-2">more info</button></a> */}
                    </div>
                    </div>
                </div>
                
               
               {/* <div className="grid-2-char-cont"> */}
               {/*img className="grid-2-char-bg" src="https://pngimg.com/uploads/pubg/pubg_PNG54.png" alt=""/> */}

               {/* </div> */}
            </div>
            
        </div>
    );
};

export default HomeContainer;
