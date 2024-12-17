var grComputer = new GlideRecord('cmdb_ci_computer');
grComputer.addQuery('manufacturer.name', 'lenovo'); // Assumindo que manufacturer seja uma referência a outra tabela
grComputer.query();

if (grComputer.hasNext()) {
    while (grComputer.next()) {
        gs.print(grComputer.getDisplayValue("manufacturer"));
    }
} else {
    gs.print("Nenhum registro encontrado");
}


//


var grComputer = new GlideRecord('cmdb_ci_computer');
grComputer.query();

if (grComputer.hasNext()) {
    while (grComputer.next()) {
        gs.print(grComputer.getDisplayValue("manufacturer"));
    }
} else {
    gs.print("Nenhum registro encontrado");
}
