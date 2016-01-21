var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '5249', label: 'B2\n2.0', color: '#31b0d5', title: 'Name: B2<br>Alias: null<br>Value: 2.0<br>Type: CELL_WITH_FORMULA<br>Id: 5249<br>Formula Expression: Formula String: EVEN(VALUE); Formula Values: EVEN(1.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7a8dbbf1'},
{id: '5250', label: 'VALUE\n1.5', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 1.5<br>Type: CONSTANT_VALUE<br>Id: 5250<br>Formula Expression: Formula String: VALUE; Formula Values: 1.5; Formula Ptg: 1.5; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7a8dbbf1'},
{id: '5251', label: 'EVEN\n2.0', color: '#f0ad4e', title: 'Name: EVEN<br>Alias: null<br>Value: 2.0<br>Type: FUNCTION<br>Id: 5251<br>Formula Expression: Formula String: EVEN(VALUE); Formula Values: EVEN(1.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7a8dbbf1'},
{id: '5252', label: 'B3\n4.0', color: '#31b0d5', title: 'Name: B3<br>Alias: null<br>Value: 4.0<br>Type: CELL_WITH_FORMULA<br>Id: 5252<br>Formula Expression: Formula String: EVEN(VALUE); Formula Values: EVEN(2.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7a8dbbf1'},
{id: '5253', label: 'VALUE\n2.5', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 2.5<br>Type: CONSTANT_VALUE<br>Id: 5253<br>Formula Expression: Formula String: VALUE; Formula Values: 2.5; Formula Ptg: 2.5; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7a8dbbf1'},
{id: '5254', label: 'EVEN\n4.0', color: '#f0ad4e', title: 'Name: EVEN<br>Alias: null<br>Value: 4.0<br>Type: FUNCTION<br>Id: 5254<br>Formula Expression: Formula String: EVEN(VALUE); Formula Values: EVEN(2.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7a8dbbf1'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '5250', to: '5251'},
{from: '5253', to: '5254'},
{from: '5251', to: '5249'},
{from: '5254', to: '5252'}
                            ]);