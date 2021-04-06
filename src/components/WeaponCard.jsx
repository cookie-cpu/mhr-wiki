import React from 'react'

export default function WeaponCard({name}) {
  return (
    <div style={{border: '2px solid', padding: '1rem', margin: '1rem', width: '15%'}}>
      <h2>{name}</h2>
    </div>
  )
}
