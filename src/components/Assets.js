import React, { Component } from 'react'
import moment from 'moment'
import { fetchAssets } from '../services/assets'

import { Page, PageTitle } from "./generalStyle"
import { AssetsHead, AssetsTitle, AddAssetButton, AssetsTable, AssetsRow, AssertHeader, AssetData, AssetVariation, AssetLogo } from "./assetsStyled"

export default class Assets extends Component {
    state = { isLoading: true, assets: [] }

    componentDidMount() {
        this.getAssets();
    }

    getAssets = () => {
        const assets = fetchAssets();
        this.setState({ assets, isLoading: false })
    }
    render() {
        const { assets } = this.state;
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
        return (
            <Page>
                <PageTitle>Assets</PageTitle>
                <AssetsHead>
                    <AssetsTitle>Tracking of your assets</AssetsTitle>
                    <AddAssetButton onClick={()=>console.log('add asset')}>+</AddAssetButton>
                </AssetsHead>
                <div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dolor elit, commodo non condimentum non, consequat nec massa. Maecenas id sollicitudin tellus. Proin hendrerit aliquet ante sed facilisis. Vestibulum condimentum accumsan accumsan. Pellentesque auctor nibh ligula, et iaculis enim sollicitudin et. Sed vitae molestie felis. </p></div>
                <div>Search bar</div>
                <AssetsTable>
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
                    {showAssets}
                </AssetsTable>
            </Page>
        )
    }
}
