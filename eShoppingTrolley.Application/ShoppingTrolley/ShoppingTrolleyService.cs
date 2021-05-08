using eShoppingTrolley.Domain.Entities;
using eShoppingTrolley.Repository;
using eShoppingTrolley.Services.Product;
using System.Collections.Generic;

namespace eShoppingTrolley.Services.ShoppingTrolley
{
  public class ShoppingTrolleyService : IShoppingTrolleyService
  {
    List<ShoppingItem> shoppingTrolleyItems;
    eShoppingTrolley.Domain.Entities.ShoppingTrolley shoppingTrolley;
    List<eShoppingTrolley.Domain.Entities.Product> productList;
    private IProductService _productService;

    public ShoppingTrolleyService(IProductService productService)
    {
      _productService = productService;
      shoppingTrolleyItems = new List<ShoppingItem>();
    }

    public eShoppingTrolley.Domain.Entities.ShoppingTrolley GetShoppingTrolley()
    {
      List<ShoppingItem> shoppingTrolleyItems = new List<ShoppingItem>();
      List<eShoppingTrolley.Domain.Entities.Product> productList = _productService.GetAllProducts();

      productList.ForEach((product) =>
      {
        shoppingTrolleyItems.Add(new ShoppingItem(product, 0));
      });

      eShoppingTrolley.Domain.Entities.ShoppingTrolley shoppingTrolley = new()
      {
        ShoppingTrolleyItems = shoppingTrolleyItems,
        TotalDiscount = 10,
        TotalPrice = 40,
        TotalPriceWithoutDiscount = 50,
        PromotionOffer = "Spend $50 and $5 off the total"
      };
      return shoppingTrolley;
    }
  }
}