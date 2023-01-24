import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';

import { signUp } from '../../services/authApi';
import Title from '../../styles/authPage/Title';
import Button from '../../styles/Button';
import AuthScreen from '../../styles/authPage/AuthScreens';

export default function SignUp() {
  const [loading, setLoading] = useState(true);

  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userName, setUserName] = useState('');

  const navigate = useNavigate();

  function register(e) {
    e.preventDefault();

    if (userEmail === '') {
      alert('Favor inserir seu email.');
    }
    if (userPassword === '') {
      alert('Favor escolher uma senha.');
    }
    if (userName === '') {
      alert('Favor colocar como deseja ser chamado.');
    } else {
      setLoading(false);

      const userInfo = {
        email: userEmail,
        name: userName,
        password: userPassword
      };

      signUp(userInfo).then(() => {navigate('/', {});});
      signUp(userInfo).catch(() => {
        alert('Falha ao fazer cadastro, favor rever seus dados.');
        setLoading(true);
      });
    }
  }

  return (
    <AuthScreen>
      <Title > SpotiMaps </Title >
      <form onSubmit={register} className='form'>
        <input
          className='inputBar'
          type='email'
          value={userEmail}
          placeholder='email'
          onChange={e => setUserEmail(e.target.value)}
          disabled = {(loading) ? '' : 'disabled'} />

        <input
          className='inputBar'
          type='password'
          value={userPassword}
          placeholder='senha'
          onChange={e => setUserPassword(e.target.value)}
          disabled = {(loading) ? '' : 'disabled'} />

        <input
          className='inputBar'
          type='text'
          value={userName}
          placeholder='nome'
          onChange={e => setUserName(e.target.value)}
          disabled = {(loading) ? '' : 'disabled'} />

        {(loading) ? <Button type="submit" className="button">Cadastrar</Button>
          : <Button className="button"><ThreeDots color="#ffffff" height={40} width={40} /></Button>}
      </form>
      <Link to="/"><span className="link">Já tem uma conta? Faça login!</span></Link >
    </ AuthScreen>
  );
}
