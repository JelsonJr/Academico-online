import ErrorValidator from 'components/middlewares/ErrorValidator';
import * as Yup from 'yup';

const formUserLogin ={
  ra: Yup.string().length(8, 'RA inválido').matches(/[0-9]/).required('O campo "RA" é obrigatório'),
  // modificar mensagem, deixar essas mensagens apenas para o cadastro, no caso do login deixar uma mensagem mais generica
  senha: Yup.string()
    .matches(/[A-Z]/, 'A senha deve conter pelo menos uma letra maiúscula')
    .matches(/[a-z]/, 'A senha deve conter pelo menos uma letra minúscula')
    .matches(/[0-9]/, 'A senha deve conter pelo menos um número')
    .matches(/[!@#$%^&*(),.?":{}|<>]/, 'A senha deve conter pelo menos um caractere especial')
    .min(8, 'O tamanho mínimo para a senha é de 8 caracteres')
    .required("O campo 'Senha' é obrigatório")
};

const validaRA = async (ra: string, showToast: Function) => {
  try {
    if(ra.trim() === '') return; 

    await formUserLogin.ra.validate(ra);
  } catch(erro) {
    new ErrorValidator(erro).devolveErroTratado(showToast);
  }
}

const validaSenha = async (senha: string, showToast: Function) =>  {
  try {
    if(senha.trim() === '') return;

    await formUserLogin.senha.validate(senha);
  } catch(erro) {
    new ErrorValidator(erro).devolveErroTratado(showToast);
  }
}

export { validaRA, validaSenha }