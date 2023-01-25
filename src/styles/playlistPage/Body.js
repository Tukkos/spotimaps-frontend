import styled from 'styled-components';

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  width: 80vw;
  height: 100vh;

  form {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
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

  button {
    width: 300px;
    height: 45px;
    color: #F0F7F4;
    background-color: #F5C6A2;
    border: 0;
    border-radius: 5px;
    margin-bottom: 25px;

    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;

export default Body;
