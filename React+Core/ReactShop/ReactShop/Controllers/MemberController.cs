using Microsoft.AspNetCore.Mvc;
using ReactShop.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactShop.Controllers
{
    public class MemberController : Controller
    {
        public IActionResult Index()
        {
            DBContext context = HttpContext.RequestServices.GetService(typeof(ReactShop.Models.DBContext)) as DBContext;

            return View(context.GetMembers());
        }
    }
}
