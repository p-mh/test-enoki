import styled from 'styled-components'

export const InfoPicto = styled.div`
    cursor: default;
    margin: 5px 0 0 10px;
    color: #868686;
    font-size: 1.2em;
`

export const InfoBlock = styled.div`
    display: ${({isShow})=>isShow? 'block':'none'};
    position: absolute;
    margin-top: -28px;
    margin-left: 38px;
    padding: 5px 10px;
    background-color: #1C1C1E;
    box-shadow: 0px 0px 7px #868686;
    border-radius: 5px;
    color: #868686;
    font-size: 0.8em;
    max-width: 200px;
`