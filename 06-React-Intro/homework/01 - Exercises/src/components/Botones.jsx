import React, { useRef } from "react";

/* CONSTRUCTOR CON FUNCTION
export default function Botones({m1 , m2}){
    // let {m1, m2} = alerts;

    return (
        <div>
            <button onClick={() => alert({m1})}>Módulo 1</button>
            <button onClick={() => alert({m2})}>Módulo 2</button>
        </div>
    )
}
*/
/* NO FUNCIONA
*/
class Botones extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const {alerts} = this.props;
        return (
            <div>
                <button onClick={() => alert(alerts.m1)}>Módulo 1</button>
                <button onClick={() => alert(alerts.m2)}>Módulo 2</button>
            </div>
        )
    }
}
export default Botones;
