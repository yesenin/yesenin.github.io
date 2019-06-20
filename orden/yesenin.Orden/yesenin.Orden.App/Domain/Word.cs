using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Threading.Tasks;

namespace yesenin.Orden.App.Domain
{
    public class Word
    {
        [BsonId]
        public ObjectId Id { get; set; }
        [BsonElement("value")]
        public string Value { get; set; }
        [BsonElement("source")]
        public string Source { get; set; }
        [BsonElement("order")]
        public int Order { get; set; }
        [BsonElement("kind")]
        public string Kind { get; set; }
        [BsonElement("language")]
        public string Language { get; set; }
        public string Type { get; set; }
        [BsonElement("translations")]
        public IEnumerable<Translation> Translations { get; set; }
        [BsonElement("sub_kind")]
        public List<string> SubKind { get; set; }
        [BsonElement("root_id")]
        public ObjectId? RootId { get; set; }
        [BsonElement("part")]
        public int Part { get; set; }
    }
}
