using eShoppingTrolley.Domain.Entities;
using eShoppingTrolley.Repository;
using eShoppingTrolley.Services.Contracts;
using System.Collections.Generic;

namespace eShoppingTrolley.Services.Concretes
{
  public class ProductService : IProductService
  {
    private IProductRepository _productRepository;

    public ProductService(IProductRepository productRepository)
    {
      _productRepository = productRepository;
    }

    public List<Product> GetAllProducts() => _productRepository.GetAllProducts();

    public Product GetProductById(int id) => _productRepository.GetProductById(id);
  }
}