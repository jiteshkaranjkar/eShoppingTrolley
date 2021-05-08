using eShoppingTrolley.Domain.Entities;

namespace eShoppingTrolley.Repository.Context
{
  public class ProductDBContextSeeder
  {
    public void Seed(ProductDBContext dbContext)
    {
      Product product = new()
      {
        Id = 1,
        Brand = "Victoria Bitter",
        Name = "Victoria Bitter VB 375mL Bottle",
        Type = "Lager",
        Description = "Victoria Bitter is a full flavoured, full strength beer; the gentle fruitiness of the aroma complements the sweet maltiness in the mouth which in turn balances perfectly with the clean hop bitterness of the finish.",
        Promotion = "Current month special on VB",
        PromotionDescription = "($2 off)",
        Quantity = "375ml",
        ImageURL = "../data/VictoriaBitter.jpg",
        Price = 21.49,
        PromtionalPrice = 19.49
      };
      dbContext.Products.Add(product);

      product = new Product()
      {
        Id = 2,
        Brand = "Crown Lager",
        Name = "Crown Lager Lager",
        Type = "Lager",
        Description = "A full flavoured classic premium Australian lager brewed with 100% Australian malt, first choice hops and only the finest natural ingredients locally sourced.",
        Promotion = "",
        PromotionDescription = "",
        Quantity = "375ml",
        ImageURL = "../data/Crown Lager.jpg",
        Price = 22.99
      };
      dbContext.Products.Add(product);

      product = new Product()
      {
        Id = 3,
        Brand = "Coopers",
        Name = "Coopers Original Pale Ale 375ml Bottle",
        Type = "Pale Ale",
        Description = "One of Australia's finest family-brewed beers, Coopers Pale Ale is a crisp, cloudy and refreshing bottle-fermented Australian pale.",
        Promotion = "BOGOF on Coopers",
        PromotionDescription = "(Buy one and get one free)",
        Quantity = "375ml",
        ImageURL = "../data/Coopers.jpg",
        Price = 20.49
      };
      dbContext.Products.Add(product);

      product = new Product()
      {
        Id = 4,
        Brand = "Tooheys Extra Dry",
        Name = "Tooheys Extra Dry",
        Type = "Extra Dry Australian Lager",
        Description = "The Tooheys brothers’ pursuit of refreshing beers suited to the Australian climate was embodied by the clean, crisp taste of Tooheys Extra Dry.",
        Promotion = "",
        PromotionDescription = "",
        ImageURL = "../data/TooheysExtraDry.jpg",
        Quantity = "375ml",
        Price = 19.99
      };
      dbContext.Products.Add(product);
    }
  }
}
