import "./CampoTexto.css"

export const CampoTexto = (props) => {
  console.log(props)

  const aoDigitado = (e) =>{
   props.aoAlterado(e.target.value)
  }
 
  return (
    <>
      <div className="campoTexto">
        <label>{props.label}</label>
        <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder}/>
      </div>
    </> 
  );
};
