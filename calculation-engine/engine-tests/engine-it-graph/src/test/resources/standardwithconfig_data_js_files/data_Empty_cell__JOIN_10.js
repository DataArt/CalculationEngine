var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '1674', label: 'A1\n12.0', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: 12.0<br>Type: CELL_WITH_REFERENCE<br>Id: 1674<br>Formula Expression: Formula String: VALUE; Formula Values: 12.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6abdec0e'},
{id: '1675', label: 'VALUE\n12.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 12.0<br>Type: CONSTANT_VALUE<br>Id: 1675<br>Formula Expression: Formula String: VALUE; Formula Values: 12.0; Formula Ptg: 12.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6abdec0e'},
{id: '1676', label: 'E5\n115.0', color: '#31b0d5', title: 'Name: E5<br>Alias: null<br>Value: 115.0<br>Type: CELL_WITH_FORMULA<br>Id: 1676<br>Formula Expression: Formula String: SUM(E1:E4); Formula Values: SUM([[5.0], [7.0], [57.0], [46.0]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6abdec0e'},
{id: '1677', label: 'E1:E4\n[[5.0], [7.0], [57.0], [46.0]]', color: '#31b0d5', title: 'Name: E1:E4<br>Alias: null<br>Value: [[5.0], [7.0], [57.0], [46.0]]<br>Type: RANGE<br>Id: 1677<br>Formula Expression: Formula String: E1:E4; Formula Values: [[5.0], [7.0], [57.0], [46.0]]; Formula Ptg: [[5.0], [7.0], [57.0], [46.0]]; Ptgs: E1:E4 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6abdec0e'},
{id: '1678', label: 'SUM\n115.0', color: '#f0ad4e', title: 'Name: SUM<br>Alias: null<br>Value: 115.0<br>Type: FUNCTION<br>Id: 1678<br>Formula Expression: Formula String: SUM(E1:E4); Formula Values: SUM([[5.0], [7.0], [57.0], [46.0]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6abdec0e'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '1675', to: '1674'},
{from: '1677', to: '1678'},
{from: '1678', to: '1676'}
                            ]);