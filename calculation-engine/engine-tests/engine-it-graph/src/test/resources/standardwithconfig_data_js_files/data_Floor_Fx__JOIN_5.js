var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '5296', label: 'FLOOR\n30.0', color: '#f0ad4e', title: 'Name: FLOOR<br>Alias: null<br>Value: 30.0<br>Type: FUNCTION<br>Id: 5296<br>Formula Expression: Formula String: FLOOR(VALUE, VALUE); Formula Values: FLOOR(3.0, 32.5678); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2b01be54'},
{id: '5289', label: 'A1\n2.0', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: 2.0<br>Type: CELL_WITH_FORMULA<br>Id: 5289<br>Formula Expression: Formula String: FLOOR(VALUE, VALUE); Formula Values: FLOOR(2.0, 3.7); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2b01be54'},
{id: '5290', label: 'VALUE\n3.7', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 3.7<br>Type: CONSTANT_VALUE<br>Id: 5290<br>Formula Expression: Formula String: VALUE; Formula Values: 3.7; Formula Ptg: 3.7; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2b01be54'},
{id: '5291', label: 'VALUE\n2.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 2.0<br>Type: CONSTANT_VALUE<br>Id: 5291<br>Formula Expression: Formula String: VALUE; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2b01be54'},
{id: '5292', label: 'FLOOR\n2.0', color: '#f0ad4e', title: 'Name: FLOOR<br>Alias: null<br>Value: 2.0<br>Type: FUNCTION<br>Id: 5292<br>Formula Expression: Formula String: FLOOR(VALUE, VALUE); Formula Values: FLOOR(2.0, 3.7); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2b01be54'},
{id: '5293', label: 'B2\n30.0', color: '#31b0d5', title: 'Name: B2<br>Alias: null<br>Value: 30.0<br>Type: CELL_WITH_FORMULA<br>Id: 5293<br>Formula Expression: Formula String: FLOOR(VALUE, VALUE); Formula Values: FLOOR(3.0, 32.5678); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2b01be54'},
{id: '5294', label: 'VALUE\n32.5678', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 32.5678<br>Type: CONSTANT_VALUE<br>Id: 5294<br>Formula Expression: Formula String: VALUE; Formula Values: 32.5678; Formula Ptg: 32.5678; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2b01be54'},
{id: '5295', label: 'VALUE\n3.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 3.0<br>Type: CONSTANT_VALUE<br>Id: 5295<br>Formula Expression: Formula String: VALUE; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2b01be54'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '5291', to: '5292'},
{from: '5295', to: '5296'},
{from: '5290', to: '5292'},
{from: '5294', to: '5296'},
{from: '5292', to: '5289'},
{from: '5296', to: '5293'}
                            ]);