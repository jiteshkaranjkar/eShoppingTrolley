using eShoppingTrolley.Domain.Entities.Common;

namespace eShoppingTrolley.Domain.Entities
{
  public class Product : BaseEntity
  {
    public string Name { get; set; }
    public string Brand { get; set; }
    public string Type { get; set; }
    public string Description { get; set; }

    public double Price { get; set; }
    public double PromtionalPrice { get; set; } = 0;

    public string ImageURL { get; set; }

    public string Promotion { get; set; }
    public string PromotionDescription { get; set; }

  }
}
