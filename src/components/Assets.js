import React, { Component } from 'react'
import moment from 'moment'
import { fetchAssets } from '../services/assets'

import { Page, PageTitle, MaterialIcon } from "./generalStyle"
import { AssetsHead, AssetsTitle, AddAssetButton, Search, SearchIcon, SearchBar, AssetsTable, AssetsRow, AssertHeader, AssetData, AssetVariation, AssetLogo } from "./assetsStyled"

export default class Assets extends Component {
    state = {
        isLoading: true,
        assets: [],
        search: ''
    }

    componentDidMount() {
        this.getAssets();
    }

    getAssets = () => {
        const { search } = this.state;
        const assets = fetchAssets(search);
        this.setState({ assets, isLoading: false })
    }

    searchAssets = (value) => {
        this.setState({ search: value });
    }

    render() {
        const { assets, search } = this.state;
        const showAssets = assets.map(({ id, name, quantity, entry_date, buy_price, actual_price, variation, logo }) => {
            return <AssetsRow key={id}>
                <AssetData><AssetLogo src={logo} /></AssetData>
                <AssetData><p>{id}</p></AssetData>
                <AssetData><p>{name}</p></AssetData>
                <AssetData><p>{quantity}</p></AssetData>
                <AssetData><p>{moment(entry_date).format("DD/MM/YY")}</p></AssetData>
                <AssetData><p>{buy_price}</p></AssetData>
                <AssetData><p>{actual_price}</p></AssetData>
                <AssetData><AssetVariation isPositive={variation.charAt(0) === "+"}>{variation}</AssetVariation></AssetData>
            </AssetsRow>
        })
        const keyPress = (e) => {
            if (e.key === 'Enter') {
                this.getAssets();
            }
        }
        return (
            <Page>
                <PageTitle>Assets</PageTitle>
                <AssetsHead>
                    <AssetsTitle>Tracking of your assets</AssetsTitle>
                    <AddAssetButton onClick={() => console.log('add asset')}>+</AddAssetButton>
                </AssetsHead>
                <div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dolor elit, commodo non condimentum non, consequat nec massa. Maecenas id sollicitudin tellus. Proin hendrerit aliquet ante sed facilisis. Vestibulum condimentum accumsan accumsan. Pellentesque auctor nibh ligula, et iaculis enim sollicitudin et. Sed vitae molestie felis. </p></div>
                <Search>
                    <SearchIcon><MaterialIcon>&#xe8b6;</MaterialIcon></SearchIcon>
                    <SearchBar value={search} placeholder={"Search"} onKeyPress={(e) => keyPress(e)} onChange={({ target: { value } }) => this.searchAssets(value)} />
                </Search>
                <AssetsTable>
                    <thead>
                        <AssetsRow>
                            <AssertHeader></AssertHeader>
                            <AssertHeader>Id</AssertHeader>
                            <AssertHeader>Name</AssertHeader>
                            <AssertHeader>Quantity</AssertHeader>
                            <AssertHeader>Entry date</AssertHeader>
                            <AssertHeader>Buy price</AssertHeader>
                            <AssertHeader>Actual price</AssertHeader>
                            <AssertHeader>Variation</AssertHeader>
                        </AssetsRow>
                    </thead>
                    <tbody>
                        {showAssets}
                    </tbody>
                </AssetsTable>
            </Page>
        )
    }
}
