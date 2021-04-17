import React, { Component } from 'react'
import moment from 'moment'

import { fetchSuggestion, addAsset } from '../services/assets'

import { MaterialIcon } from "./generalStyle"
import { AddAssetPage, AddAssetContainer, AddAssetHeader, Title, CloseAddAsset, AddAssetForm, AddAssetInputContainer, AddAssetLabel, AddAssetInput, HelpMessage, Asset, AssetContent, AssetId, AssetLogo, AssetButton, DateAndQuantity, AddAssetButton } from './addAssetStyled'

export default class AddAsset extends Component {
    state = {
        nameSearch: '',
        formNotValid: false,
        sendError: false,
        suggestionsName: [],
        selectedAsset: null,
        date: moment().format('YYYY-MM-DD'),
        quantity: '',
        buyPrice: ''
    }

    getSuggestion = () => {
        const { nameSearch } = this.state;
        const suggestionsName = fetchSuggestion(nameSearch);
        this.setState({ suggestionsName });
    }

    changeValue = (inputName, value) => this.setState({ [inputName]: value }, () => (inputName === "nameSearch") && this.getSuggestion())

    selectAsset = (assetId) => {
        const { suggestionsName } = this.state;
        const selectedAsset = suggestionsName.find(({ id }) => id === assetId)
        this.setState({ selectedAsset, suggestionsName: [], nameSearch: '' })
    }

    removeSelectedAsset = () => {
        this.setState({ selectedAsset: null })
    }

    isFormValid = () => {
        const { selectedAsset, date, quantity, buyPrice } = this.state;
        return selectedAsset && date && quantity && buyPrice
    }

    addAsset = async () => {
        if (this.isFormValid()) {
            const { selectedAsset, date, quantity, buyPrice } = this.state;
            this.setState({ isLoading: true })
            const addedAsset = await addAsset({...selectedAsset, date, quantity, buyPrice});
            if (addedAsset) {
                this.props.history.push({
                    pathname: '/assets',
                    state: { newAsset: addedAsset }});
                    // For this exercise, in order to get the new asset in assets page, I send it with the history push, but, with a backend, this new asset shouuld be get with others asset from the backend
            } else {
                this.setState({sendError: true})
            }
        } else {
            this.setState({ formNotValid: true })
        }
    }


    render() {
        const { formNotValid, nameSearch, suggestionsName, selectedAsset, date, quantity, buyPrice } = this.state;
        const showSuggestion = suggestionsName.map(({ id, name, logo }) =>
            <Asset key={id}>
                <AssetContent><AssetLogo src={logo} /><AssetId>{id}</AssetId><span>{name}</span></AssetContent>
                <AssetButton onClick={() => this.selectAsset(id)}>Select</AssetButton>
            </Asset>);
        const showAssetSelected = (selectedAsset &&
            <Asset>
                <AssetContent><AssetLogo src={selectedAsset.logo} /><AssetId>{selectedAsset.id}</AssetId><span>{selectedAsset.name}</span></AssetContent>
                <AssetButton onClick={this.removeSelectedAsset}><MaterialIcon>&#xe5cd;</MaterialIcon></AssetButton>
            </Asset>)
        const assetSearch = <div>
            {(nameSearch && !suggestionsName.length && 'There is no asset corresponding')
                || (nameSearch && suggestionsName.length && showSuggestion)}</div>
        return (
            <AddAssetPage>
                <AddAssetContainer>
                    <AddAssetHeader>
                        <Title>Add an asset</Title>
                        <CloseAddAsset to="/assets"><MaterialIcon>&#xe5cd;</MaterialIcon></CloseAddAsset>
                    </AddAssetHeader>
                    <AddAssetForm>
                        <div>
                            <AddAssetInputContainer>
                                <AddAssetLabel htmlFor="search-asset">Search for an asset to add</AddAssetLabel>
                                <AddAssetInput id="search-asset" type="text" disabled={selectedAsset} placeholder='Search' value={nameSearch} isError={formNotValid && !selectedAsset} onChange={({ target: { value } }) => this.changeValue('nameSearch', value)} list={suggestionsName} />
                            </AddAssetInputContainer>
                            {(selectedAsset && showAssetSelected) || assetSearch}
                            <DateAndQuantity>
                                <AddAssetInputContainer isMidSize="true">
                                    <AddAssetLabel htmlFor="date">Entry date</AddAssetLabel>
                                    <AddAssetInput id="date" type="date" value={date} isError={formNotValid && !date} onChange={({ target: { value } }) => this.changeValue('date', value)} />
                                    <HelpMessage isError={formNotValid && !date}>Please add an entry date to the asset</HelpMessage>
                                </AddAssetInputContainer>
                                <AddAssetInputContainer isMidSize="true">
                                    <AddAssetLabel htmlFor="quantity">Quantity</AddAssetLabel>
                                    <AddAssetInput id="quantity" type="number" min="1" value={quantity} isError={formNotValid && !quantity} onChange={({ target: { value } }) => this.changeValue('quantity', value)} />
                                    <HelpMessage isError={formNotValid && !quantity}>Please add an quantity to the asset</HelpMessage>
                                </AddAssetInputContainer>
                            </DateAndQuantity>
                            <AddAssetInputContainer>
                                <AddAssetLabel htmlFor="buy-price">Buy Price</AddAssetLabel>
                                <AddAssetInput id="buy-price" type="number" min="1" value={buyPrice} isError={formNotValid && !buyPrice} onChange={({ target: { value } }) => this.changeValue('buyPrice', value)} />
                                <HelpMessage isError={formNotValid && !buyPrice}>Please add a buy price to the asset</HelpMessage>
                            </AddAssetInputContainer>
                            <div><AddAssetButton type="submit" onClick={this.addAsset}>Add asset</AddAssetButton></div>
                        </div>
                    </AddAssetForm>
                </AddAssetContainer>
            </AddAssetPage>
        )
    }
}
