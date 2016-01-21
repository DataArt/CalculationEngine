var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '864', label: 'B2\n20.085536923187664', color: '#31b0d5', title: 'Name: B2<br>Alias: null<br>Value: 20.085536923187664<br>Type: CELL_WITH_FORMULA<br>Id: 864<br>Formula Expression: Formula String: EXP(VALUE); Formula Values: EXP(3.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5a865416'},
{id: '865', label: 'LN\n3.0', color: '#f0ad4e', title: 'Name: LN<br>Alias: null<br>Value: 3.0<br>Type: FUNCTION<br>Id: 865<br>Formula Expression: Formula String: LN(EXP(VALUE)); Formula Values: LN(EXP(3.0)); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5a865416'},
{id: '866', label: 'C4\n3.000000153185454', color: '#31b0d5', title: 'Name: C4<br>Alias: null<br>Value: 3.000000153185454<br>Type: CELL_WITH_FORMULA<br>Id: 866<br>Formula Expression: Formula String: LN(VALUE); Formula Values: LN(20.08554); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5a865416'},
{id: '867', label: 'VALUE\n20.08554', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 20.08554<br>Type: CONSTANT_VALUE<br>Id: 867<br>Formula Expression: Formula String: VALUE; Formula Values: 20.08554; Formula Ptg: 20.08554; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5a865416'},
{id: '868', label: 'LN\n3.000000153185454', color: '#f0ad4e', title: 'Name: LN<br>Alias: null<br>Value: 3.000000153185454<br>Type: FUNCTION<br>Id: 868<br>Formula Expression: Formula String: LN(VALUE); Formula Values: LN(20.08554); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5a865416'},
{id: '860', label: 'B2\n20.085536923187664', color: '#31b0d5', title: 'Name: B2<br>Alias: null<br>Value: 20.085536923187664<br>Type: CELL_WITH_FORMULA<br>Id: 860<br>Formula Expression: Formula String: EXP(VALUE); Formula Values: EXP(3.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5a865416'},
{id: '861', label: 'VALUE\n3.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 3.0<br>Type: CONSTANT_VALUE<br>Id: 861<br>Formula Expression: Formula String: VALUE; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5a865416'},
{id: '862', label: 'EXP\n20.085536923187664', color: '#f0ad4e', title: 'Name: EXP<br>Alias: null<br>Value: 20.085536923187664<br>Type: FUNCTION<br>Id: 862<br>Formula Expression: Formula String: EXP(VALUE); Formula Values: EXP(3.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5a865416'},
{id: '863', label: 'C3\n3.0', color: '#31b0d5', title: 'Name: C3<br>Alias: null<br>Value: 3.0<br>Type: CELL_WITH_FORMULA<br>Id: 863<br>Formula Expression: Formula String: LN(EXP(VALUE)); Formula Values: LN(EXP(3.0)); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5a865416'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '861', to: '862'},
{from: '864', to: '865'},
{from: '867', to: '868'},
{from: '862', to: '864'},
{from: '862', to: '860'},
{from: '865', to: '863'},
{from: '868', to: '866'}
                            ]);