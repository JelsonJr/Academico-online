import * as Yup from 'yup';

export const formUserLogin = Yup.object().shape({
  ra: Yup.string().min(8, 'RA inválido').required('O campo "RA" é obrigatório'),
  senha: Yup.string().required("O campo 'Senha' é obrigatório")
});