var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '1', label: 'VALUE\n12.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 12.0<br>Type: CONSTANT_VALUE<br>Id: 1<br>Formula Expression: Formula String: VALUE; Formula Values: 12.0; Formula Ptg: 12.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@333a44f2'},
{id: '0', label: 'A1\n12.0', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: 12.0<br>Type: CELL_WITH_FORMULA<br>Id: 0<br>Formula Expression: Formula String: VALUE; Formula Values: 12.0; Formula Ptg: 12.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@333a44f2'},
{id: '4', label: 'SUM\n115.0', color: '#f0ad4e', title: 'Name: SUM<br>Alias: null<br>Value: 115.0<br>Type: FUNCTION<br>Id: 4<br>Formula Expression: Formula String: SUM(E1:E4); Formula Values: SUM(5.0, 7.0, 57.0, 46.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@333a44f2'},
{id: '2', label: 'E5\n115.0', color: '#31b0d5', title: 'Name: E5<br>Alias: null<br>Value: 115.0<br>Type: CELL_WITH_FORMULA<br>Id: 2<br>Formula Expression: Formula String: SUM(E1:E4); Formula Values: SUM(5.0, 7.0, 57.0, 46.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@333a44f2'},
{id: '3', label: 'E1:E4\n[[5.0], [7.0], [57.0], [46.0]]', color: '#31b0d5', title: 'Name: E1:E4<br>Alias: null<br>Value: [[5.0], [7.0], [57.0], [46.0]]<br>Type: RANGE<br>Id: 3<br>Formula Expression: Formula String: E1:E4; Formula Values: [[5.0], [7.0], [57.0], [46.0]]; Formula Ptg: [[5.0], [7.0], [57.0], [46.0]]; Ptgs: E1:E4 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@333a44f2'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '1', to: '0'},
{from: '4', to: '2'},
{from: '3', to: '4'}
                            ]);