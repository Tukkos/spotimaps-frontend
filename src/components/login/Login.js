import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';

import { logIn } from '../../services/authApi';
import Button from '../../styles/Button';
import Title from '../../styles/authPage/Title';

import AuthScreen from '../../styles/authPage/AuthScreens';

export default function Login({ setLoginInfos }) {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  // function login(e) {
  //   e.preventDefault();

  //   if (userEmail === '') {
  //     alert('Favor inserir seu email.');
  //   }
  //   if (userPassword === '') {
  //     alert('Favor escolher uma senha.');
  //   } else {
  //     setLoading(false);

  //     const login = {
  //       email: userEmail,
  //       password: userPassword
  //     };

  //     logIn(login).then((res) => {
  //       setLoginInfos([res.data]);
  //       navigate('/generate', res.data);
  //     });

  //     logIn(login).catch(() => {
  //       alert('Falha ao fazer login, favor tentar novamente.');
  //       setLoading(true);
  //     });
  //   }
  // }

  function login(e) {
    e.preventDefault();
    navigate('/generate', userEmail);
  }

  return (
    <AuthScreen >
      <Title > SpotiMaps </Title >
      <form onSubmit={login} className='form'>
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
      
        {(loading) ? <Button type="submit" className="button">Fazer login</Button>
          : <Button className="button"><ThreeDots color="#ffffff" height={40} width={40} /></Button>}
      </form>
      <Link to="/signUp"><span className="link">Não tem uma conta? Cadastre-se!</span></Link >
    </AuthScreen>
  );
}
