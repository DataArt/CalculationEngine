var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '4208', label: '+\n5.0', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 5.0<br>Type: OPERATOR<br>Id: 4208<br>Formula Expression: Formula String: VALUE + VALUE; Formula Values: 2.0 + 3.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4df5f119'},
{id: '4209', label: 'C7\n9.0', color: '#31b0d5', title: 'Name: C7<br>Alias: null<br>Value: 9.0<br>Type: CELL_WITH_FORMULA<br>Id: 4209<br>Formula Expression: Formula String: VALUE + VALUE; Formula Values: 3.0 + 6.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4df5f119'},
{id: '4210', label: 'VALUE\n3.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 3.0<br>Type: CONSTANT_VALUE<br>Id: 4210<br>Formula Expression: Formula String: VALUE; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4df5f119'},
{id: '4211', label: 'VALUE\n6.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 6.0<br>Type: CONSTANT_VALUE<br>Id: 4211<br>Formula Expression: Formula String: VALUE; Formula Values: 6.0; Formula Ptg: 6.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4df5f119'},
{id: '4212', label: '+\n9.0', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 9.0<br>Type: OPERATOR<br>Id: 4212<br>Formula Expression: Formula String: VALUE + VALUE; Formula Values: 3.0 + 6.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4df5f119'},
{id: '4213', label: 'C8\nFALSE', color: '#31b0d5', title: 'Name: C8<br>Alias: null<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 4213<br>Formula Expression: Formula String: VALUE = VALUE; Formula Values: 1.0 = 8.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4df5f119'},
{id: '4214', label: 'VALUE\n1.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 1.0<br>Type: CONSTANT_VALUE<br>Id: 4214<br>Formula Expression: Formula String: VALUE; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4df5f119'},
{id: '4215', label: 'VALUE\n8.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 8.0<br>Type: CONSTANT_VALUE<br>Id: 4215<br>Formula Expression: Formula String: VALUE; Formula Values: 8.0; Formula Ptg: 8.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4df5f119'},
{id: '4216', label: '=\nFALSE', color: '#f0ad4e', title: 'Name: =<br>Alias: null<br>Value: FALSE<br>Type: OPERATOR<br>Id: 4216<br>Formula Expression: Formula String: VALUE = VALUE; Formula Values: 1.0 = 8.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4df5f119'},
{id: '4205', label: 'C6\n5.0', color: '#31b0d5', title: 'Name: C6<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_FORMULA<br>Id: 4205<br>Formula Expression: Formula String: VALUE + VALUE; Formula Values: 2.0 + 3.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4df5f119'},
{id: '4206', label: 'VALUE\n2.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 2.0<br>Type: CONSTANT_VALUE<br>Id: 4206<br>Formula Expression: Formula String: VALUE; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4df5f119'},
{id: '4207', label: 'VALUE\n3.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 3.0<br>Type: CONSTANT_VALUE<br>Id: 4207<br>Formula Expression: Formula String: VALUE; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4df5f119'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '4207', to: '4208'},
{from: '4211', to: '4212'},
{from: '4215', to: '4216'},
{from: '4206', to: '4208'},
{from: '4210', to: '4212'},
{from: '4214', to: '4216'},
{from: '4208', to: '4205'},
{from: '4212', to: '4209'},
{from: '4216', to: '4213'}
                            ]);