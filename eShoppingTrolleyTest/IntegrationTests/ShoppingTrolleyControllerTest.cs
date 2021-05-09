using eShoppingTrolley;
using eShoppingTrolley.Domain.Entities;
using eShoppingTrolley.Presentation.Controllers;
using eShoppingTrolley.Repository;
using eShoppingTrolley.Repository.Context;
using eShoppingTrolley.Services.Concretes;
using eShoppingTrolley.Services.Contracts;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Linq;
using System.Collections.Generic;
using Xunit;
using eShoppingTrolley.Domain;

namespace eShoppingTrolleyTest.IntegrationTests
{
  public class ShoppingTrolleyControllerTest : IClassFixture<TestFixture<Startup>>, IDisposable
  {
    private IShoppingTrolleyService _shoppingTrolleyService;
    private IProductService _productService;
    private IProductRepository _productRepository;
    private ShoppingTrolleyController _shoppingTrolleyController;
    private ILogger<ShoppingTrolleyController> _logger;
    private ProductDBContext _productDBContext;
    private TestFixture<Startup> _testFixture;

    public ShoppingTrolleyControllerTest(TestFixture<Startup> fixture)
    {
      _testFixture = fixture;
      _productDBContext = _testFixture.CreateDbContext();
      _productRepository = new ProductRepository(_productDBContext);
      _productService = new ProductService(_productRepository);
      _shoppingTrolleyService = new ShoppingTrolleyService(_productService);
      _shoppingTrolleyController = new(_logger, _shoppingTrolleyService);
    }

    [Fact]
    public void Check_GetShoppingTrolley()
    {
      ShoppingTrolley shoppingTrolley = _shoppingTrolleyController.GetShoppingTrolley();
      Assert.IsType<ShoppingTrolley>(shoppingTrolley);
            
      Assert.Equal(4, shoppingTrolley.ShoppingTrolleyItems.Count);

      Assert.Equal(CommonConstants.TROLLEY_PROMOTIONAL_OFFER, shoppingTrolley.PromotionOffer);

      List<ShoppingItem> shoppingItemList = new() { new ShoppingItem(new Product() { Brand = CommonConstants.VB_BRAND }, 0) };
      Assert.Equal(shoppingItemList.First().Product.Brand, shoppingTrolley.ShoppingTrolleyItems.Where(prod => prod.Product.Brand == CommonConstants.VB_BRAND).Select(prod => prod.Product.Brand).FirstOrDefault());
    }

    public void Dispose()
    {
      _productDBContext.Dispose();
    }

  }
}
