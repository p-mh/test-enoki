import styled from 'styled-components'
import { NavLink } from 'react-router-dom';

export const AddAssetPage = styled.div`
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const AddAssetContainer = styled.div`
    background-color: #1C1C1E;
    box-shadow: 0px 0px 7px #868686;
    width: 800px;
    border-radius: 20px;
`
export const AddAssetHeader = styled.div`
    padding: 40px;
    border-bottom: #444444 1px solid;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Title = styled.h1`
    margin: 0;
    font-size: 1em;
`
export const CloseAddAsset = styled(NavLink)`
    color: white;
    text-decoration: none;
    font-size: 1.5em;
`

export const AddAssetForm = styled.div`
    padding: 40px;
    max-width: 800px;
`

export const AddAssetInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: ${({isMidSize})=> isMidSize? "45%": "100%"}
`

export const AddAssetLabel = styled.label`
    font-weight: 600;
    font-size: 0.8em;
    margin-left: 20px;
`

export const AddAssetInput = styled.input`
    background-color: #303038;
    color: #ffffff;
    width: 100%;
    height: 50px;
    margin: 10px 0;
    padding: 0 25px;
    border-radius: 26px;
    box-sizing: border-box;
    border: ${({isError}) => isError ? '#D63F31 1px solid' : '#303038 1px solid'};
    outline: none;
    font-size: 1em;
`

export const HelpMessage = styled.span`
    color: ${({isError}) => isError ? '#D63F31' : '#ffffff'};
    font-size: 0.7em;
    margin-left: 20px;
`

export const Asset = styled.div`
    background-color: #303038;
    color: #ffffff;
    width: 100%;
    height: 40px;
    margin: 10px 0;
    padding: 0 5px 0 25px;
    border-radius: 26px;
    box-sizing: border-box;
    font-size: 1em;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const AssetContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const AssetLogo = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 15px;
`
export const AssetId = styled.span`
    width: 90px;
    margin-right: 15px;
`

export const AssetSelected = styled.div`
    display:flex;
    justify-content: space-between;
    width: 100%;
`

export const AssetButton = styled.button`
    border:none;
    outline: none;
    background-color: #1C1C1E;
    height: 33px;
    border-radius: 17px;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 10px;
    font-size: 0.9em;
`
export const DateAndQuantity = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 30px 0;
`

export const AddAssetButton = styled.button`
    display: block;
    margin: 50px auto 0;
    background-color: #5E5CE6;
    border: none;
    outline: none;
    color: #ffffff;
    font-size: 1.2em;
    font-weight: 600;
    padding: 18px 50px;
    border-radius: 30px;
`