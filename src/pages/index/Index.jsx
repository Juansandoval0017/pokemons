import React, {useState,useEffect,useMemo} from 'react'
import Search from './Search'
import ListOfPokemons from './Pokemons'
import pokemons from '../../pokemons.json'



export default function Index() {
  
    const [visible, setVisible] = useState(false)
    const [pokemon, setPokemon] = useState([])
    const [filter, setFilter] = useState('')
    const ListsOfPokemons = useMemo(() => {
        
        if(filter === ''){
            return pokemon

        }
        return pokemon.filter((pokemon) => pokemon.name.includes(filter))
    
    }, [filter, pokemon])


    const onClick = () => {
        setVisible(!visible)
    }

    useEffect(() => {
        setPokemon(pokemons)
        console.log(pokemons)

         
    }, [])


    
  return (
    <>
    <h1 className='text-yellow-400 absolute text-center w-full text-4xl pt-4' >¡BIENVENIDO A POKEAPI!</h1>
    <div  className='w-screen h-screen flex items-center justify-center  bg-blue-400'>
        <section className="bg-red-400 w-1/3 flex flex-col items-center justify-center" >


        <Search setFiltro={setFilter} />

        { visible &&  <ListOfPokemons  pokemons={ListsOfPokemons} />  }


        <button  onClick={onClick} className={'p-2  mt-2 border-2 text-white hover:bg-yellow-400 transition-all duration-200'} >¡ver pokemons!</button>
        </section>
    </div>
    </>
  )
}
