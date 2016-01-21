var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '2992', label: 'C1\nis', color: '#31b0d5', title: 'Name: C1<br>Alias: null<br>Value: is<br>Type: CELL_WITH_VALUE<br>Id: 2992<br>Formula Expression: Formula String: C1; Formula Values: is; Formula Ptg: is; Ptgs: C1 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5310e451'},
{id: '2993', label: '=\nFALSE', color: '#f0ad4e', title: 'Name: =<br>Alias: null<br>Value: FALSE<br>Type: OPERATOR<br>Id: 2993<br>Formula Expression: Formula String: A2 = C1; Formula Values: Sun = is; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5310e451'},
{id: '2994', label: 'IF\nexpected', color: '#f0ad4e', title: 'Name: IF<br>Alias: null<br>Value: expected<br>Type: IF<br>Id: 2994<br>Formula Expression: Formula String: IF(A2=C1,B4,B1); Formula Values: IF(Sun = is, expected); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: 9621f4c5-b203-1d52-94e3-e692a34a168f'},
{id: '2995', label: 'B1\nexpected', color: '#31b0d5', title: 'Name: B1<br>Alias: null<br>Value: expected<br>Type: CELL_WITH_VALUE<br>Id: 2995<br>Formula Expression: Formula String: B1; Formula Values: expected; Formula Ptg: expected; Ptgs: B1 Index in Ptgs: 6 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5310e451'},
{id: '2997', label: 'D5\nwhy not?', color: '#31b0d5', title: 'Name: D5<br>Alias: null<br>Value: why not?<br>Type: CELL_WITH_FORMULA<br>Id: 2997<br>Formula Expression: Formula String: T(C3); Formula Values: T(why not?); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5310e451'},
{id: '2998', label: 'C3\nwhy not?', color: '#31b0d5', title: 'Name: C3<br>Alias: null<br>Value: why not?<br>Type: CELL_WITH_VALUE<br>Id: 2998<br>Formula Expression: Formula String: C3; Formula Values: why not?; Formula Ptg: why not?; Ptgs: C3 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5310e451'},
{id: '2999', label: 'T\nwhy not?', color: '#f0ad4e', title: 'Name: T<br>Alias: null<br>Value: why not?<br>Type: FUNCTION<br>Id: 2999<br>Formula Expression: Formula String: T(C3); Formula Values: T(why not?); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5310e451'},
{id: '3000', label: 'D6\n', color: '#31b0d5', title: 'Name: D6<br>Alias: null<br>Value: <br>Type: CELL_WITH_FORMULA<br>Id: 3000<br>Formula Expression: Formula String: T(D3); Formula Values: T(52.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5310e451'},
{id: '3001', label: 'D3\n52.0', color: '#31b0d5', title: 'Name: D3<br>Alias: null<br>Value: 52.0<br>Type: CELL_WITH_VALUE<br>Id: 3001<br>Formula Expression: Formula String: D3; Formula Values: 52.0; Formula Ptg: 52.0; Ptgs: D3 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5310e451'},
{id: '3002', label: 'T\n', color: '#f0ad4e', title: 'Name: T<br>Alias: null<br>Value: <br>Type: FUNCTION<br>Id: 3002<br>Formula Expression: Formula String: T(D3); Formula Values: T(52.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5310e451'},
{id: '2990', label: 'D2\nexpected', color: '#31b0d5', title: 'Name: D2<br>Alias: null<br>Value: expected<br>Type: CELL_WITH_FORMULA<br>Id: 2990<br>Formula Expression: Formula String: IF(A2=C1,B4,B1); Formula Values: IF(Sun = is, expected); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5310e451'},
{id: '2991', label: 'A2\nSun', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: Sun<br>Type: CELL_WITH_VALUE<br>Id: 2991<br>Formula Expression: Formula String: A2; Formula Values: Sun; Formula Ptg: Sun; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5310e451'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '2995', to: '2994'},
{from: '2991', to: '2993'},
{from: '2992', to: '2993'},
{from: '2993', to: '2994'},
{from: '2998', to: '2999'},
{from: '3001', to: '3002'},
{from: '2994', to: '2990'},
{from: '2999', to: '2997'},
{from: '3002', to: '3000'}
                            ]);