import React from 'react'

export default function Pokemons({pokemons}) {
    console.log(pokemons)
  return (
    <div className='flex gap-2 flex-wrap' >

        {pokemons.map((pokemon) => {
            return (
                <div key={pokemon.id} className='flex flex-col items-center justify-center' >
                    
                    <span>{pokemon.name}</span>
                    <span>{pokemon.type}</span>
                </div>
            )
        })}
    </div>
  )
}
