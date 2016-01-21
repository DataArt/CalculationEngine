var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '48', label: 'E5\n1.359221367036801', color: '#31b0d5', title: 'Name: E5<br>Alias: null<br>Value: 1.359221367036801<br>Type: CELL_WITH_FORMULA<br>Id: 48<br>Formula Expression: Formula String: ACOS(C2); Formula Values: ACOS(0.21); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2f9f7dcf'},
{id: '49', label: 'C2\n0.21', color: '#31b0d5', title: 'Name: C2<br>Alias: null<br>Value: 0.21<br>Type: CELL_WITH_VALUE<br>Id: 49<br>Formula Expression: Formula String: C2; Formula Values: 0.21; Formula Ptg: 0.21; Ptgs: C2 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2f9f7dcf'},
{id: '50', label: 'ACOS\n1.359221367036801', color: '#f0ad4e', title: 'Name: ACOS<br>Alias: null<br>Value: 1.359221367036801<br>Type: FUNCTION<br>Id: 50<br>Formula Expression: Formula String: ACOS(C2); Formula Values: ACOS(0.21); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2f9f7dcf'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '49', to: '50'},
{from: '50', to: '48'}
                            ]);