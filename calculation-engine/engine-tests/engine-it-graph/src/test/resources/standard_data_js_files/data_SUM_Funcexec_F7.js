var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '960e1843-90d5-4b31-ab91-61b005456a7f', label: 'F7\n20.0', color: '#31b0d5', title: 'Name: F7<br>Alias: null<br>Value: 20.0<br>Type: CELL_WITH_FORMULA<br>Id: 960e1843-90d5-4b31-ab91-61b005456a7f<br>Formula Expression: Formula String: FUNCEXEC(C3, B3, A3, VALUE); Formula Values: FUNCEXEC(8.0, 4.0, 8.0, DEVDEF_2); Formula Ptg: 8.0, 4.0, 8.0, DEVDEF_2 FUNCEXEC ; Ptgs: C3, B3, A3, VALUE FUNCEXEC  Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6ca320ab'},
{id: '150bd242-d2b3-42d2-96ea-63352bdf0b5d', label: 'VALUE\nDEVDEF_2', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: DEVDEF_2<br>Type: CONSTANT_VALUE<br>Id: 150bd242-d2b3-42d2-96ea-63352bdf0b5d<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF_2; Formula Ptg: DEVDEF_2; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6ca320ab'},
{id: 'a991f54c-f6d4-4348-9885-5ed76b028488', label: 'B3\n4.0', color: '#31b0d5', title: 'Name: B3<br>Alias: null<br>Value: 4.0<br>Type: CELL_WITH_VALUE<br>Id: a991f54c-f6d4-4348-9885-5ed76b028488<br>Formula Expression: Formula String: B3; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: B3 Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6ca320ab'},
{id: '723c12ed-bf9f-4707-9811-3ca45ea47a3d', label: 'A3\n8.0', color: '#31b0d5', title: 'Name: A3<br>Alias: null<br>Value: 8.0<br>Type: CELL_WITH_VALUE<br>Id: 723c12ed-bf9f-4707-9811-3ca45ea47a3d<br>Formula Expression: Formula String: A3; Formula Values: 8.0; Formula Ptg: 8.0; Ptgs: A3 Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6ca320ab'},
{id: '815c7169-dc0e-48db-b55a-72fd996723da', label: 'FUNCEXEC\n20.0', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Alias: null<br>Value: 20.0<br>Type: FUNCTION<br>Id: 815c7169-dc0e-48db-b55a-72fd996723da<br>Formula Expression: Formula String: FUNCEXEC(C3, B3, A3, VALUE); Formula Values: FUNCEXEC(8.0, 4.0, 8.0, DEVDEF_2); Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6ca320ab'},
{id: '0f92ecf0-b9cf-4874-8971-462cb410fabc', label: 'C3\n8.0', color: '#31b0d5', title: 'Name: C3<br>Alias: null<br>Value: 8.0<br>Type: CELL_WITH_VALUE<br>Id: 0f92ecf0-b9cf-4874-8971-462cb410fabc<br>Formula Expression: Formula String: C3; Formula Values: 8.0; Formula Ptg: 8.0; Ptgs: C3 Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6ca320ab'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '0f92ecf0-b9cf-4874-8971-462cb410fabc', to: '815c7169-dc0e-48db-b55a-72fd996723da'},
{from: '150bd242-d2b3-42d2-96ea-63352bdf0b5d', to: '815c7169-dc0e-48db-b55a-72fd996723da'},
{from: '723c12ed-bf9f-4707-9811-3ca45ea47a3d', to: '815c7169-dc0e-48db-b55a-72fd996723da'},
{from: 'a991f54c-f6d4-4348-9885-5ed76b028488', to: '815c7169-dc0e-48db-b55a-72fd996723da'},
{from: '815c7169-dc0e-48db-b55a-72fd996723da', to: '960e1843-90d5-4b31-ab91-61b005456a7f'}
                            ]);