import React from 'react'
import './App.css'
import { AiFillStar, AiFillDislike, AiFillLike } from 'react-icons/ai'
import { BiShare } from 'react-icons/bi'
import { FiChevronDown } from 'react-icons/fi'


const App = () => {
  return (
    <div className='app'>
      <div className="container">

        {/* button orange */}
        <div className="btn__container">
          <button className='btn'>
            Play Now
          </button>
          <span className="arrow top"></span>
          <span className="arrow down"></span>
          <span className="triangle"></span>
        </div>

        {/* button outline */}
        <div className="btn__container">
          <button className='btn outline'>
            Play Now
          </button>
          <span className="arrow top"></span>
          <span className="arrow down"></span>
          <span className="triangle-outline"></span>
        </div>

        {/* card large */}
        <div className="card">
          <div className="card__container">

            <div className="card__header">
              <img src="/emma.png" alt="" />
              <div className="info">
                <h1>Emma Wilson</h1>
                <h2>2 hours ago</h2>
              </div>
              <div className="stars">
               <AiFillStar />
               <AiFillStar />
               <AiFillStar />
               <AiFillStar />
               <AiFillStar color='white' />
              </div>
            </div>

            <article>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised 
              words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing 
              hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true 
              generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum 
              which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
            </article>

            <hr />

            <div className="card__footer">
              <div className="icons">
                <span className="icon">
                  <AiFillLike size={24}/> 1.2K
                </span>
                <span className="icon">
                  <AiFillDislike size={24} />
                </span>
              </div>
              <div className="icons">
                <span className="icon">
                  <FiChevronDown size={24} /> Reply
                </span>
                <span className="icon">
                  <BiShare size={24} /> Reply
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* card-small */}
        <div className="card-small">
          <div className="card-small__container">
            <div className="header">
              <img src="/john.png" alt="" />
              <div className="info">
                <h1>John Wick</h1>
                <h2>May 18, 2023</h2>
              </div>
              <h2>6 hours ago</h2>
            </div>

            <hr />

            <p>
              It is a long established fact that a reader will be distracted by the 
              readable content of a page when looking at its layout. The point 
              of using Lorem Ipsum is that it has a more-or-less normal 
              distribution of letters, as opposed to using 'Content.
            </p>
          </div>
          <div className="stars">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App