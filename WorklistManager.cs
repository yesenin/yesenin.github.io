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
                        FirstName = "Kandy",
                        LastName = "Claburn",
                        Location = new Location
                        {
                            Id = new Guid("e20c6180-2046-11e7-b5b7-e03f49848f6f"), Name = "Main Office"
                        },
                        DateOfService = new DateTime(2017, 2, 19, 13, 0, 0),
                        PhysicianName = "Dr.Picini",
                        EnB = EnBStatusResult.InsuranceUnsupported,
                        TaskStatus = TaskStatus.Cancelled
					},
                    new WorklistItem
                    {
                        FirstName = "Cleta",
                        LastName = "Fitzsimmons",
                        Location = new Location
                        {
                            Id = new Guid("e20c6180-2046-11e7-b5b7-e03f49848f6f"), Name = "Main Office"
                        },
                        DateOfService = new DateTime(2017, 2, 16, 11, 0, 0),
                        PhysicianName = "Dr.Schempp",
                        EnB = EnBStatusResult.PracticeEnrollmentNeeded,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Shila",
                        LastName = "Ertel",
                        Location = new Location
                        {
                            Id = new Guid("e20c6180-2046-11e7-b5b7-e03f49848f6f"), Name = "Main Office"
                        },
                        DateOfService = new DateTime(2017, 2, 19, 16, 0, 0),
                        PhysicianName = "Dr.Jaffe",
                        EnB = EnBStatusResult.PracticeEnrollmentNeeded,
                        TaskStatus = TaskStatus.Complete
					},
                    new WorklistItem
                    {
                        FirstName = "Tobie",
                        LastName = "Karadimas",
                        Location = new Location
                        {
                            Id = new Guid("e20c6180-2046-11e7-b5b7-e03f49848f6f"), Name = "Main Office"
                        },
                        DateOfService = new DateTime(2017, 1, 1, 8, 0, 0),
                        PhysicianName = "Dr.Tristan",
                        EnB = EnBStatusResult.InsuranceUnsupported,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Lin",
                        LastName = "Oubre",
                        Location = new Location
                        {
                            Id = new Guid("e20c6180-2046-11e7-b5b7-e03f49848f6f"), Name = "Main Office"
                        },
                        DateOfService = new DateTime(2017, 3, 29, 11, 0, 0),
                        PhysicianName = "Dr.Dardashti",
                        EnB = EnBStatusResult.Eligible,
                        TaskStatus = TaskStatus.Complete
					},
                    new WorklistItem
                    {
                        FirstName = "Elvera",
                        LastName = "Bundette",
                        Location = new Location
                        {
                            Id = new Guid("e20c8898-2046-11e7-a11e-e03f49848f6f"), Name = "1st Office"
                        },
                        DateOfService = new DateTime(2017, 2, 17, 17, 0, 0),
                        PhysicianName = "Dr.Dardashti",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Complete
					},
                    new WorklistItem
                    {
                        FirstName = "Katrina",
                        LastName = "Chatterson",
                        Location = new Location
                        {
                            Id = new Guid("e20c6180-2046-11e7-b5b7-e03f49848f6f"), Name = "Main Office"
                        },
                        DateOfService = new DateTime(2017, 2, 2, 14, 0, 0),
                        PhysicianName = "Dr.Wakins",
                        EnB = EnBStatusResult.NotAvailable,
                        TaskStatus = TaskStatus.Complete
					},
                    new WorklistItem
                    {
                        FirstName = "Ela",
                        LastName = "Varvel",
                        Location = new Location
                        {
                            Id = new Guid("e20c8899-2046-11e7-9287-e03f49848f6f"), Name = "2nd Office"
                        },
                        DateOfService = new DateTime(2017, 3, 6, 8, 0, 0),
                        PhysicianName = "Dr.Schempp",
                        EnB = EnBStatusResult.UninsuredPatient,
                        TaskStatus = TaskStatus.Complete
					},
                    new WorklistItem
                    {
                        FirstName = "Gregg",
                        LastName = "Orlich",
                        Location = new Location
                        {
                            Id = new Guid("e20c8898-2046-11e7-a11e-e03f49848f6f"), Name = "1st Office"
                        },
                        DateOfService = new DateTime(2017, 2, 14, 16, 0, 0),
                        PhysicianName = "Dr.Picini",
                        EnB = EnBStatusResult.NotAvailable,
                        TaskStatus = TaskStatus.Complete
					},
                    new WorklistItem
                    {
                        FirstName = "Austin",
                        LastName = "Cronauer",
                        Location = new Location
                        {
                            Id = new Guid("e20c8898-2046-11e7-a11e-e03f49848f6f"), Name = "1st Office"
                        },
                        DateOfService = new DateTime(2017, 1, 27, 8, 0, 0),
                        PhysicianName = "Dr.Schempp",
                        EnB = EnBStatusResult.PatientNotRecognized,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Gregg",
                        LastName = "Mosley",
                        Location = new Location
                        {
                            Id = new Guid("e20c8899-2046-11e7-9287-e03f49848f6f"), Name = "2nd Office"
                        },
                        DateOfService = new DateTime(2017, 1, 3, 16, 0, 0),
                        PhysicianName = "Dr.Jaffe",
                        EnB = EnBStatusResult.PatientNotRecognized,
                        TaskStatus = TaskStatus.Cancelled
					},
                    new WorklistItem
                    {
                        FirstName = "Tommye",
                        LastName = "Connerty",
                        Location = new Location
                        {
                            Id = new Guid("e20c6180-2046-11e7-b5b7-e03f49848f6f"), Name = "Main Office"
                        },
                        DateOfService = new DateTime(2017, 3, 26, 15, 0, 0),
                        PhysicianName = "Dr.Heigl",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.InProgress
					},
                    new WorklistItem
                    {
                        FirstName = "Latanya",
                        LastName = "Erbach",
                        Location = new Location
                        {
                            Id = new Guid("e20c6180-2046-11e7-b5b7-e03f49848f6f"), Name = "Main Office"
                        },
                        DateOfService = new DateTime(2017, 2, 23, 14, 0, 0),
                        PhysicianName = "Dr.Heigl",
                        EnB = EnBStatusResult.InsuranceUnsupported,
                        TaskStatus = TaskStatus.InProgress
					},
                    new WorklistItem
                    {
                        FirstName = "Gilbert",
                        LastName = "Mossbarger",
                        Location = new Location
                        {
                            Id = new Guid("e20c8898-2046-11e7-a11e-e03f49848f6f"), Name = "1st Office"
                        },
                        DateOfService = new DateTime(2017, 3, 16, 8, 0, 0),
                        PhysicianName = "Dr.Tristan",
                        EnB = EnBStatusResult.PatientNotRecognized,
                        TaskStatus = TaskStatus.Complete
					},
                    new WorklistItem
                    {
                        FirstName = "Willa",
                        LastName = "Seanez",
                        Location = new Location
                        {
                            Id = new Guid("e20c6180-2046-11e7-b5b7-e03f49848f6f"), Name = "Main Office"
                        },
                        DateOfService = new DateTime(2017, 2, 26, 12, 0, 0),
                        PhysicianName = "Dr.Boller",
                        EnB = EnBStatusResult.Eligible,
                        TaskStatus = TaskStatus.Complete
					},
                    new WorklistItem
                    {
                        FirstName = "Emily",
                        LastName = "Boehmke",
                        Location = new Location
                        {
                            Id = new Guid("e20c8899-2046-11e7-9287-e03f49848f6f"), Name = "2nd Office"
                        },
                        DateOfService = new DateTime(2017, 3, 27, 13, 0, 0),
                        PhysicianName = "Dr.Tristan",
                        EnB = EnBStatusResult.PracticeEnrollmentNeeded,
                        TaskStatus = TaskStatus.Cancelled
					},
                    new WorklistItem
                    {
                        FirstName = "Yuette",
                        LastName = "Ulch",
                        Location = new Location
                        {
                            Id = new Guid("e20c8899-2046-11e7-9287-e03f49848f6f"), Name = "2nd Office"
                        },
                        DateOfService = new DateTime(2017, 1, 15, 8, 0, 0),
                        PhysicianName = "Dr.Heigl",
                        EnB = EnBStatusResult.SystemError,
                        TaskStatus = TaskStatus.Complete
					},
                    new WorklistItem
                    {
                        FirstName = "Derrick",
                        LastName = "Corneil",
                        Location = new Location
                        {
                            Id = new Guid("e20c8899-2046-11e7-9287-e03f49848f6f"), Name = "2nd Office"
                        },
                        DateOfService = new DateTime(2017, 3, 10, 9, 0, 0),
                        PhysicianName = "Dr.Chasse",
                        EnB = EnBStatusResult.UninsuredPatient,
                        TaskStatus = TaskStatus.Cancelled
					},
                    new WorklistItem
                    {
                        FirstName = "Shirley",
                        LastName = "Dechert",
                        Location = new Location
                        {
                            Id = new Guid("e20c8899-2046-11e7-9287-e03f49848f6f"), Name = "2nd Office"
                        },
                        DateOfService = new DateTime(2017, 3, 4, 12, 0, 0),
                        PhysicianName = "Dr.Rubbo",
                        EnB = EnBStatusResult.Eligible,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Alayna",
                        LastName = "Bellantoni",
                        Location = new Location
                        {
                            Id = new Guid("e20c8898-2046-11e7-a11e-e03f49848f6f"), Name = "1st Office"
                        },
                        DateOfService = new DateTime(2017, 1, 28, 8, 0, 0),
                        PhysicianName = "Dr.Chasse",
                        EnB = EnBStatusResult.InsufficientPlanInformation,
                        TaskStatus = TaskStatus.Complete
					},
                    new WorklistItem
                    {
                        FirstName = "Leigh",
                        LastName = "Wardhaugh",
                        Location = new Location
                        {
                            Id = new Guid("e20c8898-2046-11e7-a11e-e03f49848f6f"), Name = "1st Office"
                        },
                        DateOfService = new DateTime(2017, 1, 21, 12, 0, 0),
                        PhysicianName = "Dr.Jaffe",
                        EnB = EnBStatusResult.InsufficientPlanInformation,
                        TaskStatus = TaskStatus.Complete
					},
                    new WorklistItem
                    {
                        FirstName = "Latrisha",
                        LastName = "Simo",
                        Location = new Location
                        {
                            Id = new Guid("e20c8898-2046-11e7-a11e-e03f49848f6f"), Name = "1st Office"
                        },
                        DateOfService = new DateTime(2017, 1, 5, 15, 0, 0),
                        PhysicianName = "Dr.Picini",
                        EnB = EnBStatusResult.NotAvailable,
                        TaskStatus = TaskStatus.InProgress
					},
                    new WorklistItem
                    {
                        FirstName = "Gavin",
                        LastName = "Starace",
                        Location = new Location
                        {
                            Id = new Guid("e20c8898-2046-11e7-a11e-e03f49848f6f"), Name = "1st Office"
                        },
                        DateOfService = new DateTime(2017, 1, 27, 9, 0, 0),
                        PhysicianName = "Dr.Tristan",
                        EnB = EnBStatusResult.Eligible,
                        TaskStatus = TaskStatus.Cancelled
					},
                    new WorklistItem
                    {
                        FirstName = "Marine",
                        LastName = "Derrickson",
                        Location = new Location
                        {
                            Id = new Guid("e20c8898-2046-11e7-a11e-e03f49848f6f"), Name = "1st Office"
                        },
                        DateOfService = new DateTime(2017, 3, 18, 10, 0, 0),
                        PhysicianName = "Dr.Schempp",
                        EnB = EnBStatusResult.Eligible,
                        TaskStatus = TaskStatus.Complete
					},
                    new WorklistItem
                    {
                        FirstName = "Mirian",
                        LastName = "Hedemann",
                        Location = new Location
                        {
                            Id = new Guid("e20c8899-2046-11e7-9287-e03f49848f6f"), Name = "2nd Office"
                        },
                        DateOfService = new DateTime(2017, 3, 23, 10, 0, 0),
                        PhysicianName = "Dr.Boller",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Cancelled
					},
                    new WorklistItem
                    {
                        FirstName = "Scott",
                        LastName = "Graden",
                        Location = new Location
                        {
                            Id = new Guid("e20c8899-2046-11e7-9287-e03f49848f6f"), Name = "2nd Office"
                        },
                        DateOfService = new DateTime(2017, 2, 19, 16, 0, 0),
                        PhysicianName = "Dr.Dardashti",
                        EnB = EnBStatusResult.NotDetermined,
                        TaskStatus = TaskStatus.InProgress
					},
                    new WorklistItem
                    {
                        FirstName = "Glenn",
                        LastName = "Domek",
                        Location = new Location
                        {
                            Id = new Guid("e20c6180-2046-11e7-b5b7-e03f49848f6f"), Name = "Main Office"
                        },
                        DateOfService = new DateTime(2017, 3, 6, 14, 0, 0),
                        PhysicianName = "Dr.Rubbo",
                        EnB = EnBStatusResult.SystemError,
                        TaskStatus = TaskStatus.InProgress
					},
                    new WorklistItem
                    {
                        FirstName = "Teri",
                        LastName = "Ramnarase",
                        Location = new Location
                        {
                            Id = new Guid("e20c8898-2046-11e7-a11e-e03f49848f6f"), Name = "1st Office"
                        },
                        DateOfService = new DateTime(2017, 1, 22, 16, 0, 0),
                        PhysicianName = "Dr.Rubbo",
                        EnB = EnBStatusResult.Eligible,
                        TaskStatus = TaskStatus.Cancelled
					},
                    new WorklistItem
                    {
                        FirstName = "Yuki",
                        LastName = "Argudo",
                        Location = new Location
                        {
                            Id = new Guid("e20c8898-2046-11e7-a11e-e03f49848f6f"), Name = "1st Office"
                        },
                        DateOfService = new DateTime(2017, 3, 3, 17, 0, 0),
                        PhysicianName = "Dr.Jaffe",
                        EnB = EnBStatusResult.InsuranceUnsupported,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Dierdre",
                        LastName = "Morang",
                        Location = new Location
                        {
                            Id = new Guid("e20c8898-2046-11e7-a11e-e03f49848f6f"), Name = "1st Office"
                        },
                        DateOfService = new DateTime(2017, 3, 24, 14, 0, 0),
                        PhysicianName = "Dr.Rubbo",
                        EnB = EnBStatusResult.PatientNotRecognized,
                        TaskStatus = TaskStatus.InProgress
					},
                    new WorklistItem
                    {
                        FirstName = "Nelia",
                        LastName = "Kuser",
                        Location = new Location
                        {
                            Id = new Guid("e20c8898-2046-11e7-a11e-e03f49848f6f"), Name = "1st Office"
                        },
                        DateOfService = new DateTime(2017, 2, 12, 15, 0, 0),
                        PhysicianName = "Dr.Chasse",
                        EnB = EnBStatusResult.InsufficientPlanInformation,
                        TaskStatus = TaskStatus.Complete
					},
                    new WorklistItem
                    {
                        FirstName = "Alonso",
                        LastName = "Filas",
                        Location = new Location
                        {
                            Id = new Guid("e20c8898-2046-11e7-a11e-e03f49848f6f"), Name = "1st Office"
                        },
                        DateOfService = new DateTime(2017, 2, 13, 9, 0, 0),
                        PhysicianName = "Dr.Boller",
                        EnB = EnBStatusResult.NotAvailable,
                        TaskStatus = TaskStatus.InProgress
					},
                    new WorklistItem
                    {
                        FirstName = "Kandra",
                        LastName = "Jacinthe",
                        Location = new Location
                        {
                            Id = new Guid("e20c8898-2046-11e7-a11e-e03f49848f6f"), Name = "1st Office"
                        },
                        DateOfService = new DateTime(2017, 1, 21, 8, 0, 0),
                        PhysicianName = "Dr.Jaffe",
                        EnB = EnBStatusResult.UninsuredPatient,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Newton",
                        LastName = "Army",
                        Location = new Location
                        {
                            Id = new Guid("e20c6180-2046-11e7-b5b7-e03f49848f6f"), Name = "Main Office"
                        },
                        DateOfService = new DateTime(2017, 1, 13, 8, 0, 0),
                        PhysicianName = "Dr.Schempp",
                        EnB = EnBStatusResult.SystemTimeOut,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Aleen",
                        LastName = "Zawasky",
                        Location = new Location
                        {
                            Id = new Guid("e20c8899-2046-11e7-9287-e03f49848f6f"), Name = "2nd Office"
                        },
                        DateOfService = new DateTime(2017, 3, 11, 12, 0, 0),
                        PhysicianName = "Dr.Chasse",
                        EnB = EnBStatusResult.Eligible,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Kasandra",
                        LastName = "Ialongo",
                        Location = new Location
                        {
                            Id = new Guid("e20c8899-2046-11e7-9287-e03f49848f6f"), Name = "2nd Office"
                        },
                        DateOfService = new DateTime(2017, 3, 9, 9, 0, 0),
                        PhysicianName = "Dr.Schempp",
                        EnB = EnBStatusResult.SystemError,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Flora",
                        LastName = "Schwalbe",
                        Location = new Location
                        {
                            Id = new Guid("e20c6180-2046-11e7-b5b7-e03f49848f6f"), Name = "Main Office"
                        },
                        DateOfService = new DateTime(2017, 2, 17, 15, 0, 0),
                        PhysicianName = "Dr.Chasse",
                        EnB = EnBStatusResult.NotAvailable,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Tamica",
                        LastName = "Erving",
                        Location = new Location
                        {
                            Id = new Guid("e20c8899-2046-11e7-9287-e03f49848f6f"), Name = "2nd Office"
                        },
                        DateOfService = new DateTime(2017, 3, 10, 15, 0, 0),
                        PhysicianName = "Dr.Wakins",
                        EnB = EnBStatusResult.InsuranceUnsupported,
                        TaskStatus = TaskStatus.Cancelled
					},
                    new WorklistItem
                    {
                        FirstName = "Wendi",
                        LastName = "Liborio",
                        Location = new Location
                        {
                            Id = new Guid("e20c8899-2046-11e7-9287-e03f49848f6f"), Name = "2nd Office"
                        },
                        DateOfService = new DateTime(2017, 2, 10, 17, 0, 0),
                        PhysicianName = "Dr.Chasse",
                        EnB = EnBStatusResult.NotAvailable,
                        TaskStatus = TaskStatus.Complete
					},
                    new WorklistItem
                    {
                        FirstName = "Robbie",
                        LastName = "Hongeva",
                        Location = new Location
                        {
                            Id = new Guid("e20c8899-2046-11e7-9287-e03f49848f6f"), Name = "2nd Office"
                        },
                        DateOfService = new DateTime(2017, 3, 2, 14, 0, 0),
                        PhysicianName = "Dr.Chasse",
                        EnB = EnBStatusResult.InsufficientPlanInformation,
                        TaskStatus = TaskStatus.InProgress
					},
                    new WorklistItem
                    {
                        FirstName = "Shavonda",
                        LastName = "Stefan",
                        Location = new Location
                        {
                            Id = new Guid("e20c8898-2046-11e7-a11e-e03f49848f6f"), Name = "1st Office"
                        },
                        DateOfService = new DateTime(2017, 3, 21, 17, 0, 0),
                        PhysicianName = "Dr.Dardashti",
                        EnB = EnBStatusResult.UninsuredPatient,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Samatha",
                        LastName = "Koenecke",
                        Location = new Location
                        {
                            Id = new Guid("e20c6180-2046-11e7-b5b7-e03f49848f6f"), Name = "Main Office"
                        },
                        DateOfService = new DateTime(2017, 1, 2, 14, 0, 0),
                        PhysicianName = "Dr.Chasse",
                        EnB = EnBStatusResult.NotDetermined,
                        TaskStatus = TaskStatus.InProgress
					},
                    new WorklistItem
                    {
                        FirstName = "Ariane",
                        LastName = "Rauhuff",
                        Location = new Location
                        {
                            Id = new Guid("e20c8899-2046-11e7-9287-e03f49848f6f"), Name = "2nd Office"
                        },
                        DateOfService = new DateTime(2017, 3, 8, 11, 0, 0),
                        PhysicianName = "Dr.Dardashti",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Complete
					},
                    new WorklistItem
                    {
                        FirstName = "Steve",
                        LastName = "Dronen",
                        Location = new Location
                        {
                            Id = new Guid("e20c6180-2046-11e7-b5b7-e03f49848f6f"), Name = "Main Office"
                        },
                        DateOfService = new DateTime(2017, 3, 8, 10, 0, 0),
                        PhysicianName = "Dr.Tristan",
                        EnB = EnBStatusResult.Eligible,
                        TaskStatus = TaskStatus.InProgress
					},
                    new WorklistItem
                    {
                        FirstName = "Phyllis",
                        LastName = "Barra",
                        Location = new Location
                        {
                            Id = new Guid("e20c8899-2046-11e7-9287-e03f49848f6f"), Name = "2nd Office"
                        },
                        DateOfService = new DateTime(2017, 1, 13, 9, 0, 0),
                        PhysicianName = "Dr.Rubbo",
                        EnB = EnBStatusResult.UninsuredPatient,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Pearle",
                        LastName = "Sturrock",
                        Location = new Location
                        {
                            Id = new Guid("e20c6180-2046-11e7-b5b7-e03f49848f6f"), Name = "Main Office"
                        },
                        DateOfService = new DateTime(2017, 1, 1, 8, 0, 0),
                        PhysicianName = "Dr.Dardashti",
                        EnB = EnBStatusResult.NotAvailable,
                        TaskStatus = TaskStatus.Cancelled
					},
                    new WorklistItem
                    {
                        FirstName = "Logan",
                        LastName = "Tiogangco",
                        Location = new Location
                        {
                            Id = new Guid("e20c8898-2046-11e7-a11e-e03f49848f6f"), Name = "1st Office"
                        },
                        DateOfService = new DateTime(2017, 3, 4, 10, 0, 0),
                        PhysicianName = "Dr.Picini",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.InProgress
					},
                    new WorklistItem
                    {
                        FirstName = "Palma",
                        LastName = "Wuest",
                        Location = new Location
                        {
                            Id = new Guid("e20c8898-2046-11e7-a11e-e03f49848f6f"), Name = "1st Office"
                        },
                        DateOfService = new DateTime(2017, 2, 22, 13, 0, 0),
                        PhysicianName = "Dr.Rubbo",
                        EnB = EnBStatusResult.MissingPatientInformation,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Catherine",
                        LastName = "Villwock",
                        Location = new Location
                        {
                            Id = new Guid("e20c8898-2046-11e7-a11e-e03f49848f6f"), Name = "1st Office"
                        },
                        DateOfService = new DateTime(2017, 2, 26, 15, 0, 0),
                        PhysicianName = "Dr.Jaffe",
                        EnB = EnBStatusResult.NotDetermined,
                        TaskStatus = TaskStatus.Cancelled
					},
                    new WorklistItem
                    {
                        FirstName = "Carissa",
                        LastName = "Troff",
                        Location = new Location
                        {
                            Id = new Guid("e20c8898-2046-11e7-a11e-e03f49848f6f"), Name = "1st Office"
                        },
                        DateOfService = new DateTime(2017, 3, 16, 11, 0, 0),
                        PhysicianName = "Dr.Dardashti",
                        EnB = EnBStatusResult.InsufficientPlanInformation,
                        TaskStatus = TaskStatus.Complete
					},
                    new WorklistItem
                    {
                        FirstName = "Lisabeth",
                        LastName = "Bongiardina",
                        Location = new Location
                        {
                            Id = new Guid("e20c6180-2046-11e7-b5b7-e03f49848f6f"), Name = "Main Office"
                        },
                        DateOfService = new DateTime(2017, 1, 27, 14, 0, 0),
                        PhysicianName = "Dr.Heigl",
                        EnB = EnBStatusResult.NotDetermined,
                        TaskStatus = TaskStatus.InProgress
					},
                    new WorklistItem
                    {
                        FirstName = "Ruthie",
                        LastName = "Pavlovich",
                        Location = new Location
                        {
                            Id = new Guid("e20c6180-2046-11e7-b5b7-e03f49848f6f"), Name = "Main Office"
                        },
                        DateOfService = new DateTime(2017, 3, 14, 9, 0, 0),
                        PhysicianName = "Dr.Wakins",
                        EnB = EnBStatusResult.MissingPatientInformation,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Jovita",
                        LastName = "Johniken",
                        Location = new Location
                        {
                            Id = new Guid("e20c6180-2046-11e7-b5b7-e03f49848f6f"), Name = "Main Office"
                        },
                        DateOfService = new DateTime(2017, 3, 20, 10, 0, 0),
                        PhysicianName = "Dr.Wakins",
                        EnB = EnBStatusResult.Eligible,
                        TaskStatus = TaskStatus.Complete
					},
                    new WorklistItem
                    {
                        FirstName = "Toccara",
                        LastName = "Augusta",
                        Location = new Location
                        {
                            Id = new Guid("e20c6180-2046-11e7-b5b7-e03f49848f6f"), Name = "Main Office"
                        },
                        DateOfService = new DateTime(2017, 2, 29, 13, 0, 0),
                        PhysicianName = "Dr.Boller",
                        EnB = EnBStatusResult.PatientNotRecognized,
                        TaskStatus = TaskStatus.Cancelled
					},
                    new WorklistItem
                    {
                        FirstName = "Evalyn",
                        LastName = "Marth",
                        Location = new Location
                        {
                            Id = new Guid("e20c8899-2046-11e7-9287-e03f49848f6f"), Name = "2nd Office"
                        },
                        DateOfService = new DateTime(2017, 2, 8, 15, 0, 0),
                        PhysicianName = "Dr.Jaffe",
                        EnB = EnBStatusResult.UninsuredPatient,
                        TaskStatus = TaskStatus.Complete
					},
                    new WorklistItem
                    {
                        FirstName = "Jim",
                        LastName = "Mapp",
                        Location = new Location
                        {
                            Id = new Guid("e20c8898-2046-11e7-a11e-e03f49848f6f"), Name = "1st Office"
                        },
                        DateOfService = new DateTime(2017, 2, 11, 10, 0, 0),
                        PhysicianName = "Dr.Jaffe",
                        EnB = EnBStatusResult.NotAvailable,
                        TaskStatus = TaskStatus.Complete
					},
                    new WorklistItem
                    {
                        FirstName = "Patricia",
                        LastName = "Nyland",
                        Location = new Location
                        {
                            Id = new Guid("e20c6180-2046-11e7-b5b7-e03f49848f6f"), Name = "Main Office"
                        },
                        DateOfService = new DateTime(2017, 1, 5, 15, 0, 0),
                        PhysicianName = "Dr.Heigl",
                        EnB = EnBStatusResult.NotDetermined,
                        TaskStatus = TaskStatus.Complete
					},
                    new WorklistItem
                    {
                        FirstName = "Keenan",
                        LastName = "Tenneson",
                        Location = new Location
                        {
                            Id = new Guid("e20c8898-2046-11e7-a11e-e03f49848f6f"), Name = "1st Office"
                        },
                        DateOfService = new DateTime(2017, 3, 21, 17, 0, 0),
                        PhysicianName = "Dr.Wakins",
                        EnB = EnBStatusResult.Eligible,
                        TaskStatus = TaskStatus.InProgress
					},
                    new WorklistItem
                    {
                        FirstName = "Emily",
                        LastName = "Kotaki",
                        Location = new Location
                        {
                            Id = new Guid("e20c8898-2046-11e7-a11e-e03f49848f6f"), Name = "1st Office"
                        },
                        DateOfService = new DateTime(2017, 1, 8, 12, 0, 0),
                        PhysicianName = "Dr.Schempp",
                        EnB = EnBStatusResult.MissingPatientInformation,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Neta",
                        LastName = "Conklin",
                        Location = new Location
                        {
                            Id = new Guid("e20c6180-2046-11e7-b5b7-e03f49848f6f"), Name = "Main Office"
                        },
                        DateOfService = new DateTime(2017, 3, 4, 16, 0, 0),
                        PhysicianName = "Dr.Dardashti",
                        EnB = EnBStatusResult.MissingPatientInformation,
                        TaskStatus = TaskStatus.Cancelled
					},
                    new WorklistItem
                    {
                        FirstName = "Kandace",
                        LastName = "Shanley",
                        Location = new Location
                        {
                            Id = new Guid("e20c6180-2046-11e7-b5b7-e03f49848f6f"), Name = "Main Office"
                        },
                        DateOfService = new DateTime(2017, 2, 29, 13, 0, 0),
                        PhysicianName = "Dr.Jaffe",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Cancelled
					},
                    new WorklistItem
                    {
                        FirstName = "Johnie",
                        LastName = "Dimmitt",
                        Location = new Location
                        {
                            Id = new Guid("e20c6180-2046-11e7-b5b7-e03f49848f6f"), Name = "Main Office"
                        },
                        DateOfService = new DateTime(2017, 1, 25, 16, 0, 0),
                        PhysicianName = "Dr.Rubbo",
                        EnB = EnBStatusResult.MissingPatientInformation,
                        TaskStatus = TaskStatus.InProgress
					},
                    new WorklistItem
                    {
                        FirstName = "Ricardo",
                        LastName = "Dulong",
                        Location = new Location
                        {
                            Id = new Guid("e20c8898-2046-11e7-a11e-e03f49848f6f"), Name = "1st Office"
                        },
                        DateOfService = new DateTime(2017, 1, 19, 10, 0, 0),
                        PhysicianName = "Dr.Schempp",
                        EnB = EnBStatusResult.PatientNotRecognized,
                        TaskStatus = TaskStatus.Cancelled
					},
                    new WorklistItem
                    {
                        FirstName = "Becky",
                        LastName = "Nordine",
                        Location = new Location
                        {
                            Id = new Guid("e20c8899-2046-11e7-9287-e03f49848f6f"), Name = "2nd Office"
                        },
                        DateOfService = new DateTime(2017, 3, 21, 12, 0, 0),
                        PhysicianName = "Dr.Rubbo",
                        EnB = EnBStatusResult.Eligible,
                        TaskStatus = TaskStatus.Complete
					},
                    new WorklistItem
                    {
                        FirstName = "Loyce",
                        LastName = "Carpenter",
                        Location = new Location
                        {
                            Id = new Guid("e20c6180-2046-11e7-b5b7-e03f49848f6f"), Name = "Main Office"
                        },
                        DateOfService = new DateTime(2017, 2, 20, 9, 0, 0),
                        PhysicianName = "Dr.Rubbo",
                        EnB = EnBStatusResult.NotAvailable,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Jordon",
                        LastName = "Locher",
                        Location = new Location
                        {
                            Id = new Guid("e20c8898-2046-11e7-a11e-e03f49848f6f"), Name = "1st Office"
                        },
                        DateOfService = new DateTime(2017, 1, 3, 15, 0, 0),
                        PhysicianName = "Dr.Jaffe",
                        EnB = EnBStatusResult.SystemTimeOut,
                        TaskStatus = TaskStatus.Complete
					},
                    new WorklistItem
                    {
                        FirstName = "Otha",
                        LastName = "Stearns",
                        Location = new Location
                        {
                            Id = new Guid("e20c6180-2046-11e7-b5b7-e03f49848f6f"), Name = "Main Office"
                        },
                        DateOfService = new DateTime(2017, 3, 20, 8, 0, 0),
                        PhysicianName = "Dr.Rubbo",
                        EnB = EnBStatusResult.PatientNotRecognized,
                        TaskStatus = TaskStatus.Cancelled
					},
                    new WorklistItem
                    {
                        FirstName = "Carson",
                        LastName = "Conrady",
                        Location = new Location
                        {
                            Id = new Guid("e20c6180-2046-11e7-b5b7-e03f49848f6f"), Name = "Main Office"
                        },
                        DateOfService = new DateTime(2017, 1, 14, 15, 0, 0),
                        PhysicianName = "Dr.Wakins",
                        EnB = EnBStatusResult.SystemTimeOut,
                        TaskStatus = TaskStatus.Cancelled
					},
                    new WorklistItem
                    {
                        FirstName = "Hoyt",
                        LastName = "Sheaffer",
                        Location = new Location
                        {
                            Id = new Guid("e20c6180-2046-11e7-b5b7-e03f49848f6f"), Name = "Main Office"
                        },
                        DateOfService = new DateTime(2017, 3, 5, 9, 0, 0),
                        PhysicianName = "Dr.Picini",
                        EnB = EnBStatusResult.SystemError,
                        TaskStatus = TaskStatus.InProgress
					},
                    new WorklistItem
                    {
                        FirstName = "Marybelle",
                        LastName = "Bracetty",
                        Location = new Location
                        {
                            Id = new Guid("e20c8899-2046-11e7-9287-e03f49848f6f"), Name = "2nd Office"
                        },
                        DateOfService = new DateTime(2017, 3, 28, 9, 0, 0),
                        PhysicianName = "Dr.Boller",
                        EnB = EnBStatusResult.NotDetermined,
                        TaskStatus = TaskStatus.Complete
					},
                    new WorklistItem
                    {
                        FirstName = "Maryln",
                        LastName = "Routon",
                        Location = new Location
                        {
                            Id = new Guid("e20c6180-2046-11e7-b5b7-e03f49848f6f"), Name = "Main Office"
                        },
                        DateOfService = new DateTime(2017, 1, 17, 10, 0, 0),
                        PhysicianName = "Dr.Picini",
                        EnB = EnBStatusResult.InsufficientPlanInformation,
                        TaskStatus = TaskStatus.InProgress
					},
                    new WorklistItem
                    {
                        FirstName = "Vi",
                        LastName = "Boutilier",
                        Location = new Location
                        {
                            Id = new Guid("e20c8899-2046-11e7-9287-e03f49848f6f"), Name = "2nd Office"
                        },
                        DateOfService = new DateTime(2017, 2, 11, 9, 0, 0),
                        PhysicianName = "Dr.Jaffe",
                        EnB = EnBStatusResult.PatientNotRecognized,
                        TaskStatus = TaskStatus.InProgress
					},
                    new WorklistItem
                    {
                        FirstName = "Amparo",
                        LastName = "Nova",
                        Location = new Location
                        {
                            Id = new Guid("e20c8899-2046-11e7-9287-e03f49848f6f"), Name = "2nd Office"
                        },
                        DateOfService = new DateTime(2017, 3, 3, 11, 0, 0),
                        PhysicianName = "Dr.Boller",
                        EnB = EnBStatusResult.PracticeEnrollmentNeeded,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Malena",
                        LastName = "Ramis",
                        Location = new Location
                        {
                            Id = new Guid("e20c6180-2046-11e7-b5b7-e03f49848f6f"), Name = "Main Office"
                        },
                        DateOfService = new DateTime(2017, 1, 10, 11, 0, 0),
                        PhysicianName = "Dr.Boller",
                        EnB = EnBStatusResult.InsuranceUnsupported,
                        TaskStatus = TaskStatus.InProgress
					},
                    new WorklistItem
                    {
                        FirstName = "Syreeta",
                        LastName = "Hallahan",
                        Location = new Location
                        {
                            Id = new Guid("e20c8898-2046-11e7-a11e-e03f49848f6f"), Name = "1st Office"
                        },
                        DateOfService = new DateTime(2017, 3, 8, 15, 0, 0),
                        PhysicianName = "Dr.Wakins",
                        EnB = EnBStatusResult.Eligible,
                        TaskStatus = TaskStatus.InProgress
					},
                    new WorklistItem
                    {
                        FirstName = "Elke",
                        LastName = "Grune",
                        Location = new Location
                        {
                            Id = new Guid("e20c8899-2046-11e7-9287-e03f49848f6f"), Name = "2nd Office"
                        },
                        DateOfService = new DateTime(2017, 2, 9, 11, 0, 0),
                        PhysicianName = "Dr.Rubbo",
                        EnB = EnBStatusResult.NotDetermined,
                        TaskStatus = TaskStatus.InProgress
					},
                    new WorklistItem
                    {
                        FirstName = "Lilian",
                        LastName = "Feierman",
                        Location = new Location
                        {
                            Id = new Guid("e20c8899-2046-11e7-9287-e03f49848f6f"), Name = "2nd Office"
                        },
                        DateOfService = new DateTime(2017, 1, 21, 16, 0, 0),
                        PhysicianName = "Dr.Dardashti",
                        EnB = EnBStatusResult.SystemTimeOut,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Mandy",
                        LastName = "Aparo",
                        Location = new Location
                        {
                            Id = new Guid("e20c8899-2046-11e7-9287-e03f49848f6f"), Name = "2nd Office"
                        },
                        DateOfService = new DateTime(2017, 1, 29, 9, 0, 0),
                        PhysicianName = "Dr.Heigl",
                        EnB = EnBStatusResult.PatientNotRecognized,
                        TaskStatus = TaskStatus.Cancelled
					},
                    new WorklistItem
                    {
                        FirstName = "Maryanne",
                        LastName = "Bakko",
                        Location = new Location
                        {
                            Id = new Guid("e20c8899-2046-11e7-9287-e03f49848f6f"), Name = "2nd Office"
                        },
                        DateOfService = new DateTime(2017, 2, 13, 8, 0, 0),
                        PhysicianName = "Dr.Jaffe",
                        EnB = EnBStatusResult.UninsuredPatient,
                        TaskStatus = TaskStatus.Cancelled
					},
                    new WorklistItem
                    {
                        FirstName = "Pearlene",
                        LastName = "Crockarell",
                        Location = new Location
                        {
                            Id = new Guid("e20c8899-2046-11e7-9287-e03f49848f6f"), Name = "2nd Office"
                        },
                        DateOfService = new DateTime(2017, 3, 10, 8, 0, 0),
                        PhysicianName = "Dr.Jaffe",
                        EnB = EnBStatusResult.SystemTimeOut,
                        TaskStatus = TaskStatus.Complete
					},
                    new WorklistItem
                    {
                        FirstName = "Ninfa",
                        LastName = "Pailet",
                        Location = new Location
                        {
                            Id = new Guid("e20c8899-2046-11e7-9287-e03f49848f6f"), Name = "2nd Office"
                        },
                        DateOfService = new DateTime(2017, 1, 2, 16, 0, 0),
                        PhysicianName = "Dr.Heigl",
                        EnB = EnBStatusResult.SystemError,
                        TaskStatus = TaskStatus.Complete
					},
                    new WorklistItem
                    {
                        FirstName = "Delinda",
                        LastName = "Kutscher",
                        Location = new Location
                        {
                            Id = new Guid("e20c8898-2046-11e7-a11e-e03f49848f6f"), Name = "1st Office"
                        },
                        DateOfService = new DateTime(2017, 1, 14, 15, 0, 0),
                        PhysicianName = "Dr.Picini",
                        EnB = EnBStatusResult.PatientNotRecognized,
                        TaskStatus = TaskStatus.InProgress
					},
                    new WorklistItem
                    {
                        FirstName = "Kyra",
                        LastName = "Kindschuh",
                        Location = new Location
                        {
                            Id = new Guid("e20c8898-2046-11e7-a11e-e03f49848f6f"), Name = "1st Office"
                        },
                        DateOfService = new DateTime(2017, 1, 14, 14, 0, 0),
                        PhysicianName = "Dr.Heigl",
                        EnB = EnBStatusResult.MissingPatientInformation,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Giovanna",
                        LastName = "Florczak",
                        Location = new Location
                        {
                            Id = new Guid("e20c6180-2046-11e7-b5b7-e03f49848f6f"), Name = "Main Office"
                        },
                        DateOfService = new DateTime(2017, 1, 15, 12, 0, 0),
                        PhysicianName = "Dr.Boller",
                        EnB = EnBStatusResult.InsufficientPlanInformation,
                        TaskStatus = TaskStatus.Cancelled
					},
                    new WorklistItem
                    {
                        FirstName = "Shiloh",
                        LastName = "Gladden",
                        Location = new Location
                        {
                            Id = new Guid("e20c6180-2046-11e7-b5b7-e03f49848f6f"), Name = "Main Office"
                        },
                        DateOfService = new DateTime(2017, 1, 24, 11, 0, 0),
                        PhysicianName = "Dr.Rubbo",
                        EnB = EnBStatusResult.NotAvailable,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Martha",
                        LastName = "Holway",
                        Location = new Location
                        {
                            Id = new Guid("e20c6180-2046-11e7-b5b7-e03f49848f6f"), Name = "Main Office"
                        },
                        DateOfService = new DateTime(2017, 3, 12, 8, 0, 0),
                        PhysicianName = "Dr.Jaffe",
                        EnB = EnBStatusResult.InsufficientPlanInformation,
                        TaskStatus = TaskStatus.InProgress
					},
                    new WorklistItem
                    {
                        FirstName = "Leah",
                        LastName = "Janke",
                        Location = new Location
                        {
                            Id = new Guid("e20c8899-2046-11e7-9287-e03f49848f6f"), Name = "2nd Office"
                        },
                        DateOfService = new DateTime(2017, 3, 17, 11, 0, 0),
                        PhysicianName = "Dr.Jaffe",
                        EnB = EnBStatusResult.PatientNotRecognized,
                        TaskStatus = TaskStatus.Cancelled
					},
                    new WorklistItem
                    {
                        FirstName = "Marcie",
                        LastName = "Lorello",
                        Location = new Location
                        {
                            Id = new Guid("e20c6180-2046-11e7-b5b7-e03f49848f6f"), Name = "Main Office"
                        },
                        DateOfService = new DateTime(2017, 3, 12, 15, 0, 0),
                        PhysicianName = "Dr.Chasse",
                        EnB = EnBStatusResult.NotAvailable,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Cleta",
                        LastName = "Vondoloski",
                        Location = new Location
                        {
                            Id = new Guid("e20c8898-2046-11e7-a11e-e03f49848f6f"), Name = "1st Office"
                        },
                        DateOfService = new DateTime(2017, 3, 18, 17, 0, 0),
                        PhysicianName = "Dr.Tristan",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.Complete
					},
                    new WorklistItem
                    {
                        FirstName = "Stefania",
                        LastName = "Henniger",
                        Location = new Location
                        {
                            Id = new Guid("e20c6180-2046-11e7-b5b7-e03f49848f6f"), Name = "Main Office"
                        },
                        DateOfService = new DateTime(2017, 1, 25, 11, 0, 0),
                        PhysicianName = "Dr.Wakins",
                        EnB = EnBStatusResult.SystemTimeOut,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Armanda",
                        LastName = "Worstell",
                        Location = new Location
                        {
                            Id = new Guid("e20c8899-2046-11e7-9287-e03f49848f6f"), Name = "2nd Office"
                        },
                        DateOfService = new DateTime(2017, 1, 24, 9, 0, 0),
                        PhysicianName = "Dr.Wakins",
                        EnB = EnBStatusResult.SystemTimeOut,
                        TaskStatus = TaskStatus.Cancelled
					},
                    new WorklistItem
                    {
                        FirstName = "Haywood",
                        LastName = "Steeves",
                        Location = new Location
                        {
                            Id = new Guid("e20c8898-2046-11e7-a11e-e03f49848f6f"), Name = "1st Office"
                        },
                        DateOfService = new DateTime(2017, 2, 11, 17, 0, 0),
                        PhysicianName = "Dr.Chasse",
                        EnB = EnBStatusResult.InsufficientPlanInformation,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Dion",
                        LastName = "Haury",
                        Location = new Location
                        {
                            Id = new Guid("e20c6180-2046-11e7-b5b7-e03f49848f6f"), Name = "Main Office"
                        },
                        DateOfService = new DateTime(2017, 2, 26, 13, 0, 0),
                        PhysicianName = "Dr.Dardashti",
                        EnB = EnBStatusResult.PracticeEnrollmentNeeded,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Pearl",
                        LastName = "Anslinger",
                        Location = new Location
                        {
                            Id = new Guid("e20c6180-2046-11e7-b5b7-e03f49848f6f"), Name = "Main Office"
                        },
                        DateOfService = new DateTime(2017, 1, 19, 10, 0, 0),
                        PhysicianName = "Dr.Chasse",
                        EnB = EnBStatusResult.NotDetermined,
                        TaskStatus = TaskStatus.Cancelled
					},
                    new WorklistItem
                    {
                        FirstName = "Malcom",
                        LastName = "Merry",
                        Location = new Location
                        {
                            Id = new Guid("e20c6180-2046-11e7-b5b7-e03f49848f6f"), Name = "Main Office"
                        },
                        DateOfService = new DateTime(2017, 2, 28, 13, 0, 0),
                        PhysicianName = "Dr.Picini",
                        EnB = EnBStatusResult.SystemError,
                        TaskStatus = TaskStatus.Open
					},
                    new WorklistItem
                    {
                        FirstName = "Shirly",
                        LastName = "Borriello",
                        Location = new Location
                        {
                            Id = new Guid("e20c6180-2046-11e7-b5b7-e03f49848f6f"), Name = "Main Office"
                        },
                        DateOfService = new DateTime(2017, 1, 29, 13, 0, 0),
                        PhysicianName = "Dr.Tristan",
                        EnB = EnBStatusResult.InsufficientPlanInformation,
                        TaskStatus = TaskStatus.Cancelled
					},
                    new WorklistItem
                    {
                        FirstName = "Jenell",
                        LastName = "Scharr",
                        Location = new Location
                        {
                            Id = new Guid("e20c8898-2046-11e7-a11e-e03f49848f6f"), Name = "1st Office"
                        },
                        DateOfService = new DateTime(2017, 1, 11, 14, 0, 0),
                        PhysicianName = "Dr.Jaffe",
                        EnB = EnBStatusResult.Inactive,
                        TaskStatus = TaskStatus.InProgress
					},
                    new WorklistItem
                    {
                        FirstName = "Ruby",
                        LastName = "Townsley",
                        Location = new Location
                        {
                            Id = new Guid("e20c8898-2046-11e7-a11e-e03f49848f6f"), Name = "1st Office"
                        },
                        DateOfService = new DateTime(2017, 1, 26, 14, 0, 0),
                        PhysicianName = "Dr.Wakins",
                        EnB = EnBStatusResult.MissingPatientInformation,
                        TaskStatus = TaskStatus.Cancelled
					},
                    new WorklistItem
                    {
                        FirstName = "Donnell",
                        LastName = "Obermuller",
                        Location = new Location
                        {
                            Id = new Guid("e20c8898-2046-11e7-a11e-e03f49848f6f"), Name = "1st Office"
                        },
                        DateOfService = new DateTime(2017, 2, 24, 16, 0, 0),
                        PhysicianName = "Dr.Boller",
                        EnB = EnBStatusResult.SystemError,
                        TaskStatus = TaskStatus.Complete
					},
                    new WorklistItem
                    {
                        FirstName = "Maye",
                        LastName = "Maslakowski",
                        Location = new Location
                        {
                            Id = new Guid("e20c8899-2046-11e7-9287-e03f49848f6f"), Name = "2nd Office"
                        },
                        DateOfService = new DateTime(2017, 1, 29, 15, 0, 0),
                        PhysicianName = "Dr.Schempp",
                        EnB = EnBStatusResult.InsufficientPlanInformation,
                        TaskStatus = TaskStatus.Open
					},
                },
                TotalCount = 100
            };
        }
    }
}