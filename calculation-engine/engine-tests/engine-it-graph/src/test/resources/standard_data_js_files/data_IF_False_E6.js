var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '336', label: '>\nFALSE', color: '#f0ad4e', title: 'Name: ><br>Alias: null<br>Value: FALSE<br>Type: OPERATOR<br>Id: 336<br>Formula Expression: Formula String: D1 > VALUE; Formula Values: 4.0 > 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3f28bd56'},
{id: '337', label: 'IF\n8.0', color: '#f0ad4e', title: 'Name: IF<br>Alias: null<br>Value: 8.0<br>Type: IF<br>Id: 337<br>Formula Expression: Formula String: IF(D1>5,D2,C3); Formula Values: IF(4.0 > 5.0, 8.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: cefc9a94-bdcd-8f83-c83d-6008c168523c'},
{id: '338', label: 'C3\n8.0', color: '#31b0d5', title: 'Name: C3<br>Alias: null<br>Value: 8.0<br>Type: CELL_WITH_VALUE<br>Id: 338<br>Formula Expression: Formula String: C3; Formula Values: 8.0; Formula Ptg: 8.0; Ptgs: C3 Index in Ptgs: 6 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3f28bd56'},
{id: '333', label: 'E6\n8.0', color: '#31b0d5', title: 'Name: E6<br>Alias: null<br>Value: 8.0<br>Type: CELL_WITH_FORMULA<br>Id: 333<br>Formula Expression: Formula String: IF(D1>5,D2,C3); Formula Values: IF(4.0 > 5.0, 8.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3f28bd56'},
{id: '334', label: 'D1\n4.0', color: '#31b0d5', title: 'Name: D1<br>Alias: null<br>Value: 4.0<br>Type: CELL_WITH_VALUE<br>Id: 334<br>Formula Expression: Formula String: D1; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: D1 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3f28bd56'},
{id: '335', label: 'VALUE\n5.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 5.0<br>Type: CONSTANT_VALUE<br>Id: 335<br>Formula Expression: Formula String: VALUE; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3f28bd56'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '338', to: '337'},
{from: '335', to: '336'},
{from: '336', to: '337'},
{from: '334', to: '336'},
{from: '337', to: '333'}
                            ]);