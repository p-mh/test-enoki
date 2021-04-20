import React, { Component } from 'react'
import { Line, Doughnut } from 'react-chartjs-2';
import moment from 'moment';

import Info from './Info'

import { Page, PageTitle } from "./generalStyle"
import { DashboardTitleContainer, DashboardTitle, DashBoardFirstPart, CurrentSoldeContainer, CurrentSolde, Variation, RepartitionContainer, DatePickers, DatePicker } from './dashboardStyled'

import { fetchSolde, fetchCurrentSold, fetchRepartition } from '../services/solde'

export default class Dashboard extends Component {
    state = {
        isLoading: true,
        selectedDate: {
            from: moment().subtract(1, 'month').format("YYYY-MM-DD"),
            to: moment().format("YYYY-MM-DD"),
        },
        soldes: {},
        currentSolde: 0,
        variation: 0,
        repartition: {}
    }

    componentDidMount() {
        this.getSoldes();

    }

    getSoldes = () => {
        const { selectedDate } = this.state;
        const soldes = fetchSolde(selectedDate);
        const { currentSolde, variation } = fetchCurrentSold();
        const repartition = fetchRepartition();
        this.setState({
            isLoading: false,
            soldes,
            currentSolde,
            variation,
            repartition
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
        const { isLoading, soldes, selectedDate: { from, to }, currentSolde, variation, repartition } = this.state;
        const repartitionChartOptions = {
            legend: {
                display: true,
                position: 'right',
                labels: {
                    fontSize: 17,
                    padding: 40
                },
                layout: {
                    padding: 100
                }
            }
      };
        return (
            <Page>
                <PageTitle>Dashboard</PageTitle>
                <DashBoardFirstPart>
                    <CurrentSoldeContainer>
                        <DashboardTitleContainer>
                            <DashboardTitle>Solde</DashboardTitle>
                            <Info>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dolor elit.</Info>
                        </DashboardTitleContainer>
                        <CurrentSolde>{currentSolde} $</CurrentSolde>
                        <div>
                            <Variation isPositive={variation && variation.charAt(0) === "+"}>{variation}</Variation>
                        </div>
                    </CurrentSoldeContainer>
                    <RepartitionContainer>
                        <DashboardTitleContainer>
                            <DashboardTitle>Repartition</DashboardTitle>
                            <Info>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dolor elit.</Info>
                        </DashboardTitleContainer>
                        {(isLoading && "Loading...") || <Doughnut data={repartition} options={repartitionChartOptions} height="100"/>}
                    </RepartitionContainer>
                </DashBoardFirstPart>
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
