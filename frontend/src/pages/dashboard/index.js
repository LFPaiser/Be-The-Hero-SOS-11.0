import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogOut, FiTrash2 } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import api from '../../services/api';
import './styles.css';


function Dashboard() {
  const ongId = localStorage.getItem('ongId');
  const ongNome = localStorage.getItem('ongNome');

  const [atividades, setAtividades] = useState([]);
  const history = useHistory();

  useEffect(() => {
    api.get('poa', {
      headers: {
        Authorization: ongId
      }
    }).then(response => {
      setAtividades(response.data);
    })
  }, [ongId]);

  async function gerenciarRemocao(id) {
    try {
      await api.delete(`atividades/${id}`, {
        headers: {
          Authorization: ongId,
        }
      });

      setAtividades(atividades.filter(atividade => atividade.id !== id));
    } catch (err) {
      alert('Erro ao tentar remover essa atividade, tente novamente');
    }
  }

  function gerenciarLogoff() {
    localStorage.clear();
    history.push('/');
  }

  return (
    <div className="dashboard-container">
      <header>
        <img src={logoImg} alt='Be The Hero' />
        <span>Bem vinda, {ongNome}</span>

        <Link className='button' to='/atividades/nova'>
          Criar nova atividade
        </Link>

        <button onClick={gerenciarLogoff} type='button'>
          <FiLogOut size={20} color='#db2745' />
        </button>
      </header>

      <h1>Atividades em andamento</h1>
      <ul>
        {atividades.map(atividade => (
          <li key={atividade.id}>
            <strong>TÍTULO:</strong>
            <p>{atividade.titulo}</p>

            <strong>DESCRIÇÃO:</strong>
            <p>{atividade.descricao}</p>

            <strong>VALOR:</strong>
            <p>{Intl
              .NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
              .format(atividade.valor)}</p>

            <button onClick={() => gerenciarRemocao(atividade.id)} type='button'>
              <FiTrash2 size={18} color='#668' />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}


export default Dashboard;
