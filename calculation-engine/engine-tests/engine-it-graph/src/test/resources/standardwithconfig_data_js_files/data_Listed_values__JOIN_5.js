var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'ab4f001f-751d-431b-8c37-78c1f5cb0f68', label: ',\n[9.0, 7.0]', color: '#f0ad4e', title: 'Name: ,<br>Alias: null<br>Value: [9.0, 7.0]<br>Type: FUNCTION<br>Id: ab4f001f-751d-431b-8c37-78c1f5cb0f68<br>Formula Expression: Formula String: A5 , D5; Formula Values: 7.0 , 9.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: null'},
{id: 'aef21e63-e194-4efd-ab8d-cc70e832b23a', label: 'A5\n7.0', color: '#31b0d5', title: 'Name: A5<br>Alias: null<br>Value: 7.0<br>Type: CELL_WITH_VALUE<br>Id: aef21e63-e194-4efd-ab8d-cc70e832b23a<br>Formula Expression: Formula String: A5; Formula Values: 7.0; Formula Ptg: 7.0; Ptgs: A5 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@78691363'},
{id: '70eae287-1b2f-4363-9077-5de2d6bb8892', label: 'E5\n[9.0, 7.0]', color: '#31b0d5', title: 'Name: E5<br>Alias: null<br>Value: [9.0, 7.0]<br>Type: CELL_WITH_FORMULA<br>Id: 70eae287-1b2f-4363-9077-5de2d6bb8892<br>Formula Expression: Formula String: A5 , D5; Formula Values: 7.0 , 9.0; Formula Ptg: 7.0 9.0 ,; Ptgs: A5 D5 , Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@78691363'},
{id: 'ebc43546-a659-45bf-a32e-53f807e8e552', label: 'D5\n9.0', color: '#31b0d5', title: 'Name: D5<br>Alias: null<br>Value: 9.0<br>Type: CELL_WITH_VALUE<br>Id: ebc43546-a659-45bf-a32e-53f807e8e552<br>Formula Expression: Formula String: D5; Formula Values: 9.0; Formula Ptg: 9.0; Ptgs: D5 Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@78691363'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'aef21e63-e194-4efd-ab8d-cc70e832b23a', to: 'ab4f001f-751d-431b-8c37-78c1f5cb0f68'},
{from: 'ab4f001f-751d-431b-8c37-78c1f5cb0f68', to: '70eae287-1b2f-4363-9077-5de2d6bb8892'},
{from: 'ebc43546-a659-45bf-a32e-53f807e8e552', to: 'ab4f001f-751d-431b-8c37-78c1f5cb0f68'}
                            ]);