var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '3169', label: 'D2\n', color: '#31b0d5', title: 'Name: D2<br>Alias: null<br>Value: <br>Type: EMPTY_CELL<br>Id: 3169<br>Formula Expression: Formula String: D2; Formula Values: ; Formula Ptg: ; Ptgs: D2 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@688d2a5d'},
{id: '3170', label: '/\n#DIV/0!', color: '#f0ad4e', title: 'Name: /<br>Alias: null<br>Value: #DIV/0!<br>Type: OPERATOR<br>Id: 3170<br>Formula Expression: Formula String: A3 / D2; Formula Values: 1.0 / ; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@688d2a5d'},
{id: '3171', label: 'C5\nTRUE', color: '#31b0d5', title: 'Name: C5<br>Alias: null<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: 3171<br>Formula Expression: Formula String: ISLOGICAL(A1); Formula Values: ISLOGICAL(TRUE); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@688d2a5d'},
{id: '3172', label: 'A1\nTRUE', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: TRUE<br>Type: CELL_WITH_VALUE<br>Id: 3172<br>Formula Expression: Formula String: A1; Formula Values: TRUE; Formula Ptg: TRUE; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@688d2a5d'},
{id: '3173', label: 'ISLOGICAL\nTRUE', color: '#f0ad4e', title: 'Name: ISLOGICAL<br>Alias: null<br>Value: TRUE<br>Type: FUNCTION<br>Id: 3173<br>Formula Expression: Formula String: ISLOGICAL(A1); Formula Values: ISLOGICAL(TRUE); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@688d2a5d'},
{id: '3174', label: 'C6\nTRUE', color: '#31b0d5', title: 'Name: C6<br>Alias: null<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: 3174<br>Formula Expression: Formula String: ISLOGICAL(A2); Formula Values: ISLOGICAL(FALSE); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@688d2a5d'},
{id: '3175', label: 'A2\nFALSE', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: FALSE<br>Type: CELL_WITH_VALUE<br>Id: 3175<br>Formula Expression: Formula String: A2; Formula Values: FALSE; Formula Ptg: FALSE; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@688d2a5d'},
{id: '3176', label: 'ISLOGICAL\nTRUE', color: '#f0ad4e', title: 'Name: ISLOGICAL<br>Alias: null<br>Value: TRUE<br>Type: FUNCTION<br>Id: 3176<br>Formula Expression: Formula String: ISLOGICAL(A2); Formula Values: ISLOGICAL(FALSE); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@688d2a5d'},
{id: '3177', label: 'C7\nFALSE', color: '#31b0d5', title: 'Name: C7<br>Alias: null<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 3177<br>Formula Expression: Formula String: ISLOGICAL(A3); Formula Values: ISLOGICAL(1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@688d2a5d'},
{id: '3178', label: 'A3\n1.0', color: '#31b0d5', title: 'Name: A3<br>Alias: null<br>Value: 1.0<br>Type: CELL_WITH_VALUE<br>Id: 3178<br>Formula Expression: Formula String: A3; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: A3 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@688d2a5d'},
{id: '3179', label: 'ISLOGICAL\nFALSE', color: '#f0ad4e', title: 'Name: ISLOGICAL<br>Alias: null<br>Value: FALSE<br>Type: FUNCTION<br>Id: 3179<br>Formula Expression: Formula String: ISLOGICAL(A3); Formula Values: ISLOGICAL(1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@688d2a5d'},
{id: '3180', label: 'C8\nFALSE', color: '#31b0d5', title: 'Name: C8<br>Alias: null<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 3180<br>Formula Expression: Formula String: ISLOGICAL(A4); Formula Values: ISLOGICAL(some text for test); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@688d2a5d'},
{id: '3181', label: 'A4\nsome text for test', color: '#31b0d5', title: 'Name: A4<br>Alias: null<br>Value: some text for test<br>Type: CELL_WITH_VALUE<br>Id: 3181<br>Formula Expression: Formula String: A4; Formula Values: some text for test; Formula Ptg: some text for test; Ptgs: A4 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@688d2a5d'},
{id: '3182', label: 'ISLOGICAL\nFALSE', color: '#f0ad4e', title: 'Name: ISLOGICAL<br>Alias: null<br>Value: FALSE<br>Type: FUNCTION<br>Id: 3182<br>Formula Expression: Formula String: ISLOGICAL(A4); Formula Values: ISLOGICAL(some text for test); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@688d2a5d'},
{id: '3183', label: 'D8\nTRUE', color: '#31b0d5', title: 'Name: D8<br>Alias: null<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: 3183<br>Formula Expression: Formula String: ISLOGICAL(VALUE); Formula Values: ISLOGICAL(TRUE); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@688d2a5d'},
{id: '3184', label: 'VALUE\nTRUE', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: TRUE<br>Type: CONSTANT_VALUE<br>Id: 3184<br>Formula Expression: Formula String: VALUE; Formula Values: TRUE; Formula Ptg: TRUE; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@688d2a5d'},
{id: '3185', label: 'ISLOGICAL\nTRUE', color: '#f0ad4e', title: 'Name: ISLOGICAL<br>Alias: null<br>Value: TRUE<br>Type: FUNCTION<br>Id: 3185<br>Formula Expression: Formula String: ISLOGICAL(VALUE); Formula Values: ISLOGICAL(TRUE); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@688d2a5d'},
{id: '3186', label: 'C9\nFALSE', color: '#31b0d5', title: 'Name: C9<br>Alias: null<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 3186<br>Formula Expression: Formula String: ISLOGICAL(A3 / D2); Formula Values: ISLOGICAL(1.0 / ); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@688d2a5d'},
{id: '3187', label: 'C2\n#DIV/0!', color: '#31b0d5', title: 'Name: C2<br>Alias: null<br>Value: #DIV/0!<br>Type: CELL_WITH_FORMULA<br>Id: 3187<br>Formula Expression: Formula String: A3 / D2; Formula Values: 1.0 / ; Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@688d2a5d'},
{id: '3188', label: 'ISLOGICAL\nFALSE', color: '#f0ad4e', title: 'Name: ISLOGICAL<br>Alias: null<br>Value: FALSE<br>Type: FUNCTION<br>Id: 3188<br>Formula Expression: Formula String: ISLOGICAL(A3 / D2); Formula Values: ISLOGICAL(1.0 / ); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@688d2a5d'},
{id: '3189', label: 'D9\nTRUE', color: '#31b0d5', title: 'Name: D9<br>Alias: null<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: 3189<br>Formula Expression: Formula String: ISLOGICAL(ISLOGICAL(A2)); Formula Values: ISLOGICAL(ISLOGICAL(FALSE)); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@688d2a5d'},
{id: '3191', label: 'ISLOGICAL\nTRUE', color: '#f0ad4e', title: 'Name: ISLOGICAL<br>Alias: null<br>Value: TRUE<br>Type: FUNCTION<br>Id: 3191<br>Formula Expression: Formula String: ISLOGICAL(ISLOGICAL(A2)); Formula Values: ISLOGICAL(ISLOGICAL(FALSE)); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@688d2a5d'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '3169', to: '3170'},
{from: '3172', to: '3173'},
{from: '3175', to: '3176'},
{from: '3178', to: '3179'},
{from: '3181', to: '3182'},
{from: '3184', to: '3185'},
{from: '3187', to: '3188'},
{from: '3170', to: '3187'},
{from: '3174', to: '3191'},
{from: '3178', to: '3170'},
{from: '3173', to: '3171'},
{from: '3176', to: '3174'},
{from: '3179', to: '3177'},
{from: '3182', to: '3180'},
{from: '3185', to: '3183'},
{from: '3188', to: '3186'},
{from: '3191', to: '3189'}
                            ]);