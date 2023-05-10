import { assets } from "components/assets/assets";
import UseWindowSize from "components/hooks/useWindowSize";
import styles from "../styles/LoginPage.module.scss";
import { useManagementStore } from "components/store/management/managementStore";
import { TextField } from "@mui/material";
import { FaUserCheck } from "react-icons/fa";
import Link from "next/link";
import { validaRA, validaSenha } from "components/modules/schemas";
import { FormEvent, useCallback, useContext } from "react";
import { ToastContext } from "components/context/ToastContext";
import { login } from "components/services/ApiService";
import { toast } from "react-toastify";

export default function LoginPage() {
  const form = useManagementStore((s) => s.form);
  const { showToast } = useContext(ToastContext);
  const size = UseWindowSize();

  const handleClick = useCallback(async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if(!form.ra || !form.senha) {
      return toast("Campos obrigatórios não preenchidos.", { type: "error"});;
    }

    const data = await login({ RA: form.ra, Senha: form.senha });
    
    data ? toast(data.mensagem, { type: "success"})
      : toast("Não foi possível realizar o login.", { type: "error"});

  }, [form]);

  return (
    <section className="w-full min-h-[100vh] flex items-center">
      {size.width > 850 ? (
        <div className="bg-[#314A73] min-h-[100vh] w-2/5 flex flex-col items-center justify-center">
          <img
            className={`w-full max-w-[330px]`}
            src={assets.logoUEPGAzul}
            alt="Logo UEPG"
          />
          <p className="w-[80%] mt-5 text-[#fff] text-center">
            A instituição que, diferentemente de uma ruptura com o passado,{" "}
            <strong className="text-[#29AFE5]">avança</strong> a partir de suas{" "}
            <strong className="text-[#29AFE5]">conquistas</strong>.
          </p>
        </div>
      ) : (
        <div className={styles.logoMobile}>
          <img
            className={`w-full max-w-[230px]`}
            src={assets.logoUEPG}
            alt="Logo UEPG"
          />
        </div>
      )}
      <div
        className={`${
          size.width > 850 ? "w-3/5" : "w-full"
        } flex flex-col items-center justify-center`}
      >
        <div className="msm:w-1/2 w-[90%] space-y-3">
          <div className="flex flex-col items-center justify-center mb-10">
            <FaUserCheck className={styles.iconUser} />
            <h1 className="font-semibold text-[1.5rem] text-[#314A73]">
              Acadêmico Online
            </h1>
            <p className="text-center text-[0.9rem] text-grey">
              Acesso ao sistema Acadêmico Online.
            </p>
          </div>
          <form className={styles.form} onSubmit={(e) => handleClick(e)}>
            <TextField
              id="outlined-basic"
              label="RA"
              variant="outlined"
              type="number"
              value={form.ra}
              onChange={(e) =>
                useManagementStore.setState((s) => ({ ...s, form: { ...s.form, ra: (e.target.value)}}))
              }
              onBlur={() => validaRA(form?.ra, showToast)}
            />
            <TextField
              id="outlined-basic"
              label="Senha"
              variant="outlined"
              type="password"
              value={form.senha}
              onBlur={() => validaSenha(form?.senha, showToast)}
              onChange={(e) =>
                useManagementStore.setState((s) => ({ ...s, form: { ...s.form, senha: e.target.value}}))
              }
            />
            <Link
              className="ml-1 mt-[-10px] text-[0.9rem] text-end underline text-[#29AFE5]"
              href="https://www.google.com/"
            >
              Esqueceu a senha?
            </Link>
            <div className="w-full">
              <button type="submit" className={styles.btnLogin}>Login</button>
            </div>
          </form>
        </div>

        <div className="mt-[2rem]">
          <span className="text-grey text-[0.9rem]">
            Não é matriculado(a)?
            <Link
              className="ml-1 font-semibold text-[#29AFE5]"
              href="https://www.google.com/"
            >
              Matricule-se.
            </Link>
          </span>
        </div>
      </div>
    </section>
  );
}
