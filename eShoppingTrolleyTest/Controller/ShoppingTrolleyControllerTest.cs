using eShoppingTrolley.Domain.Entities;
using eShoppingTrolley.Presentation.Controllers;
using eShoppingTrolley.Services.Contracts;
using Microsoft.Extensions.Logging;
using Moq;
using Xunit;

namespace eShoppingTrolleyTest.Controller
{
  public class ShoppingTrolleyControllerTest
  {
    private Mock<IShoppingTrolleyService> _mockShoppingTrolleyService;
    private ShoppingTrolleyController _sutController;
    private ILogger<ShoppingTrolleyController> _logger;
    
    public ShoppingTrolleyControllerTest()
    {
      _mockShoppingTrolleyService = new Mock<IShoppingTrolleyService>();
      _sutController = new ShoppingTrolleyController(_logger, _mockShoppingTrolleyService.Object);
    }

    [Fact]
    public void Check_GetShoppingTrolley_ReturnsNull()
    {
      ShoppingTrolley shoppingTrolley = _sutController.GetShoppingTrolley();
      Assert.Null(shoppingTrolley);
    }
  }
}
