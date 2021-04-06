import React from 'react'
import WeaponCard from './WeaponCard'

export default function Weapons() {
  return ( <>
    <h1>Weapon List</h1>
    <div style={{display: 'flex', flexWrap:'wrap'}}>
      <WeaponCard name="Great Sword" />
      <WeaponCard name="Sword & Shield" />
      <WeaponCard name="Dual Blades" />
      <WeaponCard name="Long Sword" />
      <WeaponCard name="Hammer" />
      <WeaponCard name="Hunting Horn" />
      <WeaponCard name="Lance" />
      <WeaponCard name="Gunlance" />
      <WeaponCard name="Switch Axe" />
      <WeaponCard name="Charge Blade" />
      <WeaponCard name="Insect Glaive" />
      <WeaponCard name="Bow" />
      <WeaponCard name="Light Bowgun" />
      <WeaponCard name="Heavy Bowgun" />


    </div>
    </> )
}
