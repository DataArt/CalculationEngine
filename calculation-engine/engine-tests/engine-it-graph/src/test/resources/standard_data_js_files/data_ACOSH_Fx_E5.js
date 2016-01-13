var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '0', label: 'E5\n5.192925985263684', color: '#31b0d5', title: 'Name: E5<br>Alias: null<br>Value: 5.192925985263684<br>Type: CELL_WITH_FORMULA<br>Id: 0<br>Formula Expression: Formula String: ACOSH(C2); Formula Values: ACOSH(90.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4b2bac3f'},
{id: '1', label: 'C2\n90.0', color: '#31b0d5', title: 'Name: C2<br>Alias: null<br>Value: 90.0<br>Type: CELL_WITH_VALUE<br>Id: 1<br>Formula Expression: Formula String: C2; Formula Values: 90.0; Formula Ptg: 90.0; Ptgs: C2 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4b2bac3f'},
{id: '2', label: 'ACOSH\n5.192925985263684', color: '#f0ad4e', title: 'Name: ACOSH<br>Alias: null<br>Value: 5.192925985263684<br>Type: FUNCTION<br>Id: 2<br>Formula Expression: Formula String: ACOSH(C2); Formula Values: ACOSH(90.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4b2bac3f'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '1', to: '2'},
{from: '2', to: '0'}
                            ]);