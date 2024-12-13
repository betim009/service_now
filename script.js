var gr = new GlideRecord('incident');
gr.addQuery('priority', '1');

gr.query(); 
while(gr.next()) {
    gs.print('Incident: ' + gr.getValue("number"));
}
