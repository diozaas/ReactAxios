import React, { Component } from 'react'
// import axios from 'axios'
import CardProduk from './CardProduk'
import API from '../axios/Api'

export class DaftarProduk extends Component{
	
	state = {
		produk:[]
	}

	async componentDidMount(){
		// await axios.get("http://localhost/toko_api/ambildata.php", { crossdomain: true })
		await API.get("ambildata.php", { crossdomain: true })
		.then(response=>this.setState({
			produk:response.data
		}))

		console.log(this.state);
	}

	render() {
		const renderData = this.state.produk.map(produk => {
			return (
				<CardProduk produk={produk} key={produk.id}/>
			)
		})

		return (
			<div className="container">
				<div className="row">
					{renderData}
				</div>
			</div>
		)
	}
}

export default DaftarProduk