var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '3200', label: 'ISNONTEXT\nTRUE', color: '#f0ad4e', title: 'Name: ISNONTEXT<br>Alias: null<br>Value: TRUE<br>Type: FUNCTION<br>Id: 3200<br>Formula Expression: Formula String: ISNONTEXT(ISNONTEXT(A1)); Formula Values: ISNONTEXT(ISNONTEXT(1.0)); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@29b5e7db'},
{id: '3201', label: 'C8\nTRUE', color: '#31b0d5', title: 'Name: C8<br>Alias: null<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: 3201<br>Formula Expression: Formula String: ISNONTEXT(VALUE); Formula Values: ISNONTEXT(67.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@29b5e7db'},
{id: '3202', label: 'VALUE\n67.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 67.0<br>Type: CONSTANT_VALUE<br>Id: 3202<br>Formula Expression: Formula String: VALUE; Formula Values: 67.0; Formula Ptg: 67.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@29b5e7db'},
{id: '3203', label: 'ISNONTEXT\nTRUE', color: '#f0ad4e', title: 'Name: ISNONTEXT<br>Alias: null<br>Value: TRUE<br>Type: FUNCTION<br>Id: 3203<br>Formula Expression: Formula String: ISNONTEXT(VALUE); Formula Values: ISNONTEXT(67.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@29b5e7db'},
{id: '3192', label: 'C5\nTRUE', color: '#31b0d5', title: 'Name: C5<br>Alias: null<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: 3192<br>Formula Expression: Formula String: ISNONTEXT(A1); Formula Values: ISNONTEXT(1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@29b5e7db'},
{id: '3193', label: 'A1\n1.0', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: 1.0<br>Type: CELL_WITH_VALUE<br>Id: 3193<br>Formula Expression: Formula String: A1; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@29b5e7db'},
{id: '3194', label: 'ISNONTEXT\nTRUE', color: '#f0ad4e', title: 'Name: ISNONTEXT<br>Alias: null<br>Value: TRUE<br>Type: FUNCTION<br>Id: 3194<br>Formula Expression: Formula String: ISNONTEXT(A1); Formula Values: ISNONTEXT(1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@29b5e7db'},
{id: '3195', label: 'C6\nFALSE', color: '#31b0d5', title: 'Name: C6<br>Alias: null<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 3195<br>Formula Expression: Formula String: ISNONTEXT(B1); Formula Values: ISNONTEXT(some); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@29b5e7db'},
{id: '3196', label: 'B1\nsome', color: '#31b0d5', title: 'Name: B1<br>Alias: null<br>Value: some<br>Type: CELL_WITH_VALUE<br>Id: 3196<br>Formula Expression: Formula String: B1; Formula Values: some; Formula Ptg: some; Ptgs: B1 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@29b5e7db'},
{id: '3197', label: 'ISNONTEXT\nFALSE', color: '#f0ad4e', title: 'Name: ISNONTEXT<br>Alias: null<br>Value: FALSE<br>Type: FUNCTION<br>Id: 3197<br>Formula Expression: Formula String: ISNONTEXT(B1); Formula Values: ISNONTEXT(some); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@29b5e7db'},
{id: '3198', label: 'C7\nTRUE', color: '#31b0d5', title: 'Name: C7<br>Alias: null<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: 3198<br>Formula Expression: Formula String: ISNONTEXT(ISNONTEXT(A1)); Formula Values: ISNONTEXT(ISNONTEXT(1.0)); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@29b5e7db'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '3193', to: '3194'},
{from: '3196', to: '3197'},
{from: '3202', to: '3203'},
{from: '3192', to: '3200'},
{from: '3194', to: '3192'},
{from: '3197', to: '3195'},
{from: '3200', to: '3198'},
{from: '3203', to: '3201'}
                            ]);