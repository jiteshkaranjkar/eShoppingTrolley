using eShoppingTrolley.Domain.Entities;
using System.Collections.Generic;

namespace eShoppingTrolley.Services.Product
{
  public interface IProductService
  {
    List<eShoppingTrolley.Domain.Entities.Product> GetAllProducts();
  }
}
