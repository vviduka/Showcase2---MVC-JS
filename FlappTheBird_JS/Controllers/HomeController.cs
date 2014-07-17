using FlappTheBird_JS.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace FlappTheBird_JS.Controllers
{
    public class HomeController : Controller
    {
        Bird_DBcontext db = new Bird_DBcontext();

        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public ActionResult SaveToDb(FlappTheBirdModel model)
        {
            if (ModelState.IsValid)
            {
                db.BirdModel.Add(model);
                db.SaveChanges();
            }
            return Json(new { success = true });
        }
    }
}
