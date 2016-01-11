var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '3', label: 'ADDRESS\n$D$3', color: '#f0ad4e', title: 'Name: ADDRESS<br>Alias: null<br>Value: $D$3<br>Type: FUNCTION<br>Id: 3<br>Formula Expression: Formula String: ADDRESS(VALUE, VALUE); Formula Values: ADDRESS(4.0, 3.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@1a6cf771'},
{id: '1', label: 'VALUE\n3.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 3.0<br>Type: CONSTANT_VALUE<br>Id: 1<br>Formula Expression: Formula String: VALUE; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@1a6cf771'},
{id: '0', label: 'D5\n$D$3', color: '#31b0d5', title: 'Name: D5<br>Alias: null<br>Value: $D$3<br>Type: CELL_WITH_FORMULA<br>Id: 0<br>Formula Expression: Formula String: ADDRESS(VALUE, VALUE); Formula Values: ADDRESS(4.0, 3.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@1a6cf771'},
{id: '2', label: 'VALUE\n4.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 4.0<br>Type: CONSTANT_VALUE<br>Id: 2<br>Formula Expression: Formula String: VALUE; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@1a6cf771'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '2', to: '3'},
{from: '1', to: '3'},
{from: '3', to: '0'}
                            ]);