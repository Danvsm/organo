import './CampoTexto.css'

const CampoTexto =  (props) => {

    console.log(props)
    return (
        <div className="campo-texto">
            <label>
                {props.text}
            </label>
            <input required={props.obrigatorio} placeholder={props.campo}/>
        </div>
    )

}

export default CampoTexto