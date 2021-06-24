import React, { useEffect, useState } from 'react'
import { useTimer } from 'react-timer-hook'


const CountDown = ({ expiryTimestamp, setIsExpire, isexpire }) => {
  const { hours, minutes, seconds } = useTimer({
    expiryTimestamp, onExpire: () => setIsExpire("Get gold to listen early")
  })
  return <div>
    {
      isexpire ?
        <button className="expireTimeBtn"><a href="https://www.monstercat.com/gold/buy">{isexpire}</a></button>
        : <h2 style={{ fontWeight: 100 }}> Release in <span style={{ fontWeight: "bold" }}>{hours}h {minutes}m {seconds}s</span> </h2>
    }

  </div >
}


export default function Hero() {
  const [isexpire, setIsExpire] = useState()
  useEffect(() => {
    setIsExpire(JSON.parse(window.localStorage.getItem('isexpire')));
  }, []);
  const time = new Date()
  time.setSeconds(time.getSeconds() + 300)
  console.log(time.getSeconds())
  return (
    <div className="hero">
      <div className="primary_content">
        <div className="hero_image">
          <img src="https://connect.monstercat.com/v2/release/706df3e4-0e2d-4a5f-9004-e54419094228/cover?image_width=512" alt="img" />
        </div>
        <div className="hero_texts">
          <div className="song_title"><h1> ALL OF THIS</h1></div>
          <div className="artist_name"><h3>Aiobahn & NUZB</h3></div>
          <CountDown expiryTimestamp={time} setIsExpire={setIsExpire} isexpire={isexpire} />

          <div className="artists">
            <div className="artist_image">
              <img src="https://connect.monstercat.com/v2/artist/41bb31a3-4741-41c7-8e40-2e3e516ce61d/image?fallbackUrl=https%3A%2F%2Fassets.monstercat.com%2Fartists-profile-images%2Fpromo-artist.jpg&image_width=256" alt="img" />
            </div>
            <div className="artist_image">
              <img src="https://connect.monstercat.com/v2/artist/7db9e239-8274-4fe7-912c-6f7d4ee912f1/image?fallbackUrl=https%3A%2F%2Fassets.monstercat.com%2Fartists-profile-images%2Fpromo-artist.jpg&image_width=256" alt="img" />
            </div>
          </div>
          <div>
            <h3 style={{ fontWeight: "300" }}>  <a href="https://www.monstercat.com/gold"> Monstercat Gold</a>
              {" "}{" "} members can stream releases 20hours early
            </h3>
          </div>
        </div>

        <div className="secondary_content">

        </div>
      </div>
    </div>
  )
}
