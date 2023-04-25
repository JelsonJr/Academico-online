namespace Academico_online_backend.Models;

public class Endereco
{
    public string CEP { get; set; }

    public string UF { get; set; }

    public string Cidade { get; set; }

    public string Bairro { get; set; }
    public string Rua { get; set; }

    //Fazer um ENUM com opções limitadas
    public string Complemento {  get; set; }

    public string Numero { get; set; }
}
