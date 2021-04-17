import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AssetsHead = styled.div`
    display: flex;
    align-items: center;
`

export const AssetsTitle = styled.h2`
    margin-right: 20px;
`
export const AddAssetButton = styled(NavLink)`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    background-color: #5E5CE6;
    color: #ffffff;
    font-size: 1.69em;
    font-weight: 600;
    outline: none;
    text-decoration: none;
    text-align: center;
    &:hover{
        background-color: #868686;
    }
`

export const Search = styled.div`
    display: flex;
    justify-content: flex-end;
`
export const SearchIcon = styled.div`
    font-size: 1.3em;
`

export const SearchBar = styled.input`
    background-color: transparent;
    border: none;
    outline: none;
    color: #ffffff;
    font-size: 1em;
    font-weight: 800;
    text-align: right;
    width: 150px;
`

export const AssetsTable = styled.table`
    width: 100%;
    border-collapse: collapse;
`
export const AssetsRow = styled.tr`
    border-bottom: #444444 1px solid;
    height: 80px;
    &:last-child {
        border: none;
    }
`
export const AssertHeader = styled.th`
    color: #868686;
    text-align: center;
`

export const AssetData = styled.td`
    color: #ffffff;
    text-align: center;
    border: none;
`

export const AssetLogo = styled.img`
    width: 40px;
`

export const AssetVariation = styled.p`
    color: ${({ isPositive }) => isPositive ? '#4F9C0F' : '#D63F31'}
`