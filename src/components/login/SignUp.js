import styled from 'styled-components';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';

import { signUp } from '../../services/authApi';
import Title from '../../styles/Title';
import Button from '../../styles/Button';

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
    <SignUpScreen>
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
    </ SignUpScreen>
  );
}

const SignUpScreen = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  min-height: 667px;
  height: 100vh;
  min-width: 375px;
  width: 100vw;
  background-color: #f7944d;

  span{
    color: #F0F7F4;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  input {
    width: 300px;
    height: 45px;
    background-color: #F0F7F4;
    padding-left: 10px;
    padding-right: 10px;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    margin-bottom: 5px;

    font-size: 20px;

    ::-webkit-input-placeholder { /* WebKit, Blink, Edge */
        color: #d5d5d5;
    }
    :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
        color: #d5d5d5;
        opacity:  1;
    }
    ::-moz-placeholder { /* Mozilla Firefox 19+ */
        color: #d5d5d5;
        opacity:  1;
    }
    :-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: #d5d5d5;
    }
    ::-ms-input-placeholder { /* Microsoft Edge */
        color: #d5d5d5;
    }
    ::placeholder { /* Most modern browsers support this now. */
        color: #d5d5d5;
    }
  }
`;
