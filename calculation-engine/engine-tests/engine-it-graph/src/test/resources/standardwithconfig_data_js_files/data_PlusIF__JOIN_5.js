var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '5062', label: 'A1\n6.0', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: 6.0<br>Type: CELL_WITH_FORMULA<br>Id: 5062<br>Formula Expression: Formula String: IF(A3>A4,B3,B4); Formula Values: IF(3.0 > 5.0, 6.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3f13720f'},
{id: '5063', label: 'A3\n3.0', color: '#31b0d5', title: 'Name: A3<br>Alias: null<br>Value: 3.0<br>Type: CELL_WITH_VALUE<br>Id: 5063<br>Formula Expression: Formula String: A3; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: A3 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3f13720f'},
{id: '5064', label: 'A4\n5.0', color: '#31b0d5', title: 'Name: A4<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 5064<br>Formula Expression: Formula String: A4; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: A4 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3f13720f'},
{id: '5065', label: '>\nFALSE', color: '#f0ad4e', title: 'Name: ><br>Alias: null<br>Value: FALSE<br>Type: OPERATOR<br>Id: 5065<br>Formula Expression: Formula String: A3 > A4; Formula Values: 3.0 > 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3f13720f'},
{id: '5066', label: 'IF\n6.0', color: '#f0ad4e', title: 'Name: IF<br>Alias: null<br>Value: 6.0<br>Type: IF<br>Id: 5066<br>Formula Expression: Formula String: IF(A3>A4,B3,B4); Formula Values: IF(3.0 > 5.0, 6.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: 5c0e75b9-798c-1387-9c83-7e7cdfade868'},
{id: '5067', label: 'B4\n6.0', color: '#31b0d5', title: 'Name: B4<br>Alias: null<br>Value: 6.0<br>Type: CELL_WITH_VALUE<br>Id: 5067<br>Formula Expression: Formula String: B4; Formula Values: 6.0; Formula Ptg: 6.0; Ptgs: B4 Index in Ptgs: 6 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3f13720f'},
{id: '5069', label: '+\n6.0', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 6.0<br>Type: OPERATOR<br>Id: 5069<br>Formula Expression: Formula String: IF(A3>A4,B3,B4); Formula Values: IF(3.0 > 5.0, 6.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 9 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3f13720f'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '5064', to: '5065'},
{from: '5065', to: '5066'},
{from: '5063', to: '5065'},
{from: '5067', to: '5066'},
{from: '5066', to: '5069'},
{from: '5069', to: '5062'}
                            ]);