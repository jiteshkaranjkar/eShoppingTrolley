using eShoppingTrolley.Services.Concretes;
using eShoppingTrolley.Services.Contracts;
using System;
using Moq;
using Xunit;
using eShoppingTrolley.Services.Exceptions;

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
    public void Check_GetShoppingTrolley_ThrowNullPointerException_WhenNoProducts()
    {
      Mock<IProductService> _mockProductService = new Mock<IProductService>();
      Assert.Throws<NotFoundException>(() => _sutShoppingTrolleyService.GetShoppingTrolley());
    }

  }
}
