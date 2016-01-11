var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '0', label: 'D6\nFALSE', color: '#31b0d5', title: 'Name: D6<br>Alias: null<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 0<br>Formula Expression: Formula String: ISERROR(C3); Formula Values: ISERROR(989.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@37854b34'},
{id: '2', label: 'ISERROR\nFALSE', color: '#f0ad4e', title: 'Name: ISERROR<br>Alias: null<br>Value: FALSE<br>Type: FUNCTION<br>Id: 2<br>Formula Expression: Formula String: ISERROR(C3); Formula Values: ISERROR(989.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@37854b34'},
{id: '1', label: 'C3\n989.0', color: '#31b0d5', title: 'Name: C3<br>Alias: null<br>Value: 989.0<br>Type: CELL_WITH_VALUE<br>Id: 1<br>Formula Expression: Formula String: C3; Formula Values: 989.0; Formula Ptg: 989.0; Ptgs: C3 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@37854b34'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '1', to: '2'},
{from: '2', to: '0'}
                            ]);