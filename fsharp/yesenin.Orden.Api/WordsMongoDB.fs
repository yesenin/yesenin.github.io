module yesenin.Orden.WordsMongoDB

open Microsoft.Extensions.DependencyInjection
open MongoDB.Driver

type IServiceCollection with
    member this.AddWordsMongoDB(collection: IMongoCollection<yesenin.Orden.Word>) =
        this.AddSingleton<yesenin.Orden.WordFind>(find collection) |> ignore
