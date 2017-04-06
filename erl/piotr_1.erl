-module(piotr_1).
-export([sum/1]).
%%-compile(export_all).

sum(N) -> io:format("recursion = ~w;~nAcc = ~w;~nfoldl = ~w;~nfoldr = ~w;~n", 
						[sum_1(N), sum_2(N), sum_3(N), sum_4(N)]).

sum_1(1) -> 1;
sum_1(N) when N > 0 -> N + sum_1(N-1);	
sum_1(_) -> error.

sum_2(N) when N > 0 -> sum_2(N, 0);
sum_2(_) -> error.

sum_2(0, Acc) -> Acc;
sum_2(N, Acc) -> sum_2(N - 1, N + Acc).
	 
sum_3(N)  when N > 0 -> lists:foldl(fun(X, Sum) -> X + Sum end, 0, lists:seq(1, N));
sum_3(_) -> error.

sum_4(N)  when N > 0 -> lists:foldr(fun(X, Sum) -> X + Sum end, 0, lists:seq(1, N));
sum_4(_) -> error.