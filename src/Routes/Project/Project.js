import React from 'react'
import HeroImg2 from '../../Component/HeroImg2/HeroImg2'
import Work from '../../Component/Work/Work'
import PricingCard from '../../Component/PricingCard/PricingCard'
const Project = () => {
  return (
    <div>
      <HeroImg2 heading="PROJECTS." text="Some of my most recent works" />
      <Work />
      {/* <PricingCard /> */}
    </div>
  )
}

export default Project