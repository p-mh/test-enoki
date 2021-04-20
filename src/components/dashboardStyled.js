import styled from 'styled-components';

export const DashboardTitleContainer = styled.div`
    display: flex;
    align-items: center;
`

export const DashboardTitle = styled.h2`
    font-size: 1.3em;
    vertical-align: center;
`

export const DashBoardFirstPart = styled.div`
    display: flex;
`

export const CurrentSoldeContainer = styled.div`
    flex: 1;
`

export const CurrentSolde = styled.span`
    font-size: 3.5em;
    font-weight:600;
`

export const Variation = styled.span`
    font-size: 1.5em;
    font-weight: 600;
    color: ${({ isPositive }) => isPositive ? '#4F9C0F' : '#D63F31'};
`

export const RepartitionContainer = styled.div`
    flex: 2;
`

export const DatePickers = styled.div`
    color: #3D3C41;
    font-weight: 600;
    display: flex;
    justify-content: flex-end;
`

export const DatePicker = styled.input`
    margin: 0 20px;
    background-color: transparent;
    border: #313034 1px solid;
    border-radius: 5px;
    outline: none;
    color: #ffffff;
    padding: 5px;
`