// import React, { Component } from 'react';

// class ItemListaComp extends Component{

//     render(){
//         return(
//             <li className="item_comp" >
//                 <p>{this.props.nome}</p>
//                 <p>{this.props.idade}</p>
//                 <p>{this.props.altura}</p>
//             </li>
//         )
//     }
// }
// export default ItemListaComp;

import React from 'react';

const ItemListaComp = ({nome, idade, altura}) => {
    return(
        <li className="item_comp" >
            <p>nome</p>
            <p>idade</p>
            <p>altura</p>
        </li>
    )
}
export default ItemListaComp;