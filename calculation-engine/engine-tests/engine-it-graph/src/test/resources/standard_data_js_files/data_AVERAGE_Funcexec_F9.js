var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '133', label: 'F9\n6.225', color: '#31b0d5', title: 'Name: F9<br>Alias: null<br>Value: 6.225<br>Type: CELL_WITH_FORMULA<br>Id: 133<br>Formula Expression: Formula String: FUNCEXEC(D5, C5, B5, A5, VALUE); Formula Values: FUNCEXEC(9.0, 0.9, 8.0, 7.0, DEVDEF_4); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2c78324b'},
{id: '135', label: 'VALUE\nDEVDEF_4', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: DEVDEF_4<br>Type: CONSTANT_VALUE<br>Id: 135<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF_4; Formula Ptg: DEVDEF_4; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2c78324b'},
{id: '136', label: 'A5\n7.0', color: '#31b0d5', title: 'Name: A5<br>Alias: null<br>Value: 7.0<br>Type: CELL_WITH_VALUE<br>Id: 136<br>Formula Expression: Formula String: A5; Formula Values: 7.0; Formula Ptg: 7.0; Ptgs: A5 Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2c78324b'},
{id: '137', label: 'B5\n8.0', color: '#31b0d5', title: 'Name: B5<br>Alias: null<br>Value: 8.0<br>Type: CELL_WITH_VALUE<br>Id: 137<br>Formula Expression: Formula String: B5; Formula Values: 8.0; Formula Ptg: 8.0; Ptgs: B5 Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2c78324b'},
{id: '138', label: 'C5\n0.9', color: '#31b0d5', title: 'Name: C5<br>Alias: null<br>Value: 0.9<br>Type: CELL_WITH_VALUE<br>Id: 138<br>Formula Expression: Formula String: C5; Formula Values: 0.9; Formula Ptg: 0.9; Ptgs: C5 Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2c78324b'},
{id: '139', label: 'D5\n9.0', color: '#31b0d5', title: 'Name: D5<br>Alias: null<br>Value: 9.0<br>Type: CELL_WITH_VALUE<br>Id: 139<br>Formula Expression: Formula String: D5; Formula Values: 9.0; Formula Ptg: 9.0; Ptgs: D5 Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2c78324b'},
{id: '140', label: 'FUNCEXEC\n6.225', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Alias: null<br>Value: 6.225<br>Type: FUNCTION<br>Id: 140<br>Formula Expression: Formula String: FUNCEXEC(D5, C5, B5, A5, VALUE); Formula Values: FUNCEXEC(9.0, 0.9, 8.0, 7.0, DEVDEF_4); Formula Ptg: ; Ptgs:  Index in Ptgs: 6 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2c78324b'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '139', to: '140'},
{from: '138', to: '140'},
{from: '137', to: '140'},
{from: '136', to: '140'},
{from: '135', to: '140'},
{from: '140', to: '133'}
                            ]);