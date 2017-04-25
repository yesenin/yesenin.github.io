using System;
using System.Collections.Generic;

using Phreesia.Dashboard.Worklist.Model.Entities.Parameters;
using Phreesia.Dashboard.Worklist.Model.Entities.WorklistInfo;
using Phreesia.Dashboard.Worklist.Model.Interfaces;

namespace Phreesia.Dashboard.Worklist.Business
{
    public class WorklistManager : IWorklistManager
    {
        public WorklistPage GetWorklist(WorklistContext context, SearchOptions searchOptions, LoadOptions loadOptions)
        {
            return new WorklistPage
            {
                Items = new List<WorklistItem>
                {
                    new WorklistItem
                    {
                        FirstName = "Lacy",
                        LastName = "Hamiter",
                        Location = new Location
                        {
                            Id = new Guid("fec9e438-2039-11e7-9c4a-e03f49848f6f"), Name = "Main Office"
                        },
                        DateOfService = new DateTime(2017, 2, 24, 13, 0, 0),
                        PhysicianName = "Dr.Moog",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Myrna",
                        LastName = "Barz",
                        Location = new Location
                        {
                            Id = new Guid("feca3262-2039-11e7-be88-e03f49848f6f"), Name = "Main Office"
                        },
                        DateOfService = new DateTime(2017, 1, 7, 10, 0, 0),
                        PhysicianName = "Dr.Kalberg",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Vinnie",
                        LastName = "Aihara",
                        Location = new Location
                        {
                            Id = new Guid("feca597a-2039-11e7-8c41-e03f49848f6f"), Name = "Office B"
                        },
                        DateOfService = new DateTime(2017, 3, 10, 14, 0, 0),
                        PhysicianName = "Dr.Kalberg",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Huey",
                        LastName = "Calvin",
                        Location = new Location
                        {
                            Id = new Guid("feca8098-2039-11e7-a134-e03f49848f6f"), Name = "Office B"
                        },
                        DateOfService = new DateTime(2017, 2, 1, 13, 0, 0),
                        PhysicianName = "Dr.Bullett",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Santana",
                        LastName = "Hunnings",
                        Location = new Location
                        {
                            Id = new Guid("feca8099-2039-11e7-8713-e03f49848f6f"), Name = "Office A"
                        },
                        DateOfService = new DateTime(2017, 3, 13, 10, 0, 0),
                        PhysicianName = "Dr.Latner",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Carmela",
                        LastName = "Semmes",
                        Location = new Location
                        {
                            Id = new Guid("fecaa7a6-2039-11e7-8c2d-e03f49848f6f"), Name = "Office A"
                        },
                        DateOfService = new DateTime(2017, 2, 27, 15, 0, 0),
                        PhysicianName = "Dr.Haydal",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Shawnna",
                        LastName = "Raoof",
                        Location = new Location
                        {
                            Id = new Guid("fecacec0-2039-11e7-8412-e03f49848f6f"), Name = "Office B"
                        },
                        DateOfService = new DateTime(2017, 3, 27, 12, 0, 0),
                        PhysicianName = "Dr.Latner",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Alonso",
                        LastName = "Mackerl",
                        Location = new Location
                        {
                            Id = new Guid("fecaf59e-2039-11e7-bbad-e03f49848f6f"), Name = "Office B"
                        },
                        DateOfService = new DateTime(2017, 3, 29, 8, 0, 0),
                        PhysicianName = "Dr.Croxton",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Jody",
                        LastName = "Liller",
                        Location = new Location
                        {
                            Id = new Guid("fecb1ccc-2039-11e7-94ec-e03f49848f6f"), Name = "Office A"
                        },
                        DateOfService = new DateTime(2017, 3, 22, 8, 0, 0),
                        PhysicianName = "Dr.Haydal",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Thad",
                        LastName = "Spillman",
                        Location = new Location
                        {
                            Id = new Guid("fecb43d2-2039-11e7-b53b-e03f49848f6f"), Name = "Office A"
                        },
                        DateOfService = new DateTime(2017, 3, 27, 16, 0, 0),
                        PhysicianName = "Dr.Huerta",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Jessenia",
                        LastName = "Gartin",
                        Location = new Location
                        {
                            Id = new Guid("fecb6aec-2039-11e7-a918-e03f49848f6f"), Name = "Office B"
                        },
                        DateOfService = new DateTime(2017, 1, 10, 13, 0, 0),
                        PhysicianName = "Dr.Popke",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Salvatore",
                        LastName = "Brehaut",
                        Location = new Location
                        {
                            Id = new Guid("fecb6aed-2039-11e7-93f0-e03f49848f6f"), Name = "Office A"
                        },
                        DateOfService = new DateTime(2017, 3, 28, 13, 0, 0),
                        PhysicianName = "Dr.Latner",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Danette",
                        LastName = "Bolay",
                        Location = new Location
                        {
                            Id = new Guid("fecb91fe-2039-11e7-86c6-e03f49848f6f"), Name = "Main Office"
                        },
                        DateOfService = new DateTime(2017, 3, 24, 17, 0, 0),
                        PhysicianName = "Dr.Moog",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Timmy",
                        LastName = "Swierczynski",
                        Location = new Location
                        {
                            Id = new Guid("fecbb8a8-2039-11e7-8cf1-e03f49848f6f"), Name = "Main Office"
                        },
                        DateOfService = new DateTime(2017, 2, 4, 14, 0, 0),
                        PhysicianName = "Dr.Huerta",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Shakira",
                        LastName = "Canute",
                        Location = new Location
                        {
                            Id = new Guid("fecbdfb6-2039-11e7-9fb1-e03f49848f6f"), Name = "Main Office"
                        },
                        DateOfService = new DateTime(2017, 1, 13, 15, 0, 0),
                        PhysicianName = "Dr.Moog",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Altha",
                        LastName = "Allbright",
                        Location = new Location
                        {
                            Id = new Guid("fecc072e-2039-11e7-8221-e03f49848f6f"), Name = "Office B"
                        },
                        DateOfService = new DateTime(2017, 2, 27, 14, 0, 0),
                        PhysicianName = "Dr.Huerta",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Kaci",
                        LastName = "Berkshire",
                        Location = new Location
                        {
                            Id = new Guid("fecc2e46-2039-11e7-bd7a-e03f49848f6f"), Name = "Office B"
                        },
                        DateOfService = new DateTime(2017, 2, 15, 15, 0, 0),
                        PhysicianName = "Dr.Haydal",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Tomoko",
                        LastName = "Parrish",
                        Location = new Location
                        {
                            Id = new Guid("fecc5554-2039-11e7-b7cd-e03f49848f6f"), Name = "Office A"
                        },
                        DateOfService = new DateTime(2017, 2, 16, 8, 0, 0),
                        PhysicianName = "Dr.Latner",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Margrett",
                        LastName = "Anderl",
                        Location = new Location
                        {
                            Id = new Guid("fecc5555-2039-11e7-9647-e03f49848f6f"), Name = "Office B"
                        },
                        DateOfService = new DateTime(2017, 2, 6, 17, 0, 0),
                        PhysicianName = "Dr.Croxton",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Evelyn",
                        LastName = "Santmyer",
                        Location = new Location
                        {
                            Id = new Guid("fecc7c70-2039-11e7-9ca2-e03f49848f6f"), Name = "Office A"
                        },
                        DateOfService = new DateTime(2017, 1, 12, 13, 0, 0),
                        PhysicianName = "Dr.Haydal",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Leandro",
                        LastName = "Brock",
                        Location = new Location
                        {
                            Id = new Guid("fecca388-2039-11e7-81bd-e03f49848f6f"), Name = "Main Office"
                        },
                        DateOfService = new DateTime(2017, 3, 7, 16, 0, 0),
                        PhysicianName = "Dr.Moog",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Hollie",
                        LastName = "Nucklos",
                        Location = new Location
                        {
                            Id = new Guid("fecccaa4-2039-11e7-a9d1-e03f49848f6f"), Name = "Office B"
                        },
                        DateOfService = new DateTime(2017, 1, 11, 12, 0, 0),
                        PhysicianName = "Dr.Latner",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Jaimie",
                        LastName = "Nembhard",
                        Location = new Location
                        {
                            Id = new Guid("fecccaa5-2039-11e7-a7fb-e03f49848f6f"), Name = "Office B"
                        },
                        DateOfService = new DateTime(2017, 1, 6, 10, 0, 0),
                        PhysicianName = "Dr.Latner",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Edison",
                        LastName = "Galuska",
                        Location = new Location
                        {
                            Id = new Guid("feccf1b4-2039-11e7-b468-e03f49848f6f"), Name = "Office B"
                        },
                        DateOfService = new DateTime(2017, 2, 12, 15, 0, 0),
                        PhysicianName = "Dr.Haydal",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Sasha",
                        LastName = "Romero",
                        Location = new Location
                        {
                            Id = new Guid("fecd18d0-2039-11e7-b0ff-e03f49848f6f"), Name = "Office B"
                        },
                        DateOfService = new DateTime(2017, 2, 16, 11, 0, 0),
                        PhysicianName = "Dr.Alekna",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Dorothy",
                        LastName = "Gostowski",
                        Location = new Location
                        {
                            Id = new Guid("fecd18d1-2039-11e7-9450-e03f49848f6f"), Name = "Main Office"
                        },
                        DateOfService = new DateTime(2017, 2, 11, 17, 0, 0),
                        PhysicianName = "Dr.Huerta",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Rosita",
                        LastName = "Szuszkiewicz",
                        Location = new Location
                        {
                            Id = new Guid("fecd66f8-2039-11e7-b725-e03f49848f6f"), Name = "Office B"
                        },
                        DateOfService = new DateTime(2017, 3, 10, 9, 0, 0),
                        PhysicianName = "Dr.Croxton",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Lloyd",
                        LastName = "Mcwhinney",
                        Location = new Location
                        {
                            Id = new Guid("fecd8e12-2039-11e7-8414-e03f49848f6f"), Name = "Office B"
                        },
                        DateOfService = new DateTime(2017, 3, 1, 10, 0, 0),
                        PhysicianName = "Dr.Alekna",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Angelic",
                        LastName = "Gerl",
                        Location = new Location
                        {
                            Id = new Guid("fecd8e13-2039-11e7-8da2-e03f49848f6f"), Name = "Office B"
                        },
                        DateOfService = new DateTime(2017, 2, 5, 14, 0, 0),
                        PhysicianName = "Dr.Haydal",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Sabine",
                        LastName = "Telle",
                        Location = new Location
                        {
                            Id = new Guid("fecdb52e-2039-11e7-95aa-e03f49848f6f"), Name = "Office A"
                        },
                        DateOfService = new DateTime(2017, 1, 18, 15, 0, 0),
                        PhysicianName = "Dr.Croxton",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Debora",
                        LastName = "Murguia",
                        Location = new Location
                        {
                            Id = new Guid("fecddc3e-2039-11e7-8a19-e03f49848f6f"), Name = "Main Office"
                        },
                        DateOfService = new DateTime(2017, 2, 29, 9, 0, 0),
                        PhysicianName = "Dr.Akimseu",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Carroll",
                        LastName = "Karrels",
                        Location = new Location
                        {
                            Id = new Guid("fece0354-2039-11e7-9c3a-e03f49848f6f"), Name = "Office A"
                        },
                        DateOfService = new DateTime(2017, 3, 17, 14, 0, 0),
                        PhysicianName = "Dr.Latner",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Valda",
                        LastName = "Mckinstry",
                        Location = new Location
                        {
                            Id = new Guid("fece2a70-2039-11e7-81ed-e03f49848f6f"), Name = "Main Office"
                        },
                        DateOfService = new DateTime(2017, 3, 19, 12, 0, 0),
                        PhysicianName = "Dr.Alekna",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Estell",
                        LastName = "Farness",
                        Location = new Location
                        {
                            Id = new Guid("fece51b0-2039-11e7-8b7f-e03f49848f6f"), Name = "Office A"
                        },
                        DateOfService = new DateTime(2017, 1, 26, 15, 0, 0),
                        PhysicianName = "Dr.Akimseu",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Vickey",
                        LastName = "Ziebert",
                        Location = new Location
                        {
                            Id = new Guid("fece78cc-2039-11e7-984b-e03f49848f6f"), Name = "Main Office"
                        },
                        DateOfService = new DateTime(2017, 1, 6, 10, 0, 0),
                        PhysicianName = "Dr.Kalberg",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Lesha",
                        LastName = "Zuck",
                        Location = new Location
                        {
                            Id = new Guid("fece78cd-2039-11e7-b038-e03f49848f6f"), Name = "Office A"
                        },
                        DateOfService = new DateTime(2017, 1, 4, 14, 0, 0),
                        PhysicianName = "Dr.Alekna",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Minh",
                        LastName = "Skarzynski",
                        Location = new Location
                        {
                            Id = new Guid("fece9fe6-2039-11e7-a244-e03f49848f6f"), Name = "Main Office"
                        },
                        DateOfService = new DateTime(2017, 3, 12, 15, 0, 0),
                        PhysicianName = "Dr.Kalberg",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Portia",
                        LastName = "Darvish",
                        Location = new Location
                        {
                            Id = new Guid("fecec6d0-2039-11e7-99db-e03f49848f6f"), Name = "Office B"
                        },
                        DateOfService = new DateTime(2017, 2, 4, 17, 0, 0),
                        PhysicianName = "Dr.Moog",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Jacquiline",
                        LastName = "Salzwedel",
                        Location = new Location
                        {
                            Id = new Guid("fecec6d1-2039-11e7-9f10-e03f49848f6f"), Name = "Main Office"
                        },
                        DateOfService = new DateTime(2017, 1, 10, 17, 0, 0),
                        PhysicianName = "Dr.Huerta",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Georgiann",
                        LastName = "Rishe",
                        Location = new Location
                        {
                            Id = new Guid("feceedde-2039-11e7-824e-e03f49848f6f"), Name = "Office B"
                        },
                        DateOfService = new DateTime(2017, 1, 11, 15, 0, 0),
                        PhysicianName = "Dr.Haydal",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Jeramy",
                        LastName = "Richmon",
                        Location = new Location
                        {
                            Id = new Guid("fecf14f6-2039-11e7-85d2-e03f49848f6f"), Name = "Office B"
                        },
                        DateOfService = new DateTime(2017, 1, 11, 16, 0, 0),
                        PhysicianName = "Dr.Popke",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Vernon",
                        LastName = "Coppersmith",
                        Location = new Location
                        {
                            Id = new Guid("fecf3c30-2039-11e7-b201-e03f49848f6f"), Name = "Office B"
                        },
                        DateOfService = new DateTime(2017, 3, 5, 16, 0, 0),
                        PhysicianName = "Dr.Alekna",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Latonya",
                        LastName = "Darmiento",
                        Location = new Location
                        {
                            Id = new Guid("fecf3c31-2039-11e7-95d6-e03f49848f6f"), Name = "Office B"
                        },
                        DateOfService = new DateTime(2017, 3, 3, 12, 0, 0),
                        PhysicianName = "Dr.Latner",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Genevive",
                        LastName = "Asken",
                        Location = new Location
                        {
                            Id = new Guid("fecf634a-2039-11e7-b4d5-e03f49848f6f"), Name = "Main Office"
                        },
                        DateOfService = new DateTime(2017, 1, 9, 10, 0, 0),
                        PhysicianName = "Dr.Huerta",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Dalton",
                        LastName = "Soptick",
                        Location = new Location
                        {
                            Id = new Guid("fecf8a5a-2039-11e7-8cf9-e03f49848f6f"), Name = "Office A"
                        },
                        DateOfService = new DateTime(2017, 2, 1, 13, 0, 0),
                        PhysicianName = "Dr.Moog",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Dannette",
                        LastName = "Benker",
                        Location = new Location
                        {
                            Id = new Guid("fecfb174-2039-11e7-ad9b-e03f49848f6f"), Name = "Office A"
                        },
                        DateOfService = new DateTime(2017, 1, 16, 9, 0, 0),
                        PhysicianName = "Dr.Bullett",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Luise",
                        LastName = "Minium",
                        Location = new Location
                        {
                            Id = new Guid("fecfb175-2039-11e7-a3b3-e03f49848f6f"), Name = "Main Office"
                        },
                        DateOfService = new DateTime(2017, 3, 1, 8, 0, 0),
                        PhysicianName = "Dr.Bullett",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Hien",
                        LastName = "Vitez",
                        Location = new Location
                        {
                            Id = new Guid("fecfff26-2039-11e7-9e1d-e03f49848f6f"), Name = "Office B"
                        },
                        DateOfService = new DateTime(2017, 3, 26, 16, 0, 0),
                        PhysicianName = "Dr.Kalberg",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Katherina",
                        LastName = "Klingen",
                        Location = new Location
                        {
                            Id = new Guid("fecfff27-2039-11e7-a75a-e03f49848f6f"), Name = "Main Office"
                        },
                        DateOfService = new DateTime(2017, 1, 7, 16, 0, 0),
                        PhysicianName = "Dr.Akimseu",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Svetlana",
                        LastName = "Jesenovec",
                        Location = new Location
                        {
                            Id = new Guid("fed02636-2039-11e7-90cd-e03f49848f6f"), Name = "Office A"
                        },
                        DateOfService = new DateTime(2017, 3, 22, 14, 0, 0),
                        PhysicianName = "Dr.Latner",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Gussie",
                        LastName = "Bettino",
                        Location = new Location
                        {
                            Id = new Guid("fed04d50-2039-11e7-9d02-e03f49848f6f"), Name = "Office A"
                        },
                        DateOfService = new DateTime(2017, 3, 28, 9, 0, 0),
                        PhysicianName = "Dr.Huerta",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Ona",
                        LastName = "Rossotto",
                        Location = new Location
                        {
                            Id = new Guid("fed0746c-2039-11e7-872c-e03f49848f6f"), Name = "Main Office"
                        },
                        DateOfService = new DateTime(2017, 2, 23, 9, 0, 0),
                        PhysicianName = "Dr.Latner",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Shakita",
                        LastName = "Spine",
                        Location = new Location
                        {
                            Id = new Guid("fed0c29e-2039-11e7-ab6f-e03f49848f6f"), Name = "Main Office"
                        },
                        DateOfService = new DateTime(2017, 3, 26, 9, 0, 0),
                        PhysicianName = "Dr.Kalberg",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Malorie",
                        LastName = "Ruhn",
                        Location = new Location
                        {
                            Id = new Guid("fed0e9b8-2039-11e7-aeb7-e03f49848f6f"), Name = "Office A"
                        },
                        DateOfService = new DateTime(2017, 1, 22, 15, 0, 0),
                        PhysicianName = "Dr.Latner",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Mertie",
                        LastName = "Arocha",
                        Location = new Location
                        {
                            Id = new Guid("fed0e9b9-2039-11e7-8359-e03f49848f6f"), Name = "Office B"
                        },
                        DateOfService = new DateTime(2017, 2, 4, 17, 0, 0),
                        PhysicianName = "Dr.Huerta",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Deangelo",
                        LastName = "Burri",
                        Location = new Location
                        {
                            Id = new Guid("fed110c8-2039-11e7-a296-e03f49848f6f"), Name = "Main Office"
                        },
                        DateOfService = new DateTime(2017, 2, 20, 9, 0, 0),
                        PhysicianName = "Dr.Latner",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Nia",
                        LastName = "Knisley",
                        Location = new Location
                        {
                            Id = new Guid("fed137da-2039-11e7-99e3-e03f49848f6f"), Name = "Office B"
                        },
                        DateOfService = new DateTime(2017, 3, 25, 9, 0, 0),
                        PhysicianName = "Dr.Popke",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Oralee",
                        LastName = "Henges",
                        Location = new Location
                        {
                            Id = new Guid("fed15efa-2039-11e7-a785-e03f49848f6f"), Name = "Main Office"
                        },
                        DateOfService = new DateTime(2017, 1, 22, 10, 0, 0),
                        PhysicianName = "Dr.Croxton",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Shemeka",
                        LastName = "Teaford",
                        Location = new Location
                        {
                            Id = new Guid("fed1860c-2039-11e7-a3cd-e03f49848f6f"), Name = "Main Office"
                        },
                        DateOfService = new DateTime(2017, 3, 21, 13, 0, 0),
                        PhysicianName = "Dr.Kalberg",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Phylis",
                        LastName = "Nevills",
                        Location = new Location
                        {
                            Id = new Guid("fed1860d-2039-11e7-b626-e03f49848f6f"), Name = "Office A"
                        },
                        DateOfService = new DateTime(2017, 1, 9, 9, 0, 0),
                        PhysicianName = "Dr.Huerta",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Beatrice",
                        LastName = "Tafreshi",
                        Location = new Location
                        {
                            Id = new Guid("fed1ada8-2039-11e7-8ad0-e03f49848f6f"), Name = "Main Office"
                        },
                        DateOfService = new DateTime(2017, 3, 5, 9, 0, 0),
                        PhysicianName = "Dr.Croxton",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Marvel",
                        LastName = "Karpowicz",
                        Location = new Location
                        {
                            Id = new Guid("fed1d4b8-2039-11e7-bfce-e03f49848f6f"), Name = "Office B"
                        },
                        DateOfService = new DateTime(2017, 1, 16, 9, 0, 0),
                        PhysicianName = "Dr.Popke",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Mozelle",
                        LastName = "Slocomb",
                        Location = new Location
                        {
                            Id = new Guid("fed1d4b9-2039-11e7-8a06-e03f49848f6f"), Name = "Office A"
                        },
                        DateOfService = new DateTime(2017, 1, 24, 8, 0, 0),
                        PhysicianName = "Dr.Haydal",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Vanessa",
                        LastName = "Burress",
                        Location = new Location
                        {
                            Id = new Guid("fed1fb5a-2039-11e7-ac02-e03f49848f6f"), Name = "Office B"
                        },
                        DateOfService = new DateTime(2017, 2, 9, 9, 0, 0),
                        PhysicianName = "Dr.Latner",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Moses",
                        LastName = "Govea",
                        Location = new Location
                        {
                            Id = new Guid("fed222e2-2039-11e7-bf00-e03f49848f6f"), Name = "Main Office"
                        },
                        DateOfService = new DateTime(2017, 1, 9, 12, 0, 0),
                        PhysicianName = "Dr.Akimseu",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Sanjuanita",
                        LastName = "Emberton",
                        Location = new Location
                        {
                            Id = new Guid("fed249fa-2039-11e7-ba78-e03f49848f6f"), Name = "Main Office"
                        },
                        DateOfService = new DateTime(2017, 2, 21, 13, 0, 0),
                        PhysicianName = "Dr.Latner",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Elvera",
                        LastName = "Orebaugh",
                        Location = new Location
                        {
                            Id = new Guid("fed249fb-2039-11e7-acf4-e03f49848f6f"), Name = "Main Office"
                        },
                        DateOfService = new DateTime(2017, 2, 4, 10, 0, 0),
                        PhysicianName = "Dr.Kalberg",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Lashawnda",
                        LastName = "Smiechowski",
                        Location = new Location
                        {
                            Id = new Guid("fed27152-2039-11e7-9e1d-e03f49848f6f"), Name = "Main Office"
                        },
                        DateOfService = new DateTime(2017, 3, 13, 12, 0, 0),
                        PhysicianName = "Dr.Haydal",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Janetta",
                        LastName = "Lipphardt",
                        Location = new Location
                        {
                            Id = new Guid("fed29826-2039-11e7-a9a0-e03f49848f6f"), Name = "Office A"
                        },
                        DateOfService = new DateTime(2017, 1, 11, 17, 0, 0),
                        PhysicianName = "Dr.Alekna",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Russel",
                        LastName = "Zibelli",
                        Location = new Location
                        {
                            Id = new Guid("fed2bf4a-2039-11e7-ac49-e03f49848f6f"), Name = "Office B"
                        },
                        DateOfService = new DateTime(2017, 1, 7, 8, 0, 0),
                        PhysicianName = "Dr.Croxton",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Carley",
                        LastName = "Mongeon",
                        Location = new Location
                        {
                            Id = new Guid("fed2e5ec-2039-11e7-993e-e03f49848f6f"), Name = "Office B"
                        },
                        DateOfService = new DateTime(2017, 1, 22, 12, 0, 0),
                        PhysicianName = "Dr.Alekna",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Corina",
                        LastName = "Gaunce",
                        Location = new Location
                        {
                            Id = new Guid("fed30d9c-2039-11e7-89d6-e03f49848f6f"), Name = "Office B"
                        },
                        DateOfService = new DateTime(2017, 1, 16, 15, 0, 0),
                        PhysicianName = "Dr.Akimseu",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Cody",
                        LastName = "Haggis",
                        Location = new Location
                        {
                            Id = new Guid("fed334b6-2039-11e7-a1e6-e03f49848f6f"), Name = "Office A"
                        },
                        DateOfService = new DateTime(2017, 1, 19, 17, 0, 0),
                        PhysicianName = "Dr.Huerta",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Elenore",
                        LastName = "Parmele",
                        Location = new Location
                        {
                            Id = new Guid("fed35bc6-2039-11e7-ab4c-e03f49848f6f"), Name = "Main Office"
                        },
                        DateOfService = new DateTime(2017, 2, 18, 16, 0, 0),
                        PhysicianName = "Dr.Haydal",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Matha",
                        LastName = "Tolin",
                        Location = new Location
                        {
                            Id = new Guid("fed35bc7-2039-11e7-83b1-e03f49848f6f"), Name = "Office A"
                        },
                        DateOfService = new DateTime(2017, 1, 5, 9, 0, 0),
                        PhysicianName = "Dr.Akimseu",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Willow",
                        LastName = "Salum",
                        Location = new Location
                        {
                            Id = new Guid("fed3a948-2039-11e7-9ea2-e03f49848f6f"), Name = "Office A"
                        },
                        DateOfService = new DateTime(2017, 1, 5, 11, 0, 0),
                        PhysicianName = "Dr.Akimseu",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Lacey",
                        LastName = "Capouch",
                        Location = new Location
                        {
                            Id = new Guid("fed3a949-2039-11e7-bfbd-e03f49848f6f"), Name = "Office A"
                        },
                        DateOfService = new DateTime(2017, 1, 9, 15, 0, 0),
                        PhysicianName = "Dr.Moog",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Jamey",
                        LastName = "Tolman",
                        Location = new Location
                        {
                            Id = new Guid("fed3d0f6-2039-11e7-b382-e03f49848f6f"), Name = "Office A"
                        },
                        DateOfService = new DateTime(2017, 1, 28, 11, 0, 0),
                        PhysicianName = "Dr.Croxton",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Winter",
                        LastName = "Pallazzo",
                        Location = new Location
                        {
                            Id = new Guid("fed3f806-2039-11e7-b854-e03f49848f6f"), Name = "Main Office"
                        },
                        DateOfService = new DateTime(2017, 3, 12, 8, 0, 0),
                        PhysicianName = "Dr.Bullett",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Janetta",
                        LastName = "Sakasegawa",
                        Location = new Location
                        {
                            Id = new Guid("fed41f28-2039-11e7-b005-e03f49848f6f"), Name = "Main Office"
                        },
                        DateOfService = new DateTime(2017, 2, 18, 13, 0, 0),
                        PhysicianName = "Dr.Huerta",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Darrick",
                        LastName = "Haarstad",
                        Location = new Location
                        {
                            Id = new Guid("fed44638-2039-11e7-a5fe-e03f49848f6f"), Name = "Main Office"
                        },
                        DateOfService = new DateTime(2017, 3, 18, 14, 0, 0),
                        PhysicianName = "Dr.Croxton",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Holley",
                        LastName = "Teteak",
                        Location = new Location
                        {
                            Id = new Guid("fed46d54-2039-11e7-a15e-e03f49848f6f"), Name = "Office A"
                        },
                        DateOfService = new DateTime(2017, 2, 4, 17, 0, 0),
                        PhysicianName = "Dr.Alekna",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Lewis",
                        LastName = "Sebert",
                        Location = new Location
                        {
                            Id = new Guid("fed46d55-2039-11e7-8188-e03f49848f6f"), Name = "Office A"
                        },
                        DateOfService = new DateTime(2017, 3, 6, 12, 0, 0),
                        PhysicianName = "Dr.Akimseu",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Sheree",
                        LastName = "Journey",
                        Location = new Location
                        {
                            Id = new Guid("fed4946e-2039-11e7-b823-e03f49848f6f"), Name = "Office B"
                        },
                        DateOfService = new DateTime(2017, 1, 8, 15, 0, 0),
                        PhysicianName = "Dr.Moog",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Amanda",
                        LastName = "Mcswiggan",
                        Location = new Location
                        {
                            Id = new Guid("fed4bb2e-2039-11e7-a804-e03f49848f6f"), Name = "Office A"
                        },
                        DateOfService = new DateTime(2017, 2, 19, 9, 0, 0),
                        PhysicianName = "Dr.Kalberg",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Randal",
                        LastName = "Gentes",
                        Location = new Location
                        {
                            Id = new Guid("fed4e266-2039-11e7-aa97-e03f49848f6f"), Name = "Office B"
                        },
                        DateOfService = new DateTime(2017, 3, 6, 9, 0, 0),
                        PhysicianName = "Dr.Haydal",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Verona",
                        LastName = "Buzard",
                        Location = new Location
                        {
                            Id = new Guid("fed50980-2039-11e7-8c6a-e03f49848f6f"), Name = "Office A"
                        },
                        DateOfService = new DateTime(2017, 2, 8, 13, 0, 0),
                        PhysicianName = "Dr.Latner",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Genna",
                        LastName = "Hokanson",
                        Location = new Location
                        {
                            Id = new Guid("fed5302c-2039-11e7-ad61-e03f49848f6f"), Name = "Main Office"
                        },
                        DateOfService = new DateTime(2017, 2, 5, 17, 0, 0),
                        PhysicianName = "Dr.Croxton",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Eunice",
                        LastName = "Baugham",
                        Location = new Location
                        {
                            Id = new Guid("fed5302d-2039-11e7-81b9-e03f49848f6f"), Name = "Main Office"
                        },
                        DateOfService = new DateTime(2017, 1, 25, 15, 0, 0),
                        PhysicianName = "Dr.Huerta",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Mellie",
                        LastName = "Oldfield",
                        Location = new Location
                        {
                            Id = new Guid("fed57eba-2039-11e7-9d58-e03f49848f6f"), Name = "Office B"
                        },
                        DateOfService = new DateTime(2017, 2, 9, 17, 0, 0),
                        PhysicianName = "Dr.Bullett",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Moira",
                        LastName = "Tuzzolo",
                        Location = new Location
                        {
                            Id = new Guid("fed5a57a-2039-11e7-9ae0-e03f49848f6f"), Name = "Office A"
                        },
                        DateOfService = new DateTime(2017, 1, 6, 17, 0, 0),
                        PhysicianName = "Dr.Bullett",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Altagracia",
                        LastName = "Kraeger",
                        Location = new Location
                        {
                            Id = new Guid("fed5a57b-2039-11e7-a80a-e03f49848f6f"), Name = "Office A"
                        },
                        DateOfService = new DateTime(2017, 1, 18, 11, 0, 0),
                        PhysicianName = "Dr.Kalberg",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Elly",
                        LastName = "Rittenberry",
                        Location = new Location
                        {
                            Id = new Guid("fed5ccee-2039-11e7-8386-e03f49848f6f"), Name = "Office A"
                        },
                        DateOfService = new DateTime(2017, 2, 27, 8, 0, 0),
                        PhysicianName = "Dr.Bullett",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Nichol",
                        LastName = "Maland",
                        Location = new Location
                        {
                            Id = new Guid("fed5f3d4-2039-11e7-a7cc-e03f49848f6f"), Name = "Office B"
                        },
                        DateOfService = new DateTime(2017, 2, 6, 16, 0, 0),
                        PhysicianName = "Dr.Latner",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Hoyt",
                        LastName = "Lanzer",
                        Location = new Location
                        {
                            Id = new Guid("fed61b2c-2039-11e7-92f1-e03f49848f6f"), Name = "Office A"
                        },
                        DateOfService = new DateTime(2017, 1, 3, 8, 0, 0),
                        PhysicianName = "Dr.Kalberg",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Donetta",
                        LastName = "Zubrowski",
                        Location = new Location
                        {
                            Id = new Guid("fed6423a-2039-11e7-b2dd-e03f49848f6f"), Name = "Office A"
                        },
                        DateOfService = new DateTime(2017, 3, 29, 8, 0, 0),
                        PhysicianName = "Dr.Akimseu",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Francesco",
                        LastName = "Cianciola",
                        Location = new Location
                        {
                            Id = new Guid("fed6694c-2039-11e7-abc4-e03f49848f6f"), Name = "Main Office"
                        },
                        DateOfService = new DateTime(2017, 1, 28, 10, 0, 0),
                        PhysicianName = "Dr.Bullett",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Candi",
                        LastName = "Pivin",
                        Location = new Location
                        {
                            Id = new Guid("fed6694d-2039-11e7-8b9f-e03f49848f6f"), Name = "Office B"
                        },
                        DateOfService = new DateTime(2017, 1, 9, 17, 0, 0),
                        PhysicianName = "Dr.Moog",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Rod",
                        LastName = "Camarillo",
                        Location = new Location
                        {
                            Id = new Guid("fed69002-2039-11e7-8372-e03f49848f6f"), Name = "Office B"
                        },
                        DateOfService = new DateTime(2017, 3, 1, 9, 0, 0),
                        PhysicianName = "Dr.Popke",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Doreatha",
                        LastName = "Merkt",
                        Location = new Location
                        {
                            Id = new Guid("fed6b780-2039-11e7-9306-e03f49848f6f"), Name = "Office A"
                        },
                        DateOfService = new DateTime(2017, 3, 8, 10, 0, 0),
                        PhysicianName = "Dr.Croxton",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Open
					},
                },
                TotalCount = 100
            };
        }
    }
}