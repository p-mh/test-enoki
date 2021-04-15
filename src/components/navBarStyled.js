import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavBarStyled = styled.div`
    background-color: #2C2C2E;    
`

export const NavBarList = styled.ul`
    padding: 0;
    margin: 0;
    display: flex;
`

export const NavBarItem = styled.li`
    list-style: none;
    padding: 20px 0px;
`
const activeClassName = 'nav-item-active'

export const StyledLink = styled(NavLink).attrs({ activeClassName })`
    padding: 17px 40px;
    color: #9F9FA5;
    text-decoration: none;
    font-weight: 600;
    border-bottom: #2C2C2E 4px solid;
    &.${activeClassName} {
        border-bottom: #5E5CE6 4px solid;
        color: #ffffff;
    }
`;