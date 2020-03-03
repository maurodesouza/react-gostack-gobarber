import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto 0;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    align-self: center;
    align-items: center;

    button {
      border: 0;
      background: none;
    }

    strong {
      color: #fff;
      font-size: 24px;
      margin: 0 15px;
    }
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
    margin-top: 30px;
  }
`;

export const Time = styled.li`
  background: #fff;
  border-radius: 5px;
  padding: 20px;

  opacity: ${({ past }) => (past ? 0.6 : 1)};

  strong {
    display: block;
    font-size: 20px;
    font-weight: normal;
    color: ${({ available }) => (available ? '#999' : '#7159c1')};
  }

  span {
    display: block;
    margin-top: 3px;
    color: ${({ available }) => (available ? '#999' : '#666')};
  }
`;
