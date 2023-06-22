import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'
import Botao from '../Botao'

const Formulario = () => {
    const times = [
        'Programação',
        'Front-End',
        'Data Sciene',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
      ]

      const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log('Form foi submetido')
      }


    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preecha os dados criar o card do colaborador</h2>

                <CampoTexto obrigatorio={true} text='Nome' campo='Digite o seu nome'/>
                <CampoTexto obrigatorio={true} text='Cargo' campo='Digite o seu cargo'/>
                <CampoTexto text='Imagem' campo='Informe o endereço da imagem'/>
                <ListaSuspensa obrigatorio={true} label="Time" itens={times}/>
                <Botao > 
                    Criar Card 
                </Botao>
            </form>
        </section>
        
    )
}

export default Formulario
