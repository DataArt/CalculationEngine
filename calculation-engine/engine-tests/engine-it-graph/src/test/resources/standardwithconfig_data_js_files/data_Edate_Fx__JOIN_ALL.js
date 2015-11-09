var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'a636953a-ab5e-4d72-b383-4cae6bbd2244', label: 'EDATE\n40589.0', color: '#f0ad4e', title: 'Name: EDATE<br>Value: 40589.0<br>Type: FUNCTION<br>Id: a636953a-ab5e-4d72-b383-4cae6bbd2244<br>Formula Expression: Formula String: EDATE(VALUE, A1); Formula Values: EDATE(1.0, 40558.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@67ec8477'},
{id: 'f871be0f-2ac5-4341-8047-f2111f87704c', label: 'VALUE\n-1.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: -1.0<br>Type: CONSTANT_VALUE<br>Id: f871be0f-2ac5-4341-8047-f2111f87704c<br>Formula Expression: Formula String: VALUE; Formula Values: -1.0; Formula Ptg: -1.0; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@67ec8477'},
{id: '40e30f9c-1898-4aa2-b31a-abddfd64f440', label: 'EDATE\n40558.0', color: '#f0ad4e', title: 'Name: EDATE<br>Value: 40558.0<br>Type: FUNCTION<br>Id: 40e30f9c-1898-4aa2-b31a-abddfd64f440<br>Formula Expression: Formula String: EDATE(VALUE, EDATE(VALUE, A1)); Formula Values: EDATE(-1.0, EDATE(1.0, 40558.0)); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@67ec8477'},
{id: 'f84cc8b3-075d-4fc4-8879-77df8b84f1c4', label: 'C5\n40558.0', color: '#31b0d5', title: 'Name: C5<br>Value: 40558.0<br>Type: CELL_WITH_FORMULA<br>Id: f84cc8b3-075d-4fc4-8879-77df8b84f1c4<br>Formula Expression: Formula String: EDATE(VALUE, EDATE(VALUE, A1)); Formula Values: EDATE(-1.0, EDATE(1.0, 40558.0)); Formula Ptg: -1.0, 1.0, 40558.0 EDATE  EDATE ; Ptgs: VALUE, VALUE, A1 EDATE  EDATE  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@67ec8477'},
{id: '263f3e61-136c-4750-a310-53e291bb6f84', label: 'VALUE\n1.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 1.0<br>Type: CONSTANT_VALUE<br>Id: 263f3e61-136c-4750-a310-53e291bb6f84<br>Formula Expression: Formula String: VALUE; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@67ec8477'},
{id: '35742443-1657-4a98-b2ec-7b7e1f4799f4', label: 'A1\n40558.0', color: '#31b0d5', title: 'Name: A1<br>Value: 40558.0<br>Type: CELL_WITH_VALUE<br>Id: 35742443-1657-4a98-b2ec-7b7e1f4799f4<br>Formula Expression: Formula String: A1; Formula Values: 40558.0; Formula Ptg: 40558.0; Ptgs: A1 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@67ec8477'},
{id: 'cc99ee2a-97ae-41e9-9b4c-916fbb8f4e15', label: 'B3\n40589.0', color: '#31b0d5', title: 'Name: B3<br>Value: 40589.0<br>Type: CELL_WITH_FORMULA<br>Id: cc99ee2a-97ae-41e9-9b4c-916fbb8f4e15<br>Formula Expression: Formula String: EDATE(VALUE, A1); Formula Values: EDATE(1.0, 40558.0); Formula Ptg: 1.0, 40558.0 EDATE ; Ptgs: VALUE, A1 EDATE  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@67ec8477'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '35742443-1657-4a98-b2ec-7b7e1f4799f4', to: 'a636953a-ab5e-4d72-b383-4cae6bbd2244'},
{from: 'cc99ee2a-97ae-41e9-9b4c-916fbb8f4e15', to: '40e30f9c-1898-4aa2-b31a-abddfd64f440'},
{from: '263f3e61-136c-4750-a310-53e291bb6f84', to: 'a636953a-ab5e-4d72-b383-4cae6bbd2244'},
{from: 'a636953a-ab5e-4d72-b383-4cae6bbd2244', to: 'cc99ee2a-97ae-41e9-9b4c-916fbb8f4e15'},
{from: 'f871be0f-2ac5-4341-8047-f2111f87704c', to: '40e30f9c-1898-4aa2-b31a-abddfd64f440'},
{from: '40e30f9c-1898-4aa2-b31a-abddfd64f440', to: 'f84cc8b3-075d-4fc4-8879-77df8b84f1c4'}
                            ]);