var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '0', label: 'A1\n2.993222846126381', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: 2.993222846126381<br>Type: CELL_WITH_FORMULA<br>Id: 0<br>Formula Expression: Formula String: ACOSH(VALUE); Formula Values: ACOSH(10.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@489091bd'},
{id: '1', label: 'VALUE\n10.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 10.0<br>Type: CONSTANT_VALUE<br>Id: 1<br>Formula Expression: Formula String: VALUE; Formula Values: 10.0; Formula Ptg: 10.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@489091bd'},
{id: '2', label: 'ACOSH\n2.993222846126381', color: '#f0ad4e', title: 'Name: ACOSH<br>Alias: null<br>Value: 2.993222846126381<br>Type: FUNCTION<br>Id: 2<br>Formula Expression: Formula String: ACOSH(VALUE); Formula Values: ACOSH(10.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@489091bd'},
{id: '3', label: 'B6\n9', color: '#31b0d5', title: 'Name: B6<br>Alias: null<br>Value: 9<br>Type: CELL_WITH_FORMULA<br>Id: 3<br>Formula Expression: Formula String: CLEAN(B1); Formula Values: CLEAN(9.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@489091bd'},
{id: '4', label: 'B1\n9.0', color: '#31b0d5', title: 'Name: B1<br>Alias: null<br>Value: 9.0<br>Type: CELL_WITH_VALUE<br>Id: 4<br>Formula Expression: Formula String: B1; Formula Values: 9.0; Formula Ptg: 9.0; Ptgs: B1 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@489091bd'},
{id: '5', label: 'CLEAN\n9', color: '#f0ad4e', title: 'Name: CLEAN<br>Alias: null<br>Value: 9<br>Type: FUNCTION<br>Id: 5<br>Formula Expression: Formula String: CLEAN(B1); Formula Values: CLEAN(9.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@489091bd'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '1', to: '2'},
{from: '4', to: '5'},
{from: '2', to: '0'},
{from: '5', to: '3'}
                            ]);