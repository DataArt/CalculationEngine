var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '448', label: 'DOLLAR\n350.0', color: '#f0ad4e', title: 'Name: DOLLAR<br>Alias: null<br>Value: 350.0<br>Type: FUNCTION<br>Id: 448<br>Formula Expression: Formula String: DOLLAR(VALUE, D3); Formula Values: DOLLAR(-1.0, 350.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@718607eb'},
{id: '445', label: 'F5\n350.0', color: '#31b0d5', title: 'Name: F5<br>Alias: null<br>Value: 350.0<br>Type: CELL_WITH_FORMULA<br>Id: 445<br>Formula Expression: Formula String: DOLLAR(VALUE, D3); Formula Values: DOLLAR(-1.0, 350.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@718607eb'},
{id: '446', label: 'D3\n350.0', color: '#31b0d5', title: 'Name: D3<br>Alias: null<br>Value: 350.0<br>Type: CELL_WITH_VALUE<br>Id: 446<br>Formula Expression: Formula String: D3; Formula Values: 350.0; Formula Ptg: 350.0; Ptgs: D3 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@718607eb'},
{id: '447', label: 'VALUE\n-1.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: -1.0<br>Type: CONSTANT_VALUE<br>Id: 447<br>Formula Expression: Formula String: VALUE; Formula Values: -1.0; Formula Ptg: -1.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@718607eb'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '447', to: '448'},
{from: '446', to: '448'},
{from: '448', to: '445'}
                            ]);