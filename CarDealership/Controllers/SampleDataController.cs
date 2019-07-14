using CarDealership.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;

namespace CarDealership.Controllers
{
    [Route("api/[controller]")]
    public class SampleDataController : Controller
    {

        [HttpGet("[action]")]
        public IEnumerable<Car> GetCars() => GetCarFullList();

        [HttpPost("[action]")]
        public IEnumerable<Car> GetCarsByParams([FromBody]object result) =>
            FindCarsByParams(JsonConvert.DeserializeObject<Car>(result.ToString()));

        /// <summary>
        /// Get a list of all cars from a JSON file
        /// </summary>
        private List<Car> GetCarFullList()
        {
            using (StreamReader r = new StreamReader("Data/CarStock.json"))
            {
                string json = r.ReadToEnd();
                return JsonConvert.DeserializeObject<List<Car>>(json);
            }
        }

        /// <summary>
        /// Find necessary cars based on the user choice
        /// </summary>
        private List<Car> FindCarsByParams(Car req) {
            var carList = GetCarFullList();
            if (!string.IsNullOrEmpty(req.color))
            {
                carList = carList.Where(x => x.color == req.color).ToList();
            }
            foreach (PropertyInfo prop in req.GetType().GetProperties())
            {
                string[] uniqProps = { "_id", "make", "year","price","color"};
                var name = prop.Name;

                if (uniqProps.Contains(name) == false)
                {
                    bool propValue = (bool)req.GetType().GetProperty(name).GetValue(req, null);
                    if (propValue)
                    {
                        carList = carList.Where(x => (bool)x.GetType().GetProperty(name).GetValue(x, null) == propValue).ToList();
                    }
                }
            }
            return carList;
        }



    }
}
