import React from 'react'
import { UseMenuContext, UseaNavigation } from '../contextAPI/menuContexts'



export default function Header() {
  const { sbstate, sbdispatch } = UseMenuContext()
  const { navdispatch } = UseaNavigation()
  return (
    <div className="main_header">
      <div className="brand_nav_section">
        {/* brannd_title */}
        <div className="brand_title">
          <img src="https://www.monstercat.com/img/monstercat-logo.svg" alt="brand_img" />
        </div>

        <div className="nav_section">
          {/* navigation menu */}
          <ul>
            <li>MUSIC</li>
            <li>ARTISTS</li>
            <li>EVENTS</li>
            <li onClick={() => sbdispatch({ type: "commercial" })}>COMMERCIAL <i className="fas fa-angle-down" ></i></li>
            <li onClick={() => sbdispatch({ type: "radio" })}>RADIO <i className="fas fa-angle-down" ></i></li>
            <li>GOLD</li>
            <li>SHOP</li>
            <li>BLOG</li>
            <li> <img src="https://www.monstercat.com/img/monstercat-symbol.png" alt="img" /> </li>
          </ul>
          {/* toogle menu */}
          <div className="bars">
            <i className="fas fa-bars" onClick={() => navdispatch({ type: "showmenu" })}></i>
          </div>
        </div>

      </div>

      <div className="sub_menu">
        <div className={sbstate.commercial ? "commercial commercial_hidden" : "commercial "} >
          <ul>
            <li>PUBLISHING</li>
            <li>LICENSING</li>
          </ul>
        </div>
        <div className={sbstate.radio ? "radio radio_hidden" : "radio"}>
          <ul>
            <li>MONSTERCAT CALL OF THE WILD</li>
            <li>MONSTERCAT SILK SHOWCASE</li>
          </ul>
        </div>
      </div>

      <div className="user_player_section">
        <div className="search_sign_in_section">
          <ul>
            <li><i className="fas fa-music"><span>  </span></i> PLAYER</li>
            <li><i className="fas fa-sign-in-alt"><span>  </span></i> SIGN IN</li>
            <li>
              <i className="fas fa-search"></i>
              <span>  </span> <input type="text" placeholder="SEARCH " />
            </li>
          </ul>
        </div>
        <div className="player_section">
          <ul>
            <li><i className="fas fa-random"></i></li>
            <li><i className="fas fa-step-backward"></i></li>
            <li><i className="fas fa-play"></i></li>
            <li><i className="fas fa-pause"></i></li>
            <li><i className="fas fa-step-forward"></i></li>
            <li><i className="fas fa-volume-up"></i></li>

          </ul>
        </div>
      </div>

    </div>
  )
}
