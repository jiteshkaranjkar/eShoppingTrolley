using eShoppingTrolley.Domain.Entities;
using eShoppingTrolley.Services.Contracts;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace eShoppingTrolley.Presentation.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class ShoppingTrolleyController : ControllerBase
  {
    private ILogger<ShoppingTrolleyController> _logger;
    private IShoppingTrolleyService _shoppingTrolleyService;

    public ShoppingTrolleyController(ILogger<ShoppingTrolleyController> logger, IShoppingTrolleyService shoppingTrolleyService)
    {
      _logger = logger;
      _shoppingTrolleyService = shoppingTrolleyService;
    }

    // GET: api/ShoppingTrolley
    [HttpGet]
    public ShoppingTrolley GetShoppingTrolley()
    {
      return _shoppingTrolleyService.GetShoppingTrolley();
    }
  }
}
