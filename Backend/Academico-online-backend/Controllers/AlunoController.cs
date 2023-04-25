using Academico_online_backend.Models;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;

namespace Academico_online_backend.Controllers;

[ApiController]
[Route("[controller]")]
public class AlunoController : ControllerBase
{
    [HttpPost]
    public IActionResult Login([FromBody] Usuario usuario)
    {
        Console.WriteLine(usuario.Registro);
        Console.WriteLine(usuario.Senha);

        return Ok();
    }


}

