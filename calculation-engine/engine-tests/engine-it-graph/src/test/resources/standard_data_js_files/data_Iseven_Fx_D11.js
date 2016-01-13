var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '0', label: 'D11\n#VALUE!', color: '#31b0d5', title: 'Name: D11<br>Alias: null<br>Value: #VALUE!<br>Type: CELL_WITH_FORMULA<br>Id: 0<br>Formula Expression: Formula String: ISEVEN(D1); Formula Values: ISEVEN(qwerty); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3d6a6bee'},
{id: '2', label: 'D1\nqwerty', color: '#31b0d5', title: 'Name: D1<br>Alias: null<br>Value: qwerty<br>Type: CELL_WITH_VALUE<br>Id: 2<br>Formula Expression: Formula String: D1; Formula Values: qwerty; Formula Ptg: qwerty; Ptgs: D1 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3d6a6bee'},
{id: '3', label: 'ISEVEN\n#VALUE!', color: '#f0ad4e', title: 'Name: ISEVEN<br>Alias: null<br>Value: #VALUE!<br>Type: FUNCTION<br>Id: 3<br>Formula Expression: Formula String: ISEVEN(D1); Formula Values: ISEVEN(qwerty); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3d6a6bee'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '2', to: '3'},
{from: '3', to: '0'}
                            ]);