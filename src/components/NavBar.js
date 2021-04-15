import React from 'react'

import { NavBarStyled, NavBarList, NavBarItem, StyledLink } from './navBarStyled'

export default function NavBar() {
    return (
        <NavBarStyled>
            <NavBarList>
                <NavBarItem>
                    <StyledLink exact to="/">Dashboard</StyledLink>
                </NavBarItem>
                <NavBarItem>
                    <StyledLink exact to="/assets">Assets</StyledLink>
                </NavBarItem>
            </NavBarList>
        </NavBarStyled>
    )
}
