var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '1319ea77-703c-4b19-a6a4-c41f1ec0e46c', label: 'D8\nFALSE', color: '#31b0d5', title: 'Name: D8<br>Alias: null<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 1319ea77-703c-4b19-a6a4-c41f1ec0e46c<br>Formula Expression: Formula String: ISERROR(VALUE); Formula Values: ISERROR(0.0); Formula Ptg: 0.0 ISERROR ; Ptgs: VALUE ISERROR  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@1622f1b'},
{id: '09025245-13fa-4955-83c8-e700ad2cc10a', label: 'VALUE\n0.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 0.0<br>Type: CONSTANT_VALUE<br>Id: 09025245-13fa-4955-83c8-e700ad2cc10a<br>Formula Expression: Formula String: VALUE; Formula Values: 0.0; Formula Ptg: 0.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@1622f1b'},
{id: 'edc5757e-22f6-4003-b15d-45cf7a4159fd', label: 'D3\n0.0', color: '#31b0d5', title: 'Name: D3<br>Alias: null<br>Value: 0.0<br>Type: CELL_WITH_REFERENCE<br>Id: edc5757e-22f6-4003-b15d-45cf7a4159fd<br>Formula Expression: Formula String: VALUE; Formula Values: 0.0; Formula Ptg: 0.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@1622f1b'},
{id: 'add19052-73f2-46b9-94dc-c75a212c8794', label: 'ISERROR\nFALSE', color: '#f0ad4e', title: 'Name: ISERROR<br>Alias: null<br>Value: FALSE<br>Type: FUNCTION<br>Id: add19052-73f2-46b9-94dc-c75a212c8794<br>Formula Expression: Formula String: ISERROR(VALUE); Formula Values: ISERROR(0.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@1622f1b'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'add19052-73f2-46b9-94dc-c75a212c8794', to: '1319ea77-703c-4b19-a6a4-c41f1ec0e46c'},
{from: '09025245-13fa-4955-83c8-e700ad2cc10a', to: 'edc5757e-22f6-4003-b15d-45cf7a4159fd'},
{from: 'edc5757e-22f6-4003-b15d-45cf7a4159fd', to: 'add19052-73f2-46b9-94dc-c75a212c8794'}
                            ]);