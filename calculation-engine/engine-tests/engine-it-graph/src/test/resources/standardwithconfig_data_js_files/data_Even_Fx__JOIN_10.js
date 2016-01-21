var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '1940', label: 'B2\n2.0', color: '#31b0d5', title: 'Name: B2<br>Alias: null<br>Value: 2.0<br>Type: CELL_WITH_FORMULA<br>Id: 1940<br>Formula Expression: Formula String: EVEN(VALUE); Formula Values: EVEN(1.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2921199d'},
{id: '1941', label: 'VALUE\n1.5', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 1.5<br>Type: CONSTANT_VALUE<br>Id: 1941<br>Formula Expression: Formula String: VALUE; Formula Values: 1.5; Formula Ptg: 1.5; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2921199d'},
{id: '1942', label: 'EVEN\n2.0', color: '#f0ad4e', title: 'Name: EVEN<br>Alias: null<br>Value: 2.0<br>Type: FUNCTION<br>Id: 1942<br>Formula Expression: Formula String: EVEN(VALUE); Formula Values: EVEN(1.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2921199d'},
{id: '1943', label: 'B3\n4.0', color: '#31b0d5', title: 'Name: B3<br>Alias: null<br>Value: 4.0<br>Type: CELL_WITH_FORMULA<br>Id: 1943<br>Formula Expression: Formula String: EVEN(VALUE); Formula Values: EVEN(2.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2921199d'},
{id: '1944', label: 'VALUE\n2.5', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 2.5<br>Type: CONSTANT_VALUE<br>Id: 1944<br>Formula Expression: Formula String: VALUE; Formula Values: 2.5; Formula Ptg: 2.5; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2921199d'},
{id: '1945', label: 'EVEN\n4.0', color: '#f0ad4e', title: 'Name: EVEN<br>Alias: null<br>Value: 4.0<br>Type: FUNCTION<br>Id: 1945<br>Formula Expression: Formula String: EVEN(VALUE); Formula Values: EVEN(2.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2921199d'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '1941', to: '1942'},
{from: '1944', to: '1945'},
{from: '1942', to: '1940'},
{from: '1945', to: '1943'}
                            ]);