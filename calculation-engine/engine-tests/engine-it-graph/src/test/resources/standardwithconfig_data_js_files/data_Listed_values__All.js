var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '6fef8dc2-eed0-45ba-9759-74c0ccbca29b', label: 'D5\n9.0', color: '#31b0d5', title: 'Name: D5<br>Alias: null<br>Value: 9.0<br>Type: CELL_WITH_VALUE<br>Id: 6fef8dc2-eed0-45ba-9759-74c0ccbca29b<br>Formula Expression: Formula String: D5; Formula Values: 9.0; Formula Ptg: 9.0; Ptgs: D5 Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@384ad17b'},
{id: '0692505e-67e8-46fd-9e46-2bff8dd86717', label: ',\n[9.0, 7.0]', color: '#f0ad4e', title: 'Name: ,<br>Alias: null<br>Value: [9.0, 7.0]<br>Type: FUNCTION<br>Id: 0692505e-67e8-46fd-9e46-2bff8dd86717<br>Formula Expression: Formula String: A5 , D5; Formula Values: 7.0 , 9.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: null'},
{id: '78488738-67e4-46dc-8f09-f3d912a359d8', label: 'E5\n[9.0, 7.0]', color: '#31b0d5', title: 'Name: E5<br>Alias: null<br>Value: [9.0, 7.0]<br>Type: CELL_WITH_FORMULA<br>Id: 78488738-67e4-46dc-8f09-f3d912a359d8<br>Formula Expression: Formula String: A5 , D5; Formula Values: 7.0 , 9.0; Formula Ptg: 7.0 9.0 ,; Ptgs: A5 D5 , Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@384ad17b'},
{id: '003e75be-3a2e-4392-8a82-67f29a2a718f', label: 'A5\n7.0', color: '#31b0d5', title: 'Name: A5<br>Alias: null<br>Value: 7.0<br>Type: CELL_WITH_VALUE<br>Id: 003e75be-3a2e-4392-8a82-67f29a2a718f<br>Formula Expression: Formula String: A5; Formula Values: 7.0; Formula Ptg: 7.0; Ptgs: A5 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@384ad17b'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '6fef8dc2-eed0-45ba-9759-74c0ccbca29b', to: '0692505e-67e8-46fd-9e46-2bff8dd86717'},
{from: '0692505e-67e8-46fd-9e46-2bff8dd86717', to: '78488738-67e4-46dc-8f09-f3d912a359d8'},
{from: '003e75be-3a2e-4392-8a82-67f29a2a718f', to: '0692505e-67e8-46fd-9e46-2bff8dd86717'}
                            ]);