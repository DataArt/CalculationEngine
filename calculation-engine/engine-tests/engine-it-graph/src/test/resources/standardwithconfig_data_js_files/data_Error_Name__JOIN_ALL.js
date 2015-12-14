var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '873a7bb4-5ceb-43db-aa8f-4dbdbcfa1637', label: 'VALUE\n#NAME?', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: #NAME?<br>Type: CONSTANT_VALUE<br>Id: 873a7bb4-5ceb-43db-aa8f-4dbdbcfa1637<br>Formula Expression: Formula String: VALUE; Formula Values: #NAME?; Formula Ptg: #NAME?; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4a22f9e2'},
{id: 'cdc5f1be-270f-428d-937b-c980f8685f14', label: 'B2\n#NAME?', color: '#31b0d5', title: 'Name: B2<br>Alias: null<br>Value: #NAME?<br>Type: CELL_WITH_FORMULA<br>Id: cdc5f1be-270f-428d-937b-c980f8685f14<br>Formula Expression: Formula String: VALUE; Formula Values: #NAME?; Formula Ptg: #NAME?; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4a22f9e2'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '873a7bb4-5ceb-43db-aa8f-4dbdbcfa1637', to: 'cdc5f1be-270f-428d-937b-c980f8685f14'}
                            ]);