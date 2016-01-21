var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '4585', label: 'B2\n-1.6472311463710965', color: '#31b0d5', title: 'Name: B2<br>Alias: null<br>Value: -1.6472311463710965<br>Type: CELL_WITH_FORMULA<br>Id: 4585<br>Formula Expression: Formula String: ASINH(VALUE); Formula Values: ASINH(-2.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6e70861'},
{id: '4586', label: 'VALUE\n-2.5', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: -2.5<br>Type: CONSTANT_VALUE<br>Id: 4586<br>Formula Expression: Formula String: VALUE; Formula Values: -2.5; Formula Ptg: -2.5; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6e70861'},
{id: '4587', label: 'ASINH\n-1.6472311463710965', color: '#f0ad4e', title: 'Name: ASINH<br>Alias: null<br>Value: -1.6472311463710965<br>Type: FUNCTION<br>Id: 4587<br>Formula Expression: Formula String: ASINH(VALUE); Formula Values: ASINH(-2.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6e70861'},
{id: '4588', label: 'B3\n3.4023066454805946', color: '#31b0d5', title: 'Name: B3<br>Alias: null<br>Value: 3.4023066454805946<br>Type: CELL_WITH_FORMULA<br>Id: 4588<br>Formula Expression: Formula String: ASINH(VALUE); Formula Values: ASINH(15.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6e70861'},
{id: '4589', label: 'VALUE\n15.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 15.0<br>Type: CONSTANT_VALUE<br>Id: 4589<br>Formula Expression: Formula String: VALUE; Formula Values: 15.0; Formula Ptg: 15.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6e70861'},
{id: '4590', label: 'ASINH\n3.4023066454805946', color: '#f0ad4e', title: 'Name: ASINH<br>Alias: null<br>Value: 3.4023066454805946<br>Type: FUNCTION<br>Id: 4590<br>Formula Expression: Formula String: ASINH(VALUE); Formula Values: ASINH(15.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6e70861'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '4586', to: '4587'},
{from: '4589', to: '4590'},
{from: '4587', to: '4585'},
{from: '4590', to: '4588'}
                            ]);