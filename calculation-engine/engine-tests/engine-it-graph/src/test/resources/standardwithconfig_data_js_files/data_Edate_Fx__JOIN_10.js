var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '261bcc68-86f6-43d7-9b3c-f58fcb429bdc', label: 'B3\n40589.0', color: '#31b0d5', title: 'Name: B3<br>Value: 40589.0<br>Type: CELL_WITH_FORMULA<br>Id: 261bcc68-86f6-43d7-9b3c-f58fcb429bdc<br>Formula Expression: Formula String: EDATE(VALUE, A1); Formula Values: EDATE(1.0, 40558.0); Formula Ptg: 1.0, 40558.0 EDATE ; Ptgs: VALUE, A1 EDATE  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@309e7215'},
{id: 'e743e056-ecfb-4e83-8035-34e39a575a41', label: 'EDATE\n40589.0', color: '#f0ad4e', title: 'Name: EDATE<br>Value: 40589.0<br>Type: FUNCTION<br>Id: e743e056-ecfb-4e83-8035-34e39a575a41<br>Formula Expression: Formula String: EDATE(VALUE, A1); Formula Values: EDATE(1.0, 40558.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@309e7215'},
{id: '7ceda2d2-bfa4-4fad-aea3-302004d15aaa', label: 'VALUE\n-1.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: -1.0<br>Type: CONSTANT_VALUE<br>Id: 7ceda2d2-bfa4-4fad-aea3-302004d15aaa<br>Formula Expression: Formula String: VALUE; Formula Values: -1.0; Formula Ptg: -1.0; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@309e7215'},
{id: '286fda3d-44d3-4420-abbe-1dbb93fa502a', label: 'C5\n40558.0', color: '#31b0d5', title: 'Name: C5<br>Value: 40558.0<br>Type: CELL_WITH_FORMULA<br>Id: 286fda3d-44d3-4420-abbe-1dbb93fa502a<br>Formula Expression: Formula String: EDATE(VALUE, EDATE(VALUE, A1)); Formula Values: EDATE(-1.0, EDATE(1.0, 40558.0)); Formula Ptg: -1.0, 1.0, 40558.0 EDATE  EDATE ; Ptgs: VALUE, VALUE, A1 EDATE  EDATE  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@309e7215'},
{id: '3719d76c-6bc5-4ef4-908d-480a9cacd654', label: 'EDATE\n40558.0', color: '#f0ad4e', title: 'Name: EDATE<br>Value: 40558.0<br>Type: FUNCTION<br>Id: 3719d76c-6bc5-4ef4-908d-480a9cacd654<br>Formula Expression: Formula String: EDATE(VALUE, EDATE(VALUE, A1)); Formula Values: EDATE(-1.0, EDATE(1.0, 40558.0)); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@309e7215'},
{id: '4eb9b05a-037d-42a9-9ab9-846705444747', label: 'A1\n40558.0', color: '#31b0d5', title: 'Name: A1<br>Value: 40558.0<br>Type: CELL_WITH_VALUE<br>Id: 4eb9b05a-037d-42a9-9ab9-846705444747<br>Formula Expression: Formula String: A1; Formula Values: 40558.0; Formula Ptg: 40558.0; Ptgs: A1 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@309e7215'},
{id: '85f61889-aa39-4f11-8e56-016365279190', label: 'VALUE\n1.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 1.0<br>Type: CONSTANT_VALUE<br>Id: 85f61889-aa39-4f11-8e56-016365279190<br>Formula Expression: Formula String: VALUE; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@309e7215'},
{id: '4d74d541-081f-4cd9-a5db-684757433bea', label: 'B3\n40589.0', color: '#31b0d5', title: 'Name: B3<br>Value: 40589.0<br>Type: CELL_WITH_FORMULA<br>Id: 4d74d541-081f-4cd9-a5db-684757433bea<br>Formula Expression: Formula String: EDATE(VALUE, A1); Formula Values: EDATE(1.0, 40558.0); Formula Ptg: 1.0, 40558.0 EDATE ; Ptgs: VALUE, A1 EDATE  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@309e7215'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '4eb9b05a-037d-42a9-9ab9-846705444747', to: 'e743e056-ecfb-4e83-8035-34e39a575a41'},
{from: '85f61889-aa39-4f11-8e56-016365279190', to: 'e743e056-ecfb-4e83-8035-34e39a575a41'},
{from: 'e743e056-ecfb-4e83-8035-34e39a575a41', to: '261bcc68-86f6-43d7-9b3c-f58fcb429bdc'},
{from: 'e743e056-ecfb-4e83-8035-34e39a575a41', to: '4d74d541-081f-4cd9-a5db-684757433bea'},
{from: '4d74d541-081f-4cd9-a5db-684757433bea', to: '3719d76c-6bc5-4ef4-908d-480a9cacd654'},
{from: '7ceda2d2-bfa4-4fad-aea3-302004d15aaa', to: '3719d76c-6bc5-4ef4-908d-480a9cacd654'},
{from: '3719d76c-6bc5-4ef4-908d-480a9cacd654', to: '286fda3d-44d3-4420-abbe-1dbb93fa502a'}
                            ]);