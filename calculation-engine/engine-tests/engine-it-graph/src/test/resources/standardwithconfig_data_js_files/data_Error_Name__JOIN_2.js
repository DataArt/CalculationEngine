var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'c8299885-e679-42fb-8be3-1f068321bd53', label: 'B2\n', color: '#31b0d5', title: 'Name: B2<br>Alias: null<br>Value: <br>Type: CELL_WITH_FORMULA<br>Id: c8299885-e679-42fb-8be3-1f068321bd53<br>Formula Expression: Formula String: CONCATENATE(A2, A1); Formula Values: CONCATENATE(, ); Formula Ptg: ,  CONCATENATE ; Ptgs: A2, A1 CONCATENATE  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5c5eefef'},
{id: '24e8f31b-4e28-492f-a2d3-962a5275d676', label: 'A1\n', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: <br>Type: EMPTY_CELL<br>Id: 24e8f31b-4e28-492f-a2d3-962a5275d676<br>Formula Expression: Formula String: A1; Formula Values: ; Formula Ptg: ; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5c5eefef'},
{id: '9b90a4e7-66cf-4c27-a303-5000cb4e5560', label: 'A2\n', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: <br>Type: EMPTY_CELL<br>Id: 9b90a4e7-66cf-4c27-a303-5000cb4e5560<br>Formula Expression: Formula String: A2; Formula Values: ; Formula Ptg: ; Ptgs: A2 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5c5eefef'},
{id: 'f00085a4-e5c6-4316-a97d-020260cbe2d7', label: 'CONCATENATE\n', color: '#f0ad4e', title: 'Name: CONCATENATE<br>Alias: null<br>Value: <br>Type: FUNCTION<br>Id: f00085a4-e5c6-4316-a97d-020260cbe2d7<br>Formula Expression: Formula String: CONCATENATE(A2, A1); Formula Values: CONCATENATE(, ); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5c5eefef'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '9b90a4e7-66cf-4c27-a303-5000cb4e5560', to: 'f00085a4-e5c6-4316-a97d-020260cbe2d7'},
{from: '24e8f31b-4e28-492f-a2d3-962a5275d676', to: 'f00085a4-e5c6-4316-a97d-020260cbe2d7'},
{from: 'f00085a4-e5c6-4316-a97d-020260cbe2d7', to: 'c8299885-e679-42fb-8be3-1f068321bd53'}
                            ]);