var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '0', label: 'C5\nTRUE', color: '#31b0d5', title: 'Name: C5<br>Alias: null<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: 0<br>Formula Expression: Formula String: ISNONTEXT(A1); Formula Values: ISNONTEXT(1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@58860997'},
{id: '1', label: 'A1\n1.0', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: 1.0<br>Type: CELL_WITH_VALUE<br>Id: 1<br>Formula Expression: Formula String: A1; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@58860997'},
{id: '2', label: 'ISNONTEXT\nTRUE', color: '#f0ad4e', title: 'Name: ISNONTEXT<br>Alias: null<br>Value: TRUE<br>Type: FUNCTION<br>Id: 2<br>Formula Expression: Formula String: ISNONTEXT(A1); Formula Values: ISNONTEXT(1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@58860997'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '1', to: '2'},
{from: '2', to: '0'}
                            ]);