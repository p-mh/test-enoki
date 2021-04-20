import moment from 'moment'
import soldeFromJSON from '../data/page-1-dashoard.json';

const areDatesSameMonth = (dates) => {
    const { from, to } = dates;
    return moment(from).month() === moment(to).month()
}

const formatSolde = (solde, dates) => {
    // Format data in order to use with chartjs
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
    // Here I just take it from json file. So I don't need async/await, but if we have a back I should have use it
    const formatedSoldeData = formatSolde(soldes, dates);
    return formatedSoldeData;
}

const getMostRecentSold = (soldes) => {
    // Function to get the most recent sold, and calculate the variation. This should not be necessary, cause this datas should come from backend. 
    const now = moment().format('YYYY-MM-DD');
    const yesterday = moment().subtract(1, 'days').format('YYYY-MM-DD');
    const currentSolde = soldes.find(({ date }) => moment(date).format('YYYY-MM-DD') === now).amount;
    const yeasterdaySolde = soldes.find(({ date }) => moment(date).format('YYYY-MM-DD') === yesterday).amount;
    const variation = `${(((yeasterdaySolde - currentSolde) / currentSolde) * 100).toFixed(2)}%`
    return { currentSolde, variation }
}

export const fetchCurrentSold = () => {
    const soldes = soldeFromJSON;
    // Here I just take it from json file. So I don't need async/await, but if we have a back I should have use it
    return getMostRecentSold(soldes)
    // We suppose that this data come directly from the back, but, in order to show something, I use a little function to calculate current solde and variation
}

export const fetchRepartition = () => {
    return {
        labels: ['BTC - Bitcoin', 'AMZN - Amazon stock', 'NVDA - NVIDIA', 'GOOGL - Google stcok', 'ETH - Etherum', 'Other'],
        datasets: [
            {
                label: '',
                data: [40, 20, 10, 15, 7, 3],
                backgroundColor: ['rgba(93, 91, 228, 1)', 'rgba(93, 91, 228, 0.8)', 'rgba(93, 91, 228, 0.6)', 'rgba(93, 91, 228, 0.4)', 'rgba(93, 91, 228, 0.2)', 'rgba(93, 91, 228, 0.1)'],
                borderColor: 'rgb(28, 28, 30)',
                borderWidth: 10,
                position: 'right',
            }
        ]
    };
    // I don't have data for this, so I just write the data. But, we should get it from backend and transform them to use with chartjs
}