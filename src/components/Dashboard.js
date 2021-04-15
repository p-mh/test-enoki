import React, { Component } from 'react'
import { Line } from 'react-chartjs-2';
import moment from 'moment';

import {Page, PageTitle} from "./generalStyle"
import {DatePickers, DatePicker } from './dashboardStyled'

import { fetchSolde } from '../services/solde'

export default class Dashboard extends Component {
    state = {
        isLoading: true,
        selectedDate: {
            from: moment().subtract(1, 'month').format("YYYY-MM-DD"),
            to: moment().format("YYYY-MM-DD"),
        },
        solde: {}
    }

    componentDidMount() {
        this.getSolde();
    }

    getSolde = () => {
        const { selectedDate } = this.state;
        const solde = fetchSolde(selectedDate);
        this.setState({
            isLoading: false,
            solde
        })
    }

    changeDate = (date, dateToChange) => {
        const { selectedDate: { from, to } } = this.state;
        this.setState({
            selectedDate: {
                from: dateToChange === "from" ? date : from,
                to: dateToChange === "to" ? date : to
            }
        }, this.getSolde);
    }

    render() {
        const { isLoading, solde, selectedDate: { from, to } } = this.state;
        return (
            <Page>
                <PageTitle>Dashboard</PageTitle>
                <DatePickers>
                    From
                    <DatePicker type="date" value={from} max={to} onChange={({ target: { value } }) => this.changeDate(value, "from")} />
                    To
                    <DatePicker type="date" value={to} min={from} onChange={({ target: { value } }) => this.changeDate(value, "to")} />
                </DatePickers>
                {(isLoading && "Loading...") || <Line data={solde} height={100} />}
            </Page>
        )
    }
}
