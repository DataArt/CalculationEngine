var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '620', label: 'D9\n1.0', color: '#31b0d5', title: 'Name: D9<br>Alias: null<br>Value: 1.0<br>Type: CELL_WITH_FORMULA<br>Id: 620<br>Formula Expression: Formula String: SUM(B1, A1); Formula Values: SUM(A, 1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@633a2e99'},
{id: '621', label: 'A1\n1.0', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: 1.0<br>Type: CELL_WITH_VALUE<br>Id: 621<br>Formula Expression: Formula String: A1; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@633a2e99'},
{id: '622', label: 'B1\nA', color: '#31b0d5', title: 'Name: B1<br>Alias: null<br>Value: A<br>Type: CELL_WITH_VALUE<br>Id: 622<br>Formula Expression: Formula String: B1; Formula Values: A; Formula Ptg: A; Ptgs: B1 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@633a2e99'},
{id: '623', label: 'SUM\n1.0', color: '#f0ad4e', title: 'Name: SUM<br>Alias: null<br>Value: 1.0<br>Type: FUNCTION<br>Id: 623<br>Formula Expression: Formula String: SUM(B1, A1); Formula Values: SUM(A, 1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@633a2e99'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '622', to: '623'},
{from: '621', to: '623'},
{from: '623', to: '620'}
                            ]);