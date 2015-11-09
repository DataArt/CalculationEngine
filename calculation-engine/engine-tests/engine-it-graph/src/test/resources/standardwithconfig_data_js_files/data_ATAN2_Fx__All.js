var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '32afddc4-193d-43da-8164-a2e5f5716b56', label: 'ATAN2\n0.7853981633974483', color: '#f0ad4e', title: 'Name: ATAN2<br>Value: 0.7853981633974483<br>Type: FUNCTION<br>Id: 32afddc4-193d-43da-8164-a2e5f5716b56<br>Formula Expression: Formula String: ATAN2(VALUE, VALUE); Formula Values: ATAN2(1.0, 1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5dfb078'},
{id: 'a6d85ab3-f4dc-47ee-b74e-df384d5d5f31', label: 'VALUE\n-1.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: -1.0<br>Type: CONSTANT_VALUE<br>Id: a6d85ab3-f4dc-47ee-b74e-df384d5d5f31<br>Formula Expression: Formula String: VALUE; Formula Values: -1.0; Formula Ptg: -1.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5dfb078'},
{id: 'f7f81fe8-b6e4-4a6a-9cc1-fb58567db07a', label: 'VALUE\n1.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 1.0<br>Type: CONSTANT_VALUE<br>Id: f7f81fe8-b6e4-4a6a-9cc1-fb58567db07a<br>Formula Expression: Formula String: VALUE; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5dfb078'},
{id: '399a7b30-4bc9-4bdd-b041-d36fd5500d3d', label: 'B2\n0.7853981633974483', color: '#31b0d5', title: 'Name: B2<br>Value: 0.7853981633974483<br>Type: CELL_WITH_FORMULA<br>Id: 399a7b30-4bc9-4bdd-b041-d36fd5500d3d<br>Formula Expression: Formula String: ATAN2(VALUE, VALUE); Formula Values: ATAN2(1.0, 1.0); Formula Ptg: 1.0, 1.0 ATAN2 ; Ptgs: VALUE, VALUE ATAN2  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5dfb078'},
{id: '0a2f0e06-4730-4d32-9542-dd1678e7c14f', label: 'VALUE\n1.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 1.0<br>Type: CONSTANT_VALUE<br>Id: 0a2f0e06-4730-4d32-9542-dd1678e7c14f<br>Formula Expression: Formula String: VALUE; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5dfb078'},
{id: 'f1fcf295-58da-4c18-9056-552f563cc3c5', label: 'B3\n-2.356194490192345', color: '#31b0d5', title: 'Name: B3<br>Value: -2.356194490192345<br>Type: CELL_WITH_FORMULA<br>Id: f1fcf295-58da-4c18-9056-552f563cc3c5<br>Formula Expression: Formula String: ATAN2(VALUE, VALUE); Formula Values: ATAN2(-1.0, -1.0); Formula Ptg: -1.0, -1.0 ATAN2 ; Ptgs: VALUE, VALUE ATAN2  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5dfb078'},
{id: 'c16f5bb7-d8bd-4f27-9955-db12fce9151b', label: 'ATAN2\n-2.356194490192345', color: '#f0ad4e', title: 'Name: ATAN2<br>Value: -2.356194490192345<br>Type: FUNCTION<br>Id: c16f5bb7-d8bd-4f27-9955-db12fce9151b<br>Formula Expression: Formula String: ATAN2(VALUE, VALUE); Formula Values: ATAN2(-1.0, -1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5dfb078'},
{id: 'ab5f198d-ea2b-4a9a-81b4-0191b3b435c0', label: 'VALUE\n-1.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: -1.0<br>Type: CONSTANT_VALUE<br>Id: ab5f198d-ea2b-4a9a-81b4-0191b3b435c0<br>Formula Expression: Formula String: VALUE; Formula Values: -1.0; Formula Ptg: -1.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5dfb078'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'f7f81fe8-b6e4-4a6a-9cc1-fb58567db07a', to: '32afddc4-193d-43da-8164-a2e5f5716b56'},
{from: '0a2f0e06-4730-4d32-9542-dd1678e7c14f', to: '32afddc4-193d-43da-8164-a2e5f5716b56'},
{from: '32afddc4-193d-43da-8164-a2e5f5716b56', to: '399a7b30-4bc9-4bdd-b041-d36fd5500d3d'},
{from: 'a6d85ab3-f4dc-47ee-b74e-df384d5d5f31', to: 'c16f5bb7-d8bd-4f27-9955-db12fce9151b'},
{from: 'c16f5bb7-d8bd-4f27-9955-db12fce9151b', to: 'f1fcf295-58da-4c18-9056-552f563cc3c5'},
{from: 'ab5f198d-ea2b-4a9a-81b4-0191b3b435c0', to: 'c16f5bb7-d8bd-4f27-9955-db12fce9151b'}
                            ]);