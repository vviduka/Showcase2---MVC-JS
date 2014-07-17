using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;


using System.Data.Entity;namespace FlappTheBird_JS.Models
{
    public class Bird_DBcontext : DbContext
    {

        public DbSet<FlappTheBirdModel> BirdModel { get; set; }
        
    }
}