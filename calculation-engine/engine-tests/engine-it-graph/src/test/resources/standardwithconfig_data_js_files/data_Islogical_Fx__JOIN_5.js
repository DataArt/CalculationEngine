var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '5376', label: '/\n#DIV/0!', color: '#f0ad4e', title: 'Name: /<br>Alias: null<br>Value: #DIV/0!<br>Type: OPERATOR<br>Id: 5376<br>Formula Expression: Formula String: A3 / D2; Formula Values: 1.0 / ; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2746bc43'},
{id: '5377', label: 'C5\nTRUE', color: '#31b0d5', title: 'Name: C5<br>Alias: null<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: 5377<br>Formula Expression: Formula String: ISLOGICAL(A1); Formula Values: ISLOGICAL(TRUE); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2746bc43'},
{id: '5378', label: 'A1\nTRUE', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: TRUE<br>Type: CELL_WITH_VALUE<br>Id: 5378<br>Formula Expression: Formula String: A1; Formula Values: TRUE; Formula Ptg: TRUE; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2746bc43'},
{id: '5379', label: 'ISLOGICAL\nTRUE', color: '#f0ad4e', title: 'Name: ISLOGICAL<br>Alias: null<br>Value: TRUE<br>Type: FUNCTION<br>Id: 5379<br>Formula Expression: Formula String: ISLOGICAL(A1); Formula Values: ISLOGICAL(TRUE); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2746bc43'},
{id: '5380', label: 'C6\nTRUE', color: '#31b0d5', title: 'Name: C6<br>Alias: null<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: 5380<br>Formula Expression: Formula String: ISLOGICAL(A2); Formula Values: ISLOGICAL(FALSE); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2746bc43'},
{id: '5381', label: 'A2\nFALSE', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: FALSE<br>Type: CELL_WITH_VALUE<br>Id: 5381<br>Formula Expression: Formula String: A2; Formula Values: FALSE; Formula Ptg: FALSE; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2746bc43'},
{id: '5382', label: 'ISLOGICAL\nTRUE', color: '#f0ad4e', title: 'Name: ISLOGICAL<br>Alias: null<br>Value: TRUE<br>Type: FUNCTION<br>Id: 5382<br>Formula Expression: Formula String: ISLOGICAL(A2); Formula Values: ISLOGICAL(FALSE); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2746bc43'},
{id: '5383', label: 'C7\nFALSE', color: '#31b0d5', title: 'Name: C7<br>Alias: null<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 5383<br>Formula Expression: Formula String: ISLOGICAL(A3); Formula Values: ISLOGICAL(1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2746bc43'},
{id: '5384', label: 'A3\n1.0', color: '#31b0d5', title: 'Name: A3<br>Alias: null<br>Value: 1.0<br>Type: CELL_WITH_VALUE<br>Id: 5384<br>Formula Expression: Formula String: A3; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: A3 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2746bc43'},
{id: '5385', label: 'ISLOGICAL\nFALSE', color: '#f0ad4e', title: 'Name: ISLOGICAL<br>Alias: null<br>Value: FALSE<br>Type: FUNCTION<br>Id: 5385<br>Formula Expression: Formula String: ISLOGICAL(A3); Formula Values: ISLOGICAL(1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2746bc43'},
{id: '5386', label: 'C8\nFALSE', color: '#31b0d5', title: 'Name: C8<br>Alias: null<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 5386<br>Formula Expression: Formula String: ISLOGICAL(A4); Formula Values: ISLOGICAL(some text for test); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2746bc43'},
{id: '5387', label: 'A4\nsome text for test', color: '#31b0d5', title: 'Name: A4<br>Alias: null<br>Value: some text for test<br>Type: CELL_WITH_VALUE<br>Id: 5387<br>Formula Expression: Formula String: A4; Formula Values: some text for test; Formula Ptg: some text for test; Ptgs: A4 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2746bc43'},
{id: '5388', label: 'ISLOGICAL\nFALSE', color: '#f0ad4e', title: 'Name: ISLOGICAL<br>Alias: null<br>Value: FALSE<br>Type: FUNCTION<br>Id: 5388<br>Formula Expression: Formula String: ISLOGICAL(A4); Formula Values: ISLOGICAL(some text for test); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2746bc43'},
{id: '5389', label: 'D8\nTRUE', color: '#31b0d5', title: 'Name: D8<br>Alias: null<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: 5389<br>Formula Expression: Formula String: ISLOGICAL(VALUE); Formula Values: ISLOGICAL(TRUE); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2746bc43'},
{id: '5390', label: 'VALUE\nTRUE', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: TRUE<br>Type: CONSTANT_VALUE<br>Id: 5390<br>Formula Expression: Formula String: VALUE; Formula Values: TRUE; Formula Ptg: TRUE; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2746bc43'},
{id: '5391', label: 'ISLOGICAL\nTRUE', color: '#f0ad4e', title: 'Name: ISLOGICAL<br>Alias: null<br>Value: TRUE<br>Type: FUNCTION<br>Id: 5391<br>Formula Expression: Formula String: ISLOGICAL(VALUE); Formula Values: ISLOGICAL(TRUE); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2746bc43'},
{id: '5392', label: 'C9\nFALSE', color: '#31b0d5', title: 'Name: C9<br>Alias: null<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 5392<br>Formula Expression: Formula String: ISLOGICAL(A3 / D2); Formula Values: ISLOGICAL(1.0 / ); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2746bc43'},
{id: '5393', label: 'C2\n#DIV/0!', color: '#31b0d5', title: 'Name: C2<br>Alias: null<br>Value: #DIV/0!<br>Type: CELL_WITH_FORMULA<br>Id: 5393<br>Formula Expression: Formula String: A3 / D2; Formula Values: 1.0 / ; Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2746bc43'},
{id: '5394', label: 'ISLOGICAL\nFALSE', color: '#f0ad4e', title: 'Name: ISLOGICAL<br>Alias: null<br>Value: FALSE<br>Type: FUNCTION<br>Id: 5394<br>Formula Expression: Formula String: ISLOGICAL(A3 / D2); Formula Values: ISLOGICAL(1.0 / ); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2746bc43'},
{id: '5395', label: 'D9\nTRUE', color: '#31b0d5', title: 'Name: D9<br>Alias: null<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: 5395<br>Formula Expression: Formula String: ISLOGICAL(ISLOGICAL(A2)); Formula Values: ISLOGICAL(ISLOGICAL(FALSE)); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2746bc43'},
{id: '5396', label: 'C6\nTRUE', color: '#31b0d5', title: 'Name: C6<br>Alias: null<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: 5396<br>Formula Expression: Formula String: ISLOGICAL(A2); Formula Values: ISLOGICAL(FALSE); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2746bc43'},
{id: '5397', label: 'ISLOGICAL\nTRUE', color: '#f0ad4e', title: 'Name: ISLOGICAL<br>Alias: null<br>Value: TRUE<br>Type: FUNCTION<br>Id: 5397<br>Formula Expression: Formula String: ISLOGICAL(ISLOGICAL(A2)); Formula Values: ISLOGICAL(ISLOGICAL(FALSE)); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2746bc43'},
{id: '5373', label: 'C2\n#DIV/0!', color: '#31b0d5', title: 'Name: C2<br>Alias: null<br>Value: #DIV/0!<br>Type: CELL_WITH_FORMULA<br>Id: 5373<br>Formula Expression: Formula String: A3 / D2; Formula Values: 1.0 / ; Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2746bc43'},
{id: '5374', label: 'A3\n1.0', color: '#31b0d5', title: 'Name: A3<br>Alias: null<br>Value: 1.0<br>Type: CELL_WITH_VALUE<br>Id: 5374<br>Formula Expression: Formula String: A3; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: A3 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2746bc43'},
{id: '5375', label: 'D2\n', color: '#31b0d5', title: 'Name: D2<br>Alias: null<br>Value: <br>Type: EMPTY_CELL<br>Id: 5375<br>Formula Expression: Formula String: D2; Formula Values: ; Formula Ptg: ; Ptgs: D2 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2746bc43'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '5375', to: '5376'},
{from: '5378', to: '5379'},
{from: '5381', to: '5382'},
{from: '5384', to: '5385'},
{from: '5387', to: '5388'},
{from: '5390', to: '5391'},
{from: '5393', to: '5394'},
{from: '5396', to: '5397'},
{from: '5374', to: '5376'},
{from: '5382', to: '5396'},
{from: '5376', to: '5393'},
{from: '5376', to: '5373'},
{from: '5379', to: '5377'},
{from: '5382', to: '5380'},
{from: '5385', to: '5383'},
{from: '5388', to: '5386'},
{from: '5391', to: '5389'},
{from: '5394', to: '5392'},
{from: '5397', to: '5395'}
                            ]);