var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '9690b3cf-2d0f-4998-b2b3-7528eacdfc46', label: ',\n[9.0, 7.0]', color: '#f0ad4e', title: 'Name: ,<br>Alias: null<br>Value: [9.0, 7.0]<br>Type: FUNCTION<br>Id: 9690b3cf-2d0f-4998-b2b3-7528eacdfc46<br>Formula Expression: Formula String: A5 , D5; Formula Values: 7.0 , 9.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: null'},
{id: '7fef61d9-8ba0-435d-a104-c06f253e122b', label: 'A5\n7.0', color: '#31b0d5', title: 'Name: A5<br>Alias: null<br>Value: 7.0<br>Type: CELL_WITH_VALUE<br>Id: 7fef61d9-8ba0-435d-a104-c06f253e122b<br>Formula Expression: Formula String: A5; Formula Values: 7.0; Formula Ptg: 7.0; Ptgs: A5 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@78691363'},
{id: '67fd1965-8d89-41f9-bb1a-9a1ce490bafc', label: 'E5\n[9.0, 7.0]', color: '#31b0d5', title: 'Name: E5<br>Alias: null<br>Value: [9.0, 7.0]<br>Type: CELL_WITH_FORMULA<br>Id: 67fd1965-8d89-41f9-bb1a-9a1ce490bafc<br>Formula Expression: Formula String: A5 , D5; Formula Values: 7.0 , 9.0; Formula Ptg: 7.0 9.0 ,; Ptgs: A5 D5 , Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@78691363'},
{id: 'f0756416-12cc-4bac-a33a-de6831a671b9', label: 'D5\n9.0', color: '#31b0d5', title: 'Name: D5<br>Alias: null<br>Value: 9.0<br>Type: CELL_WITH_VALUE<br>Id: f0756416-12cc-4bac-a33a-de6831a671b9<br>Formula Expression: Formula String: D5; Formula Values: 9.0; Formula Ptg: 9.0; Ptgs: D5 Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@78691363'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '7fef61d9-8ba0-435d-a104-c06f253e122b', to: '9690b3cf-2d0f-4998-b2b3-7528eacdfc46'},
{from: '9690b3cf-2d0f-4998-b2b3-7528eacdfc46', to: '67fd1965-8d89-41f9-bb1a-9a1ce490bafc'},
{from: 'f0756416-12cc-4bac-a33a-de6831a671b9', to: '9690b3cf-2d0f-4998-b2b3-7528eacdfc46'}
                            ]);