import React from 'react'

export default function Species ({zooSpecies, handleSpecies, handleAllSpecies}) {
  return (
    <div>
      <h2>Species</h2>
      {
      zooSpecies.map((specie, i) => (
        <button key={i} onClick={handleSpecies} value={specie}>
          {specie}
        </button>
      ))
    }
    <button onClick={handleAllSpecies}>All Animals</button>
    </div>
  )
}
