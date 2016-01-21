var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '587', label: 'D10\nFALSE', color: '#31b0d5', title: 'Name: D10<br>Alias: null<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 587<br>Formula Expression: Formula String: ISEVEN(C3); Formula Values: ISEVEN(5.45); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3701e6e4'},
{id: '589', label: 'C3\n5.45', color: '#31b0d5', title: 'Name: C3<br>Alias: null<br>Value: 5.45<br>Type: CELL_WITH_VALUE<br>Id: 589<br>Formula Expression: Formula String: C3; Formula Values: 5.45; Formula Ptg: 5.45; Ptgs: C3 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3701e6e4'},
{id: '590', label: 'ISEVEN\nFALSE', color: '#f0ad4e', title: 'Name: ISEVEN<br>Alias: null<br>Value: FALSE<br>Type: FUNCTION<br>Id: 590<br>Formula Expression: Formula String: ISEVEN(C3); Formula Values: ISEVEN(5.45); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3701e6e4'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '589', to: '590'},
{from: '590', to: '587'}
                            ]);