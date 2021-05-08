using System;
using System.ComponentModel.DataAnnotations;

namespace eShoppingTrolley.Domain.Entities.Common
{
  public abstract class BaseEntity
  {
    [Key]
    public int Id { get; set; }
    public bool IsDeleted { get; set; }
    public string CreatedBy { get; set; }
    public DateTime Created { get; set; }
    public string LastModifiedBy { get; set; }
    public DateTime LastModified { get; set; }
  }
}
