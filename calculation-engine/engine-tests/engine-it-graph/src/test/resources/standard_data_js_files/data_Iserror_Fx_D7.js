var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '2', label: 'VALUE\n#REF!', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: #REF!<br>Type: CONSTANT_VALUE<br>Id: 2<br>Formula Expression: Formula String: VALUE; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@355c94be'},
{id: '3', label: 'B2\n6.0', color: '#31b0d5', title: 'Name: B2<br>Alias: null<br>Value: 6.0<br>Type: CELL_WITH_VALUE<br>Id: 3<br>Formula Expression: Formula String: B2; Formula Values: 6.0; Formula Ptg: 6.0; Ptgs: B2 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@355c94be'},
{id: '4', label: 'SUM\n#REF!', color: '#f0ad4e', title: 'Name: SUM<br>Alias: null<br>Value: #REF!<br>Type: FUNCTION<br>Id: 4<br>Formula Expression: Formula String: SUM(B2, VALUE); Formula Values: SUM(6.0, #REF!); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@355c94be'},
{id: '1', label: 'D2\n#REF!', color: '#31b0d5', title: 'Name: D2<br>Alias: null<br>Value: #REF!<br>Type: CELL_WITH_FORMULA<br>Id: 1<br>Formula Expression: Formula String: SUM(B2, VALUE); Formula Values: SUM(6.0, #REF!); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@355c94be'},
{id: '5', label: 'ISERROR\nTRUE', color: '#f0ad4e', title: 'Name: ISERROR<br>Alias: null<br>Value: TRUE<br>Type: FUNCTION<br>Id: 5<br>Formula Expression: Formula String: ISERROR(SUM(B2, VALUE)); Formula Values: ISERROR(SUM(6.0, #REF!)); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@355c94be'},
{id: '0', label: 'D7\nTRUE', color: '#31b0d5', title: 'Name: D7<br>Alias: null<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: 0<br>Formula Expression: Formula String: ISERROR(SUM(B2, VALUE)); Formula Values: ISERROR(SUM(6.0, #REF!)); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@355c94be'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '5', to: '0'},
{from: '1', to: '5'},
{from: '3', to: '4'},
{from: '2', to: '4'},
{from: '4', to: '1'}
                            ]);