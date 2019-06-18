using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace yesenin.Orden.App.ViewModels
{
    public class WordListViewModel
    {
        public int Total { get; set; }
        public int Skip { get; set; }
        public int Take { get; set; }

        public IEnumerable<WordViewModel> Items { get; set; }
    }
}
