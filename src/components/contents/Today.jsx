import React from 'react'
import {todayText} from '../../data/today';
import { Link } from 'react-router-dom';

const Today = () => {
  return (
    <section id='today'>
      <div className='today_inner'>
        <div className='today_thumb'>
          <Link to={todayText[0].page}>
            <img src={todayText[0].img} alt={todayText[0].title} />
          </Link>
        </div>
        <div className='today_text'>
          <span className='today'>today</span>
          <h3 className='title'>{todayText[0].title}</h3>
        </div>
      </div>
    </section>
  )
}

export default Today