var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '3923', label: 'E6\n65.0', color: '#31b0d5', title: 'Name: E6<br>Alias: null<br>Value: 65.0<br>Type: CELL_WITH_FORMULA<br>Id: 3923<br>Formula Expression: Formula String: IF(D1<5,D2,C3); Formula Values: IF(4.0 < 5.0, 65.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7ec8db0c'},
{id: '3924', label: 'D1\n4.0', color: '#31b0d5', title: 'Name: D1<br>Alias: null<br>Value: 4.0<br>Type: CELL_WITH_VALUE<br>Id: 3924<br>Formula Expression: Formula String: D1; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: D1 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7ec8db0c'},
{id: '3925', label: 'VALUE\n5.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 5.0<br>Type: CONSTANT_VALUE<br>Id: 3925<br>Formula Expression: Formula String: VALUE; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7ec8db0c'},
{id: '3926', label: '<\nTRUE', color: '#f0ad4e', title: 'Name: <<br>Alias: null<br>Value: TRUE<br>Type: OPERATOR<br>Id: 3926<br>Formula Expression: Formula String: D1 < VALUE; Formula Values: 4.0 < 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7ec8db0c'},
{id: '3927', label: 'IF\n65.0', color: '#f0ad4e', title: 'Name: IF<br>Alias: null<br>Value: 65.0<br>Type: IF<br>Id: 3927<br>Formula Expression: Formula String: IF(D1<5,D2,C3); Formula Values: IF(4.0 < 5.0, 65.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: 2dc3a31e-98b0-4e2d-c804-318fa66433c7'},
{id: '3928', label: 'D2\n65.0', color: '#31b0d5', title: 'Name: D2<br>Alias: null<br>Value: 65.0<br>Type: CELL_WITH_VALUE<br>Id: 3928<br>Formula Expression: Formula String: D2; Formula Values: 65.0; Formula Ptg: 65.0; Ptgs: D2 Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7ec8db0c'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '3928', to: '3927'},
{from: '3924', to: '3926'},
{from: '3925', to: '3926'},
{from: '3926', to: '3927'},
{from: '3927', to: '3923'}
                            ]);