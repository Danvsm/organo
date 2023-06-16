import Banner from './componentes/Banner/Banner';
import CampoTexto from './componentes/CampoTexto';

function App() {
  return (
    <div className="App">
      <Banner/>
      <CampoTexto text='Nome' campo='Digite o seu nome'/>
      <CampoTexto text='Cargo' campo='Digite o seu cargo'/>
      <CampoTexto text='Imagem' campo='Informe o endereço da imagem'/>
      <CampoTexto text='Time' campo=''/>
  
    </div>
  );
}

export default App;
