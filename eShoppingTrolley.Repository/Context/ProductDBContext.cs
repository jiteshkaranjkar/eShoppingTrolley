using Microsoft.EntityFrameworkCore;
using eShoppingTrolley.Domain.Entities;
namespace eShoppingTrolley.Repository.Context
{
  public class ProductDBContext : DbContext
  {
    public ProductDBContext(DbContextOptions<ProductDBContext> options) : base(options)
    {
      ProductDBContextSeeder seedProducts = new();
      seedProducts.Seed(this);
    }
    public DbSet<Product> Products { get; set; }

  }
}
