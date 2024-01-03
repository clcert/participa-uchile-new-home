import React from 'react';
import logoParticipaUchile from '../../assets/images/logolight.svg'

const Home = () => {
  return (
    <div className='body-center container'>
      <div className='columns is-vcentered'>
        <div className='column has-text-centered'>
          <div className='block'>
            <p className='has-text-white is-size-1 has-text-weight-medium'>SISTEMA DE VOTACIÓN Y CONSULTAS</p>
          </div>
          <div className='block'>
            <img src={ logoParticipaUchile } className='logo-white' alt='Participa UChile Logo' /> 
          </div>
        </div>
        <div className='column'>
          <div className='box-content'>
            <div className='block'>
              <h1>Elección en Curso</h1>
            </div>
            <div className='block'>
              <p>Aquí pondría mi votación actual... <strong>¡Si tuviera una!</strong></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
