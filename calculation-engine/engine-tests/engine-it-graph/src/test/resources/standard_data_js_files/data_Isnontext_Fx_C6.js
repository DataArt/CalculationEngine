var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '0', label: 'C6\nFALSE', color: '#31b0d5', title: 'Name: C6<br>Alias: null<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 0<br>Formula Expression: Formula String: ISNONTEXT(B1); Formula Values: ISNONTEXT(some); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@57a2ed35'},
{id: '1', label: 'B1\nsome', color: '#31b0d5', title: 'Name: B1<br>Alias: null<br>Value: some<br>Type: CELL_WITH_VALUE<br>Id: 1<br>Formula Expression: Formula String: B1; Formula Values: some; Formula Ptg: some; Ptgs: B1 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@57a2ed35'},
{id: '2', label: 'ISNONTEXT\nFALSE', color: '#f0ad4e', title: 'Name: ISNONTEXT<br>Alias: null<br>Value: FALSE<br>Type: FUNCTION<br>Id: 2<br>Formula Expression: Formula String: ISNONTEXT(B1); Formula Values: ISNONTEXT(some); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@57a2ed35'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '1', to: '2'},
{from: '2', to: '0'}
                            ]);