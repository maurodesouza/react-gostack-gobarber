import reactotron from 'reactotron-react-js';

if (process.env.NODE_ENV === 'development') {
  const tron = reactotron.configure().connect();

  console.tron = tron;

  tron.clear();
}
