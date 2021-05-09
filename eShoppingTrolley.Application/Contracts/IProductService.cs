using eShoppingTrolley.Domain.Entities;
using System.Collections.Generic;

namespace eShoppingTrolley.Services.Contracts
{
  public interface IProductService
  {
    List<Product> GetAllProducts();

    Product GetProductById(int id);
  }
}
