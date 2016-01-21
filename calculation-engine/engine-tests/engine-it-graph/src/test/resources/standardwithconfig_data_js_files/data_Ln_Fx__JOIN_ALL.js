var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '3072', label: 'C4\n3.000000153185454', color: '#31b0d5', title: 'Name: C4<br>Alias: null<br>Value: 3.000000153185454<br>Type: CELL_WITH_FORMULA<br>Id: 3072<br>Formula Expression: Formula String: LN(VALUE); Formula Values: LN(20.08554); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5e95b0ab'},
{id: '3073', label: 'VALUE\n20.08554', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 20.08554<br>Type: CONSTANT_VALUE<br>Id: 3073<br>Formula Expression: Formula String: VALUE; Formula Values: 20.08554; Formula Ptg: 20.08554; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5e95b0ab'},
{id: '3074', label: 'LN\n3.000000153185454', color: '#f0ad4e', title: 'Name: LN<br>Alias: null<br>Value: 3.000000153185454<br>Type: FUNCTION<br>Id: 3074<br>Formula Expression: Formula String: LN(VALUE); Formula Values: LN(20.08554); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5e95b0ab'},
{id: '3066', label: 'B2\n20.085536923187664', color: '#31b0d5', title: 'Name: B2<br>Alias: null<br>Value: 20.085536923187664<br>Type: CELL_WITH_FORMULA<br>Id: 3066<br>Formula Expression: Formula String: EXP(VALUE); Formula Values: EXP(3.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5e95b0ab'},
{id: '3067', label: 'VALUE\n3.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 3.0<br>Type: CONSTANT_VALUE<br>Id: 3067<br>Formula Expression: Formula String: VALUE; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5e95b0ab'},
{id: '3068', label: 'EXP\n20.085536923187664', color: '#f0ad4e', title: 'Name: EXP<br>Alias: null<br>Value: 20.085536923187664<br>Type: FUNCTION<br>Id: 3068<br>Formula Expression: Formula String: EXP(VALUE); Formula Values: EXP(3.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5e95b0ab'},
{id: '3069', label: 'C3\n3.0', color: '#31b0d5', title: 'Name: C3<br>Alias: null<br>Value: 3.0<br>Type: CELL_WITH_FORMULA<br>Id: 3069<br>Formula Expression: Formula String: LN(EXP(VALUE)); Formula Values: LN(EXP(3.0)); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5e95b0ab'},
{id: '3071', label: 'LN\n3.0', color: '#f0ad4e', title: 'Name: LN<br>Alias: null<br>Value: 3.0<br>Type: FUNCTION<br>Id: 3071<br>Formula Expression: Formula String: LN(EXP(VALUE)); Formula Values: LN(EXP(3.0)); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5e95b0ab'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '3067', to: '3068'},
{from: '3073', to: '3074'},
{from: '3066', to: '3071'},
{from: '3068', to: '3066'},
{from: '3071', to: '3069'},
{from: '3074', to: '3072'}
                            ]);