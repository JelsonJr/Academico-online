namespace Academico_online_backend.Models;

public class CPF
{
    public string _CPF { get; private set; }

    //VALIDAÇÃO DO CPF
    public CPF(string cpf)
    {
        this._CPF = cpf;
    }
}
