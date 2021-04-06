import React from 'react'
import LocationCard from './LocationCard'

export default function Locations() {
  return (
    <div>
    <h1>Location List</h1>
      <LocationCard name="Shrine Ruins"/>
      <LocationCard name="Flooded Forest"/>
      <LocationCard name="Frost Islands"/>
      <LocationCard name="Sandy Plains"/>
      <LocationCard name="Lava Caverns"/>
    </div>
  )
}
