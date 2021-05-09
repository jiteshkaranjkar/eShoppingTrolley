using eShoppingTrolley.Domain;
using eShoppingTrolley.Domain.Entities;
using eShoppingTrolley.Services.Contracts;
using eShoppingTrolley.Services.Exceptions;
using System.Collections.Generic;

namespace eShoppingTrolley.Services.Concretes
{
  public class ShoppingTrolleyService : IShoppingTrolleyService
  {
    private List<ShoppingItem> shoppingTrolleyItems;
    private ShoppingTrolley shoppingTrolley;
    private List<Product> productList;
    private IProductService _productService;

    public ShoppingTrolleyService(IProductService productService)
    {
      _productService = productService;
      shoppingTrolleyItems = new List<ShoppingItem>();
    }

    public ShoppingTrolley GetShoppingTrolley()
    {
      shoppingTrolleyItems = new List<ShoppingItem>();
      productList = _productService.GetAllProducts();

      #region Business validation
      if (productList == null)
      {
        throw new NotFoundException(CommonConstants.NO_PRODUCTS_FOUND_EXCEPTION);
      }
      #endregion

      productList.ForEach((product) =>
      {
        shoppingTrolleyItems.Add(new ShoppingItem(product, 0));
      });

      shoppingTrolley = new()
      {
        ShoppingTrolleyItems = shoppingTrolleyItems,
        TotalDiscount = 0,
        TotalPrice = 0,
        TotalPriceWithoutDiscount = 0,
        PromotionOffer = CommonConstants.TROLLEY_PROMOTIONAL_OFFER
      };
      return shoppingTrolley;
    }
  }
}