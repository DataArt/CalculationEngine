var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '5232', label: 'EDATE\n40589.0', color: '#f0ad4e', title: 'Name: EDATE<br>Alias: null<br>Value: 40589.0<br>Type: FUNCTION<br>Id: 5232<br>Formula Expression: Formula String: EDATE(VALUE, A1); Formula Values: EDATE(1.0, 40558.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3e60be48'},
{id: '5233', label: 'C5\n40558.0', color: '#31b0d5', title: 'Name: C5<br>Alias: null<br>Value: 40558.0<br>Type: CELL_WITH_FORMULA<br>Id: 5233<br>Formula Expression: Formula String: EDATE(VALUE, EDATE(VALUE, A1)); Formula Values: EDATE(-1.0, EDATE(1.0, 40558.0)); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3e60be48'},
{id: '5235', label: 'B3\n40589.0', color: '#31b0d5', title: 'Name: B3<br>Alias: null<br>Value: 40589.0<br>Type: CELL_WITH_FORMULA<br>Id: 5235<br>Formula Expression: Formula String: EDATE(VALUE, A1); Formula Values: EDATE(1.0, 40558.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3e60be48'},
{id: '5236', label: 'VALUE\n-1.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: -1.0<br>Type: CONSTANT_VALUE<br>Id: 5236<br>Formula Expression: Formula String: VALUE; Formula Values: -1.0; Formula Ptg: -1.0; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3e60be48'},
{id: '5237', label: 'EDATE\n40558.0', color: '#f0ad4e', title: 'Name: EDATE<br>Alias: null<br>Value: 40558.0<br>Type: FUNCTION<br>Id: 5237<br>Formula Expression: Formula String: EDATE(VALUE, EDATE(VALUE, A1)); Formula Values: EDATE(-1.0, EDATE(1.0, 40558.0)); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3e60be48'},
{id: '5228', label: 'B3\n40589.0', color: '#31b0d5', title: 'Name: B3<br>Alias: null<br>Value: 40589.0<br>Type: CELL_WITH_FORMULA<br>Id: 5228<br>Formula Expression: Formula String: EDATE(VALUE, A1); Formula Values: EDATE(1.0, 40558.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3e60be48'},
{id: '5230', label: 'A1\n40558.0', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: 40558.0<br>Type: CELL_WITH_VALUE<br>Id: 5230<br>Formula Expression: Formula String: A1; Formula Values: 40558.0; Formula Ptg: 40558.0; Ptgs: A1 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3e60be48'},
{id: '5231', label: 'VALUE\n1.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 1.0<br>Type: CONSTANT_VALUE<br>Id: 5231<br>Formula Expression: Formula String: VALUE; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3e60be48'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '5231', to: '5232'},
{from: '5236', to: '5237'},
{from: '5230', to: '5232'},
{from: '5235', to: '5237'},
{from: '5232', to: '5235'},
{from: '5232', to: '5228'},
{from: '5237', to: '5233'}
                            ]);