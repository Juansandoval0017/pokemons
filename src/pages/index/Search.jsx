import React , {useState,useEffect} from 'react'
import BotonesB from './BotonesB'

export default function Search({setFiltro}) {
    const [search, setSearch] = useState('')
    const onclick = () => {
        setFiltro(search)
    }

  return (
    <div>
        <span>¡Busquemos un pokemon!</span>

        <BotonesB>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
            <button onClick={onclick} >¡Buscar!</button>
        </BotonesB>
    </div>
  )
}
