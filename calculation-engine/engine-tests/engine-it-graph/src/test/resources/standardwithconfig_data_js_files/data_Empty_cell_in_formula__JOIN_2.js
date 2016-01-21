var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '3872', label: 'E5\n12.0', color: '#31b0d5', title: 'Name: E5<br>Alias: null<br>Value: 12.0<br>Type: CELL_WITH_FORMULA<br>Id: 3872<br>Formula Expression: Formula String: C1 + D1 + E1 + F1; Formula Values: 3.0 + 4.0 + 5.0 + ; Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@64908ab9'},
{id: '3873', label: 'C1\n3.0', color: '#31b0d5', title: 'Name: C1<br>Alias: null<br>Value: 3.0<br>Type: CELL_WITH_VALUE<br>Id: 3873<br>Formula Expression: Formula String: C1; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: C1 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@64908ab9'},
{id: '3874', label: 'D1\n4.0', color: '#31b0d5', title: 'Name: D1<br>Alias: null<br>Value: 4.0<br>Type: CELL_WITH_VALUE<br>Id: 3874<br>Formula Expression: Formula String: D1; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: D1 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@64908ab9'},
{id: '3875', label: '+\n7.0', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 7.0<br>Type: OPERATOR<br>Id: 3875<br>Formula Expression: Formula String: C1 + D1; Formula Values: 3.0 + 4.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@64908ab9'},
{id: '3876', label: 'E1\n5.0', color: '#31b0d5', title: 'Name: E1<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 3876<br>Formula Expression: Formula String: E1; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: E1 Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@64908ab9'},
{id: '3877', label: '+\n12.0', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 12.0<br>Type: OPERATOR<br>Id: 3877<br>Formula Expression: Formula String: C1 + D1 + E1; Formula Values: 3.0 + 4.0 + 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@64908ab9'},
{id: '3878', label: 'F1\n', color: '#31b0d5', title: 'Name: F1<br>Alias: null<br>Value: <br>Type: EMPTY_CELL<br>Id: 3878<br>Formula Expression: Formula String: F1; Formula Values: ; Formula Ptg: ; Ptgs: F1 Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@64908ab9'},
{id: '3879', label: '+\n12.0', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 12.0<br>Type: OPERATOR<br>Id: 3879<br>Formula Expression: Formula String: C1 + D1 + E1 + F1; Formula Values: 3.0 + 4.0 + 5.0 + ; Formula Ptg: ; Ptgs:  Index in Ptgs: 6 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@64908ab9'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '3873', to: '3875'},
{from: '3875', to: '3877'},
{from: '3877', to: '3879'},
{from: '3874', to: '3875'},
{from: '3876', to: '3877'},
{from: '3878', to: '3879'},
{from: '3879', to: '3872'}
                            ]);