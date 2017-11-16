import React, { Component } from 'react';
import ItemListaComp from './lista-comp/item.lista';
import * as SERVICE from '../../Services/Pessoas';

class Lista extends Component{
	constructor(props){
		super(props);
		this.state = {
			pessoas: SERVICE.nomes
		};
	}

	render(){
		console.log(this.state.pessoas);
		return(
			<div className="minhalista">
				<h1>Teste</h1>
				{ this.state.pessoas.map((pessoa, index) => {
					return(
						<ItemListaComp
							key = {index} 
							nome = {pessoa.nome}
							idade = {pessoa.idade}
							altura = {pessoa.altura}
						/>
					)
				})

				}
			</div>
		);
	}
}
export default Lista;