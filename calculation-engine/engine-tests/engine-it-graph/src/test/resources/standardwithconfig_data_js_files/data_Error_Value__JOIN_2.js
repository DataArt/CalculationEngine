var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'b1673887-502e-4322-9b4f-40e33e87da30', label: 'E5\n[9.0, 7.0]', color: '#31b0d5', title: 'Name: E5<br>Alias: null<br>Value: [9.0, 7.0]<br>Type: CELL_WITH_FORMULA<br>Id: b1673887-502e-4322-9b4f-40e33e87da30<br>Formula Expression: Formula String: A5 , D5; Formula Values: 7.0 , 9.0; Formula Ptg: 7.0 9.0 ,; Ptgs: A5 D5 , Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@293a5bf6'},
{id: '8ea12f9c-6992-4281-8f08-10f1c6b657e0', label: 'D5\n9.0', color: '#31b0d5', title: 'Name: D5<br>Alias: null<br>Value: 9.0<br>Type: CELL_WITH_VALUE<br>Id: 8ea12f9c-6992-4281-8f08-10f1c6b657e0<br>Formula Expression: Formula String: D5; Formula Values: 9.0; Formula Ptg: 9.0; Ptgs: D5 Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@293a5bf6'},
{id: '1fc48655-10b5-4b00-9f58-747a8b1d2da9', label: 'A5\n7.0', color: '#31b0d5', title: 'Name: A5<br>Alias: null<br>Value: 7.0<br>Type: CELL_WITH_VALUE<br>Id: 1fc48655-10b5-4b00-9f58-747a8b1d2da9<br>Formula Expression: Formula String: A5; Formula Values: 7.0; Formula Ptg: 7.0; Ptgs: A5 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@293a5bf6'},
{id: '12214bc4-7ca9-4e97-ae41-c19d71462061', label: ',\n[9.0, 7.0]', color: '#f0ad4e', title: 'Name: ,<br>Alias: null<br>Value: [9.0, 7.0]<br>Type: FUNCTION<br>Id: 12214bc4-7ca9-4e97-ae41-c19d71462061<br>Formula Expression: Formula String: A5 , D5; Formula Values: 7.0 , 9.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: null'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '1fc48655-10b5-4b00-9f58-747a8b1d2da9', to: '12214bc4-7ca9-4e97-ae41-c19d71462061'},
{from: '8ea12f9c-6992-4281-8f08-10f1c6b657e0', to: '12214bc4-7ca9-4e97-ae41-c19d71462061'},
{from: '12214bc4-7ca9-4e97-ae41-c19d71462061', to: 'b1673887-502e-4322-9b4f-40e33e87da30'}
                            ]);