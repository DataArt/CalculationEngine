var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '4112', label: '=\nFALSE', color: '#f0ad4e', title: 'Name: =<br>Alias: null<br>Value: FALSE<br>Type: OPERATOR<br>Id: 4112<br>Formula Expression: Formula String: A2 = C1; Formula Values: Sun = is; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@48a21ea6'},
{id: '4113', label: 'IF\nexpected', color: '#f0ad4e', title: 'Name: IF<br>Alias: null<br>Value: expected<br>Type: IF<br>Id: 4113<br>Formula Expression: Formula String: IF(A2=C1,B4,B1); Formula Values: IF(Sun = is, expected); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: 5be1749c-f4f5-023a-9355-9740e8d2b050'},
{id: '4114', label: 'B1\nexpected', color: '#31b0d5', title: 'Name: B1<br>Alias: null<br>Value: expected<br>Type: CELL_WITH_VALUE<br>Id: 4114<br>Formula Expression: Formula String: B1; Formula Values: expected; Formula Ptg: expected; Ptgs: B1 Index in Ptgs: 6 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@48a21ea6'},
{id: '4116', label: 'D5\n', color: '#31b0d5', title: 'Name: D5<br>Alias: null<br>Value: <br>Type: CELL_WITH_FORMULA<br>Id: 4116<br>Formula Expression: Formula String: T(D3); Formula Values: T(52.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@48a21ea6'},
{id: '4117', label: 'D3\n52.0', color: '#31b0d5', title: 'Name: D3<br>Alias: null<br>Value: 52.0<br>Type: CELL_WITH_VALUE<br>Id: 4117<br>Formula Expression: Formula String: D3; Formula Values: 52.0; Formula Ptg: 52.0; Ptgs: D3 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@48a21ea6'},
{id: '4118', label: 'T\n', color: '#f0ad4e', title: 'Name: T<br>Alias: null<br>Value: <br>Type: FUNCTION<br>Id: 4118<br>Formula Expression: Formula String: T(D3); Formula Values: T(52.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@48a21ea6'},
{id: '4109', label: 'D2\nexpected', color: '#31b0d5', title: 'Name: D2<br>Alias: null<br>Value: expected<br>Type: CELL_WITH_FORMULA<br>Id: 4109<br>Formula Expression: Formula String: IF(A2=C1,B4,B1); Formula Values: IF(Sun = is, expected); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@48a21ea6'},
{id: '4110', label: 'A2\nSun', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: Sun<br>Type: CELL_WITH_VALUE<br>Id: 4110<br>Formula Expression: Formula String: A2; Formula Values: Sun; Formula Ptg: Sun; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@48a21ea6'},
{id: '4111', label: 'C1\nis', color: '#31b0d5', title: 'Name: C1<br>Alias: null<br>Value: is<br>Type: CELL_WITH_VALUE<br>Id: 4111<br>Formula Expression: Formula String: C1; Formula Values: is; Formula Ptg: is; Ptgs: C1 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@48a21ea6'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '4111', to: '4112'},
{from: '4112', to: '4113'},
{from: '4117', to: '4118'},
{from: '4110', to: '4112'},
{from: '4114', to: '4113'},
{from: '4118', to: '4116'},
{from: '4113', to: '4109'}
                            ]);