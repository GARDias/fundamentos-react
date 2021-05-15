import React from 'react'
import FamiliaMembro from './FamiliaMembro'
export default (props) => {

    return(
        <div>
            <FamiliaMembro nome="Pedro" sobrenome="Silva" />
            <FamiliaMembro nome="Gabriel" sobrenome="Dias" />
            <FamiliaMembro nome="Jéssica" sobrenome="Lima" />
        </div>
    )

}