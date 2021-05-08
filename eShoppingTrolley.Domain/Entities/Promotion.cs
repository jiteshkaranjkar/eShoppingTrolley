using eShoppingTrolley.Domain.Entities.Common;
using eShoppingTrolley.Domain.Enums;

namespace eShoppingTrolley.Domain.Entities
{
  public class Promotion : BaseEntity
  {
    public string Name { get; set; }
    public PromotionType PromotionType { get; set; }

  }
}
