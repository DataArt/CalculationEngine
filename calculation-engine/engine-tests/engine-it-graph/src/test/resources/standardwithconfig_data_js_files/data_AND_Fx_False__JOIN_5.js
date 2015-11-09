var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'f2ce00fd-5f36-425d-8187-7e3e83caef29', label: 'B3\n6.0', color: '#31b0d5', title: 'Name: B3<br>Value: 6.0<br>Type: CELL_WITH_VALUE<br>Id: f2ce00fd-5f36-425d-8187-7e3e83caef29<br>Formula Expression: Formula String: B3; Formula Values: 6.0; Formula Ptg: 6.0; Ptgs: B3 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@14b53f58'},
{id: 'dad1b318-c45a-4e5b-b29c-34818477041b', label: 'D1\n0.4', color: '#31b0d5', title: 'Name: D1<br>Value: 0.4<br>Type: CELL_WITH_VALUE<br>Id: dad1b318-c45a-4e5b-b29c-34818477041b<br>Formula Expression: Formula String: D1; Formula Values: 0.4; Formula Ptg: 0.4; Ptgs: D1 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@14b53f58'},
{id: '64c152ab-d84d-4174-bcdd-a3b31ec64698', label: 'D1\n0.4', color: '#31b0d5', title: 'Name: D1<br>Value: 0.4<br>Type: CELL_WITH_VALUE<br>Id: 64c152ab-d84d-4174-bcdd-a3b31ec64698<br>Formula Expression: Formula String: D1; Formula Values: 0.4; Formula Ptg: 0.4; Ptgs: D1 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@14b53f58'},
{id: 'bdc2916f-d501-47cf-984d-6e1745708924', label: 'E1\n5.0', color: '#31b0d5', title: 'Name: E1<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: bdc2916f-d501-47cf-984d-6e1745708924<br>Formula Expression: Formula String: E1; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: E1 Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@14b53f58'},
{id: '86ed9184-4135-425c-b048-20aaf23ab4b8', label: 'AND\nTRUE', color: '#f0ad4e', title: 'Name: AND<br>Value: TRUE<br>Type: FUNCTION<br>Id: 86ed9184-4135-425c-b048-20aaf23ab4b8<br>Formula Expression: Formula String: AND(C2, B3 + D1 - E1); Formula Values: AND(7.0, 6.0 + 0.4 - 5.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@14b53f58'},
{id: '297b2124-b6c9-483d-8af0-769902428d1d', label: '-\n1.4000000000000004', color: '#f0ad4e', title: 'Name: -<br>Value: 1.4000000000000004<br>Type: OPERATOR<br>Id: 297b2124-b6c9-483d-8af0-769902428d1d<br>Formula Expression: Formula String: B3 + D1 - E1; Formula Values: 6.0 + 0.4 - 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@14b53f58'},
{id: 'cb2710f0-4efc-4d67-9e0f-28d3732ff2d5', label: 'E1\n5.0', color: '#31b0d5', title: 'Name: E1<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: cb2710f0-4efc-4d67-9e0f-28d3732ff2d5<br>Formula Expression: Formula String: E1; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: E1 Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@14b53f58'},
{id: 'dcb247ba-57ce-4857-a699-5c5f35f0e4b7', label: 'D3\n367.0', color: '#31b0d5', title: 'Name: D3<br>Value: 367.0<br>Type: CELL_WITH_VALUE<br>Id: dcb247ba-57ce-4857-a699-5c5f35f0e4b7<br>Formula Expression: Formula String: D3; Formula Values: 367.0; Formula Ptg: 367.0; Ptgs: D3 Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@14b53f58'},
{id: 'a52af3f4-b457-4b77-9191-27b80c98d462', label: 'E5\nTRUE', color: '#31b0d5', title: 'Name: E5<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: a52af3f4-b457-4b77-9191-27b80c98d462<br>Formula Expression: Formula String: AND(C2, B3 + D1 - E1); Formula Values: AND(7.0, 6.0 + 0.4 - 5.0); Formula Ptg: 7.0, 6.0 0.4 + 5.0 - AND ; Ptgs: C2, B3 D1 + E1 - AND  Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@14b53f58'},
{id: 'c9f26a24-6351-4b78-a42f-bfb87b257d0b', label: '+\n6.4', color: '#f0ad4e', title: 'Name: +<br>Value: 6.4<br>Type: OPERATOR<br>Id: c9f26a24-6351-4b78-a42f-bfb87b257d0b<br>Formula Expression: Formula String: B3 + D1; Formula Values: 6.0 + 0.4; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@14b53f58'},
{id: '209de648-a6f2-43f1-a426-2567d34f61b2', label: 'C2\n7.0', color: '#31b0d5', title: 'Name: C2<br>Value: 7.0<br>Type: CELL_WITH_VALUE<br>Id: 209de648-a6f2-43f1-a426-2567d34f61b2<br>Formula Expression: Formula String: C2; Formula Values: 7.0; Formula Ptg: 7.0; Ptgs: C2 Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@14b53f58'},
{id: '04217cff-6c95-4b84-b5a8-6110b08a1918', label: 'F5\nFALSE', color: '#31b0d5', title: 'Name: F5<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 04217cff-6c95-4b84-b5a8-6110b08a1918<br>Formula Expression: Formula String: AND(E1 + D3 = C4, VALUE < D1); Formula Values: AND(5.0 + 367.0 = 89.0, 1.0 < 0.4); Formula Ptg: 5.0 367.0 + 89.0 =, 1.0 0.4 < AND ; Ptgs: E1 D3 + C4 =, VALUE D1 < AND  Index in Ptgs: 8 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@14b53f58'},
{id: '890304a2-edeb-4e26-9f17-fd7cb0d35deb', label: 'VALUE\n1.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 1.0<br>Type: CONSTANT_VALUE<br>Id: 890304a2-edeb-4e26-9f17-fd7cb0d35deb<br>Formula Expression: Formula String: VALUE; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@14b53f58'},
{id: '206f9519-b5c1-4900-9f4f-476ab01a97ee', label: '+\n372.0', color: '#f0ad4e', title: 'Name: +<br>Value: 372.0<br>Type: OPERATOR<br>Id: 206f9519-b5c1-4900-9f4f-476ab01a97ee<br>Formula Expression: Formula String: E1 + D3; Formula Values: 5.0 + 367.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@14b53f58'},
{id: '3d569bf5-b91f-46fa-a8d6-ad8dbb00d31d', label: 'AND\nFALSE', color: '#f0ad4e', title: 'Name: AND<br>Value: FALSE<br>Type: FUNCTION<br>Id: 3d569bf5-b91f-46fa-a8d6-ad8dbb00d31d<br>Formula Expression: Formula String: AND(E1 + D3 = C4, VALUE < D1); Formula Values: AND(5.0 + 367.0 = 89.0, 1.0 < 0.4); Formula Ptg: ; Ptgs:  Index in Ptgs: 8 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@14b53f58'},
{id: '7ef8fdd5-067f-4507-96c0-e65c32475e83', label: '<\nFALSE', color: '#f0ad4e', title: 'Name: <<br>Value: FALSE<br>Type: OPERATOR<br>Id: 7ef8fdd5-067f-4507-96c0-e65c32475e83<br>Formula Expression: Formula String: VALUE < D1; Formula Values: 1.0 < 0.4; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@14b53f58'},
{id: '85d90a05-7351-454c-a570-9fe3a4e97da6', label: 'C4\n89.0', color: '#31b0d5', title: 'Name: C4<br>Value: 89.0<br>Type: CELL_WITH_VALUE<br>Id: 85d90a05-7351-454c-a570-9fe3a4e97da6<br>Formula Expression: Formula String: C4; Formula Values: 89.0; Formula Ptg: 89.0; Ptgs: C4 Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@14b53f58'},
{id: 'd00e2d12-d437-4610-af35-b6cf2b33324f', label: '=\nFALSE', color: '#f0ad4e', title: 'Name: =<br>Value: FALSE<br>Type: OPERATOR<br>Id: d00e2d12-d437-4610-af35-b6cf2b33324f<br>Formula Expression: Formula String: E1 + D3 = C4; Formula Values: 5.0 + 367.0 = 89.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 7 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@14b53f58'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '86ed9184-4135-425c-b048-20aaf23ab4b8', to: 'a52af3f4-b457-4b77-9191-27b80c98d462'},
{from: 'd00e2d12-d437-4610-af35-b6cf2b33324f', to: '3d569bf5-b91f-46fa-a8d6-ad8dbb00d31d'},
{from: 'dcb247ba-57ce-4857-a699-5c5f35f0e4b7', to: '206f9519-b5c1-4900-9f4f-476ab01a97ee'},
{from: '206f9519-b5c1-4900-9f4f-476ab01a97ee', to: 'd00e2d12-d437-4610-af35-b6cf2b33324f'},
{from: 'c9f26a24-6351-4b78-a42f-bfb87b257d0b', to: '297b2124-b6c9-483d-8af0-769902428d1d'},
{from: '64c152ab-d84d-4174-bcdd-a3b31ec64698', to: 'c9f26a24-6351-4b78-a42f-bfb87b257d0b'},
{from: '3d569bf5-b91f-46fa-a8d6-ad8dbb00d31d', to: '04217cff-6c95-4b84-b5a8-6110b08a1918'},
{from: 'dad1b318-c45a-4e5b-b29c-34818477041b', to: '7ef8fdd5-067f-4507-96c0-e65c32475e83'},
{from: '209de648-a6f2-43f1-a426-2567d34f61b2', to: '86ed9184-4135-425c-b048-20aaf23ab4b8'},
{from: 'cb2710f0-4efc-4d67-9e0f-28d3732ff2d5', to: '297b2124-b6c9-483d-8af0-769902428d1d'},
{from: 'f2ce00fd-5f36-425d-8187-7e3e83caef29', to: 'c9f26a24-6351-4b78-a42f-bfb87b257d0b'},
{from: '85d90a05-7351-454c-a570-9fe3a4e97da6', to: 'd00e2d12-d437-4610-af35-b6cf2b33324f'},
{from: '7ef8fdd5-067f-4507-96c0-e65c32475e83', to: '3d569bf5-b91f-46fa-a8d6-ad8dbb00d31d'},
{from: '890304a2-edeb-4e26-9f17-fd7cb0d35deb', to: '7ef8fdd5-067f-4507-96c0-e65c32475e83'},
{from: '297b2124-b6c9-483d-8af0-769902428d1d', to: '86ed9184-4135-425c-b048-20aaf23ab4b8'},
{from: 'bdc2916f-d501-47cf-984d-6e1745708924', to: '206f9519-b5c1-4900-9f4f-476ab01a97ee'}
                            ]);