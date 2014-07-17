using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace FlappTheBird_JS.Models
{
    public class FlappTheBirdModel
    {
        [Key]
        public int Id { get; set; }
        public string PlayerName { get; set; }
        public int xBird { get; set; }
        public int yBird { get; set; }
        public double TimeInMs { get; set; }
    }
}