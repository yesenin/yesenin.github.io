-module(piotr_3).
-export([create/1]).

create(N) ->
	R = [create_1(N), create_2(N), create_3(N)],
	io:format("1 = ~w;~n2 = ~w;~n3 = ~w;~n", R).

create_1(N) when N > 0 -> lists:seq(1, N);
create_1(_) -> [].

create_2(N) -> [].

create_3(N) -> [].



