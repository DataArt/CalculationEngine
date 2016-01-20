var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '0', label: 'B5\n24.0', color: '#31b0d5', title: 'Name: B5<br>Alias: null<br>Value: 24.0<br>Type: CELL_WITH_FORMULA<br>Id: 0<br>Formula Expression: Formula String: DAYS360(A2, A1); Formula Values: DAYS360(42029.0, 42005.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@f9919a2'},
{id: '1', label: 'A1\n42005.0', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: 42005.0<br>Type: CELL_WITH_VALUE<br>Id: 1<br>Formula Expression: Formula String: A1; Formula Values: 42005.0; Formula Ptg: 42005.0; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@f9919a2'},
{id: '2', label: 'A2\n42029.0', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: 42029.0<br>Type: CELL_WITH_VALUE<br>Id: 2<br>Formula Expression: Formula String: A2; Formula Values: 42029.0; Formula Ptg: 42029.0; Ptgs: A2 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@f9919a2'},
{id: '3', label: 'DAYS360\n24.0', color: '#f0ad4e', title: 'Name: DAYS360<br>Alias: null<br>Value: 24.0<br>Type: FUNCTION<br>Id: 3<br>Formula Expression: Formula String: DAYS360(A2, A1); Formula Values: DAYS360(42029.0, 42005.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@f9919a2'},
{id: '4', label: 'B6\n154.0', color: '#31b0d5', title: 'Name: B6<br>Alias: null<br>Value: 154.0<br>Type: CELL_WITH_FORMULA<br>Id: 4<br>Formula Expression: Formula String: DAYS360(A3, A2); Formula Values: DAYS360(42184.0, 42029.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@f9919a2'},
{id: '5', label: 'A2\n42029.0', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: 42029.0<br>Type: CELL_WITH_VALUE<br>Id: 5<br>Formula Expression: Formula String: A2; Formula Values: 42029.0; Formula Ptg: 42029.0; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@f9919a2'},
{id: '6', label: 'A3\n42184.0', color: '#31b0d5', title: 'Name: A3<br>Alias: null<br>Value: 42184.0<br>Type: CELL_WITH_VALUE<br>Id: 6<br>Formula Expression: Formula String: A3; Formula Values: 42184.0; Formula Ptg: 42184.0; Ptgs: A3 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@f9919a2'},
{id: '7', label: 'DAYS360\n154.0', color: '#f0ad4e', title: 'Name: DAYS360<br>Alias: null<br>Value: 154.0<br>Type: FUNCTION<br>Id: 7<br>Formula Expression: Formula String: DAYS360(A3, A2); Formula Values: DAYS360(42184.0, 42029.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@f9919a2'},
{id: '8', label: 'B7\n160.0', color: '#31b0d5', title: 'Name: B7<br>Alias: null<br>Value: 160.0<br>Type: CELL_WITH_FORMULA<br>Id: 8<br>Formula Expression: Formula String: DAYS360(A4, A3); Formula Values: DAYS360(42347.0, 42184.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@f9919a2'},
{id: '9', label: 'A3\n42184.0', color: '#31b0d5', title: 'Name: A3<br>Alias: null<br>Value: 42184.0<br>Type: CELL_WITH_VALUE<br>Id: 9<br>Formula Expression: Formula String: A3; Formula Values: 42184.0; Formula Ptg: 42184.0; Ptgs: A3 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@f9919a2'},
{id: '10', label: 'A4\n42347.0', color: '#31b0d5', title: 'Name: A4<br>Alias: null<br>Value: 42347.0<br>Type: CELL_WITH_VALUE<br>Id: 10<br>Formula Expression: Formula String: A4; Formula Values: 42347.0; Formula Ptg: 42347.0; Ptgs: A4 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@f9919a2'},
{id: '11', label: 'DAYS360\n160.0', color: '#f0ad4e', title: 'Name: DAYS360<br>Alias: null<br>Value: 160.0<br>Type: FUNCTION<br>Id: 11<br>Formula Expression: Formula String: DAYS360(A4, A3); Formula Values: DAYS360(42347.0, 42184.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@f9919a2'},
{id: '12', label: 'B8\n-160.0', color: '#31b0d5', title: 'Name: B8<br>Alias: null<br>Value: -160.0<br>Type: CELL_WITH_FORMULA<br>Id: 12<br>Formula Expression: Formula String: DAYS360(A3, A4); Formula Values: DAYS360(42184.0, 42347.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@f9919a2'},
{id: '13', label: 'A4\n42347.0', color: '#31b0d5', title: 'Name: A4<br>Alias: null<br>Value: 42347.0<br>Type: CELL_WITH_VALUE<br>Id: 13<br>Formula Expression: Formula String: A4; Formula Values: 42347.0; Formula Ptg: 42347.0; Ptgs: A4 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@f9919a2'},
{id: '14', label: 'A3\n42184.0', color: '#31b0d5', title: 'Name: A3<br>Alias: null<br>Value: 42184.0<br>Type: CELL_WITH_VALUE<br>Id: 14<br>Formula Expression: Formula String: A3; Formula Values: 42184.0; Formula Ptg: 42184.0; Ptgs: A3 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@f9919a2'},
{id: '15', label: 'DAYS360\n-160.0', color: '#f0ad4e', title: 'Name: DAYS360<br>Alias: null<br>Value: -160.0<br>Type: FUNCTION<br>Id: 15<br>Formula Expression: Formula String: DAYS360(A3, A4); Formula Values: DAYS360(42184.0, 42347.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@f9919a2'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '2', to: '3'},
{from: '6', to: '7'},
{from: '10', to: '11'},
{from: '14', to: '15'},
{from: '1', to: '3'},
{from: '5', to: '7'},
{from: '9', to: '11'},
{from: '13', to: '15'},
{from: '3', to: '0'},
{from: '7', to: '4'},
{from: '11', to: '8'},
{from: '15', to: '12'}
                            ]);