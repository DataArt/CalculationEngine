var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '167', label: 'C1\n-0.5235987755982989', color: '#31b0d5', title: 'Name: C1<br>Alias: null<br>Value: -0.5235987755982989<br>Type: CELL_WITH_FORMULA<br>Id: 167<br>Formula Expression: Formula String: ASIN(VALUE); Formula Values: ASIN(-0.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@72e5a8e'},
{id: '168', label: 'VALUE\n-0.5', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: -0.5<br>Type: CONSTANT_VALUE<br>Id: 168<br>Formula Expression: Formula String: VALUE; Formula Values: -0.5; Formula Ptg: -0.5; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@72e5a8e'},
{id: '169', label: 'ASIN\n-0.5235987755982989', color: '#f0ad4e', title: 'Name: ASIN<br>Alias: null<br>Value: -0.5235987755982989<br>Type: FUNCTION<br>Id: 169<br>Formula Expression: Formula String: ASIN(VALUE); Formula Values: ASIN(-0.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@72e5a8e'},
{id: '170', label: 'E3\n1.5707963267948966', color: '#31b0d5', title: 'Name: E3<br>Alias: null<br>Value: 1.5707963267948966<br>Type: CELL_WITH_FORMULA<br>Id: 170<br>Formula Expression: Formula String: ASIN(A2); Formula Values: ASIN(1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@72e5a8e'},
{id: '171', label: 'A2\n1.0', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: 1.0<br>Type: CELL_WITH_VALUE<br>Id: 171<br>Formula Expression: Formula String: A2; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@72e5a8e'},
{id: '172', label: 'ASIN\n1.5707963267948966', color: '#f0ad4e', title: 'Name: ASIN<br>Alias: null<br>Value: 1.5707963267948966<br>Type: FUNCTION<br>Id: 172<br>Formula Expression: Formula String: ASIN(A2); Formula Values: ASIN(1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@72e5a8e'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '168', to: '169'},
{from: '171', to: '172'},
{from: '169', to: '167'},
{from: '172', to: '170'}
                            ]);