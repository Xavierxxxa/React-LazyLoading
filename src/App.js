import './App.css';


import { lazy, Suspense } from 'react';


const Slogan = lazy(()=> import('./code_splitting/Slogan'));
const Rodape = lazy(()=> import('./code_splitting/Rodape'));
const Imagem = lazy(()=> import('./code_splitting/Imagem'));
const Clock = lazy(()=>import('./code_splitting/Clock'));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Suspense 
        fallback={<h1>Carregando relógio</h1>} >
          <Clock />
        </Suspense>

        <Suspense
        fallback={<img src="https://images.pexels.com/photos/399973/pexels-photo-399973.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" height="100px"/> } >
          <Imagem />
        </Suspense>

        <Suspense 
        fallback={<p>Carregando...Um momento!</p>} >
        <Slogan />
        </Suspense>

        <Suspense
        fallback={<p>Carregando rodapé... Aguarde um momento!!!</p>}
        >
          <Rodape />
        </Suspense>

      </header>
    </div>
  );
}

export default App;
