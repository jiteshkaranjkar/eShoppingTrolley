using eShoppingTrolley.Controllers;
using eShoppingTrolley.Services.Product;
using eShoppingTrolley.Services.ShoppingTrolley;
using Microsoft.Extensions.Logging;
using Moq;
using System;
using Xunit;

namespace eShoppingTrolleyTest.Controller
{
  public class ShoppingTrolleyControllerTest
  {
    private Mock<IShoppingTrolleyService> _mockShoppingTrolleyService;
    private Mock<IProductService> _mockProductService;
    private ShoppingTrolleyController _sutController;
    private ILogger<ShoppingTrolleyController> _logger;
    
    public ShoppingTrolleyControllerTest()
    {
      _mockShoppingTrolleyService = new Mock<IShoppingTrolleyService>();
      _mockProductService = new Mock<IProductService>();
      _sutController = new ShoppingTrolleyController(_logger, _mockShoppingTrolleyService.Object, _mockProductService.Object);
      _sutController.GetShoppingTrolley();
    }


    [Fact]
    public void Check_GetShoppingTrolley_Quantity_WithZeroIndex()
    {
      var nullPointerException = Assert.Throws<NullReferenceException>(() => _sutController.GetShoppingTrolley());
      Assert.IsType<NullReferenceException>(nullPointerException);
    }

    [Theory]
    [InlineData(2)]
    [InlineData(1)]
    [InlineData(3)]
    [InlineData(4)]
    public void ReturnBoolForAdd(int shoppingItemIndex)
    {
      //Boolean flag = _sutController.AddToShoppingTrolley(shoppingItemIndex);
      //Assert.IsType<bool>(flag);
    }


    [Fact]
    public void Check_RemoveFromShoppingTrolley_Quantity_WithZeroIndex()
    {
      //var nullPointerException = Assert.Throws<NullReferenceException>(() => _sutController.RemoveFromShoppingTrolley(0));
      //Assert.IsType<NullReferenceException>(nullPointerException);
    }

    [Theory]
    [InlineData(2)]
    [InlineData(1)]
    [InlineData(3)]
    [InlineData(4)]
    public void ReturnBoolForRemove(int shoppingItemIndex)
    {
      //Boolean flag = _sutController.RemoveFromShoppingTrolley(shoppingItemIndex);
      //Assert.IsType<bool>(flag);
    }
  }
}
