-module(piotr_2).
-export([sum/2]).

sum(N, M) ->
	R = [sum_1(N, M), sum_2(N, M), sum_3(N, M), sum_4(N, M)],
	io:format("1 = ~w;~n2 = ~w;~n3 = ~w;~n4 = ~w;~n", R).
	
%%sum_1(N, M) when N > M -> exit(self(), kill);
%%sum_1(M, M) -> M; 
%%sum_1(N, M) -> N + sum_1(N+1, M).

sum_1(N, M) when N > M -> exit(self(), kill);
sum_1(N, N) -> N; 
sum_1(N, M) -> M + sum_1(N, M-1).

sum_2(N, M) when N > 0, M > N -> sum_2(N, M, 0);
sum_2(_, _) -> error.

sum_2(N, N, Acc) -> N + Acc;
sum_2(N, M, Acc) -> sum_2(N, M - 1, M + Acc).

sum_3(N, M) when N > 0, M > N -> lists:foldl(fun(X, Sum) -> X + Sum end, 0, lists:seq(N, M));
sum_3(_, _) -> error.

sum_4(N, M) when N > 0, M > N -> lists:foldr(fun(X, Sum) -> X + Sum end, 0, lists:seq(N, M));
sum_4(_, _) -> error.