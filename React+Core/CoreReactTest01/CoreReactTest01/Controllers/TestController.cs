using CoreReactTest01.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoreReactTest01.Controllers
{
    public class TestController : Controller
    {
        public IActionResult Index()
        {
            Test context = HttpContext.RequestServices.GetService(typeof(Test)) as Test;
            List<Data> list = context.GetData();

            return View(list);
        }
    }
}
