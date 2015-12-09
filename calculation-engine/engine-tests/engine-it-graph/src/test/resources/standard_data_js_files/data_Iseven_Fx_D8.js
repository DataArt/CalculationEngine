var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'fb801a81-6191-465d-8b96-f5f64e0148ca', label: 'ISEVEN\nTRUE', color: '#f0ad4e', title: 'Name: ISEVEN<br>Alias: null<br>Value: TRUE<br>Type: FUNCTION<br>Id: fb801a81-6191-465d-8b96-f5f64e0148ca<br>Formula Expression: Formula String: ISEVEN(A2); Formula Values: ISEVEN(2.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3d51f06e'},
{id: '2c49d1b0-e989-438a-9afd-1c5233483115', label: 'A2\n2.0', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: 2.0<br>Type: CELL_WITH_VALUE<br>Id: 2c49d1b0-e989-438a-9afd-1c5233483115<br>Formula Expression: Formula String: A2; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: A2 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3d51f06e'},
{id: 'f28c0335-0aaf-4f75-8fec-d590b52feade', label: 'D8\nTRUE', color: '#31b0d5', title: 'Name: D8<br>Alias: null<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: f28c0335-0aaf-4f75-8fec-d590b52feade<br>Formula Expression: Formula String: ISEVEN(A2); Formula Values: ISEVEN(2.0); Formula Ptg: 2.0 ISEVEN ; Ptgs: A2 ISEVEN  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3d51f06e'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '2c49d1b0-e989-438a-9afd-1c5233483115', to: 'fb801a81-6191-465d-8b96-f5f64e0148ca'},
{from: 'fb801a81-6191-465d-8b96-f5f64e0148ca', to: 'f28c0335-0aaf-4f75-8fec-d590b52feade'}
                            ]);