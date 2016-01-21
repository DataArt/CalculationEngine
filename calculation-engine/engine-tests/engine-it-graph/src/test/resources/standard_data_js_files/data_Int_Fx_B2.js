var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '514', label: 'B2\n7.0', color: '#31b0d5', title: 'Name: B2<br>Alias: null<br>Value: 7.0<br>Type: CELL_WITH_FORMULA<br>Id: 514<br>Formula Expression: Formula String: INT(VALUE); Formula Values: INT(7.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@47f08b81'},
{id: '515', label: 'VALUE\n7.5', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 7.5<br>Type: CONSTANT_VALUE<br>Id: 515<br>Formula Expression: Formula String: VALUE; Formula Values: 7.5; Formula Ptg: 7.5; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@47f08b81'},
{id: '516', label: 'INT\n7.0', color: '#f0ad4e', title: 'Name: INT<br>Alias: null<br>Value: 7.0<br>Type: FUNCTION<br>Id: 516<br>Formula Expression: Formula String: INT(VALUE); Formula Values: INT(7.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@47f08b81'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '515', to: '516'},
{from: '516', to: '514'}
                            ]);