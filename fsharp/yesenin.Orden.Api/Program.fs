open System
open Microsoft.AspNetCore.Builder
open Microsoft.AspNetCore.Hosting
open Microsoft.Extensions.DependencyInjection
open Giraffe
open MongoDB.Driver

open yesenin.Orden.Http
open yesenin.Orden.WordsMongoDB
open yesenin.Orden

let routes = 
    choose [
        WordHttp.handlers
    ]

let configureApp (app: IApplicationBuilder) =
    app.UseGiraffe routes

let configureServices (services: IServiceCollection) =
    let connectionString = "mongodb://yesenin:D_%2BeqP%26rp3%21_ZJ%23g@159.65.28.129:27017/admin?readPreference=primary"
    let mongo = MongoClient (connectionString)
    let db = mongo.GetDatabase "svenska"

    services.AddGiraffe() |> ignore
    services.AddWordsMongoDB(db.GetCollection<Word>("words")) |> ignore

[<EntryPoint>]
let main _ =
    WebHostBuilder()
        .UseKestrel()
        .Configure(Action<IApplicationBuilder> configureApp)
        .ConfigureServices(configureServices)
        .Build()
        .Run()
    0