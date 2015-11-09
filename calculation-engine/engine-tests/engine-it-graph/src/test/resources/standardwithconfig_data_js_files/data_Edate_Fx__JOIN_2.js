var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '3d02789f-fc85-441a-8943-a20da7e15d68', label: 'C5\n40558.0', color: '#31b0d5', title: 'Name: C5<br>Value: 40558.0<br>Type: CELL_WITH_FORMULA<br>Id: 3d02789f-fc85-441a-8943-a20da7e15d68<br>Formula Expression: Formula String: EDATE(VALUE, EDATE(VALUE, A1)); Formula Values: EDATE(-1.0, EDATE(1.0, 40558.0)); Formula Ptg: -1.0, 1.0, 40558.0 EDATE  EDATE ; Ptgs: VALUE, VALUE, A1 EDATE  EDATE  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7d8b66d9'},
{id: '8fe9e80b-0779-4e77-ada7-111f724b7bbe', label: 'A1\n40558.0', color: '#31b0d5', title: 'Name: A1<br>Value: 40558.0<br>Type: CELL_WITH_VALUE<br>Id: 8fe9e80b-0779-4e77-ada7-111f724b7bbe<br>Formula Expression: Formula String: A1; Formula Values: 40558.0; Formula Ptg: 40558.0; Ptgs: A1 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7d8b66d9'},
{id: 'be754ce7-31c0-4327-b097-6a58374c8fd0', label: 'VALUE\n-1.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: -1.0<br>Type: CONSTANT_VALUE<br>Id: be754ce7-31c0-4327-b097-6a58374c8fd0<br>Formula Expression: Formula String: VALUE; Formula Values: -1.0; Formula Ptg: -1.0; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7d8b66d9'},
{id: '2151790a-5842-4bd4-9c1f-0750e16c6cf3', label: 'VALUE\n1.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 1.0<br>Type: CONSTANT_VALUE<br>Id: 2151790a-5842-4bd4-9c1f-0750e16c6cf3<br>Formula Expression: Formula String: VALUE; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7d8b66d9'},
{id: 'ab61f6c6-ca3a-4921-9233-46fc5f8b1ae2', label: 'EDATE\n40589.0', color: '#f0ad4e', title: 'Name: EDATE<br>Value: 40589.0<br>Type: FUNCTION<br>Id: ab61f6c6-ca3a-4921-9233-46fc5f8b1ae2<br>Formula Expression: Formula String: EDATE(VALUE, A1); Formula Values: EDATE(1.0, 40558.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7d8b66d9'},
{id: '511413b5-7866-43c6-8d9e-55dc9e5a72eb', label: 'B3\n40589.0', color: '#31b0d5', title: 'Name: B3<br>Value: 40589.0<br>Type: CELL_WITH_FORMULA<br>Id: 511413b5-7866-43c6-8d9e-55dc9e5a72eb<br>Formula Expression: Formula String: EDATE(VALUE, A1); Formula Values: EDATE(1.0, 40558.0); Formula Ptg: 1.0, 40558.0 EDATE ; Ptgs: VALUE, A1 EDATE  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7d8b66d9'},
{id: 'a27c8fa9-743c-4ec3-a83f-1a5e5e49b58d', label: 'EDATE\n40558.0', color: '#f0ad4e', title: 'Name: EDATE<br>Value: 40558.0<br>Type: FUNCTION<br>Id: a27c8fa9-743c-4ec3-a83f-1a5e5e49b58d<br>Formula Expression: Formula String: EDATE(VALUE, EDATE(VALUE, A1)); Formula Values: EDATE(-1.0, EDATE(1.0, 40558.0)); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7d8b66d9'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'be754ce7-31c0-4327-b097-6a58374c8fd0', to: 'a27c8fa9-743c-4ec3-a83f-1a5e5e49b58d'},
{from: '511413b5-7866-43c6-8d9e-55dc9e5a72eb', to: 'a27c8fa9-743c-4ec3-a83f-1a5e5e49b58d'},
{from: 'ab61f6c6-ca3a-4921-9233-46fc5f8b1ae2', to: '511413b5-7866-43c6-8d9e-55dc9e5a72eb'},
{from: 'a27c8fa9-743c-4ec3-a83f-1a5e5e49b58d', to: '3d02789f-fc85-441a-8943-a20da7e15d68'},
{from: '8fe9e80b-0779-4e77-ada7-111f724b7bbe', to: 'ab61f6c6-ca3a-4921-9233-46fc5f8b1ae2'},
{from: '2151790a-5842-4bd4-9c1f-0750e16c6cf3', to: 'ab61f6c6-ca3a-4921-9233-46fc5f8b1ae2'}
                            ]);