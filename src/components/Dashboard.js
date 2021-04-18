import React, { Component } from 'react'
import { Line } from 'react-chartjs-2';
import moment from 'moment';

import Info from './Info'

import { Page, PageTitle } from "./generalStyle"
import { DashboardTitleContainer, DashboardTitle, CurrentSolde, Variation, DatePickers, DatePicker } from './dashboardStyled'

import { fetchSolde, fetchCurrentSold } from '../services/solde'

export default class Dashboard extends Component {
    state = {
        isLoading: true,
        selectedDate: {
            from: moment().subtract(1, 'month').format("YYYY-MM-DD"),
            to: moment().format("YYYY-MM-DD"),
        },
        soldes: {},
        currentSolde: 0,
        variation: 0
    }

    componentDidMount() {
        this.getSoldes();

    }

    getSoldes = () => {
        const { selectedDate } = this.state;
        const soldes = fetchSolde(selectedDate);
        const {currentSolde, variation} = fetchCurrentSold();
        this.setState({
            isLoading: false,
            soldes,
            currentSolde,
            variation
        })
    }

    changeDate = (date, dateToChange) => {
        const { selectedDate: { from, to } } = this.state;
        this.setState({
            selectedDate: {
                from: dateToChange === "from" ? date : from,
                to: dateToChange === "to" ? date : to
            }
        }, this.getSoldes);
    }

    render() {
        const { isLoading, soldes, selectedDate: { from, to }, currentSolde, variation } = this.state;
        return (
            <Page>
                <PageTitle>Dashboard</PageTitle>
                <div>
                    <DashboardTitleContainer>
                        <DashboardTitle>Solde</DashboardTitle>
                        <Info>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dolor elit.</Info>
                    </DashboardTitleContainer>
                    <CurrentSolde>{currentSolde} $</CurrentSolde>
                    <div><Variation isPositive={variation && variation.charAt(0) === "+"}>{variation}</Variation></div>
                </div>
                <DashboardTitleContainer>
                        <DashboardTitle>Portfolio evolution</DashboardTitle>
                        <Info>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dolor elit.</Info>
                    </DashboardTitleContainer>
                <DatePickers>
                    From
                    <DatePicker type="date" value={from} max={to} onChange={({ target: { value } }) => this.changeDate(value, "from")} />
                    To
                    <DatePicker type="date" value={to} min={from} onChange={({ target: { value } }) => this.changeDate(value, "to")} />
                </DatePickers>
                {(isLoading && "Loading...") || <Line data={soldes} height={100} />}
            </Page>
        )
    }
}
