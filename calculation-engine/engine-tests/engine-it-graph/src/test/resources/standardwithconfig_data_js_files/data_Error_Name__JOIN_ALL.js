var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '0901f662-ed44-4f70-bcdb-2cad8b86725c', label: 'VALUE\n0.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 0.0<br>Type: CONSTANT_VALUE<br>Id: 0901f662-ed44-4f70-bcdb-2cad8b86725c<br>Formula Expression: Formula String: VALUE; Formula Values: 0.0; Formula Ptg: 0.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7880cdf3'},
{id: 'bc98f643-1349-4bcf-8ed1-dedf3db4dd3b', label: 'B2\n0.0', color: '#31b0d5', title: 'Name: B2<br>Alias: null<br>Value: 0.0<br>Type: CELL_WITH_FORMULA<br>Id: bc98f643-1349-4bcf-8ed1-dedf3db4dd3b<br>Formula Expression: Formula String: VALUE; Formula Values: 0.0; Formula Ptg: 0.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7880cdf3'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '0901f662-ed44-4f70-bcdb-2cad8b86725c', to: 'bc98f643-1349-4bcf-8ed1-dedf3db4dd3b'}
                            ]);