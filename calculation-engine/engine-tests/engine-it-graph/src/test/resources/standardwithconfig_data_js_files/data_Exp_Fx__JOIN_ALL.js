var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '3058', label: 'VALUE\n1.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 1.0<br>Type: CONSTANT_VALUE<br>Id: 3058<br>Formula Expression: Formula String: VALUE; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7d17906'},
{id: '3059', label: 'EXP\n2.718281828459045', color: '#f0ad4e', title: 'Name: EXP<br>Alias: null<br>Value: 2.718281828459045<br>Type: FUNCTION<br>Id: 3059<br>Formula Expression: Formula String: EXP(VALUE); Formula Values: EXP(1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7d17906'},
{id: '3060', label: 'B1\n15.154262241479259', color: '#31b0d5', title: 'Name: B1<br>Alias: null<br>Value: 15.154262241479259<br>Type: CELL_WITH_FORMULA<br>Id: 3060<br>Formula Expression: Formula String: EXP(EXP(VALUE)); Formula Values: EXP(EXP(1.0)); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7d17906'},
{id: '3061', label: 'A1\n2.718281828459045', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: 2.718281828459045<br>Type: CELL_WITH_FORMULA<br>Id: 3061<br>Formula Expression: Formula String: EXP(VALUE); Formula Values: EXP(1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7d17906'},
{id: '3062', label: 'EXP\n15.154262241479259', color: '#f0ad4e', title: 'Name: EXP<br>Alias: null<br>Value: 15.154262241479259<br>Type: FUNCTION<br>Id: 3062<br>Formula Expression: Formula String: EXP(EXP(VALUE)); Formula Values: EXP(EXP(1.0)); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7d17906'},
{id: '3063', label: 'A2\n7.3890560989306495', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: 7.3890560989306495<br>Type: CELL_WITH_FORMULA<br>Id: 3063<br>Formula Expression: Formula String: EXP(VALUE); Formula Values: EXP(2.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7d17906'},
{id: '3064', label: 'VALUE\n2.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 2.0<br>Type: CONSTANT_VALUE<br>Id: 3064<br>Formula Expression: Formula String: VALUE; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7d17906'},
{id: '3065', label: 'EXP\n7.3890560989306495', color: '#f0ad4e', title: 'Name: EXP<br>Alias: null<br>Value: 7.3890560989306495<br>Type: FUNCTION<br>Id: 3065<br>Formula Expression: Formula String: EXP(VALUE); Formula Values: EXP(2.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7d17906'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '3059', to: '3061'},
{from: '3058', to: '3059'},
{from: '3061', to: '3062'},
{from: '3064', to: '3065'},
{from: '3062', to: '3060'},
{from: '3065', to: '3063'}
                            ]);