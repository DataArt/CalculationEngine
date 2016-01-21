var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '2777', label: 'A1\n12.0', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: 12.0<br>Type: CELL_WITH_REFERENCE<br>Id: 2777<br>Formula Expression: Formula String: VALUE; Formula Values: 12.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@24aedcc5'},
{id: '2778', label: 'VALUE\n12.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 12.0<br>Type: CONSTANT_VALUE<br>Id: 2778<br>Formula Expression: Formula String: VALUE; Formula Values: 12.0; Formula Ptg: 12.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@24aedcc5'},
{id: '2779', label: 'E5\n115.0', color: '#31b0d5', title: 'Name: E5<br>Alias: null<br>Value: 115.0<br>Type: CELL_WITH_FORMULA<br>Id: 2779<br>Formula Expression: Formula String: SUM(E1:E4); Formula Values: SUM([[5.0], [7.0], [57.0], [46.0]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@24aedcc5'},
{id: '2780', label: 'E1:E4\n[[5.0], [7.0], [57.0], [46.0]]', color: '#31b0d5', title: 'Name: E1:E4<br>Alias: null<br>Value: [[5.0], [7.0], [57.0], [46.0]]<br>Type: RANGE<br>Id: 2780<br>Formula Expression: Formula String: E1:E4; Formula Values: [[5.0], [7.0], [57.0], [46.0]]; Formula Ptg: [[5.0], [7.0], [57.0], [46.0]]; Ptgs: E1:E4 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@24aedcc5'},
{id: '2781', label: 'SUM\n115.0', color: '#f0ad4e', title: 'Name: SUM<br>Alias: null<br>Value: 115.0<br>Type: FUNCTION<br>Id: 2781<br>Formula Expression: Formula String: SUM(E1:E4); Formula Values: SUM([[5.0], [7.0], [57.0], [46.0]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@24aedcc5'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '2778', to: '2777'},
{from: '2780', to: '2781'},
{from: '2781', to: '2779'}
                            ]);