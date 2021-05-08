using eShoppingTrolley.Domain.Entities.Common;

namespace eShoppingTrolley.Domain.Entities
{
  public class ShoppingItem : BaseEntity
  {
    public Product Product { get; set; }

    public int Quantity { get; set; }

    public ShoppingItem(Product product, int quantity)
    {
      Product = product;
      Quantity = quantity;
    }
  }
}