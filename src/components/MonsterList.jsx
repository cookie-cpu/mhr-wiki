import React from 'react'
import Monster from './Monster'

//let data = ["Bishaten", "Great Wroggi", "Magnamalo", "Zinogre"]
// let data = {
//   "id": "1",
//   "name": "zinogre",
//   "weaknesses": [
//     "water",
//     "ice"
//   ],
//   "image": "https://static.wikia.nocookie.net/monsterhunter/images/7/72/MHRise-Magnamalo_Render_001.png/revision/latest?cb=20200917143525"
// }

// let data = 
// {name: "Zinogre", 
// weaknesses: ["fire", "ice"], 
// image: 
// 'https://static.wikia.nocookie.net/monsterhunter/images/7/72/MHRise-Magnamalo_Render_001.png/revision/latest?cb=20200917143525'}
// 'https://static.wikia.nocookie.net/monsterhunter/images/7/72/MHRise-Magnamalo_Render_001.png/revision/latest?cb=20200917143525'
// let data = ["Zinogre", "Magnamalo"]
let data = [

  {name: "Zinogre", weaknesses: ["fire", "ice"]}, 

  {name: "Nargacuga", weaknesses: ["Thunder", "Fire"]},

  {name: "test", },

  {name: "Magnamalo", weaknesses: ["water"], 
  image: 'https://static.wikia.nocookie.net/monsterhunter/images/7/72/MHRise-Magnamalo_Render_001.png/revision/latest?cb=20200917143525'}

]

export default function MonsterList() {

  const monsterCards = data.map((monster)=>{
    return (
    <Monster 
    name={monster.name}
    weaknesses={monster.weaknesses}
    image={monster.image}
    />)
  })

  return (
    <div style={{border: '2px solid', padding: '1rem', margin: '1rem', display: 'flex'}}>
      
      <h1>Monster List</h1>
      {monsterCards}
       

    </div>
  )
}
