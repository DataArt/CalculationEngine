var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '0', label: 'D9\nTRUE', color: '#31b0d5', title: 'Name: D9<br>Alias: null<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: 0<br>Formula Expression: Formula String: ISERROR(SUM(VALUE, C2, C1)); Formula Values: ISERROR(SUM(#NAME?, 5.0, 7.0)); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7bbbb6a8'},
{id: '1', label: 'D1\n#NAME?', color: '#31b0d5', title: 'Name: D1<br>Alias: null<br>Value: #NAME?<br>Type: CELL_WITH_FORMULA<br>Id: 1<br>Formula Expression: Formula String: SUM(VALUE, C2, C1); Formula Values: SUM(#NAME?, 5.0, 7.0); Formula Ptg: null; Ptgs: null Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7bbbb6a8'},
{id: '2', label: 'C1\n7.0', color: '#31b0d5', title: 'Name: C1<br>Alias: null<br>Value: 7.0<br>Type: CELL_WITH_VALUE<br>Id: 2<br>Formula Expression: Formula String: C1; Formula Values: 7.0; Formula Ptg: 7.0; Ptgs: C1 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7bbbb6a8'},
{id: '3', label: 'C2\n5.0', color: '#31b0d5', title: 'Name: C2<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 3<br>Formula Expression: Formula String: C2; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: C2 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7bbbb6a8'},
{id: '4', label: 'D3\n#NAME?', color: '#31b0d5', title: 'Name: D3<br>Alias: null<br>Value: #NAME?<br>Type: CELL_WITH_REFERENCE<br>Id: 4<br>Formula Expression: Formula String: VALUE; Formula Values: #NAME?; Formula Ptg: null; Ptgs: null Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7bbbb6a8'},
{id: '5', label: 'VALUE\n#NAME?', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: #NAME?<br>Type: CONSTANT_VALUE<br>Id: 5<br>Formula Expression: Formula String: VALUE; Formula Values: #NAME?; Formula Ptg: #NAME?; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7bbbb6a8'},
{id: '6', label: 'SUM\n#NAME?', color: '#f0ad4e', title: 'Name: SUM<br>Alias: null<br>Value: #NAME?<br>Type: FUNCTION<br>Id: 6<br>Formula Expression: Formula String: SUM(VALUE, C2, C1); Formula Values: SUM(#NAME?, 5.0, 7.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7bbbb6a8'},
{id: '7', label: 'ISERROR\nTRUE', color: '#f0ad4e', title: 'Name: ISERROR<br>Alias: null<br>Value: TRUE<br>Type: FUNCTION<br>Id: 7<br>Formula Expression: Formula String: ISERROR(SUM(VALUE, C2, C1)); Formula Values: ISERROR(SUM(#NAME?, 5.0, 7.0)); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7bbbb6a8'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '5', to: '4'},
{from: '4', to: '6'},
{from: '3', to: '6'},
{from: '2', to: '6'},
{from: '1', to: '7'},
{from: '7', to: '0'},
{from: '6', to: '1'}
                            ]);