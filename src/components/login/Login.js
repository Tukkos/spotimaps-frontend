import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';

import { loginPost } from '../../services/authApi';

import LoginContext from '../../contexts/LoginContext';

import Title from '../../styles/authPage/Title';
import AuthScreen from '../../styles/authPage/AuthScreens';

export default function Login() {
  const { setLoginInfos } = useContext(LoginContext);

  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  async function login(e) {
    e.preventDefault();

    if (userEmail === '') {
      alert('Favor inserir seu email.');
    }
    if (userPassword === '') {
      alert('Favor escolher uma senha.');
    } else {
      setLoading(false);

      try {
        const userInfo = await loginPost({ userEmail, userPassword });
        setLoginInfos(userInfo.data);
        setLoading(true);
        alert('Login feito com sucesso!');
        navigate('/generate');
      } catch (error) {
        setLoading(true);
        alert('Não foi possível fazer o login!');
      }
    }
  }

  return (
    <AuthScreen >
      <Title > SpotiMaps </Title >
      <form onSubmit={login} >
        <input
          type='email'
          value={userEmail}
          placeholder='email'
          onChange={e => setUserEmail(e.target.value)}
          disabled = {(loading) ? '' : 'disabled'} />

        <input
          type='password'
          value={userPassword}
          placeholder='senha'
          onChange={e => setUserPassword(e.target.value)}
          disabled = {(loading) ? '' : 'disabled'} />
      
        {(loading) ? <button type="submit" >Fazer login</button>
          : <button ><ThreeDots color="#ffffff" height={40} width={40} /></button>}
      </form>
      <Link to="/signUp"><span className="link">Não tem uma conta? Cadastre-se!</span></Link >
    </AuthScreen>
  );
}
