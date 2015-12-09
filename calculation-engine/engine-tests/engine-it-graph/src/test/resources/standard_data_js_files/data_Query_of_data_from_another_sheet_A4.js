var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '1e86947f-e44b-4e14-9807-98130b0b2f9d', label: 'Sheet2!$B$1\n#REF!', color: '#31b0d5', title: 'Name: Sheet2!$B$1<br>Alias: null<br>Value: #REF!<br>Type: CELL_WITH_VALUE<br>Id: 1e86947f-e44b-4e14-9807-98130b0b2f9d<br>Formula Expression: Formula String: Sheet2!$B$1; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: Sheet2!$B$1 Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3f197a46'},
{id: 'ee576649-aecc-4eb7-9836-1f9b3d0b879c', label: '+\n#REF!', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: #REF!<br>Type: OPERATOR<br>Id: ee576649-aecc-4eb7-9836-1f9b3d0b879c<br>Formula Expression: Formula String: A1 + C1 + Sheet2!$B$1; Formula Values: 20.0 + 5.0 + #REF!; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3f197a46'},
{id: '894573cd-e97a-448e-9935-9fec96081bb3', label: 'C1\n5.0', color: '#31b0d5', title: 'Name: C1<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 894573cd-e97a-448e-9935-9fec96081bb3<br>Formula Expression: Formula String: C1; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: C1 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3f197a46'},
{id: '7692da01-5d21-4140-ba45-73193231a6f9', label: 'A4\n#REF!', color: '#31b0d5', title: 'Name: A4<br>Alias: null<br>Value: #REF!<br>Type: CELL_WITH_FORMULA<br>Id: 7692da01-5d21-4140-ba45-73193231a6f9<br>Formula Expression: Formula String: A1 + C1 + Sheet2!$B$1; Formula Values: 20.0 + 5.0 + #REF!; Formula Ptg: 20.0 5.0 + #REF! +; Ptgs: A1 C1 + Sheet2!$B$1 + Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3f197a46'},
{id: '5ccc0bdd-513e-4184-843f-a2a2d56ce2ce', label: 'A1\n20.0', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: 20.0<br>Type: CELL_WITH_VALUE<br>Id: 5ccc0bdd-513e-4184-843f-a2a2d56ce2ce<br>Formula Expression: Formula String: A1; Formula Values: 20.0; Formula Ptg: 20.0; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3f197a46'},
{id: '1263ac60-1c4d-4567-8627-c58fd032cebb', label: '+\n25.0', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 25.0<br>Type: OPERATOR<br>Id: 1263ac60-1c4d-4567-8627-c58fd032cebb<br>Formula Expression: Formula String: A1 + C1; Formula Values: 20.0 + 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3f197a46'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'ee576649-aecc-4eb7-9836-1f9b3d0b879c', to: '7692da01-5d21-4140-ba45-73193231a6f9'},
{from: '1263ac60-1c4d-4567-8627-c58fd032cebb', to: 'ee576649-aecc-4eb7-9836-1f9b3d0b879c'},
{from: '894573cd-e97a-448e-9935-9fec96081bb3', to: '1263ac60-1c4d-4567-8627-c58fd032cebb'},
{from: '5ccc0bdd-513e-4184-843f-a2a2d56ce2ce', to: '1263ac60-1c4d-4567-8627-c58fd032cebb'},
{from: '1e86947f-e44b-4e14-9807-98130b0b2f9d', to: 'ee576649-aecc-4eb7-9836-1f9b3d0b879c'}
                            ]);