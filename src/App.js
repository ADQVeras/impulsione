
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, NavLink } from 'react-router-dom';
import './App.css';

import LoginForm from './componentes/LoginForm';

import NavButtons from './componentes/navbuttons/NavButtons';
import MeCadastrarComoPf from './componentes/MeCadastrarComoPf';
import CadastrarMeuNegocio from './componentes/CadastrarMeuNegocio';





function App() {



  const [rota, SetRota] = useState('')

  const handleClick = (rota) => {
    SetRota(rota)
  }



  return (
    <div className="App">

      <div className='home'>
        <div className='primeira-coluna'>
          <div className='home-titulo'>
            <h1>Impulsione 
              <br/><div className='home-titulo-byCrefisa'>by Crefisa</div>
            </h1>
          </div>

          <div className='home-subtitulo'>
            <h2 >    Desenvolver pessoas
              <br/> Impulsionar negócios
              <br/> Conectar e criar soluções
            </h2>
          </div>

        {(() => {
          switch (rota){
            case 'LoginForm':
              return <LoginForm handleClick={handleClick}/>
            case 'MeCadastrarComoPf':
              return <MeCadastrarComoPf handleClick={handleClick}/>
            case 'CadastrarMeuNegocio':
              return <CadastrarMeuNegocio handleClick={handleClick}/>
            default:
              return null
          }
        })}
 
        <BrowserRouter>
        <NavButtons/>
        
        <Routes>
          <Route path='/loginForm' element={<LoginForm/>}/>
          <Route path='/meCadastrarComoPf' element={<MeCadastrarComoPf/>}/>
          <Route path='/cadastrarMeuNegocio' element={<CadastrarMeuNegocio/>}/>
          
        </Routes>
        </BrowserRouter>    
        </div>
      
      
      </div>
      

      
    </div>
  );
}

export default App;
