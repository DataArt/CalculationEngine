var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '471', label: 'C3\n3.0', color: '#31b0d5', title: 'Name: C3<br>Alias: null<br>Value: 3.0<br>Type: CELL_WITH_FORMULA<br>Id: 471<br>Formula Expression: Formula String: LN(EXP(VALUE)); Formula Values: LN(EXP(3.0)); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@37d00a23'},
{id: '472', label: 'B2\n20.085536923187664', color: '#31b0d5', title: 'Name: B2<br>Alias: null<br>Value: 20.085536923187664<br>Type: CELL_WITH_FORMULA<br>Id: 472<br>Formula Expression: Formula String: EXP(VALUE); Formula Values: EXP(3.0); Formula Ptg: null; Ptgs: null Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@37d00a23'},
{id: '473', label: 'VALUE\n3.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 3.0<br>Type: CONSTANT_VALUE<br>Id: 473<br>Formula Expression: Formula String: VALUE; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@37d00a23'},
{id: '474', label: 'EXP\n20.085536923187664', color: '#f0ad4e', title: 'Name: EXP<br>Alias: null<br>Value: 20.085536923187664<br>Type: FUNCTION<br>Id: 474<br>Formula Expression: Formula String: EXP(VALUE); Formula Values: EXP(3.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@37d00a23'},
{id: '475', label: 'LN\n3.0', color: '#f0ad4e', title: 'Name: LN<br>Alias: null<br>Value: 3.0<br>Type: FUNCTION<br>Id: 475<br>Formula Expression: Formula String: LN(EXP(VALUE)); Formula Values: LN(EXP(3.0)); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@37d00a23'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '473', to: '474'},
{from: '472', to: '475'},
{from: '475', to: '471'},
{from: '474', to: '472'}
                            ]);