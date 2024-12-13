var grIncident = new GlideRecord('incident'); // Cria uma instância da classe GlideRecord para a tabela 'incident'
grIncident.addQuery('priority', '1'); // Adiciona um filtro para selecionar registros com prioridade igual a 1
grIncident.addQuery('category', 'software'); // Adiciona um filtro adicional para selecionar registros cuja categoria seja 'software'

grIncident.query(); // Executa a consulta com os filtros definidos
while (grIncident.next()) { // Percorre todos os registros retornados pela consulta
    gs.print('Incident: ' + grIncident.getValue("number") + ' + Descrição: ' + grIncident.getValue("short_description"));
    // Exibe no log o número do incidente e a descrição curta para cada registro
}