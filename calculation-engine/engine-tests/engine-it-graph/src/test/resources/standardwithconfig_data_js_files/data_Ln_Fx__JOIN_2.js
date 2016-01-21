var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '4176', label: 'VALUE\n20.08554', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 20.08554<br>Type: CONSTANT_VALUE<br>Id: 4176<br>Formula Expression: Formula String: VALUE; Formula Values: 20.08554; Formula Ptg: 20.08554; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@317fa5dd'},
{id: '4177', label: 'LN\n3.000000153185454', color: '#f0ad4e', title: 'Name: LN<br>Alias: null<br>Value: 3.000000153185454<br>Type: FUNCTION<br>Id: 4177<br>Formula Expression: Formula String: LN(VALUE); Formula Values: LN(20.08554); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@317fa5dd'},
{id: '4169', label: 'B2\n20.085536923187664', color: '#31b0d5', title: 'Name: B2<br>Alias: null<br>Value: 20.085536923187664<br>Type: CELL_WITH_FORMULA<br>Id: 4169<br>Formula Expression: Formula String: EXP(VALUE); Formula Values: EXP(3.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@317fa5dd'},
{id: '4170', label: 'VALUE\n3.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 3.0<br>Type: CONSTANT_VALUE<br>Id: 4170<br>Formula Expression: Formula String: VALUE; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@317fa5dd'},
{id: '4171', label: 'EXP\n20.085536923187664', color: '#f0ad4e', title: 'Name: EXP<br>Alias: null<br>Value: 20.085536923187664<br>Type: FUNCTION<br>Id: 4171<br>Formula Expression: Formula String: EXP(VALUE); Formula Values: EXP(3.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@317fa5dd'},
{id: '4172', label: 'C3\n3.0', color: '#31b0d5', title: 'Name: C3<br>Alias: null<br>Value: 3.0<br>Type: CELL_WITH_FORMULA<br>Id: 4172<br>Formula Expression: Formula String: LN(EXP(VALUE)); Formula Values: LN(EXP(3.0)); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@317fa5dd'},
{id: '4174', label: 'LN\n3.0', color: '#f0ad4e', title: 'Name: LN<br>Alias: null<br>Value: 3.0<br>Type: FUNCTION<br>Id: 4174<br>Formula Expression: Formula String: LN(EXP(VALUE)); Formula Values: LN(EXP(3.0)); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@317fa5dd'},
{id: '4175', label: 'C4\n3.000000153185454', color: '#31b0d5', title: 'Name: C4<br>Alias: null<br>Value: 3.000000153185454<br>Type: CELL_WITH_FORMULA<br>Id: 4175<br>Formula Expression: Formula String: LN(VALUE); Formula Values: LN(20.08554); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@317fa5dd'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '4170', to: '4171'},
{from: '4176', to: '4177'},
{from: '4169', to: '4174'},
{from: '4171', to: '4169'},
{from: '4174', to: '4172'},
{from: '4177', to: '4175'}
                            ]);