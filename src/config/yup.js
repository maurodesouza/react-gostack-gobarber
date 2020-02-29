import { setLocale } from 'yup';

export default setLocale({
  mixed: {
    required: '* Esse campo é obrigatório !',
  },
  string: {
    email: '* Insira um email válido !',
    min: '* No minimo 6 caracteres !',
  },
});
