import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import api from '../../services/api';
import './styles.css';


function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [cidade, setCidade] = useState('');
  const [uf, setUf] = useState('');

  const history = useHistory();

  async function gerenciarCadastro(e) {
    e.preventDefault();

    const data = {
      nome,
      email,
      whatsapp,
      cidade,
      uf,
    };

    try {
      const response = await api.post('ongs', data);

      alert(`Seu ID de acesso: ${response.data.id}`);
      history.push('/');
    } catch (err) {
      alert('Erro no cadastro, tente novamente.');
    }
  }

  return (
    <div className='cadastro-container'>
      <div className='content'>
        <section>
          <img src={logoImg} alt='Be The Hero' />
          <h1>Novo cadastro</h1>
          <p>Faça o cadastro da sua ONG e ajude pessoas de todo o Brasil a contribuir com suas atividades.</p>

          <Link className='redirect-link' to='/'>
            <FiArrowLeft size={22} color='#db2745' />
            Voltar para o início
          </Link>
        </section>

        <form onSubmit={gerenciarCadastro}>
          <input
            value={nome}
            onChange={e => setNome(e.target.value)}
            placeholder='Nome da ONG'
          />
          <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            type='email'
            placeholder='E-mail'
          />
          <input
            value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)}
            placeholder='Whatsapp'
          />
          <div className="input-group">
            <input
              value={cidade}
              onChange={e => setCidade(e.target.value)}
              placeholder='Cidade'
            />
            <input
              value={uf}
              onChange={e => setUf(e.target.value)}
              placeholder='UF'
              style={{ width: 70 }}
            />
          </div>

          <button className='button' type='submit'>Cadastrar</button>
        </form>
      </div>
    </div>
  );
}

export default Cadastro;
