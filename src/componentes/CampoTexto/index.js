import './CampoTexto.css'
const CampoTexto = function 

CampoText (props)  {
    
    return (
        <div className="campo-texto">
            <label>{props.text}</label>
            <input placeholder={props.campo}/>
        </div>
    )

}

export default CampoTexto