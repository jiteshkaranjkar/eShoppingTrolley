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
    public void Check_GetShoppingTrolley_ReturnsNull()
    {
      List<Product> productList = _sutProductService.GetAllProducts();
      Assert.Null(productList);
    }

  }
}
