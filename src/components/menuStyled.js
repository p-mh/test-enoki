import styled from 'styled-components'

export const MenuContainer = styled.div`
    position: fixed;
    width: ${({isOpen}) => isOpen ? "200px" : "80px"};
    height: 100%;
    background-color: #2C2C2E;
    border-right: #1C1C1E 1px solid;
    transition: all 0.1s;
    padding: 10px 20px;
    box-sizing:border-box;
`

export const MenuBurger = styled.span`
    font-size: 2.3em;
    cursor: pointer;
    &::after{
        content:'';
        display:block;
        width:40px;
        height: 1px;
        background:linear-gradient(0.25turn, #2C2C2E, #3F3F41, #2C2C2E);
    }
`
export const MenuList = styled.ul`
    opacity: ${({isOpen}) => isOpen ? "1" : "0"};
    padding: 0;
    margin: 30px 0;
`

export const MenuItem = styled.li`
    list-style: none;
    color: #9F9FA5;
    font-weight: 600;
    margin-bottom: 20px;
    cursor: pointer;
    &:hover{
        color: #ffffff;
    }
`
