using eShoppingTrolley.Repository.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace eShoppingTrolley.Repository
{
  public static class DependencyInjection
  {
    public static IServiceCollection AddInfrastructure(this IServiceCollection services)
    {
      services.AddDbContext<ProductDBContext>(options => options.UseInMemoryDatabase("eShoppingTrolley"), ServiceLifetime.Scoped, ServiceLifetime.Scoped);
      services.AddScoped<IProductRepository, ProductRepository>();

      return services;
    }
  }
}