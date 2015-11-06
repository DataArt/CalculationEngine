var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'd2c48dc3-5b6f-411d-9f37-6410a534a3ff', label: 'DAYS360\n154.0', color: '#f0ad4e', title: 'Name: DAYS360<br>Value: 154.0<br>Type: FUNCTION<br>Id: d2c48dc3-5b6f-411d-9f37-6410a534a3ff<br>Formula Expression: Formula String: DAYS360(A3, A2); Formula Values: DAYS360(42184.0, 42029.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7a1a3478'},
{id: '42d3d0a7-930e-4f96-9184-c3d07e1d09e2', label: 'B6\n154.0', color: '#31b0d5', title: 'Name: B6<br>Value: 154.0<br>Type: CELL_WITH_FORMULA<br>Id: 42d3d0a7-930e-4f96-9184-c3d07e1d09e2<br>Formula Expression: Formula String: DAYS360(A3, A2); Formula Values: DAYS360(42184.0, 42029.0); Formula Ptg: 42184.0, 42029.0 DAYS360 ; Ptgs: A3, A2 DAYS360  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7a1a3478'},
{id: '19741460-6c94-4165-a3a4-ddc7f1d3659f', label: 'A2\n42029.0', color: '#31b0d5', title: 'Name: A2<br>Value: 42029.0<br>Type: CELL_WITH_VALUE<br>Id: 19741460-6c94-4165-a3a4-ddc7f1d3659f<br>Formula Expression: Formula String: A2; Formula Values: 42029.0; Formula Ptg: 42029.0; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7a1a3478'},
{id: '83d76801-2453-4529-92c0-aa528b637b68', label: 'A3\n42184.0', color: '#31b0d5', title: 'Name: A3<br>Value: 42184.0<br>Type: CELL_WITH_VALUE<br>Id: 83d76801-2453-4529-92c0-aa528b637b68<br>Formula Expression: Formula String: A3; Formula Values: 42184.0; Formula Ptg: 42184.0; Ptgs: A3 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7a1a3478'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '83d76801-2453-4529-92c0-aa528b637b68', to: 'd2c48dc3-5b6f-411d-9f37-6410a534a3ff'},
{from: '19741460-6c94-4165-a3a4-ddc7f1d3659f', to: 'd2c48dc3-5b6f-411d-9f37-6410a534a3ff'},
{from: 'd2c48dc3-5b6f-411d-9f37-6410a534a3ff', to: '42d3d0a7-930e-4f96-9184-c3d07e1d09e2'}
                            ]);