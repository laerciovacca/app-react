import React, { Component } from 'react';
import ItemListaComp from './lista-comp/item.lista';
import * as SERVICE from '../../Services/Pessoas';

class Lista extends Component{
	constructor(props){
		super(props);
		this.userArray = [];
		this.state = {
			users: [],
		};
	}


	componentWillMount(){
		SERVICE.listaUsers()
			.then(result => {
				let users = result.data;
				this.setState({
					users: users,
				})

				// console.log(this.state);
			})
			.catch(error => {
				console.error(error);
			});
	}

	render(){
		return(
			<div className="minhalista">
				<ul className="lista">
				{ 
					this.state.users.map((pessoa, index) => {
						return(
							<ItemListaComp
								key = {index}
								avatar = {pessoa.avatar_url} 
								nome = {pessoa.login}
								idade = {pessoa.id}
								altura = {pessoa.organizations_url}
							/>
						)
					})
				}
				</ul>
			</div>
		);
	}
}
export default Lista;