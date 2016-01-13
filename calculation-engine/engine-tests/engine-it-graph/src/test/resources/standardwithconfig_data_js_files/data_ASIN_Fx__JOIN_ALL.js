var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '0', label: 'C1\n-0.5235987755982989', color: '#31b0d5', title: 'Name: C1<br>Alias: null<br>Value: -0.5235987755982989<br>Type: CELL_WITH_FORMULA<br>Id: 0<br>Formula Expression: Formula String: ASIN(VALUE); Formula Values: ASIN(-0.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2123064f'},
{id: '1', label: 'VALUE\n-0.5', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: -0.5<br>Type: CONSTANT_VALUE<br>Id: 1<br>Formula Expression: Formula String: VALUE; Formula Values: -0.5; Formula Ptg: -0.5; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2123064f'},
{id: '2', label: 'ASIN\n-0.5235987755982989', color: '#f0ad4e', title: 'Name: ASIN<br>Alias: null<br>Value: -0.5235987755982989<br>Type: FUNCTION<br>Id: 2<br>Formula Expression: Formula String: ASIN(VALUE); Formula Values: ASIN(-0.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2123064f'},
{id: '3', label: 'E3\n1.5707963267948966', color: '#31b0d5', title: 'Name: E3<br>Alias: null<br>Value: 1.5707963267948966<br>Type: CELL_WITH_FORMULA<br>Id: 3<br>Formula Expression: Formula String: ASIN(A2); Formula Values: ASIN(1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2123064f'},
{id: '4', label: 'A2\n1.0', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: 1.0<br>Type: CELL_WITH_VALUE<br>Id: 4<br>Formula Expression: Formula String: A2; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2123064f'},
{id: '5', label: 'ASIN\n1.5707963267948966', color: '#f0ad4e', title: 'Name: ASIN<br>Alias: null<br>Value: 1.5707963267948966<br>Type: FUNCTION<br>Id: 5<br>Formula Expression: Formula String: ASIN(A2); Formula Values: ASIN(1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2123064f'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '1', to: '2'},
{from: '2', to: '0'},
{from: '4', to: '5'},
{from: '5', to: '3'}
                            ]);