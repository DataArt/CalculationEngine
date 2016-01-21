var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '4161', label: 'VALUE\n1.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 1.0<br>Type: CONSTANT_VALUE<br>Id: 4161<br>Formula Expression: Formula String: VALUE; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5507584d'},
{id: '4162', label: 'EXP\n2.718281828459045', color: '#f0ad4e', title: 'Name: EXP<br>Alias: null<br>Value: 2.718281828459045<br>Type: FUNCTION<br>Id: 4162<br>Formula Expression: Formula String: EXP(VALUE); Formula Values: EXP(1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5507584d'},
{id: '4163', label: 'B1\n15.154262241479259', color: '#31b0d5', title: 'Name: B1<br>Alias: null<br>Value: 15.154262241479259<br>Type: CELL_WITH_FORMULA<br>Id: 4163<br>Formula Expression: Formula String: EXP(EXP(VALUE)); Formula Values: EXP(EXP(1.0)); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5507584d'},
{id: '4164', label: 'A1\n2.718281828459045', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: 2.718281828459045<br>Type: CELL_WITH_FORMULA<br>Id: 4164<br>Formula Expression: Formula String: EXP(VALUE); Formula Values: EXP(1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5507584d'},
{id: '4165', label: 'EXP\n15.154262241479259', color: '#f0ad4e', title: 'Name: EXP<br>Alias: null<br>Value: 15.154262241479259<br>Type: FUNCTION<br>Id: 4165<br>Formula Expression: Formula String: EXP(EXP(VALUE)); Formula Values: EXP(EXP(1.0)); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5507584d'},
{id: '4166', label: 'A2\n7.3890560989306495', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: 7.3890560989306495<br>Type: CELL_WITH_FORMULA<br>Id: 4166<br>Formula Expression: Formula String: EXP(VALUE); Formula Values: EXP(2.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5507584d'},
{id: '4167', label: 'VALUE\n2.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 2.0<br>Type: CONSTANT_VALUE<br>Id: 4167<br>Formula Expression: Formula String: VALUE; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5507584d'},
{id: '4168', label: 'EXP\n7.3890560989306495', color: '#f0ad4e', title: 'Name: EXP<br>Alias: null<br>Value: 7.3890560989306495<br>Type: FUNCTION<br>Id: 4168<br>Formula Expression: Formula String: EXP(VALUE); Formula Values: EXP(2.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5507584d'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '4161', to: '4162'},
{from: '4164', to: '4165'},
{from: '4167', to: '4168'},
{from: '4162', to: '4164'},
{from: '4165', to: '4163'},
{from: '4168', to: '4166'}
                            ]);