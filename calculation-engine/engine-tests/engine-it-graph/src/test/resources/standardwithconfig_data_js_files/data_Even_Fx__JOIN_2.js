var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '4146', label: 'B2\n2.0', color: '#31b0d5', title: 'Name: B2<br>Alias: null<br>Value: 2.0<br>Type: CELL_WITH_FORMULA<br>Id: 4146<br>Formula Expression: Formula String: EVEN(VALUE); Formula Values: EVEN(1.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6785786d'},
{id: '4147', label: 'VALUE\n1.5', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 1.5<br>Type: CONSTANT_VALUE<br>Id: 4147<br>Formula Expression: Formula String: VALUE; Formula Values: 1.5; Formula Ptg: 1.5; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6785786d'},
{id: '4148', label: 'EVEN\n2.0', color: '#f0ad4e', title: 'Name: EVEN<br>Alias: null<br>Value: 2.0<br>Type: FUNCTION<br>Id: 4148<br>Formula Expression: Formula String: EVEN(VALUE); Formula Values: EVEN(1.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6785786d'},
{id: '4149', label: 'B3\n4.0', color: '#31b0d5', title: 'Name: B3<br>Alias: null<br>Value: 4.0<br>Type: CELL_WITH_FORMULA<br>Id: 4149<br>Formula Expression: Formula String: EVEN(VALUE); Formula Values: EVEN(2.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6785786d'},
{id: '4150', label: 'VALUE\n2.5', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 2.5<br>Type: CONSTANT_VALUE<br>Id: 4150<br>Formula Expression: Formula String: VALUE; Formula Values: 2.5; Formula Ptg: 2.5; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6785786d'},
{id: '4151', label: 'EVEN\n4.0', color: '#f0ad4e', title: 'Name: EVEN<br>Alias: null<br>Value: 4.0<br>Type: FUNCTION<br>Id: 4151<br>Formula Expression: Formula String: EVEN(VALUE); Formula Values: EVEN(2.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6785786d'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '4147', to: '4148'},
{from: '4150', to: '4151'},
{from: '4148', to: '4146'},
{from: '4151', to: '4149'}
                            ]);