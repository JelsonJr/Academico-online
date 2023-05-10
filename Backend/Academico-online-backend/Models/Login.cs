using System.ComponentModel.DataAnnotations;

namespace Academico_online_backend.Models;

public class Login
{
    [Required]
    public string RA { get; set; }

    [Required]
    public string Senha { get; set; }
}
