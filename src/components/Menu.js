import React, { useState } from 'react'

import { MaterialIcon } from "./generalStyle"
import { MenuContainer, MenuBurger, MenuList, MenuItem } from './menuStyled'

export default function Menu() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <MenuContainer isOpen={isOpen}>
            <MenuBurger onClick={() => { setIsOpen(!isOpen) }}>
                <MaterialIcon>&#xe5d2;</MaterialIcon>
            </MenuBurger>
            <MenuList isOpen={isOpen}>
                    <MenuItem>Menu item 1</MenuItem>
                    <MenuItem>Menu item 2</MenuItem>
                    <MenuItem>Menu item 3</MenuItem>
                    <MenuItem>Menu item 4</MenuItem>
                </MenuList>
        </MenuContainer>
    )
}
