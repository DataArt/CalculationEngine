var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '3969', label: 'A2\n30.0', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: 30.0<br>Type: CELL_WITH_VALUE<br>Id: 3969<br>Formula Expression: Formula String: A2; Formula Values: 30.0; Formula Ptg: 30.0; Ptgs: A2 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@59d29065'},
{id: '3970', label: '+\n50.0', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 50.0<br>Type: OPERATOR<br>Id: 3970<br>Formula Expression: Formula String: A1 + A2; Formula Values: 20.0 + 30.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@59d29065'},
{id: '3972', label: '+\n55.0', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 55.0<br>Type: OPERATOR<br>Id: 3972<br>Formula Expression: Formula String: A1 + A2 + C1; Formula Values: 20.0 + 30.0 + 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@59d29065'},
{id: '3973', label: 'B3\n505.0', color: '#31b0d5', title: 'Name: B3<br>Alias: null<br>Value: 505.0<br>Type: CELL_WITH_FORMULA<br>Id: 3973<br>Formula Expression: Formula String: B1 + B2 + C1; Formula Values: 200.0 + 300.0 + 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@59d29065'},
{id: '3974', label: 'B1\n200.0', color: '#31b0d5', title: 'Name: B1<br>Alias: null<br>Value: 200.0<br>Type: CELL_WITH_VALUE<br>Id: 3974<br>Formula Expression: Formula String: B1; Formula Values: 200.0; Formula Ptg: 200.0; Ptgs: B1 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@59d29065'},
{id: '3975', label: 'B2\n300.0', color: '#31b0d5', title: 'Name: B2<br>Alias: null<br>Value: 300.0<br>Type: CELL_WITH_VALUE<br>Id: 3975<br>Formula Expression: Formula String: B2; Formula Values: 300.0; Formula Ptg: 300.0; Ptgs: B2 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@59d29065'},
{id: '3976', label: '+\n500.0', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 500.0<br>Type: OPERATOR<br>Id: 3976<br>Formula Expression: Formula String: B1 + B2; Formula Values: 200.0 + 300.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@59d29065'},
{id: '3978', label: '+\n505.0', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 505.0<br>Type: OPERATOR<br>Id: 3978<br>Formula Expression: Formula String: B1 + B2 + C1; Formula Values: 200.0 + 300.0 + 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@59d29065'},
{id: '3979', label: 'C3\n10.0', color: '#31b0d5', title: 'Name: C3<br>Alias: null<br>Value: 10.0<br>Type: CELL_WITH_FORMULA<br>Id: 3979<br>Formula Expression: Formula String: C1 + C2 + C1; Formula Values: 5.0 +  + 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@59d29065'},
{id: '3981', label: 'C2\n', color: '#31b0d5', title: 'Name: C2<br>Alias: null<br>Value: <br>Type: EMPTY_CELL<br>Id: 3981<br>Formula Expression: Formula String: C2; Formula Values: ; Formula Ptg: ; Ptgs: C2 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@59d29065'},
{id: '3982', label: '+\n5.0', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 5.0<br>Type: OPERATOR<br>Id: 3982<br>Formula Expression: Formula String: C1 + C2; Formula Values: 5.0 + ; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@59d29065'},
{id: '3984', label: '+\n10.0', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 10.0<br>Type: OPERATOR<br>Id: 3984<br>Formula Expression: Formula String: C1 + C2 + C1; Formula Values: 5.0 +  + 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@59d29065'},
{id: '3985', label: 'A4\n#REF!', color: '#31b0d5', title: 'Name: A4<br>Alias: null<br>Value: #REF!<br>Type: CELL_WITH_FORMULA<br>Id: 3985<br>Formula Expression: Formula String: A1 + C1 + Sheet2!B1; Formula Values: 20.0 + 5.0 + #REF!; Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@59d29065'},
{id: '3986', label: 'A1\n20.0', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: 20.0<br>Type: CELL_WITH_VALUE<br>Id: 3986<br>Formula Expression: Formula String: A1; Formula Values: 20.0; Formula Ptg: 20.0; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@59d29065'},
{id: '3987', label: 'C1\n5.0', color: '#31b0d5', title: 'Name: C1<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 3987<br>Formula Expression: Formula String: C1; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: C1 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@59d29065'},
{id: '3988', label: '+\n25.0', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 25.0<br>Type: OPERATOR<br>Id: 3988<br>Formula Expression: Formula String: A1 + C1; Formula Values: 20.0 + 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@59d29065'},
{id: '3989', label: 'Sheet2!$B$1\n#REF!', color: '#31b0d5', title: 'Name: Sheet2!$B$1<br>Alias: null<br>Value: #REF!<br>Type: CELL_WITH_VALUE<br>Id: 3989<br>Formula Expression: Formula String: Sheet2!B1; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: Sheet2!$B$1 Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@59d29065'},
{id: '3990', label: '+\n#REF!', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: #REF!<br>Type: OPERATOR<br>Id: 3990<br>Formula Expression: Formula String: A1 + C1 + Sheet2!B1; Formula Values: 20.0 + 5.0 + #REF!; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@59d29065'},
{id: '3967', label: 'A3\n55.0', color: '#31b0d5', title: 'Name: A3<br>Alias: null<br>Value: 55.0<br>Type: CELL_WITH_FORMULA<br>Id: 3967<br>Formula Expression: Formula String: A1 + A2 + C1; Formula Values: 20.0 + 30.0 + 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@59d29065'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '3970', to: '3972'},
{from: '3974', to: '3976'},
{from: '3976', to: '3978'},
{from: '3982', to: '3984'},
{from: '3986', to: '3988'},
{from: '3988', to: '3990'},
{from: '3969', to: '3970'},
{from: '3975', to: '3976'},
{from: '3981', to: '3982'},
{from: '3987', to: '3988'},
{from: '3989', to: '3990'},
{from: '3986', to: '3970'},
{from: '3987', to: '3972'},
{from: '3987', to: '3978'},
{from: '3972', to: '3967'},
{from: '3978', to: '3973'},
{from: '3984', to: '3979'},
{from: '3990', to: '3985'},
{from: '3987', to: '3982'},
{from: '3987', to: '3984'}
                            ]);