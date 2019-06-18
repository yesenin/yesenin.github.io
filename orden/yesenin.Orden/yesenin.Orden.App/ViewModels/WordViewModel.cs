using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace yesenin.Orden.App.ViewModels
{
    public class WordViewModel
    {
        public string Id { get; set; }
        public int Order { get; set; }
        public string Value { get; set; }
        public string Kind { get; set; }
        public IEnumerable<TranslateViewModel> TranslationList { get; set; }
    }
}
