import moment from 'moment'
import soldeData from '../data/page-1-dashoard.json';

const areDatesSameMonth = (dates) => {
    const { from, to } = dates;
    return moment(from).month() === moment(to).month()
}

const formatSoldeData = (soldeData, dates) => {
    const { from, to } = dates;
    const filteredData = soldeData
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
    const data = soldeData;
    const formatedSoldeData = formatSoldeData(data, dates);
    return formatedSoldeData;
}