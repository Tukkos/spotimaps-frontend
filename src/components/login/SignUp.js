import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';

import Title from '../../styles/authPage/Title';
import AuthScreen from '../../styles/authPage/AuthScreens';
import { signUp } from '../../services/authApi';

export default function SignUp() {
  const [loading, setLoading] = useState(true);

  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  async function register(e) {
    e.preventDefault();

    if (userEmail === '') {
      alert('Favor inserir seu email.');
    }
    if (userPassword === '') {
      alert('Favor escolher uma senha.');
    }
    if (userPassword != passwordConfirmation) {
      alert('As senhas não são iguais.');
    } else {
      setLoading(false);

      try {
        await signUp({ userEmail, userPassword, passwordConfirmation });
        setLoading(true);
        alert('Inscrito com sucesso! Por favor, faça login.');
      } catch (error) {
        setLoading(true);
        alert('Não foi possível fazer o cadastro!');
      }
    }
  }

  return (
    <AuthScreen>
      <Title > SpotiMaps </Title >
      <form onSubmit={register} >
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

        <input
          type='password'
          value={passwordConfirmation}
          placeholder='confirme a senha'
          onChange={e => setPasswordConfirmation(e.target.value)}
          disabled = {(loading) ? '' : 'disabled'} />

        {(loading) ? <button type="submit" >Cadastrar</button>
          : <button ><ThreeDots color="#ffffff" height={40} width={40} /></button>}
      </form>
      <Link to="/"><span className="link">Já tem uma conta? Faça login!</span></Link >
    </ AuthScreen>
  );
}
