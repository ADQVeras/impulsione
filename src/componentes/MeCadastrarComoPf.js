import './MeCadastrarComoPf.css'


import { useState } from 'react';




const MeCadastrarComoPf = () => {

 
    const [tab, setTab] = useState(0)
  
  


  return (
    <div className='tabs'>
      <div className='tabs-lista'> 
        <div className='tabs-btn' onClick={() => {setTab(0)}}>
                PESSOAL {'>'}
        </div>

        <div className='tabs-btn' onClick={() => {setTab(1)}}>
                ENDEREÇO {'>'}           
        </div>

        <div className='tabs-btn' onClick={() => {setTab(2)}}>
                CADASTRO
        </div>
      </div>

            <div className='tabs-conteudo'>
              <div className='conteudo' hidden={tab!=0}>
                <p>Conteudo 1</p>
              </div>

              <div className='conteudo' hidden={tab!=1}>
                <p>Conteudo 2</p>
              </div>

              <div className='conteudo' hidden={tab!=2}>
                <p>Conteudo 3</p>
              </div>
            </div>
      </div>
      

      
        
    
  )
}

export default MeCadastrarComoPf