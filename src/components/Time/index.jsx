/* eslint-disable react/prop-types */
import { Card } from "../Card"
import "./Time.css"

export const Time = (props) => {

  const estilos = { backgroundColor: props.corSecundaria}

  return(
    props.colaboradores.length > 0 && <section className="time" style={estilos}>
      <h3 style={{ borderColor: props.corPrimaria}} >{props.nome}</h3>
      <div className="colaboradores">
        {props.colaboradores.map(colaborador => <Card key={colaborador} nome={colaborador.nome} cargo={colaborador.cargo} img={colaborador.imagem} corPrimaria={props.corPrimaria}/>)}
      </div>
    </section>
  )
}

