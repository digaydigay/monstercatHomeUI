import React from 'react'

export default function NewReleases() {
  return (
    <div className="cards_row featured_apparel">
      <div className="top">
        <div className="title"><h1>Featured Apparel</h1></div>
        <div className="viewall">view all <i className="fas fa-angle-right"></i></div>
      </div>

      <div className="card_group">
        <div className="card">
          <div className="cardimage">
            {/* <img src="https://www.monstercat.com/img/artwork.jpg" alt="img" className="preloader" /> */}
            <img src="https://cdn.shopify.com/s/files/1/0204/1478/products/Monstercat_Denim_Catalogue-1.jpg?v=1621558336" alt="mew" />
          </div>
          <h3 className="title">THE PIT</h3>
          <div className="artist">boss fight</div>
        </div>

        <div className="card">
          <div className="cardimage">
            {/* <img src="" alt="" className="preloader" /> */}
            <img src="https://cdn.shopify.com/s/files/1/0204/1478/products/Monstercat_Essentials_Hats_3.jpg?v=1620363297" alt="img" />
          </div>
          <h3 className="title">SMILE</h3>
          <p className="artist">A.M.R.</p>
        </div>

        <div className="card">
          <div className="cardimage">
            {/* <img src="https://www.monstercat.com/img/artwork.jpg" alt="img" className="preloader" /> */}
            <img src="https://cdn.shopify.com/s/files/1/0204/1478/products/Frontwithcase_8001e376-5fe5-4432-a583-40737ce92178.jpg?v=1621953493" alt="img" />
          </div>
          <h3 className="title">VHS</h3>
          <p className="artist">Tony Romera</p>
        </div>

        <div className="card">
          <div className="cardimage">
            {/* <img src="https://www.monstercat.com/img/artwork.jpg" alt="img" className="preloader" /> */}
            <img src="https://cdn.shopify.com/s/files/1/0204/1478/products/Monstercat_Denim_Catalogue-41.jpg?v=1621985169" alt="img" />
          </div>
          <h3 className="title">HIGH CALIBER</h3>
          <p className="artist">Drinks on me & Event Horizon</p>
        </div>

        <div className="card">
          <div className="cardimage">
            {/* <img src="https://www.monstercat.com/img/artwork.jpg" alt="img" className="preloader" /> */}
            <img src="https://cdn.shopify.com/s/files/1/0204/1478/products/Monstercat_Essentials_Hats_10.jpg?v=1620362707" alt="img" />
          </div>
          <h3 className="title">SATI</h3>
          <p className="artist">Meeting Molly & Odsen</p>
        </div>

        <div className="card">
          <div className="cardimage">
            {/* <img src="https://www.monstercat.com/img/artwork.jpg" alt="img" className="preloader" /> */}
            <img src="https://cdn.shopify.com/s/files/1/0204/1478/products/Frontwithcase.jpg?v=1620057607" alt="img" />
          </div>
          <h3 className="title">DAYDREAM</h3>
          <p className="artist">Danny Leax</p>
        </div>

      </div>
    </div >
  )
}
