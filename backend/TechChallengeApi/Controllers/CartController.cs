using Microsoft.AspNetCore.Mvc;
using TechChallengeApi.Models;
using TechChallengeApi.Dtos;

namespace TechChallengeApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CartController : ControllerBase
    {
        [HttpPost("checkout")]
        public IActionResult Checkout([FromBody] OrderRequest order)
        {
            if (order.Items == null || !order.Items.Any())
            {
                return BadRequest("O carrinho está vazio.");
            }

            var total = order.Items.Sum(i => i.UnitPrice * i.Quantity);
            Console.WriteLine($"[PEDIDO CONFIRMADO] Total Recebido: {order.TotalAmount:C} | Método: {order.PaymentMethod}");

            return Ok(new
            {
                message = $"Sucesso! Pedido de {order.TotalAmount:C} processado via {order.PaymentMethod}.",
                orderId = Guid.NewGuid()
            });
        }
    }
}