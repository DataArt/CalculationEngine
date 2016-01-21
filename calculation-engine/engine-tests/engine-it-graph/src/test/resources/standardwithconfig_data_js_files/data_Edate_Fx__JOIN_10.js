var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '1921', label: 'A1\n40558.0', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: 40558.0<br>Type: CELL_WITH_VALUE<br>Id: 1921<br>Formula Expression: Formula String: A1; Formula Values: 40558.0; Formula Ptg: 40558.0; Ptgs: A1 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7f85217c'},
{id: '1922', label: 'VALUE\n1.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 1.0<br>Type: CONSTANT_VALUE<br>Id: 1922<br>Formula Expression: Formula String: VALUE; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7f85217c'},
{id: '1923', label: 'EDATE\n40589.0', color: '#f0ad4e', title: 'Name: EDATE<br>Alias: null<br>Value: 40589.0<br>Type: FUNCTION<br>Id: 1923<br>Formula Expression: Formula String: EDATE(VALUE, A1); Formula Values: EDATE(1.0, 40558.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7f85217c'},
{id: '1924', label: 'C5\n40558.0', color: '#31b0d5', title: 'Name: C5<br>Alias: null<br>Value: 40558.0<br>Type: CELL_WITH_FORMULA<br>Id: 1924<br>Formula Expression: Formula String: EDATE(VALUE, EDATE(VALUE, A1)); Formula Values: EDATE(-1.0, EDATE(1.0, 40558.0)); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7f85217c'},
{id: '1926', label: 'B3\n40589.0', color: '#31b0d5', title: 'Name: B3<br>Alias: null<br>Value: 40589.0<br>Type: CELL_WITH_FORMULA<br>Id: 1926<br>Formula Expression: Formula String: EDATE(VALUE, A1); Formula Values: EDATE(1.0, 40558.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7f85217c'},
{id: '1927', label: 'VALUE\n-1.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: -1.0<br>Type: CONSTANT_VALUE<br>Id: 1927<br>Formula Expression: Formula String: VALUE; Formula Values: -1.0; Formula Ptg: -1.0; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7f85217c'},
{id: '1928', label: 'EDATE\n40558.0', color: '#f0ad4e', title: 'Name: EDATE<br>Alias: null<br>Value: 40558.0<br>Type: FUNCTION<br>Id: 1928<br>Formula Expression: Formula String: EDATE(VALUE, EDATE(VALUE, A1)); Formula Values: EDATE(-1.0, EDATE(1.0, 40558.0)); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7f85217c'},
{id: '1919', label: 'B3\n40589.0', color: '#31b0d5', title: 'Name: B3<br>Alias: null<br>Value: 40589.0<br>Type: CELL_WITH_FORMULA<br>Id: 1919<br>Formula Expression: Formula String: EDATE(VALUE, A1); Formula Values: EDATE(1.0, 40558.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7f85217c'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '1922', to: '1923'},
{from: '1927', to: '1928'},
{from: '1921', to: '1923'},
{from: '1926', to: '1928'},
{from: '1923', to: '1926'},
{from: '1923', to: '1919'},
{from: '1928', to: '1924'}
                            ]);