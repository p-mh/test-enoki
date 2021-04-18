import assetsData from '../data/page-2-assets.json';
import assetsSuggestions from '../data/page-3-ajouter-un-asset.json'

const filterAssets = (assets, filter) => {
    const lowerFilter = filter.toLowerCase();
    return assets.filter(({ id, name }) => {
        const lowerId = id.toLowerCase();
        const lowerName = name.toLowerCase();
        return lowerId.includes(lowerFilter) || lowerName.includes(lowerFilter)
    })
}

export const fetchAssets = (filter) => {
    console.log(filter);
    const assets = assetsData;
    const filteredAssets = filterAssets(assets, filter)
    return filteredAssets;
}

export const fetchSuggestion = (search) => {
    const suggestions = assetsSuggestions;
    const filteredSuggestions = filterAssets(suggestions, search);
    return filteredSuggestions;
}

export const addAsset = (assetToAdd) => {
    const {logo, id, name, date, quantity, buyPrice} = assetToAdd;
    // Send asset to the backend. If succeed, send the return of the new asset to the add asset page. Else, return the error to the add asset page.
    // For this exemple, I will considere it always succeed !
    return {logo, id, name, entry_date: date, quantity, buy_price: buyPrice}
}