var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '65', label: 'B2\n-1.6472311463710965', color: '#31b0d5', title: 'Name: B2<br>Alias: null<br>Value: -1.6472311463710965<br>Type: CELL_WITH_FORMULA<br>Id: 65<br>Formula Expression: Formula String: ASINH(VALUE); Formula Values: ASINH(-2.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@49c7b90e'},
{id: '66', label: 'VALUE\n-2.5', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: -2.5<br>Type: CONSTANT_VALUE<br>Id: 66<br>Formula Expression: Formula String: VALUE; Formula Values: -2.5; Formula Ptg: -2.5; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@49c7b90e'},
{id: '67', label: 'ASINH\n-1.6472311463710965', color: '#f0ad4e', title: 'Name: ASINH<br>Alias: null<br>Value: -1.6472311463710965<br>Type: FUNCTION<br>Id: 67<br>Formula Expression: Formula String: ASINH(VALUE); Formula Values: ASINH(-2.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@49c7b90e'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '66', to: '67'},
{from: '67', to: '65'}
                            ]);