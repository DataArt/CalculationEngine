var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '2256', label: 'ACOS\n1.359221367036801', color: '#f0ad4e', title: 'Name: ACOS<br>Alias: null<br>Value: 1.359221367036801<br>Type: FUNCTION<br>Id: 2256<br>Formula Expression: Formula String: ACOS(C2); Formula Values: ACOS(0.21); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@41aebbb4'},
{id: '2254', label: 'E5\n1.359221367036801', color: '#31b0d5', title: 'Name: E5<br>Alias: null<br>Value: 1.359221367036801<br>Type: CELL_WITH_FORMULA<br>Id: 2254<br>Formula Expression: Formula String: ACOS(C2); Formula Values: ACOS(0.21); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@41aebbb4'},
{id: '2255', label: 'C2\n0.21', color: '#31b0d5', title: 'Name: C2<br>Alias: null<br>Value: 0.21<br>Type: CELL_WITH_VALUE<br>Id: 2255<br>Formula Expression: Formula String: C2; Formula Values: 0.21; Formula Ptg: 0.21; Ptgs: C2 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@41aebbb4'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '2255', to: '2256'},
{from: '2256', to: '2254'}
                            ]);