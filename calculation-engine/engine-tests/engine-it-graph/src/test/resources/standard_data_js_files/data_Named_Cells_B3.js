var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '0', label: 'B3\n51.0', color: '#31b0d5', title: 'Name: B3<br>Alias: null<br>Value: 51.0<br>Type: CELL_WITH_FORMULA<br>Id: 0<br>Formula Expression: Formula String: B1 + A1 + C1; Formula Values: 32.0 + 15.0 + 4.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4e1ce44'},
{id: '1', label: 'B1\n32.0', color: '#31b0d5', title: 'Name: B1<br>Alias: null<br>Value: 32.0<br>Type: CELL_WITH_VALUE<br>Id: 1<br>Formula Expression: Formula String: B1; Formula Values: 32.0; Formula Ptg: 32.0; Ptgs: B1 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4e1ce44'},
{id: '2', label: 'A1\n15.0', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: 15.0<br>Type: CELL_WITH_VALUE<br>Id: 2<br>Formula Expression: Formula String: A1; Formula Values: 15.0; Formula Ptg: 15.0; Ptgs: A1 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4e1ce44'},
{id: '3', label: '+\n47.0', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 47.0<br>Type: OPERATOR<br>Id: 3<br>Formula Expression: Formula String: B1 + A1; Formula Values: 32.0 + 15.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4e1ce44'},
{id: '4', label: 'C1\n4.0', color: '#31b0d5', title: 'Name: C1<br>Alias: null<br>Value: 4.0<br>Type: CELL_WITH_VALUE<br>Id: 4<br>Formula Expression: Formula String: C1; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: C1 Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4e1ce44'},
{id: '5', label: '+\n51.0', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 51.0<br>Type: OPERATOR<br>Id: 5<br>Formula Expression: Formula String: B1 + A1 + C1; Formula Values: 32.0 + 15.0 + 4.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4e1ce44'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '2', to: '3'},
{from: '4', to: '5'},
{from: '1', to: '3'},
{from: '3', to: '5'},
{from: '5', to: '0'}
                            ]);