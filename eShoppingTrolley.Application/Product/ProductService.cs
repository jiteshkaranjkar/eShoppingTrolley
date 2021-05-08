using System.Collections.Generic;
using System.Linq;
using eShoppingTrolley.Repository;
using eShoppingTrolley.Repository.Context;
using eShoppingTrolley.Domain.Entities;

namespace eShoppingTrolley.Services.Product
{
  public class ProductService : IProductService
  {
    private IProductRepository _productRepository;

    public ProductService(IProductRepository productRepository)
    {
      _productRepository = productRepository;
    }

    public List<eShoppingTrolley.Domain.Entities.Product> GetAllProducts() => _productRepository.GetAllProducts();
  }
}