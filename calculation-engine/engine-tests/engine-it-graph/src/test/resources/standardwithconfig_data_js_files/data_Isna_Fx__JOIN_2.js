var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '0', label: 'C1\n1.0', color: '#31b0d5', title: 'Name: C1<br>Alias: null<br>Value: 1.0<br>Type: CELL_WITH_REFERENCE<br>Id: 0<br>Formula Expression: Formula String: A1; Formula Values: 1.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@459e9125'},
{id: '2', label: 'C2\n2.0', color: '#31b0d5', title: 'Name: C2<br>Alias: null<br>Value: 2.0<br>Type: CELL_WITH_REFERENCE<br>Id: 2<br>Formula Expression: Formula String: A2; Formula Values: 2.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@459e9125'},
{id: '3', label: 'A2\n2.0', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: 2.0<br>Type: CELL_WITH_VALUE<br>Id: 3<br>Formula Expression: Formula String: A2; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@459e9125'},
{id: '4', label: 'C3\n3.0', color: '#31b0d5', title: 'Name: C3<br>Alias: null<br>Value: 3.0<br>Type: CELL_WITH_REFERENCE<br>Id: 4<br>Formula Expression: Formula String: A3; Formula Values: 3.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@459e9125'},
{id: '5', label: 'A3\n3.0', color: '#31b0d5', title: 'Name: A3<br>Alias: null<br>Value: 3.0<br>Type: CELL_WITH_VALUE<br>Id: 5<br>Formula Expression: Formula String: A3; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: A3 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@459e9125'},
{id: '6', label: 'C4\n4.0', color: '#31b0d5', title: 'Name: C4<br>Alias: null<br>Value: 4.0<br>Type: CELL_WITH_REFERENCE<br>Id: 6<br>Formula Expression: Formula String: A4; Formula Values: 4.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@459e9125'},
{id: '7', label: 'A4\n4.0', color: '#31b0d5', title: 'Name: A4<br>Alias: null<br>Value: 4.0<br>Type: CELL_WITH_VALUE<br>Id: 7<br>Formula Expression: Formula String: A4; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: A4 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@459e9125'},
{id: '8', label: 'C5\n5.0', color: '#31b0d5', title: 'Name: C5<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_REFERENCE<br>Id: 8<br>Formula Expression: Formula String: A5; Formula Values: 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@459e9125'},
{id: '9', label: 'A5\n5.0', color: '#31b0d5', title: 'Name: A5<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 9<br>Formula Expression: Formula String: A5; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: A5 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@459e9125'},
{id: '10', label: 'D6\n#N/A', color: '#31b0d5', title: 'Name: D6<br>Alias: null<br>Value: #N/A<br>Type: CELL_WITH_REFERENCE<br>Id: 10<br>Formula Expression: Formula String: VALUE; Formula Values: #N/A; Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@459e9125'},
{id: '11', label: 'VALUE\n#N/A', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: #N/A<br>Type: CONSTANT_VALUE<br>Id: 11<br>Formula Expression: Formula String: VALUE; Formula Values: #N/A; Formula Ptg: #N/A; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@459e9125'},
{id: '12', label: 'D9\n1.0', color: '#31b0d5', title: 'Name: D9<br>Alias: null<br>Value: 1.0<br>Type: CELL_WITH_FORMULA<br>Id: 12<br>Formula Expression: Formula String: SUM(B1, A1); Formula Values: SUM(A, 1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@459e9125'},
{id: '13', label: 'A1\n1.0', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: 1.0<br>Type: CELL_WITH_VALUE<br>Id: 13<br>Formula Expression: Formula String: A1; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@459e9125'},
{id: '14', label: 'B1\nA', color: '#31b0d5', title: 'Name: B1<br>Alias: null<br>Value: A<br>Type: CELL_WITH_VALUE<br>Id: 14<br>Formula Expression: Formula String: B1; Formula Values: A; Formula Ptg: A; Ptgs: B1 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@459e9125'},
{id: '15', label: 'SUM\n1.0', color: '#f0ad4e', title: 'Name: SUM<br>Alias: null<br>Value: 1.0<br>Type: FUNCTION<br>Id: 15<br>Formula Expression: Formula String: SUM(B1, A1); Formula Values: SUM(A, 1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@459e9125'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '3', to: '2'},
{from: '5', to: '4'},
{from: '7', to: '6'},
{from: '9', to: '8'},
{from: '11', to: '10'},
{from: '14', to: '15'},
{from: '13', to: '15'},
{from: '13', to: '0'},
{from: '15', to: '12'}
                            ]);