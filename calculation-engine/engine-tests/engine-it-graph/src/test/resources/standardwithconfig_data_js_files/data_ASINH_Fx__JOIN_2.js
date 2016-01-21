var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '3482', label: 'B2\n-1.6472311463710965', color: '#31b0d5', title: 'Name: B2<br>Alias: null<br>Value: -1.6472311463710965<br>Type: CELL_WITH_FORMULA<br>Id: 3482<br>Formula Expression: Formula String: ASINH(VALUE); Formula Values: ASINH(-2.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@22f046b'},
{id: '3483', label: 'VALUE\n-2.5', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: -2.5<br>Type: CONSTANT_VALUE<br>Id: 3483<br>Formula Expression: Formula String: VALUE; Formula Values: -2.5; Formula Ptg: -2.5; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@22f046b'},
{id: '3484', label: 'ASINH\n-1.6472311463710965', color: '#f0ad4e', title: 'Name: ASINH<br>Alias: null<br>Value: -1.6472311463710965<br>Type: FUNCTION<br>Id: 3484<br>Formula Expression: Formula String: ASINH(VALUE); Formula Values: ASINH(-2.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@22f046b'},
{id: '3485', label: 'B3\n3.4023066454805946', color: '#31b0d5', title: 'Name: B3<br>Alias: null<br>Value: 3.4023066454805946<br>Type: CELL_WITH_FORMULA<br>Id: 3485<br>Formula Expression: Formula String: ASINH(VALUE); Formula Values: ASINH(15.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@22f046b'},
{id: '3486', label: 'VALUE\n15.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 15.0<br>Type: CONSTANT_VALUE<br>Id: 3486<br>Formula Expression: Formula String: VALUE; Formula Values: 15.0; Formula Ptg: 15.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@22f046b'},
{id: '3487', label: 'ASINH\n3.4023066454805946', color: '#f0ad4e', title: 'Name: ASINH<br>Alias: null<br>Value: 3.4023066454805946<br>Type: FUNCTION<br>Id: 3487<br>Formula Expression: Formula String: ASINH(VALUE); Formula Values: ASINH(15.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@22f046b'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '3483', to: '3484'},
{from: '3486', to: '3487'},
{from: '3484', to: '3482'},
{from: '3487', to: '3485'}
                            ]);