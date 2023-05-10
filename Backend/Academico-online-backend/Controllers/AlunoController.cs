using Academico_online_backend.Models;
using Microsoft.AspNetCore.Mvc;

namespace Academico_online_backend.Controllers;

[ApiController]
[Route("[controller]")]
public class AlunoController : ControllerBase
{
    [HttpPost]
    public IActionResult Login([FromBody] Login usuario)
    {
        Console.WriteLine(usuario.RA);
        Console.WriteLine(usuario.Senha);

        return Ok(new { mensagem = "Login realizado com sucesso!"});
    }
}

