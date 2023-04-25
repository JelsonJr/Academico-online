using System.ComponentModel.DataAnnotations;

namespace Academico_online_backend.Models;

public class Usuario
{
    [Required]
    public string Registro { get; set; }
    public string Nacionalidade { get; set; }
    public string Nome {  get; set; }
    public char Sexo {  get; set; }
    
    [Required]
    public string Senha { get; set; }

    public string Email { get; set; }

    public string Telefone { get; set; }

    public CPF CPF { get; set; }

    public Endereco Endereco { get; set; }

}
