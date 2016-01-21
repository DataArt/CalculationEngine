var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '528', label: 'VALUE\n6.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 6.0<br>Type: CONSTANT_VALUE<br>Id: 528<br>Formula Expression: Formula String: VALUE; Formula Values: 6.0; Formula Ptg: 6.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@60dd3c23'},
{id: '529', label: 'ISBLANK\nFALSE', color: '#f0ad4e', title: 'Name: ISBLANK<br>Alias: null<br>Value: FALSE<br>Type: FUNCTION<br>Id: 529<br>Formula Expression: Formula String: ISBLANK(VALUE); Formula Values: ISBLANK(6.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@60dd3c23'},
{id: '527', label: 'D3\nFALSE', color: '#31b0d5', title: 'Name: D3<br>Alias: null<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 527<br>Formula Expression: Formula String: ISBLANK(VALUE); Formula Values: ISBLANK(6.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@60dd3c23'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '528', to: '529'},
{from: '529', to: '527'}
                            ]);