import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import api from '../../services/api';
import './styles.css';


function NovaAtividade() {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const history = useHistory();

  const ongId = localStorage.getItem('ongId');

  async function gerenciarNovaAtividade(e) {
    e.preventDefault();

    const data = {
      titulo,
      descricao,
      valor,
    };

    try {
      await api.post('/atividades/nova', data, {
        headers: {
          Authorization: ongId,
        }
      });

      history.push('/dashboard');
    } catch (err) {
      alert('Erro ao criar nova atividade, tente novamente');
    }
  }

  return (
    <div className='nova-container'>
      <div className='content'>
        <section>
          <img src={logoImg} alt='Be The Hero' />

          <h1>Nova atividade</h1>
          <p>Descreva o que está fazendo e um herói virá para ajudar.</p>

          <Link className='redirect-link' to='/dashboard'>
            <FiArrowLeft size={22} color='#db2745' />
            Voltar para a dashboard
          </Link>
        </section>

        <form onSubmit={gerenciarNovaAtividade} >
          <input
            value={titulo}
            onChange={e => setTitulo(e.target.value)}
            placeholder='Nome da atividade'
          />
          <textarea
            value={descricao}
            onChange={e => setDescricao(e.target.value)}
            placeholder='Descrição'
          />
          <input
            value={valor}
            onChange={e => setValor(e.target.value)}
            placeholder='Valor em Reais'
          />

          <button className='button' type='submit'>Criar atividade</button>
        </form>
      </div>
    </div>
  );
}


export default NovaAtividade;
