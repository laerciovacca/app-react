import React from 'react';
const ItemListaComp = ({avatar,nome, idade, altura}) => {
    return(
        <li className="item_comp">
            <div className="item_foto">
                <img src={avatar} alt="teste"/>
            </div>
            <div className="item_info">
                <p className="txt titulo">{nome}</p>
                <p className="txt titulo02">{idade}</p>
                <p className="txt titulo03">{altura}</p>
            </div>
        </li>
    )
}
export default ItemListaComp;