var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '466', label: 'B1\n15.154262241479259', color: '#31b0d5', title: 'Name: B1<br>Alias: null<br>Value: 15.154262241479259<br>Type: CELL_WITH_FORMULA<br>Id: 466<br>Formula Expression: Formula String: EXP(EXP(VALUE)); Formula Values: EXP(EXP(1.0)); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@497570fb'},
{id: '467', label: 'A1\n2.718281828459045', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: 2.718281828459045<br>Type: CELL_WITH_FORMULA<br>Id: 467<br>Formula Expression: Formula String: EXP(VALUE); Formula Values: EXP(1.0); Formula Ptg: null; Ptgs: null Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@497570fb'},
{id: '468', label: 'VALUE\n1.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 1.0<br>Type: CONSTANT_VALUE<br>Id: 468<br>Formula Expression: Formula String: VALUE; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@497570fb'},
{id: '469', label: 'EXP\n2.718281828459045', color: '#f0ad4e', title: 'Name: EXP<br>Alias: null<br>Value: 2.718281828459045<br>Type: FUNCTION<br>Id: 469<br>Formula Expression: Formula String: EXP(VALUE); Formula Values: EXP(1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@497570fb'},
{id: '470', label: 'EXP\n15.154262241479259', color: '#f0ad4e', title: 'Name: EXP<br>Alias: null<br>Value: 15.154262241479259<br>Type: FUNCTION<br>Id: 470<br>Formula Expression: Formula String: EXP(EXP(VALUE)); Formula Values: EXP(EXP(1.0)); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@497570fb'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '468', to: '469'},
{from: '467', to: '470'},
{from: '470', to: '466'},
{from: '469', to: '467'}
                            ]);