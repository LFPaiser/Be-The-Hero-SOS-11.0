import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiInfo } from 'react-icons/fi';
import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';
import api from '../../services/api';
import './styles.css';


function Logon() {
  const [id, setId] = useState('');
  const history = useHistory();

  async function gerenciarLogon(e) {
    e.preventDefault();

    try {
      const response = await api.post('sessoes', { id });

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongNome', response.data.nome);

      history.push('/dashboard');
    } catch (err) {
      alert('Falha no logon, tente novamente.');
    }
  }

  return (
    <div className='logon-container'>
      <section className='form'>
        <img src={logoImg} alt='Be The Hero' />

        <form onSubmit={gerenciarLogon}>
          <h1>Acesse a plataforma</h1>

          <input
            value={id}
            onChange={e => setId(e.target.value)}
            placeholder='Seu ID'
          />

          <button className='button' type='submit'>Entrar</button>

          <Link className='redirect-link' to='/cadastro'>
            <FiInfo size={16} color='#db2745' />
            Ainda não tenho cadastro
          </Link>
        </form>
      </section>

      <img src={heroesImg} alt='Heroes' />
    </div>
  )
}

export default Logon;
