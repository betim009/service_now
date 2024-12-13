/*
O que é o ServiceNow?
O ServiceNow é uma plataforma web que processa e gerencia dados em formato de planilhas.

Funcionalidades principais:

1. Criar novas interfaces.
2. Criar filtros personalizados.
3. Combinar filtros para consultas avançadas.


PRINCIPAIS CLASSES:
1. GlideRecord: o que é?
O GlideRecord é uma classe no ServiceNow usada para interagir com tabelas no banco de dados.
Com ela, você pode:

1.1 Fazer buscas em tabelas.
1.2 Aplicar filtros em registros.
1.3 Adicionar, atualizar ou deletar dados diretamente nas tabelas.


Passo a passo:
1. Criando uma variável e chamando a classe GlideRecord:
var gr = new GlideRecord('incident'); // 'incident' é o nome de uma tabela no ServiceNow.

2. Adicionando filtros com o método addQuery:
Sintaxe geral:
gr.addQuery('campo', 'operador', 'valor');

Exemplo: Filtrar registros com prioridade 1.
gr.addQuery('priority', '1'); // Aqui, o operador padrão (implícito) é '=', pois só foram usados 2 parâmetros.


3. Executando a consulta:
gr.query(); // Envia a consulta para a tabela.
while(gr.next()) {
    gs.print('Incident: ' + gr.getValue("number")); // Exibe os valores da coluna "number".
}


Explicação do código:
1. gr.query(): Executa a consulta com os filtros definidos.
2. while(gr.next()): Percorre os registros retornados pela consulta.
3. gs.print(): Imprime informações no log.
4. gr.getValue("number"): Obtém o valor do campo "number" da tabela para o registro atual.





Resumo do exemplo:
var gr = new GlideRecord('incident');
gr.addQuery('priority', '1');

gr.query(); 
while(gr.next()) {
    gs.print('Incident: ' + gr.getValue("number"));
}

O código acima filtra os registros na tabela incident, retorna aqueles com prioridade 1, e exibe o número do incidente no log.





*/