/*
Operador	    Descrição	                            Exemplo
BETWEEN	        Verifica se um valor está entre dois valores	gr.addQuery('priority', 'BETWEEN', '2@5'); (entre 2 e 5)
ISEMPTY	        Campo vazio	gr.addQuery('comments', 'ISEMPTY');
ISNOTEMPTY	    Campo não vazio	gr.addQuery('comments', 'ISNOTEMPTY');
NOT LIKE	    Não contém um valor específico	gr.addQuery('description', 'NOT LIKE', 'erro');
ON	            Data exata	gr.addQuery('opened_at', 'ON', '2023-12-06');
GT_OR_EQUALS	Maior ou igual	gr.addQuery('priority', 'GT_OR_EQUALS', '3'); (>=3)
LT_OR_EQUALS	Menor ou igual	gr.addQuery('priority', 'LT_OR_EQUALS', '3'); (<=3)






*/