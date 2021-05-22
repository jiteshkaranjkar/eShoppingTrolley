using eShoppingTrolley.Domain.Entities;
using eShoppingTrolley.Repository;
using eShoppingTrolley.Services.Concretes;
using eShoppingTrolley.Services.Contracts;
using Moq;
using System.Collections.Generic;
using Xunit;

namespace eShoppingTrolleyTest.Services
{
  public class ProductServiceTest
  {
    private IProductService _sutProductService;
    private Mock<IProductRepository> _mockProductRepository;

    public ProductServiceTest()
    {
      _mockProductRepository = new Mock<IProductRepository>();
      _sutProductService = new ProductService(_mockProductRepository.Object);
    }

    [Fact]
    public void Check_GetProductById_WithTestData()
    {
      _mockProductRepository.Setup(prod => prod.GetProductById(1)).Returns(
      new Product
      {
        Id = 1,
        Name = It.IsAny<string>(),
        Brand = It.IsAny<string>(),
      });

      Product product = _sutProductService.GetProductById(1);
      Assert.Equal(1, product.Id);
    }

    [Fact]
    public void Check_GetAllProducts_ReturnsNull()
    {
      List<Product> productList = _sutProductService.GetAllProducts();
      Assert.Null(productList);
    }


    [Fact]
    public void Check_GetProductById_ReturnsNull()
    {
      Product product = _sutProductService.GetProductById(0);
      Assert.Null(product);
    }

  }
}
