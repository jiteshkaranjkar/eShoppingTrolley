using eShoppingTrolley.Domain.Entities;
using eShoppingTrolley.Presentation.Controllers;
using eShoppingTrolley.Services.Contracts;
using Microsoft.Extensions.Logging;
using Moq;
using System.Collections.Generic;
using Xunit;

namespace eShoppingTrolleyTest.Controller
{
  public class ProductsControllerTest
  {
    private Mock<IProductService> _mockProductService;
    private ProductsController _sutController;
    private ILogger<ProductsController> _logger;

    public ProductsControllerTest()
    {
      _mockProductService = new Mock<IProductService>();
      _sutController = new ProductsController(_logger, _mockProductService.Object);
    }


    [Fact]
    public void Check_GetProducts_ReturnsNull()
    {
      List<Product> productList = _sutController.GetProducts();
      Assert.Null(productList);
    }

    [Theory]
    [InlineData(2)]
    [InlineData(1)]
    [InlineData(3)]
    [InlineData(4)]
    public void Check_GetProductById(int productId)
    {
      Product product = _sutController.GetProductById(productId);
      Assert.Null(product);
    }


    [Fact]
    public void Check_GetProductById_WithZeroIndex()
    {
      Product product = _sutController.GetProductById(0);
      Assert.Null(product);
    }
  }
}
