var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '4128', label: 'VALUE\n1.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 1.0<br>Type: CONSTANT_VALUE<br>Id: 4128<br>Formula Expression: Formula String: VALUE; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@75d95b67'},
{id: '4129', label: 'EDATE\n40589.0', color: '#f0ad4e', title: 'Name: EDATE<br>Alias: null<br>Value: 40589.0<br>Type: FUNCTION<br>Id: 4129<br>Formula Expression: Formula String: EDATE(VALUE, A1); Formula Values: EDATE(1.0, 40558.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@75d95b67'},
{id: '4130', label: 'C5\n40558.0', color: '#31b0d5', title: 'Name: C5<br>Alias: null<br>Value: 40558.0<br>Type: CELL_WITH_FORMULA<br>Id: 4130<br>Formula Expression: Formula String: EDATE(VALUE, EDATE(VALUE, A1)); Formula Values: EDATE(-1.0, EDATE(1.0, 40558.0)); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@75d95b67'},
{id: '4133', label: 'VALUE\n-1.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: -1.0<br>Type: CONSTANT_VALUE<br>Id: 4133<br>Formula Expression: Formula String: VALUE; Formula Values: -1.0; Formula Ptg: -1.0; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@75d95b67'},
{id: '4134', label: 'EDATE\n40558.0', color: '#f0ad4e', title: 'Name: EDATE<br>Alias: null<br>Value: 40558.0<br>Type: FUNCTION<br>Id: 4134<br>Formula Expression: Formula String: EDATE(VALUE, EDATE(VALUE, A1)); Formula Values: EDATE(-1.0, EDATE(1.0, 40558.0)); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@75d95b67'},
{id: '4125', label: 'B3\n40589.0', color: '#31b0d5', title: 'Name: B3<br>Alias: null<br>Value: 40589.0<br>Type: CELL_WITH_FORMULA<br>Id: 4125<br>Formula Expression: Formula String: EDATE(VALUE, A1); Formula Values: EDATE(1.0, 40558.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@75d95b67'},
{id: '4127', label: 'A1\n40558.0', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: 40558.0<br>Type: CELL_WITH_VALUE<br>Id: 4127<br>Formula Expression: Formula String: A1; Formula Values: 40558.0; Formula Ptg: 40558.0; Ptgs: A1 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@75d95b67'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '4128', to: '4129'},
{from: '4133', to: '4134'},
{from: '4127', to: '4129'},
{from: '4125', to: '4134'},
{from: '4129', to: '4125'},
{from: '4134', to: '4130'}
                            ]);