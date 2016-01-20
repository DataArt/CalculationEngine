var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '0', label: 'B6\n9', color: '#31b0d5', title: 'Name: B6<br>Alias: null<br>Value: 9<br>Type: CELL_WITH_FORMULA<br>Id: 0<br>Formula Expression: Formula String: CLEAN(B1); Formula Values: CLEAN(9.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@31ff43be'},
{id: '1', label: 'B1\n9.0', color: '#31b0d5', title: 'Name: B1<br>Alias: null<br>Value: 9.0<br>Type: CELL_WITH_VALUE<br>Id: 1<br>Formula Expression: Formula String: B1; Formula Values: 9.0; Formula Ptg: 9.0; Ptgs: B1 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@31ff43be'},
{id: '2', label: 'CLEAN\n9', color: '#f0ad4e', title: 'Name: CLEAN<br>Alias: null<br>Value: 9<br>Type: FUNCTION<br>Id: 2<br>Formula Expression: Formula String: CLEAN(B1); Formula Values: CLEAN(9.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@31ff43be'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '1', to: '2'},
{from: '2', to: '0'}
                            ]);