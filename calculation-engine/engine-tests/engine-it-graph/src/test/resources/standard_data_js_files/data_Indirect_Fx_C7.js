var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '506', label: 'C7\n9.0', color: '#31b0d5', title: 'Name: C7<br>Alias: null<br>Value: 9.0<br>Type: CELL_WITH_FORMULA<br>Id: 506<br>Formula Expression: Formula String: VALUE + VALUE; Formula Values: 3.0 + 6.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5467eea4'},
{id: '507', label: 'VALUE\n3.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 3.0<br>Type: CONSTANT_VALUE<br>Id: 507<br>Formula Expression: Formula String: VALUE; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5467eea4'},
{id: '508', label: 'VALUE\n6.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 6.0<br>Type: CONSTANT_VALUE<br>Id: 508<br>Formula Expression: Formula String: VALUE; Formula Values: 6.0; Formula Ptg: 6.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5467eea4'},
{id: '509', label: '+\n9.0', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 9.0<br>Type: OPERATOR<br>Id: 509<br>Formula Expression: Formula String: VALUE + VALUE; Formula Values: 3.0 + 6.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5467eea4'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '508', to: '509'},
{from: '507', to: '509'},
{from: '509', to: '506'}
                            ]);