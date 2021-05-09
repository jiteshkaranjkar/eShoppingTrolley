using eShoppingTrolley.Domain.Entities;
using eShoppingTrolley.Services.Contracts;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;

namespace eShoppingTrolley.Presentation.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class ProductsController : ControllerBase
  {
    private ILogger<ProductsController> _logger;
    private IProductService _productService;
    
    public ProductsController(ILogger<ProductsController> logger, IProductService productService)
    {
      _logger = logger;
      _productService = productService;
    }

    // GET: api/Products
    [HttpGet]
    public List<Product> GetProducts()
    {
      return _productService.GetAllProducts();
    }

    // GET: api/Product/1
    [HttpGet("{id}")]
    public Product GetProductById(int id)
    {
      return _productService.GetProductById(id);
    }
  }
}
