var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '530', label: 'D5\nFALSE', color: '#31b0d5', title: 'Name: D5<br>Alias: null<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 530<br>Formula Expression: Formula String: ISBLANK(ISBLANK(A6)); Formula Values: ISBLANK(ISBLANK(4.0)); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@26f96b85'},
{id: '531', label: 'D2\nFALSE', color: '#31b0d5', title: 'Name: D2<br>Alias: null<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 531<br>Formula Expression: Formula String: ISBLANK(A6); Formula Values: ISBLANK(4.0); Formula Ptg: null; Ptgs: null Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@26f96b85'},
{id: '532', label: 'A6\n4.0', color: '#31b0d5', title: 'Name: A6<br>Alias: null<br>Value: 4.0<br>Type: CELL_WITH_VALUE<br>Id: 532<br>Formula Expression: Formula String: A6; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: A6 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@26f96b85'},
{id: '533', label: 'ISBLANK\nFALSE', color: '#f0ad4e', title: 'Name: ISBLANK<br>Alias: null<br>Value: FALSE<br>Type: FUNCTION<br>Id: 533<br>Formula Expression: Formula String: ISBLANK(A6); Formula Values: ISBLANK(4.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@26f96b85'},
{id: '534', label: 'ISBLANK\nFALSE', color: '#f0ad4e', title: 'Name: ISBLANK<br>Alias: null<br>Value: FALSE<br>Type: FUNCTION<br>Id: 534<br>Formula Expression: Formula String: ISBLANK(ISBLANK(A6)); Formula Values: ISBLANK(ISBLANK(4.0)); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@26f96b85'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '532', to: '533'},
{from: '531', to: '534'},
{from: '534', to: '530'},
{from: '533', to: '531'}
                            ]);