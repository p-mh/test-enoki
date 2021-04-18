import moment from 'moment'
import soldeFromJSON from '../data/page-1-dashoard.json';

const areDatesSameMonth = (dates) => {
    const { from, to } = dates;
    return moment(from).month() === moment(to).month()
}

const formatSolde = (solde, dates) => {
    const { from, to } = dates;
    const filteredData = solde
        .filter(({ date }) => moment(date).isBefore(to) && moment(date).isAfter(from));

    return {
        labels: areDatesSameMonth(dates) ?
            filteredData.map(({ date }) => moment(date).format('DD')) :
            filteredData.map(({ date }) => moment(date).format('DD/MM')),
        datasets: [{
            label: 'This Month',
            data: filteredData.map(({ amount }) => amount),
            fill: true,
            borderColor: 'rgb(93, 91, 228)',
            backgroundColor: 'rgba(93, 91, 228, 0.05)',
            tension: 0.5
        }]
    }
}

export const fetchSolde = (dates) => {
    const soldes = soldeFromJSON;
    const formatedSoldeData = formatSolde(soldes, dates);
    return formatedSoldeData;
}

const getMostRecentSold = (soldes) => { 
    const now = moment().format('YYYY-MM-DD');
    const yesterday = moment().subtract(1, 'days').format('YYYY-MM-DD');
    const currentSolde = soldes.find(({date}) => moment(date).format('YYYY-MM-DD') === now).amount;
    const yeasterdaySolde = soldes.find(({date}) => moment(date).format('YYYY-MM-DD') === yesterday).amount;
    const variation = `${(((yeasterdaySolde - currentSolde)/currentSolde) * 100).toFixed(2)}%`
    return {currentSolde, variation}
}

export const fetchCurrentSold = () => {
    const soldes = soldeFromJSON;
    return getMostRecentSold(soldes) //We suppose that this data come directly from the back, but, in order to show something, I use a little function to calculate current solde and variation
}