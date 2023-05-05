import { ValidationError } from "yup";

class ErrorValidator {
    private error: unknown;

    constructor(error: unknown) {
        this.error = error;
    }

    public devolveErroTratado(showToast: Function) {
        if(this.error instanceof ValidationError)
            return showToast({ message: this.error.message, status: "error" });

        return showToast({ message: "Erro!", status: "error" });;
    }
}

export default ErrorValidator;