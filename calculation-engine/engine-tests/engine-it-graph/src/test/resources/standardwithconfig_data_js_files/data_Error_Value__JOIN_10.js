var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'c5c533ea-3b0d-4068-b771-e75ab516612a', label: 'D5\n9.0', color: '#31b0d5', title: 'Name: D5<br>Alias: null<br>Value: 9.0<br>Type: CELL_WITH_VALUE<br>Id: c5c533ea-3b0d-4068-b771-e75ab516612a<br>Formula Expression: Formula String: D5; Formula Values: 9.0; Formula Ptg: 9.0; Ptgs: D5 Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@52bf72b5'},
{id: 'e4b79274-6b6d-4282-a9d0-0950808d62a8', label: 'A5\n7.0', color: '#31b0d5', title: 'Name: A5<br>Alias: null<br>Value: 7.0<br>Type: CELL_WITH_VALUE<br>Id: e4b79274-6b6d-4282-a9d0-0950808d62a8<br>Formula Expression: Formula String: A5; Formula Values: 7.0; Formula Ptg: 7.0; Ptgs: A5 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@52bf72b5'},
{id: '39a037dc-f18c-48f2-a1c6-3cf0f44653e3', label: 'E5\n[9.0, 7.0]', color: '#31b0d5', title: 'Name: E5<br>Alias: null<br>Value: [9.0, 7.0]<br>Type: CELL_WITH_FORMULA<br>Id: 39a037dc-f18c-48f2-a1c6-3cf0f44653e3<br>Formula Expression: Formula String: A5 , D5; Formula Values: 7.0 , 9.0; Formula Ptg: 7.0 9.0 ,; Ptgs: A5 D5 , Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@52bf72b5'},
{id: 'e7112b2d-eabf-4f09-ad31-cb3490be9a30', label: ',\n[9.0, 7.0]', color: '#f0ad4e', title: 'Name: ,<br>Alias: null<br>Value: [9.0, 7.0]<br>Type: FUNCTION<br>Id: e7112b2d-eabf-4f09-ad31-cb3490be9a30<br>Formula Expression: Formula String: A5 , D5; Formula Values: 7.0 , 9.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: null'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'e7112b2d-eabf-4f09-ad31-cb3490be9a30', to: '39a037dc-f18c-48f2-a1c6-3cf0f44653e3'},
{from: 'e4b79274-6b6d-4282-a9d0-0950808d62a8', to: 'e7112b2d-eabf-4f09-ad31-cb3490be9a30'},
{from: 'c5c533ea-3b0d-4068-b771-e75ab516612a', to: 'e7112b2d-eabf-4f09-ad31-cb3490be9a30'}
                            ]);