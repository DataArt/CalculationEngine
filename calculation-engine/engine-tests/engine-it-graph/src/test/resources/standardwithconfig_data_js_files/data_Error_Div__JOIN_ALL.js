var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '1', label: 'C5\n67.0', color: '#31b0d5', title: 'Name: C5<br>Alias: null<br>Value: 67.0<br>Type: CELL_WITH_VALUE<br>Id: 1<br>Formula Expression: Formula String: C5; Formula Values: 67.0; Formula Ptg: 67.0; Ptgs: C5 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@376498da'},
{id: '2', label: 'C4\n0.0', color: '#31b0d5', title: 'Name: C4<br>Alias: null<br>Value: 0.0<br>Type: CELL_WITH_VALUE<br>Id: 2<br>Formula Expression: Formula String: C4; Formula Values: 0.0; Formula Ptg: 0.0; Ptgs: C4 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@376498da'},
{id: '3', label: '/\n#DIV/0!', color: '#f0ad4e', title: 'Name: /<br>Alias: null<br>Value: #DIV/0!<br>Type: OPERATOR<br>Id: 3<br>Formula Expression: Formula String: C5 / C4; Formula Values: 67.0 / 0.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@376498da'},
{id: '0', label: 'E6\n#DIV/0!', color: '#31b0d5', title: 'Name: E6<br>Alias: null<br>Value: #DIV/0!<br>Type: CELL_WITH_FORMULA<br>Id: 0<br>Formula Expression: Formula String: C5 / C4; Formula Values: 67.0 / 0.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@376498da'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '2', to: '3'},
{from: '1', to: '3'},
{from: '3', to: '0'}
                            ]);