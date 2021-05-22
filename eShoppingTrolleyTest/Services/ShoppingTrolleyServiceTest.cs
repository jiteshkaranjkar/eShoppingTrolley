using eShoppingTrolley.Domain.Entities;
using eShoppingTrolley.Services.Concretes;
using eShoppingTrolley.Services.Contracts;
using eShoppingTrolley.Services.Exceptions;
using Moq;
using System.Collections.Generic;
using Xunit;

namespace eShoppingTrolleyTest.Services
{
  public class ShoppingTrolleyServiceTest
  {
    private IShoppingTrolleyService _sutShoppingTrolleyService;
    private Mock<IProductService> _mockProductService;

    public ShoppingTrolleyServiceTest()
    {
      _mockProductService = new Mock<IProductService>();
      _sutShoppingTrolleyService = new ShoppingTrolleyService(_mockProductService.Object);
    }


    [Fact]
    public void Check_GetShoppingTrolley_WithTestData()
    {
      List<Product> productList = new()
      {
        new Product
        {
          Id = 1,
          Name = It.IsAny<string>(),
          Brand = It.IsAny<string>(),
        },
        new Product
        {
          Id = 2,
          Name = It.IsAny<string>(),
          Brand = It.IsAny<string>(),
        },
        new Product
        {
          Id = 3,
          Name = It.IsAny<string>(),
          Brand = It.IsAny<string>(),
        }
      };
      _mockProductService.Setup(prod => prod.GetAllProducts()).Returns(productList);
      ShoppingTrolley shoppingTrolley = _sutShoppingTrolleyService.GetShoppingTrolley();

      Assert.Equal(3, shoppingTrolley.ShoppingTrolleyItems.Count);
    }

    [Fact]
    public void Check_GetShoppingTrolley_ThrowNullPointerException_WhenNoProducts()
    {
      Mock<IProductService> _mockProductService = new Mock<IProductService>();
      Assert.Throws<NotFoundException>(() => _sutShoppingTrolleyService.GetShoppingTrolley());
    }
  }
}
