using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using MongoDB.Driver;
using yesenin.Orden.App.Domain;
using yesenin.Orden.App.Models;

namespace yesenin.Orden.App.Controllers
{
    public class HomeController : Controller
    {
        private readonly string _connectionString = "mongodb://yesenin:D_%2BeqP%26rp3%21_ZJ%23g@159.65.28.129:27017/admin?readPreference=primary";
        private readonly MongoClient _client;
        private readonly IMongoDatabase _database;
        private readonly IMongoCollection<Word> _collection;

        public HomeController()
        {
            _client = new MongoClient(_connectionString);
            _database = _client.GetDatabase("svenska");
            _collection = _database.GetCollection<Word>("words");
        }

        public IActionResult Index(int skip = 0, int take = 10)
        {
            var items = _collection.Find(_ => true).Skip(skip).Limit(take).ToList().Select(word => new WordViewModel
            {
                Value = word.Value, Kind = word.Kind, Id = word.Id.ToString(), Order = word.Order
            });
            return View(new WordListViewModel
            {
                Items = items,
                Skip = skip,
                Take = take,
                Total = 2234
            });
        }

        [Route("/{id}")]
        public IActionResult Word(string id)
        {
            var word = _collection.Find(document => document.Id == ObjectId.Parse(id)).FirstOrDefault();
            return View(new WordViewModel
            {
                Id = word.Id.ToString(),
                Value = word.Value,
                Kind = word.Kind,
                Order = word.Order,
                TranslationList = word.Translations.Select(tr => new TranslateViewModel { Language = tr.Language, Value = tr.Value})
            });
        }
    }
}
