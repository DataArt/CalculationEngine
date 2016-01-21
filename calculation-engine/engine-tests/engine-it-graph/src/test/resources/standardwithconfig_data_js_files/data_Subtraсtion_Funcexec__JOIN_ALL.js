var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '2912', label: 'C2\n300.0', color: '#31b0d5', title: 'Name: C2<br>Alias: null<br>Value: 300.0<br>Type: CELL_WITH_VALUE<br>Id: 2912<br>Formula Expression: Formula String: C2; Formula Values: 300.0; Formula Ptg: 300.0; Ptgs: C2 Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5d3b6585'},
{id: '2913', label: 'FUNCEXEC\n-290.0', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Alias: null<br>Value: -290.0<br>Type: FUNCTION<br>Id: 2913<br>Formula Expression: Formula String: FUNCEXEC(C2, B2, A2, VALUE); Formula Values: FUNCEXEC(300.0, 240.0, 250.0, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5d3b6585'},
{id: '2894', label: 'B2\n240.0', color: '#31b0d5', title: 'Name: B2<br>Alias: null<br>Value: 240.0<br>Type: CELL_WITH_VALUE<br>Id: 2894<br>Formula Expression: Formula String: B2; Formula Values: 240.0; Formula Ptg: 240.0; Ptgs: B2 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5d3b6585'},
{id: '2895', label: '-\n10.0', color: '#f0ad4e', title: 'Name: -<br>Alias: null<br>Value: 10.0<br>Type: OPERATOR<br>Id: 2895<br>Formula Expression: Formula String: A2 - B2; Formula Values: 250.0 - 240.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5d3b6585'},
{id: '2897', label: '-\n-290.0', color: '#f0ad4e', title: 'Name: -<br>Alias: null<br>Value: -290.0<br>Type: OPERATOR<br>Id: 2897<br>Formula Expression: Formula String: A2 - B2 - C2; Formula Values: 250.0 - 240.0 - 300.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5d3b6585'},
{id: '2898', label: 'D3\nDEFINE', color: '#31b0d5', title: 'Name: D3<br>Alias: null<br>Value: DEFINE<br>Type: CELL_WITH_FORMULA<br>Id: 2898<br>Formula Expression: Formula String: DEFINE(A2 - B2 - C2, VALUE, C2, B2, A2, VALUE); Formula Values: DEFINE(250.0 - 240.0 - 300.0, #, 300.0, 240.0, 250.0, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5d3b6585'},
{id: '2900', label: 'VALUE\nDEVDEF', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: DEVDEF<br>Type: CONSTANT_VALUE<br>Id: 2900<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF; Formula Ptg: DEVDEF; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5d3b6585'},
{id: '2901', label: 'A2\n250.0', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: 250.0<br>Type: CELL_WITH_VALUE<br>Id: 2901<br>Formula Expression: Formula String: A2; Formula Values: 250.0; Formula Ptg: 250.0; Ptgs: A2 Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5d3b6585'},
{id: '2904', label: 'VALUE\n#', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: #<br>Type: CONSTANT_VALUE<br>Id: 2904<br>Formula Expression: Formula String: VALUE; Formula Values: #; Formula Ptg: #; Ptgs: VALUE Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5d3b6585'},
{id: '2905', label: 'D2\n-290.0', color: '#31b0d5', title: 'Name: D2<br>Alias: null<br>Value: -290.0<br>Type: CELL_WITH_FORMULA<br>Id: 2905<br>Formula Expression: Formula String: A2 - B2 - C2; Formula Values: 250.0 - 240.0 - 300.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 6 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5d3b6585'},
{id: '2906', label: 'DEFINE\nDEFINE', color: '#f0ad4e', title: 'Name: DEFINE<br>Alias: null<br>Value: DEFINE<br>Type: FUNCTION<br>Id: 2906<br>Formula Expression: Formula String: DEFINE(A2 - B2 - C2, VALUE, C2, B2, A2, VALUE); Formula Values: DEFINE(250.0 - 240.0 - 300.0, #, 300.0, 240.0, 250.0, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 7 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5d3b6585'},
{id: '2907', label: 'E3\n-290.0', color: '#31b0d5', title: 'Name: E3<br>Alias: null<br>Value: -290.0<br>Type: CELL_WITH_FORMULA<br>Id: 2907<br>Formula Expression: Formula String: FUNCEXEC(C2, B2, A2, VALUE); Formula Values: FUNCEXEC(300.0, 240.0, 250.0, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5d3b6585'},
{id: '2909', label: 'VALUE\nDEVDEF', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: DEVDEF<br>Type: CONSTANT_VALUE<br>Id: 2909<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF; Formula Ptg: DEVDEF; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5d3b6585'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '2895', to: '2897'},
{from: '2904', to: '2906'},
{from: '2894', to: '2895'},
{from: '2905', to: '2906'},
{from: '2912', to: '2913'},
{from: '2909', to: '2913'},
{from: '2900', to: '2906'},
{from: '2901', to: '2906'},
{from: '2897', to: '2905'},
{from: '2894', to: '2906'},
{from: '2901', to: '2913'},
{from: '2912', to: '2897'},
{from: '2894', to: '2913'},
{from: '2906', to: '2898'},
{from: '2913', to: '2907'},
{from: '2901', to: '2895'},
{from: '2912', to: '2906'}
                            ]);