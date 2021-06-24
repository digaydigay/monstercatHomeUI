import React from 'react'
import { UseaNavigation } from '../contextAPI/menuContexts'
export default function ToogleNav() {
  const { navstate, navdispatch } = UseaNavigation()
  return (
    <div className={navstate.showmenu ? " toogle_nav show" : "toogle_nav"}>
      <i className="fas fa-times" onClick={() => navdispatch({ type: "hidemenu" })}></i>
      <ul>
        <li>
          <i className="fas fa-search"></i><span>  </span> <input type="text" placeholder="SEARCH " /></li>
        <li><li><i className="fas fa-music"><span>  </span></i> PLAYER</li></li>
        <li> <li><i className="fas fa-sign-in-alt"><span>  </span></i> SIGN IN</li></li>
        <li>MUSIC</li>
        <li>ARTISTS</li>
        <li>EVENTS</li>
        <li>PUBLISHING</li>
        <li>LICENSING</li>
        <li>MONSTERCAR CALL OF THE WILD</li>
        <li>MONSTERCAT SILK SHOWCASE</li>
        <li>GOLD</li>
        <li>SHOP</li>
        <li>BLOG</li>
      </ul>
    </div>
  )
}
