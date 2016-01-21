var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '52', label: 'F5\nFALSE', color: '#31b0d5', title: 'Name: F5<br>Alias: null<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 52<br>Formula Expression: Formula String: AND(E1 + D3 = C4, VALUE < D1); Formula Values: AND(5.0 + 367.0 = 89.0, 1.0 < 0.4); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@55536d9e'},
{id: '53', label: 'VALUE\n1.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 1.0<br>Type: CONSTANT_VALUE<br>Id: 53<br>Formula Expression: Formula String: VALUE; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@55536d9e'},
{id: '54', label: 'D1\n0.4', color: '#31b0d5', title: 'Name: D1<br>Alias: null<br>Value: 0.4<br>Type: CELL_WITH_VALUE<br>Id: 54<br>Formula Expression: Formula String: D1; Formula Values: 0.4; Formula Ptg: 0.4; Ptgs: D1 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@55536d9e'},
{id: '55', label: '<\nFALSE', color: '#f0ad4e', title: 'Name: <<br>Alias: null<br>Value: FALSE<br>Type: OPERATOR<br>Id: 55<br>Formula Expression: Formula String: VALUE < D1; Formula Values: 1.0 < 0.4; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@55536d9e'},
{id: '56', label: 'E1\n5.0', color: '#31b0d5', title: 'Name: E1<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 56<br>Formula Expression: Formula String: E1; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: E1 Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@55536d9e'},
{id: '57', label: 'D3\n367.0', color: '#31b0d5', title: 'Name: D3<br>Alias: null<br>Value: 367.0<br>Type: CELL_WITH_VALUE<br>Id: 57<br>Formula Expression: Formula String: D3; Formula Values: 367.0; Formula Ptg: 367.0; Ptgs: D3 Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@55536d9e'},
{id: '58', label: '+\n372.0', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 372.0<br>Type: OPERATOR<br>Id: 58<br>Formula Expression: Formula String: E1 + D3; Formula Values: 5.0 + 367.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@55536d9e'},
{id: '59', label: 'C4\n89.0', color: '#31b0d5', title: 'Name: C4<br>Alias: null<br>Value: 89.0<br>Type: CELL_WITH_VALUE<br>Id: 59<br>Formula Expression: Formula String: C4; Formula Values: 89.0; Formula Ptg: 89.0; Ptgs: C4 Index in Ptgs: 6 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@55536d9e'},
{id: '60', label: '=\nFALSE', color: '#f0ad4e', title: 'Name: =<br>Alias: null<br>Value: FALSE<br>Type: OPERATOR<br>Id: 60<br>Formula Expression: Formula String: E1 + D3 = C4; Formula Values: 5.0 + 367.0 = 89.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 7 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@55536d9e'},
{id: '61', label: 'AND\nFALSE', color: '#f0ad4e', title: 'Name: AND<br>Alias: null<br>Value: FALSE<br>Type: FUNCTION<br>Id: 61<br>Formula Expression: Formula String: AND(E1 + D3 = C4, VALUE < D1); Formula Values: AND(5.0 + 367.0 = 89.0, 1.0 < 0.4); Formula Ptg: ; Ptgs:  Index in Ptgs: 8 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@55536d9e'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '54', to: '55'},
{from: '57', to: '58'},
{from: '59', to: '60'},
{from: '60', to: '61'},
{from: '53', to: '55'},
{from: '56', to: '58'},
{from: '58', to: '60'},
{from: '55', to: '61'},
{from: '61', to: '52'}
                            ]);