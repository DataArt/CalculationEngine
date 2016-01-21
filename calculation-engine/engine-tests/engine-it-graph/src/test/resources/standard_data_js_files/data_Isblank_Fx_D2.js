var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '524', label: 'D2\nFALSE', color: '#31b0d5', title: 'Name: D2<br>Alias: null<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 524<br>Formula Expression: Formula String: ISBLANK(A6); Formula Values: ISBLANK(4.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@43effd89'},
{id: '525', label: 'A6\n4.0', color: '#31b0d5', title: 'Name: A6<br>Alias: null<br>Value: 4.0<br>Type: CELL_WITH_VALUE<br>Id: 525<br>Formula Expression: Formula String: A6; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: A6 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@43effd89'},
{id: '526', label: 'ISBLANK\nFALSE', color: '#f0ad4e', title: 'Name: ISBLANK<br>Alias: null<br>Value: FALSE<br>Type: FUNCTION<br>Id: 526<br>Formula Expression: Formula String: ISBLANK(A6); Formula Values: ISBLANK(4.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@43effd89'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '525', to: '526'},
{from: '526', to: '524'}
                            ]);