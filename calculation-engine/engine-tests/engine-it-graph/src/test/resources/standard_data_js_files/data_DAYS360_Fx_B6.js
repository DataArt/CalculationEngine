var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '258', label: 'B6\n154.0', color: '#31b0d5', title: 'Name: B6<br>Alias: null<br>Value: 154.0<br>Type: CELL_WITH_FORMULA<br>Id: 258<br>Formula Expression: Formula String: DAYS360(A3, A2); Formula Values: DAYS360(42184.0, 42029.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@32f232a5'},
{id: '259', label: 'A2\n42029.0', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: 42029.0<br>Type: CELL_WITH_VALUE<br>Id: 259<br>Formula Expression: Formula String: A2; Formula Values: 42029.0; Formula Ptg: 42029.0; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@32f232a5'},
{id: '260', label: 'A3\n42184.0', color: '#31b0d5', title: 'Name: A3<br>Alias: null<br>Value: 42184.0<br>Type: CELL_WITH_VALUE<br>Id: 260<br>Formula Expression: Formula String: A3; Formula Values: 42184.0; Formula Ptg: 42184.0; Ptgs: A3 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@32f232a5'},
{id: '261', label: 'DAYS360\n154.0', color: '#f0ad4e', title: 'Name: DAYS360<br>Alias: null<br>Value: 154.0<br>Type: FUNCTION<br>Id: 261<br>Formula Expression: Formula String: DAYS360(A3, A2); Formula Values: DAYS360(42184.0, 42029.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@32f232a5'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '260', to: '261'},
{from: '259', to: '261'},
{from: '261', to: '258'}
                            ]);