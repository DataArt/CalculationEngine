var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '0a5f5844-4f47-4e7e-9db8-0c5dae265e94', label: 'E5\n[9.0, 7.0]', color: '#31b0d5', title: 'Name: E5<br>Alias: null<br>Value: [9.0, 7.0]<br>Type: CELL_WITH_FORMULA<br>Id: 0a5f5844-4f47-4e7e-9db8-0c5dae265e94<br>Formula Expression: Formula String: A5 , D5; Formula Values: 7.0 , 9.0; Formula Ptg: 7.0 9.0 ,; Ptgs: A5 D5 , Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3427b02d'},
{id: '5fa20e76-3dfd-4b67-ba0f-f29924c8a254', label: 'D5\n9.0', color: '#31b0d5', title: 'Name: D5<br>Alias: null<br>Value: 9.0<br>Type: CELL_WITH_VALUE<br>Id: 5fa20e76-3dfd-4b67-ba0f-f29924c8a254<br>Formula Expression: Formula String: D5; Formula Values: 9.0; Formula Ptg: 9.0; Ptgs: D5 Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3427b02d'},
{id: '8eaba954-4f38-456c-be92-ed553c7be90e', label: ',\n[9.0, 7.0]', color: '#f0ad4e', title: 'Name: ,<br>Alias: null<br>Value: [9.0, 7.0]<br>Type: FUNCTION<br>Id: 8eaba954-4f38-456c-be92-ed553c7be90e<br>Formula Expression: Formula String: A5 , D5; Formula Values: 7.0 , 9.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: null'},
{id: '6f0777ab-1090-486e-8cb9-5f675e5634d5', label: 'A5\n7.0', color: '#31b0d5', title: 'Name: A5<br>Alias: null<br>Value: 7.0<br>Type: CELL_WITH_VALUE<br>Id: 6f0777ab-1090-486e-8cb9-5f675e5634d5<br>Formula Expression: Formula String: A5; Formula Values: 7.0; Formula Ptg: 7.0; Ptgs: A5 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3427b02d'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '6f0777ab-1090-486e-8cb9-5f675e5634d5', to: '8eaba954-4f38-456c-be92-ed553c7be90e'},
{from: '5fa20e76-3dfd-4b67-ba0f-f29924c8a254', to: '8eaba954-4f38-456c-be92-ed553c7be90e'},
{from: '8eaba954-4f38-456c-be92-ed553c7be90e', to: '0a5f5844-4f47-4e7e-9db8-0c5dae265e94'}
                            ]);