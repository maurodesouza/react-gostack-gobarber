import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    hr {
      border: 0;
      height: 1px;
      margin: 10px 0 20px;
      background: rgba(255, 255, 255, 0.2);
    }

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 5px;
      height: 44px;
      padding: 0 15px;
      margin-bottom: 10px;
      color: #fff;

      &::placeholder {
        color: #fff;
      }

      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus,
      &:-webkit-autofill:active {
        box-shadow: 0 0 0 30px rgba(0, 0, 0, 0.01) inset !important;
        transition: background-color 5000s ease-in-out 0s;
        -webkit-text-fill-color: #fff !important;
      }
    }

    button {
      border: 0;
      border-radius: 5px;
      height: 44px;
      background: #3b9eff;
      color: #fff;
      font-size: 16px;
      font-weight: bold;
      letter-spacing: 1.5px;
      margin-top: 5px;
      transition: background 0.3s;

      &:hover {
        background: ${darken(0.08, '#3b9eff')};
      }
    }
  }

  button {
    width: 100%;
    border: 0;
    border-radius: 5px;
    height: 44px;
    background: #f64c75;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 1.5px;
    margin-top: 10px;
    transition: background 0.3s;

    &:hover {
      background: ${darken(0.08, '#f64c75')};
    }
  }
`;
