var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '813eee8b-d8f5-4b2c-b5ac-333f93871868', label: 'E5\n[9.0, 7.0]', color: '#31b0d5', title: 'Name: E5<br>Alias: null<br>Value: [9.0, 7.0]<br>Type: CELL_WITH_FORMULA<br>Id: 813eee8b-d8f5-4b2c-b5ac-333f93871868<br>Formula Expression: Formula String: A5 , D5; Formula Values: 7.0 , 9.0; Formula Ptg: 7.0 9.0 ,; Ptgs: A5 D5 , Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@293a5bf6'},
{id: 'dca70ede-5433-4494-8947-3da2c77a701f', label: 'D5\n9.0', color: '#31b0d5', title: 'Name: D5<br>Alias: null<br>Value: 9.0<br>Type: CELL_WITH_VALUE<br>Id: dca70ede-5433-4494-8947-3da2c77a701f<br>Formula Expression: Formula String: D5; Formula Values: 9.0; Formula Ptg: 9.0; Ptgs: D5 Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@293a5bf6'},
{id: '592ec5a9-c6f2-495d-8105-3f34ccf4036a', label: 'A5\n7.0', color: '#31b0d5', title: 'Name: A5<br>Alias: null<br>Value: 7.0<br>Type: CELL_WITH_VALUE<br>Id: 592ec5a9-c6f2-495d-8105-3f34ccf4036a<br>Formula Expression: Formula String: A5; Formula Values: 7.0; Formula Ptg: 7.0; Ptgs: A5 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@293a5bf6'},
{id: '08bd1013-2791-4e27-9c23-03e1ac718ebc', label: ',\n[9.0, 7.0]', color: '#f0ad4e', title: 'Name: ,<br>Alias: null<br>Value: [9.0, 7.0]<br>Type: FUNCTION<br>Id: 08bd1013-2791-4e27-9c23-03e1ac718ebc<br>Formula Expression: Formula String: A5 , D5; Formula Values: 7.0 , 9.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: null'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '592ec5a9-c6f2-495d-8105-3f34ccf4036a', to: '08bd1013-2791-4e27-9c23-03e1ac718ebc'},
{from: 'dca70ede-5433-4494-8947-3da2c77a701f', to: '08bd1013-2791-4e27-9c23-03e1ac718ebc'},
{from: '08bd1013-2791-4e27-9c23-03e1ac718ebc', to: '813eee8b-d8f5-4b2c-b5ac-333f93871868'}
                            ]);