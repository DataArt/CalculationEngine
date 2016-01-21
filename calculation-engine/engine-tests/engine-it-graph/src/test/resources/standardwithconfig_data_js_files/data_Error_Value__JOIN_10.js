var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '1706', label: 'E5\n[9.0, 7.0]', color: '#31b0d5', title: 'Name: E5<br>Alias: null<br>Value: [9.0, 7.0]<br>Type: CELL_WITH_FORMULA<br>Id: 1706<br>Formula Expression: Formula String: [9.0, 7.0]; Formula Values: [9.0, 7.0]; Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3e4e8fdf'},
{id: '1707', label: 'A5\n7.0', color: '#31b0d5', title: 'Name: A5<br>Alias: null<br>Value: 7.0<br>Type: CELL_WITH_VALUE<br>Id: 1707<br>Formula Expression: Formula String: A5; Formula Values: 7.0; Formula Ptg: 7.0; Ptgs: A5 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3e4e8fdf'},
{id: '1708', label: 'D5\n9.0', color: '#31b0d5', title: 'Name: D5<br>Alias: null<br>Value: 9.0<br>Type: CELL_WITH_VALUE<br>Id: 1708<br>Formula Expression: Formula String: D5; Formula Values: 9.0; Formula Ptg: 9.0; Ptgs: D5 Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3e4e8fdf'},
{id: '1709', label: ',\n[9.0, 7.0]', color: '#f0ad4e', title: 'Name: ,<br>Alias: null<br>Value: [9.0, 7.0]<br>Type: OPERATOR<br>Id: 1709<br>Formula Expression: Formula String: [9.0, 7.0]; Formula Values: [9.0, 7.0]; Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: null'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '1708', to: '1709'},
{from: '1707', to: '1709'},
{from: '1709', to: '1706'}
                            ]);