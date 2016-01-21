var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '1712', label: 'VALUE\n5.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 5.0<br>Type: CONSTANT_VALUE<br>Id: 1712<br>Formula Expression: Formula String: VALUE; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@52a33c3f'},
{id: '1713', label: '>\nFALSE', color: '#f0ad4e', title: 'Name: ><br>Alias: null<br>Value: FALSE<br>Type: OPERATOR<br>Id: 1713<br>Formula Expression: Formula String: D1 > VALUE; Formula Values: 4.0 > 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@52a33c3f'},
{id: '1714', label: 'IF\n8.0', color: '#f0ad4e', title: 'Name: IF<br>Alias: null<br>Value: 8.0<br>Type: IF<br>Id: 1714<br>Formula Expression: Formula String: IF(D1>5,D2,C3); Formula Values: IF(4.0 > 5.0, 8.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: 49b0430b-5791-ab82-d88c-3bf32872db5e'},
{id: '1715', label: 'C3\n8.0', color: '#31b0d5', title: 'Name: C3<br>Alias: null<br>Value: 8.0<br>Type: CELL_WITH_VALUE<br>Id: 1715<br>Formula Expression: Formula String: C3; Formula Values: 8.0; Formula Ptg: 8.0; Ptgs: C3 Index in Ptgs: 6 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@52a33c3f'},
{id: '1710', label: 'E6\n8.0', color: '#31b0d5', title: 'Name: E6<br>Alias: null<br>Value: 8.0<br>Type: CELL_WITH_FORMULA<br>Id: 1710<br>Formula Expression: Formula String: IF(D1>5,D2,C3); Formula Values: IF(4.0 > 5.0, 8.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@52a33c3f'},
{id: '1711', label: 'D1\n4.0', color: '#31b0d5', title: 'Name: D1<br>Alias: null<br>Value: 4.0<br>Type: CELL_WITH_VALUE<br>Id: 1711<br>Formula Expression: Formula String: D1; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: D1 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@52a33c3f'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '1715', to: '1714'},
{from: '1712', to: '1713'},
{from: '1713', to: '1714'},
{from: '1711', to: '1713'},
{from: '1714', to: '1710'}
                            ]);