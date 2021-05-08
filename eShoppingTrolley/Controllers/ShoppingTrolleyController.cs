using eShoppingTrolley.Domain.Entities;
using eShoppingTrolley.Services.Product;
using eShoppingTrolley.Services.ShoppingTrolley;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;

namespace eShoppingTrolley.Controllers
{
  [ApiController]
  [Route("[controller]")]
  public class ShoppingTrolleyController : ControllerBase
  {
    private ILogger<ShoppingTrolleyController> _logger;
    private IProductService _productService;
    private IShoppingTrolleyService _shoppingTrolleyService;

    public ShoppingTrolleyController(ILogger<ShoppingTrolleyController> logger, IShoppingTrolleyService shoppingTrolleyService, IProductService productService)
    {
      _logger = logger;
      _shoppingTrolleyService = shoppingTrolleyService;
      _productService = productService;
    }

    [HttpGet("/api/ShoppingTrolley")]
    public ShoppingTrolley GetShoppingTrolley()
    {
      return _shoppingTrolleyService.GetShoppingTrolley();
    }


    [HttpGet("/api/Products")]
    public List<Product> GetProducts()
    {
      return _productService.GetAllProducts();
    }
  }
}
