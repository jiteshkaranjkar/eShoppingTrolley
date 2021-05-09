using eShoppingTrolley.Repository.Context;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.TestHost;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.IO;

namespace eShoppingTrolleyTest.IntegrationTests
{
  public class TestFixture<TStartup> : IDisposable where TStartup : class
  {
    public readonly TestServer Server;
    public TestFixture()
    {
      var builder = new WebHostBuilder()
     .UseContentRoot(Directory.GetCurrentDirectory())
     .UseEnvironment("Development")
     .UseConfiguration(new ConfigurationBuilder()
     .SetBasePath(Directory.GetCurrentDirectory())
     .AddJsonFile("appsettings.json")
     .Build()).UseStartup<TStartup>();

      Server = new TestServer(builder);
    }

    public ProductDBContext CreateDbContext()
    {
      var options = new DbContextOptionsBuilder<ProductDBContext>()
    .UseInMemoryDatabase("eShoppingTrolley")
    .Options;

      var dbContext = new ProductDBContext(options);
      return dbContext;
    }

    public void Dispose()
    {
      Server.Dispose();
    }
  }
}
