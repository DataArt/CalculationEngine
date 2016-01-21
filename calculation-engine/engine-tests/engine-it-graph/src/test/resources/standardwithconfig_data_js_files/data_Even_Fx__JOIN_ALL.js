var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '3043', label: 'B2\n2.0', color: '#31b0d5', title: 'Name: B2<br>Alias: null<br>Value: 2.0<br>Type: CELL_WITH_FORMULA<br>Id: 3043<br>Formula Expression: Formula String: EVEN(VALUE); Formula Values: EVEN(1.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@fb5d334'},
{id: '3044', label: 'VALUE\n1.5', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 1.5<br>Type: CONSTANT_VALUE<br>Id: 3044<br>Formula Expression: Formula String: VALUE; Formula Values: 1.5; Formula Ptg: 1.5; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@fb5d334'},
{id: '3045', label: 'EVEN\n2.0', color: '#f0ad4e', title: 'Name: EVEN<br>Alias: null<br>Value: 2.0<br>Type: FUNCTION<br>Id: 3045<br>Formula Expression: Formula String: EVEN(VALUE); Formula Values: EVEN(1.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@fb5d334'},
{id: '3046', label: 'B3\n4.0', color: '#31b0d5', title: 'Name: B3<br>Alias: null<br>Value: 4.0<br>Type: CELL_WITH_FORMULA<br>Id: 3046<br>Formula Expression: Formula String: EVEN(VALUE); Formula Values: EVEN(2.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@fb5d334'},
{id: '3047', label: 'VALUE\n2.5', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 2.5<br>Type: CONSTANT_VALUE<br>Id: 3047<br>Formula Expression: Formula String: VALUE; Formula Values: 2.5; Formula Ptg: 2.5; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@fb5d334'},
{id: '3048', label: 'EVEN\n4.0', color: '#f0ad4e', title: 'Name: EVEN<br>Alias: null<br>Value: 4.0<br>Type: FUNCTION<br>Id: 3048<br>Formula Expression: Formula String: EVEN(VALUE); Formula Values: EVEN(2.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@fb5d334'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '3044', to: '3045'},
{from: '3047', to: '3048'},
{from: '3045', to: '3043'},
{from: '3048', to: '3046'}
                            ]);