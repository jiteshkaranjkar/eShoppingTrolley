using System.Collections.Generic;
using System.Linq;
using eShoppingTrolley.Domain.Entities;
using eShoppingTrolley.Repository.Context;

namespace eShoppingTrolley.Repository
{
  public class ProductRepository : IProductRepository
  {
    private ProductDBContext _context;

    public ProductRepository(ProductDBContext context)
    {
      _context = context;
    }

    public List<Product> GetAllProducts() => _context.Products.Local.ToList();
  }
}