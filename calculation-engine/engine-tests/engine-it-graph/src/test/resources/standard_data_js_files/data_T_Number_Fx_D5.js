var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '432', label: 'D3\n52.0', color: '#31b0d5', title: 'Name: D3<br>Alias: null<br>Value: 52.0<br>Type: CELL_WITH_VALUE<br>Id: 432<br>Formula Expression: Formula String: D3; Formula Values: 52.0; Formula Ptg: 52.0; Ptgs: D3 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4837595f'},
{id: '433', label: 'T\n', color: '#f0ad4e', title: 'Name: T<br>Alias: null<br>Value: <br>Type: FUNCTION<br>Id: 433<br>Formula Expression: Formula String: T(D3); Formula Values: T(52.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4837595f'},
{id: '431', label: 'D5\n', color: '#31b0d5', title: 'Name: D5<br>Alias: null<br>Value: <br>Type: CELL_WITH_FORMULA<br>Id: 431<br>Formula Expression: Formula String: T(D3); Formula Values: T(52.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4837595f'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '432', to: '433'},
{from: '433', to: '431'}
                            ]);