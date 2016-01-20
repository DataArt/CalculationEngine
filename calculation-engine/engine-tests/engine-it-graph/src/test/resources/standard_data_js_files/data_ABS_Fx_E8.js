var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '0', label: 'E8\n77.7', color: '#31b0d5', title: 'Name: E8<br>Alias: null<br>Value: 77.7<br>Type: CELL_WITH_FORMULA<br>Id: 0<br>Formula Expression: Formula String: ABS(D3); Formula Values: ABS(77.7); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@75329a49'},
{id: '1', label: 'D3\n77.7', color: '#31b0d5', title: 'Name: D3<br>Alias: null<br>Value: 77.7<br>Type: CELL_WITH_VALUE<br>Id: 1<br>Formula Expression: Formula String: D3; Formula Values: 77.7; Formula Ptg: 77.7; Ptgs: D3 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@75329a49'},
{id: '2', label: 'ABS\n77.7', color: '#f0ad4e', title: 'Name: ABS<br>Alias: null<br>Value: 77.7<br>Type: FUNCTION<br>Id: 2<br>Formula Expression: Formula String: ABS(D3); Formula Values: ABS(77.7); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@75329a49'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '1', to: '2'},
{from: '2', to: '0'}
                            ]);