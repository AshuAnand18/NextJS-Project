delete_nth(1,[_|L],L).
delete_nth(_,[],[]).
delete_nth(N,[X|L],[X|R]):-
N1 is N-1,
delete_nth(N1,L,R).