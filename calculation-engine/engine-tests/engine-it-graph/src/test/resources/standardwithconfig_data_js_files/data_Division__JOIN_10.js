var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '1664', label: 'A2\n25.0', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: 25.0<br>Type: CELL_WITH_VALUE<br>Id: 1664<br>Formula Expression: Formula String: A2; Formula Values: 25.0; Formula Ptg: 25.0; Ptgs: A2 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@31e2232f'},
{id: '1665', label: '/\n4.0', color: '#f0ad4e', title: 'Name: /<br>Alias: null<br>Value: 4.0<br>Type: OPERATOR<br>Id: 1665<br>Formula Expression: Formula String: A1 / A2; Formula Values: 100.0 / 25.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@31e2232f'},
{id: '1662', label: 'B3\n4.0', color: '#31b0d5', title: 'Name: B3<br>Alias: null<br>Value: 4.0<br>Type: CELL_WITH_FORMULA<br>Id: 1662<br>Formula Expression: Formula String: A1 / A2; Formula Values: 100.0 / 25.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@31e2232f'},
{id: '1663', label: 'A1\n100.0', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: 100.0<br>Type: CELL_WITH_VALUE<br>Id: 1663<br>Formula Expression: Formula String: A1; Formula Values: 100.0; Formula Ptg: 100.0; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@31e2232f'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '1664', to: '1665'},
{from: '1663', to: '1665'},
{from: '1665', to: '1662'}
                            ]);