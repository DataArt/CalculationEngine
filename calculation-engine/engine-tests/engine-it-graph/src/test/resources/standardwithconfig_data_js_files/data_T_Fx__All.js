var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '784', label: 'D2\nexpected', color: '#31b0d5', title: 'Name: D2<br>Alias: null<br>Value: expected<br>Type: CELL_WITH_FORMULA<br>Id: 784<br>Formula Expression: Formula String: IF(A2=C1,B4,B1); Formula Values: IF(Sun = is, expected); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3ee39da0'},
{id: '785', label: 'A2\nSun', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: Sun<br>Type: CELL_WITH_VALUE<br>Id: 785<br>Formula Expression: Formula String: A2; Formula Values: Sun; Formula Ptg: Sun; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3ee39da0'},
{id: '786', label: 'C1\nis', color: '#31b0d5', title: 'Name: C1<br>Alias: null<br>Value: is<br>Type: CELL_WITH_VALUE<br>Id: 786<br>Formula Expression: Formula String: C1; Formula Values: is; Formula Ptg: is; Ptgs: C1 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3ee39da0'},
{id: '787', label: '=\nFALSE', color: '#f0ad4e', title: 'Name: =<br>Alias: null<br>Value: FALSE<br>Type: OPERATOR<br>Id: 787<br>Formula Expression: Formula String: A2 = C1; Formula Values: Sun = is; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3ee39da0'},
{id: '788', label: 'IF\nexpected', color: '#f0ad4e', title: 'Name: IF<br>Alias: null<br>Value: expected<br>Type: IF<br>Id: 788<br>Formula Expression: Formula String: IF(A2=C1,B4,B1); Formula Values: IF(Sun = is, expected); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: e1c5fb9f-7b80-167f-8a38-dd15277b1ebf'},
{id: '789', label: 'B1\nexpected', color: '#31b0d5', title: 'Name: B1<br>Alias: null<br>Value: expected<br>Type: CELL_WITH_VALUE<br>Id: 789<br>Formula Expression: Formula String: B1; Formula Values: expected; Formula Ptg: expected; Ptgs: B1 Index in Ptgs: 6 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3ee39da0'},
{id: '791', label: 'D5\nwhy not?', color: '#31b0d5', title: 'Name: D5<br>Alias: null<br>Value: why not?<br>Type: CELL_WITH_FORMULA<br>Id: 791<br>Formula Expression: Formula String: T(C3); Formula Values: T(why not?); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3ee39da0'},
{id: '792', label: 'C3\nwhy not?', color: '#31b0d5', title: 'Name: C3<br>Alias: null<br>Value: why not?<br>Type: CELL_WITH_VALUE<br>Id: 792<br>Formula Expression: Formula String: C3; Formula Values: why not?; Formula Ptg: why not?; Ptgs: C3 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3ee39da0'},
{id: '793', label: 'T\nwhy not?', color: '#f0ad4e', title: 'Name: T<br>Alias: null<br>Value: why not?<br>Type: FUNCTION<br>Id: 793<br>Formula Expression: Formula String: T(C3); Formula Values: T(why not?); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3ee39da0'},
{id: '794', label: 'D6\n', color: '#31b0d5', title: 'Name: D6<br>Alias: null<br>Value: <br>Type: CELL_WITH_FORMULA<br>Id: 794<br>Formula Expression: Formula String: T(D3); Formula Values: T(52.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3ee39da0'},
{id: '795', label: 'D3\n52.0', color: '#31b0d5', title: 'Name: D3<br>Alias: null<br>Value: 52.0<br>Type: CELL_WITH_VALUE<br>Id: 795<br>Formula Expression: Formula String: D3; Formula Values: 52.0; Formula Ptg: 52.0; Ptgs: D3 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3ee39da0'},
{id: '796', label: 'T\n', color: '#f0ad4e', title: 'Name: T<br>Alias: null<br>Value: <br>Type: FUNCTION<br>Id: 796<br>Formula Expression: Formula String: T(D3); Formula Values: T(52.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3ee39da0'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '789', to: '788'},
{from: '786', to: '787'},
{from: '787', to: '788'},
{from: '792', to: '793'},
{from: '795', to: '796'},
{from: '785', to: '787'},
{from: '788', to: '784'},
{from: '793', to: '791'},
{from: '796', to: '794'}
                            ]);