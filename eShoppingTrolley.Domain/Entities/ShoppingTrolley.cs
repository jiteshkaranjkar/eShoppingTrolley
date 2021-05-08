using eShoppingTrolley.Domain.Entities.Common;
using System.Collections.Generic;

namespace eShoppingTrolley.Domain.Entities
{
  public class ShoppingTrolley : BaseEntity
  {
    public double TotalPrice { get; set; }

    public double TotalDiscount { get; set; }
    
    public double TotalPriceWithoutDiscount { get; set; }

    public List<ShoppingItem> ShoppingTrolleyItems { get; set; }

    public string PromotionOffer { get; set; } 
    public ShoppingTrolley()
    {
      ShoppingTrolleyItems = new List<ShoppingItem>();
    }
  }
}
