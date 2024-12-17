var grComputer = new GlideRecord('cmdb_ci_computer');
grComputer.addQuery('manufacturer', 'lenovo');
grComputer.query();

while(grComputer.next()){
    gs.print(grComputer.getDisplayValue("manufacturer"));
}


//


var grComputer = new GlideRecord('cmdb_ci_computer');
grComputer.addQuery('manufacturer', 'lenovo');
grComputer.query();

if (grComputer.hasNext()) {
    while(grComputer.next()){
        gs.print(grComputer.getDisplayValue("manufacturer"));
    }
} else {
    gs.print("Nenhum registro encontrado");
}
