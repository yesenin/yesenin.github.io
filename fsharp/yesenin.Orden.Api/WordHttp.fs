namespace yesenin.Orden.Http

open Giraffe
open Microsoft.AspNetCore.Http

module WordHttp =
    let handlers : HttpFunc -> HttpContext -> HttpFuncResult =
        choose [
            GET >=> route "/words" >=>
                fun next context ->
                    text "Get all words" next context

            GET >=> routef "/words/%s" (fun id ->
                fun next context ->
                    text ("Get ID = " + id) next context
                )
        ]