import React from 'react'
import DiretaFilho from './DiretaFilho'
export default props => {
    return (
        <div>
            <DiretaFilho texto="Filho 1" numero={20} bool={true}/>
            <DiretaFilho texto="Gegilda" numero={17} bool={false}/>
        </div>
    )
}