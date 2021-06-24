import React from 'react'

export default function NewReleases() {
  return (
    <div className="cards_row">
      <div className="top">
        <div className="title"><h1>New Releases</h1></div>
        <div className="viewall">view all <i className="fas fa-angle-right"></i></div>
      </div>

      <div className="card_group">
        <div className="card">
          <div className="cardimage">
            {/* <img src="https://www.monstercat.com/img/artwork.jpg" alt="img" className="preloader" /> */}
            <img src="https://connect.monstercat.com/v2/release/41aeef9f-d950-48c6-b87a-ab92ed21a0c1/cover?image_width=512&fallbackUrl=https%3A%2F%2Fassets.monstercat.com%2Fartwork-fallback.jpg" alt="mew" />
          </div>
          <h3 className="title">THE PIT</h3>
          <div className="artist">boss fight</div>
        </div>

        <div className="card">
          <div className="cardimage">
            {/* <img src="" alt="" className="preloader" /> */}
            <img src="https://connect.monstercat.com/v2/release/364a25e2-d29a-4115-88f3-cf673e770b9e/cover?image_width=512&fallbackUrl=https%3A%2F%2Fassets.monstercat.com%2Fartwork-fallback.jpg" alt="img" />
          </div>
          <h3 className="title">SMILE</h3>
          <p className="artist">A.M.R.</p>
        </div>

        <div className="card">
          <div className="cardimage">
            {/* <img src="https://www.monstercat.com/img/artwork.jpg" alt="img" className="preloader" /> */}
            <img src="https://connect.monstercat.com/v2/release/9e03b0ec-9cc6-4716-9bfc-6081fb2ca99b/cover?image_width=512&fallbackUrl=https%3A%2F%2Fassets.monstercat.com%2Fartwork-fallback.jpg" alt="img" />
          </div>
          <h3 className="title">VHS</h3>
          <p className="artist">Tony Romera</p>
        </div>

        <div className="card">
          <div className="cardimage">
            {/* <img src="https://www.monstercat.com/img/artwork.jpg" alt="img" className="preloader" /> */}
            <img src="https://connect.monstercat.com/v2/release/a8863021-21a1-4fff-8b1d-6e366d053b9c/cover?image_width=512&fallbackUrl=https%3A%2F%2Fassets.monstercat.com%2Fartwork-fallback.jpg" alt="img" />
          </div>
          <h3 className="title">HIGH CALIBER</h3>
          <p className="artist">Drinks on me & Event Horizon</p>
        </div>

        <div className="card">
          <div className="cardimage">
            {/* <img src="https://www.monstercat.com/img/artwork.jpg" alt="img" className="preloader" /> */}
            <img src="https://connect.monstercat.com/v2/release/e274212b-db80-464b-ad74-b48ce0f1b3b5/cover?image_width=512&fallbackUrl=https%3A%2F%2Fassets.monstercat.com%2Fartwork-fallback.jpg" alt="img" />
          </div>
          <h3 className="title">SATI</h3>
          <p className="artist">Meeting Molly & Odsen</p>
        </div>

        <div className="card">
          <div className="cardimage">
            {/* <img src="https://www.monstercat.com/img/artwork.jpg" alt="img" className="preloader" /> */}
            <img src="https://connect.monstercat.com/v2/release/bd00e12b-8ee1-45d5-91ec-702971ed80f5/cover?image_width=512&fallbackUrl=https%3A%2F%2Fassets.monstercat.com%2Fartwork-fallback.jpg" alt="img" />
          </div>
          <h3 className="title">DAYDREAM</h3>
          <p className="artist">Danny Leax</p>
        </div>

      </div>
    </div >
  )
}
