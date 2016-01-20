var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '0', label: 'A1\n2.993222846126381', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: 2.993222846126381<br>Type: CELL_WITH_FORMULA<br>Id: 0<br>Formula Expression: Formula String: ACOSH(VALUE); Formula Values: ACOSH(10.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3a0b6a'},
{id: '1', label: 'VALUE\n10.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 10.0<br>Type: CONSTANT_VALUE<br>Id: 1<br>Formula Expression: Formula String: VALUE; Formula Values: 10.0; Formula Ptg: 10.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3a0b6a'},
{id: '2', label: 'ACOSH\n2.993222846126381', color: '#f0ad4e', title: 'Name: ACOSH<br>Alias: null<br>Value: 2.993222846126381<br>Type: FUNCTION<br>Id: 2<br>Formula Expression: Formula String: ACOSH(VALUE); Formula Values: ACOSH(10.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3a0b6a'},
{id: '3', label: 'E5\n5.192925985263684', color: '#31b0d5', title: 'Name: E5<br>Alias: null<br>Value: 5.192925985263684<br>Type: CELL_WITH_FORMULA<br>Id: 3<br>Formula Expression: Formula String: ACOSH(C2); Formula Values: ACOSH(90.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3a0b6a'},
{id: '4', label: 'C2\n90.0', color: '#31b0d5', title: 'Name: C2<br>Alias: null<br>Value: 90.0<br>Type: CELL_WITH_VALUE<br>Id: 4<br>Formula Expression: Formula String: C2; Formula Values: 90.0; Formula Ptg: 90.0; Ptgs: C2 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3a0b6a'},
{id: '5', label: 'ACOSH\n5.192925985263684', color: '#f0ad4e', title: 'Name: ACOSH<br>Alias: null<br>Value: 5.192925985263684<br>Type: FUNCTION<br>Id: 5<br>Formula Expression: Formula String: ACOSH(C2); Formula Values: ACOSH(90.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3a0b6a'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '1', to: '2'},
{from: '4', to: '5'},
{from: '2', to: '0'},
{from: '5', to: '3'}
                            ]);