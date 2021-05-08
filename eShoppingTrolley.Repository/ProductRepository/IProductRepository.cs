using System.Collections.Generic;
using eShoppingTrolley.Domain.Entities;


namespace eShoppingTrolley.Repository
{
    public interface IProductRepository
    {
        List<Product> GetAllProducts();
    }
}
