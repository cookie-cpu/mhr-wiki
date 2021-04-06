import React from 'react'

export default function LocationCard({name}) {
  return (
    <div style={{border: '2px solid', padding: '1rem', margin: '1rem', width: '45%'}}>
      <h2>{name}</h2>
    </div>
  )
}
