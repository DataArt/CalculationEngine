var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '2096', label: 'C5\nTRUE', color: '#31b0d5', title: 'Name: C5<br>Alias: null<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: 2096<br>Formula Expression: Formula String: ISNONTEXT(A1); Formula Values: ISNONTEXT(1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@11b5f4e2'},
{id: '2097', label: 'ISNONTEXT\nTRUE', color: '#f0ad4e', title: 'Name: ISNONTEXT<br>Alias: null<br>Value: TRUE<br>Type: FUNCTION<br>Id: 2097<br>Formula Expression: Formula String: ISNONTEXT(ISNONTEXT(A1)); Formula Values: ISNONTEXT(ISNONTEXT(1.0)); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@11b5f4e2'},
{id: '2098', label: 'C8\nTRUE', color: '#31b0d5', title: 'Name: C8<br>Alias: null<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: 2098<br>Formula Expression: Formula String: ISNONTEXT(VALUE); Formula Values: ISNONTEXT(67.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@11b5f4e2'},
{id: '2099', label: 'VALUE\n67.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 67.0<br>Type: CONSTANT_VALUE<br>Id: 2099<br>Formula Expression: Formula String: VALUE; Formula Values: 67.0; Formula Ptg: 67.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@11b5f4e2'},
{id: '2100', label: 'ISNONTEXT\nTRUE', color: '#f0ad4e', title: 'Name: ISNONTEXT<br>Alias: null<br>Value: TRUE<br>Type: FUNCTION<br>Id: 2100<br>Formula Expression: Formula String: ISNONTEXT(VALUE); Formula Values: ISNONTEXT(67.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@11b5f4e2'},
{id: '2089', label: 'C5\nTRUE', color: '#31b0d5', title: 'Name: C5<br>Alias: null<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: 2089<br>Formula Expression: Formula String: ISNONTEXT(A1); Formula Values: ISNONTEXT(1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@11b5f4e2'},
{id: '2090', label: 'A1\n1.0', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: 1.0<br>Type: CELL_WITH_VALUE<br>Id: 2090<br>Formula Expression: Formula String: A1; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@11b5f4e2'},
{id: '2091', label: 'ISNONTEXT\nTRUE', color: '#f0ad4e', title: 'Name: ISNONTEXT<br>Alias: null<br>Value: TRUE<br>Type: FUNCTION<br>Id: 2091<br>Formula Expression: Formula String: ISNONTEXT(A1); Formula Values: ISNONTEXT(1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@11b5f4e2'},
{id: '2092', label: 'C6\nFALSE', color: '#31b0d5', title: 'Name: C6<br>Alias: null<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 2092<br>Formula Expression: Formula String: ISNONTEXT(B1); Formula Values: ISNONTEXT(some); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@11b5f4e2'},
{id: '2093', label: 'B1\nsome', color: '#31b0d5', title: 'Name: B1<br>Alias: null<br>Value: some<br>Type: CELL_WITH_VALUE<br>Id: 2093<br>Formula Expression: Formula String: B1; Formula Values: some; Formula Ptg: some; Ptgs: B1 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@11b5f4e2'},
{id: '2094', label: 'ISNONTEXT\nFALSE', color: '#f0ad4e', title: 'Name: ISNONTEXT<br>Alias: null<br>Value: FALSE<br>Type: FUNCTION<br>Id: 2094<br>Formula Expression: Formula String: ISNONTEXT(B1); Formula Values: ISNONTEXT(some); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@11b5f4e2'},
{id: '2095', label: 'C7\nTRUE', color: '#31b0d5', title: 'Name: C7<br>Alias: null<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: 2095<br>Formula Expression: Formula String: ISNONTEXT(ISNONTEXT(A1)); Formula Values: ISNONTEXT(ISNONTEXT(1.0)); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@11b5f4e2'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '2090', to: '2091'},
{from: '2093', to: '2094'},
{from: '2096', to: '2097'},
{from: '2099', to: '2100'},
{from: '2091', to: '2096'},
{from: '2091', to: '2089'},
{from: '2094', to: '2092'},
{from: '2097', to: '2095'},
{from: '2100', to: '2098'}
                            ]);