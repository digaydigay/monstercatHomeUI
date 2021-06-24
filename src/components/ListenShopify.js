import React from 'react'

export default function NewReleases() {
  return (
    <div className="cards_row listen_shopify">
      <div className="top">
        <div className="title"><h1>Listen Shopify</h1></div>
        <div className="viewall">view all <i className="fas fa-angle-right"></i></div>
      </div>

      <div className="card_group">
        <div className="card">
          <div className="cardimage">
            {/* <img src="https://www.monstercat.com/img/artwork.jpg" alt="img" className="preloader" /> */}
            <img src="https://assets.monstercat.com/spotify-pop-dance.jpg?image_width=512" alt="mew" />
          </div>
        </div>

        <div className="card">
          <div className="cardimage">
            {/* <img src="" alt="" className="preloader" /> */}
            <img src="https://assets.monstercat.com/spotify-gaming.jpg?image_width=512" alt="img" />
          </div>
        </div>

        <div className="card">
          <div className="cardimage">
            {/* <img src="https://www.monstercat.com/img/artwork.jpg" alt="img" className="preloader" /> */}
            <img src="https://assets.monstercat.com/spotify-workout.jpg?image_width=512" alt="img" />
          </div>
        </div>

        <div className="card">
          <div className="cardimage">
            {/* <img src="https://www.monstercat.com/img/artwork.jpg" alt="img" className="preloader" /> */}
            <img src="https://assets.monstercat.com/spotify-feel-good.jpg?image_width=512" alt="img" />
          </div>
        </div>


      </div>
    </div >
  )
}