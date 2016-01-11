var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '2', label: 'ASINH\n3.4023066454805946', color: '#f0ad4e', title: 'Name: ASINH<br>Alias: null<br>Value: 3.4023066454805946<br>Type: FUNCTION<br>Id: 2<br>Formula Expression: Formula String: ASINH(VALUE); Formula Values: ASINH(15.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@c9413d8'},
{id: '1', label: 'VALUE\n15.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 15.0<br>Type: CONSTANT_VALUE<br>Id: 1<br>Formula Expression: Formula String: VALUE; Formula Values: 15.0; Formula Ptg: 15.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@c9413d8'},
{id: '0', label: 'B3\n3.4023066454805946', color: '#31b0d5', title: 'Name: B3<br>Alias: null<br>Value: 3.4023066454805946<br>Type: CELL_WITH_FORMULA<br>Id: 0<br>Formula Expression: Formula String: ASINH(VALUE); Formula Values: ASINH(15.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@c9413d8'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '2', to: '0'},
{from: '1', to: '2'}
                            ]);