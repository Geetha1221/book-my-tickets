import React from 'react'
import SimpleSlider from '../pages/SimpleSlider'
import RecommendedCard from '../pages/RecommendedCard'
import RecommendedSportsCard from '../pages/RecommendedSportsCard'

const HomePage = () => {
  return (
    <div className='homePage'>
      <SimpleSlider/>
      <RecommendedCard/>
      <RecommendedSportsCard/>
    </div>
  )
}

export default HomePage
