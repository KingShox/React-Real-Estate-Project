import React from 'react'
import ReactPlayer from 'react-player';
import video from '../../../src/assets/videos/video.mp4'
import '../Reusables/HeroComponent.css'

function HeroComponent() {
  return (
    <section className='hero'>
        <div className='overlay'></div>
        <ReactPlayer className='full' url={video} playing loop muted/>
        <div className='heroContent container'>
            <div className='texDiv'>
                <div className='text'>
                    Our Homes
                </div>
                <h1 className='title'>
                    Search your Dream Home
                </h1>
            </div>
            <div className='cardDiv grid'>
                <div className='SearchInput'>
                    <label> Search Your House</label>
                    <div className='input flex'>
                        <input type='text' placeholder='Search'></input>
                    </div>

                </div>

            </div>
        </div>
        
    </section>
  )
}

export default HeroComponent