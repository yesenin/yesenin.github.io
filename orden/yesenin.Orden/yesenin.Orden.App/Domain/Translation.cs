using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace yesenin.Orden.App.Domain
{
    public class Translation
    {
        [BsonElement("lang")]
        public string Language { get; set; }
        [BsonElement("value")]
        public string Value { get; set; }
    }
}
