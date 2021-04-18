import React, {useState} from 'react'

import { MaterialIcon } from "./generalStyle"
import {InfoPicto, InfoBlock} from './infoStyled'

export default function Info(props) {
    const [isShow, setIsShow] = useState(false);
    console.log(props.children)
    return (
        <div>
            <InfoPicto><MaterialIcon onMouseEnter={() => { setIsShow(true) }} onMouseLeave={() => { setIsShow(false) }}>&#xe88e;</MaterialIcon></InfoPicto>
            <InfoBlock isShow={isShow}>{props.children}</InfoBlock>
        </div>
    )
}
