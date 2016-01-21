var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '256', label: 'A2\n42029.0', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: 42029.0<br>Type: CELL_WITH_VALUE<br>Id: 256<br>Formula Expression: Formula String: A2; Formula Values: 42029.0; Formula Ptg: 42029.0; Ptgs: A2 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@797cf65c'},
{id: '257', label: 'DAYS360\n24.0', color: '#f0ad4e', title: 'Name: DAYS360<br>Alias: null<br>Value: 24.0<br>Type: FUNCTION<br>Id: 257<br>Formula Expression: Formula String: DAYS360(A2, A1); Formula Values: DAYS360(42029.0, 42005.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@797cf65c'},
{id: '254', label: 'B5\n24.0', color: '#31b0d5', title: 'Name: B5<br>Alias: null<br>Value: 24.0<br>Type: CELL_WITH_FORMULA<br>Id: 254<br>Formula Expression: Formula String: DAYS360(A2, A1); Formula Values: DAYS360(42029.0, 42005.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@797cf65c'},
{id: '255', label: 'A1\n42005.0', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: 42005.0<br>Type: CELL_WITH_VALUE<br>Id: 255<br>Formula Expression: Formula String: A1; Formula Values: 42005.0; Formula Ptg: 42005.0; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@797cf65c'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '256', to: '257'},
{from: '255', to: '257'},
{from: '257', to: '254'}
                            ]);