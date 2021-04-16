import assetsData from '../data/page-2-assets.json';

const filterAssets = (assets, filter) => {
    const lowerFilter = filter.toLowerCase();
    return assets.filter(({ id, name }) => {
        const lowerId = id.toLowerCase();
        const lowerName = name.toLowerCase();
        return lowerId.includes(lowerFilter) || lowerName.includes(lowerFilter)
    })
}

export const fetchAssets = (filter) => {
    const assets = assetsData;
    const filteredAssets = filterAssets(assets, filter)
    return filteredAssets;
}