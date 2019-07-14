using CarDealership.Controllers;
using CarDealership.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Diagnostics;
using System.Linq;

namespace CarDealerTest
{
    [TestClass]
    public class CarTest
    {
        [TestMethod]
        public void CarCreateTest()
        {
            string expected = "Ford";
            Car car = new Car("Ford");
            var actual = car.make;
            Assert.AreEqual(expected, actual);
        }

        [TestMethod]
        public void CarListTest()
        {
            int expected = 2;
            SampleDataController sampleDataController = new SampleDataController();
            int actual = sampleDataController.GetCars().ToList().Count;
            Debug.WriteLine(actual);
            Assert.AreEqual(expected, actual);
        }
    }
}
