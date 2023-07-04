import React from "react";

import './MenuComponet.css'
import { TieredMenu } from 'primereact/tieredmenu';
import SVGMenu from "../../shared/icons/SVGMenu";

class MenuComponet extends React.Component {

    render() {
        const items = [
            {
               label:'Projetos',
            },
            {
               label:'Colaboradores',
            },
            {
               label:'Àrea de Trabalho',
            },
            {
               label:'Ponto',
            },
            {
               label:'Equipamentos',
            }
        ];
        return(
            <div className="logo-svg">
                <SVGMenu style={{ width: '100px' }}/>
        
            <div className="menu-container"> 
                 <TieredMenu id="tieredmenu" model={items} />
                 </div>
            </div>
        )
    }
}

export default (MenuComponet);