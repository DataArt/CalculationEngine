var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'd40b3321-ce58-46f0-9dd6-e76aa8c41406', label: 'ISERROR\nFALSE', color: '#f0ad4e', title: 'Name: ISERROR<br>Alias: null<br>Value: FALSE<br>Type: FUNCTION<br>Id: d40b3321-ce58-46f0-9dd6-e76aa8c41406<br>Formula Expression: Formula String: ISERROR(SUM(A2:A5)); Formula Values: ISERROR(SUM(2.0, 6.0, 5.0, 7.0)); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@17046283'},
{id: '9ff7b3d0-3138-41e1-8a40-f2c8721d64b2', label: 'D11\nFALSE', color: '#31b0d5', title: 'Name: D11<br>Alias: null<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 9ff7b3d0-3138-41e1-8a40-f2c8721d64b2<br>Formula Expression: Formula String: ISERROR(SUM(A2:A5)); Formula Values: ISERROR(SUM(2.0, 6.0, 5.0, 7.0)); Formula Ptg: 2.0, 6.0, 5.0, 7.0 SUM  ISERROR ; Ptgs: A2:A5 SUM  ISERROR  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@17046283'},
{id: '7fe4aca9-eb14-48cf-ac2d-955e5b758c4b', label: 'A2:A5\n[[2.0], [6.0], [5.0], [7.0]]', color: '#31b0d5', title: 'Name: A2:A5<br>Alias: null<br>Value: [[2.0], [6.0], [5.0], [7.0]]<br>Type: RANGE<br>Id: 7fe4aca9-eb14-48cf-ac2d-955e5b758c4b<br>Formula Expression: Formula String: A2:A5; Formula Values: [[2.0], [6.0], [5.0], [7.0]]; Formula Ptg: [[2.0], [6.0], [5.0], [7.0]]; Ptgs: A2:A5 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@17046283'},
{id: '9b025ba8-0214-4d85-9e57-28d9994f0065', label: 'SUM\n20.0', color: '#f0ad4e', title: 'Name: SUM<br>Alias: null<br>Value: 20.0<br>Type: FUNCTION<br>Id: 9b025ba8-0214-4d85-9e57-28d9994f0065<br>Formula Expression: Formula String: SUM(A2:A5); Formula Values: SUM(2.0, 6.0, 5.0, 7.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@17046283'},
{id: 'e392d09b-535f-4f24-bb5e-29f9bfaffa67', label: 'E2\n20.0', color: '#31b0d5', title: 'Name: E2<br>Alias: null<br>Value: 20.0<br>Type: CELL_WITH_FORMULA<br>Id: e392d09b-535f-4f24-bb5e-29f9bfaffa67<br>Formula Expression: Formula String: SUM(A2:A5); Formula Values: SUM(2.0, 6.0, 5.0, 7.0); Formula Ptg: 2.0, 6.0, 5.0, 7.0 SUM ; Ptgs: A2:A5 SUM  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@17046283'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '9b025ba8-0214-4d85-9e57-28d9994f0065', to: 'e392d09b-535f-4f24-bb5e-29f9bfaffa67'},
{from: 'e392d09b-535f-4f24-bb5e-29f9bfaffa67', to: 'd40b3321-ce58-46f0-9dd6-e76aa8c41406'},
{from: 'd40b3321-ce58-46f0-9dd6-e76aa8c41406', to: '9ff7b3d0-3138-41e1-8a40-f2c8721d64b2'},
{from: '7fe4aca9-eb14-48cf-ac2d-955e5b758c4b', to: '9b025ba8-0214-4d85-9e57-28d9994f0065'}
                            ]);