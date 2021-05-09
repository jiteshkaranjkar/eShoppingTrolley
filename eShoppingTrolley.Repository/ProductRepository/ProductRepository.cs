using eShoppingTrolley.Domain.Entities;
using eShoppingTrolley.Repository.Context;
using System.Collections.Generic;
using System.Linq;

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

    public Product GetProductById(int id) => _context.Products.Where(prod => prod.Id == id).FirstOrDefault();
  }
}