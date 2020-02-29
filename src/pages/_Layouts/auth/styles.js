import styled from 'styled-components';

import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(-90deg, #7159c1, #ab59c1);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

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

    span {
      color: #fff;
      margin-bottom: 20px;
      align-self: flex-start;
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
        background: ${darken(0.1, '#3b9eff')};
      }
    }
  }

  a {
    display: block;
    color: #fff;
    margin-top: 15px;
    font-size: 16px;
    opacity: 0.8;
    transition: opacity 0.3s;

    &:hover {
      opacity: 1;
    }
  }
`;
