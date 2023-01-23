import styled from 'styled-components';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';

import { logIn } from '../../services/authApi';
import Button from '../../styles/Button';
import Title from '../../styles/Title';

export default function Login({ setLoginInfos }) {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  function login(e) {
    e.preventDefault();

    if (userEmail === '') {
      alert('Favor inserir seu email.');
    }
    if (userPassword === '') {
      alert('Favor escolher uma senha.');
    } else {
      setLoading(false);

      const login = {
        email: userEmail,
        password: userPassword
      };

      logIn(login).then((res) => {
        setLoginInfos([res.data]);
        console.log(res.data);
        navigate('/hoje', res.data);
      });

      logIn(login).catch(() => {
        alert('Falha ao fazer login, favor tentar novamente.');
        setLoading(true);
      });
    }
  }

  return (
    <LoginScreen >
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
    </LoginScreen>
  );
}

const LoginScreen = styled.div`
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
