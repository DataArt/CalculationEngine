var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'd3c2ebaa-fc6b-426f-85d4-ea64ad352900', label: 'A3\n35.0', color: '#31b0d5', title: 'Name: A3<br>Value: 35.0<br>Type: CELL_WITH_FORMULA<br>Id: d3c2ebaa-fc6b-426f-85d4-ea64ad352900<br>Formula Expression: Formula String: A1 * A2; Formula Values: 5.0 * 7.0; Formula Ptg: 5.0 7.0 *; Ptgs: A1 A2 * Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@238b521e'},
{id: 'acd0b111-d9cd-44bd-b833-978a84ffd145', label: 'A1\n5.0', color: '#31b0d5', title: 'Name: A1<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: acd0b111-d9cd-44bd-b833-978a84ffd145<br>Formula Expression: Formula String: A1; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@238b521e'},
{id: '4b1c58e4-d08b-42e8-b777-7e2d89f29b82', label: 'A2\n7.0', color: '#31b0d5', title: 'Name: A2<br>Value: 7.0<br>Type: CELL_WITH_VALUE<br>Id: 4b1c58e4-d08b-42e8-b777-7e2d89f29b82<br>Formula Expression: Formula String: A2; Formula Values: 7.0; Formula Ptg: 7.0; Ptgs: A2 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@238b521e'},
{id: 'a240a67e-6c08-48d5-9ec2-91c8e5c43126', label: '*\n35.0', color: '#f0ad4e', title: 'Name: *<br>Value: 35.0<br>Type: OPERATOR<br>Id: a240a67e-6c08-48d5-9ec2-91c8e5c43126<br>Formula Expression: Formula String: A1 * A2; Formula Values: 5.0 * 7.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@238b521e'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '4b1c58e4-d08b-42e8-b777-7e2d89f29b82', to: 'a240a67e-6c08-48d5-9ec2-91c8e5c43126'},
{from: 'acd0b111-d9cd-44bd-b833-978a84ffd145', to: 'a240a67e-6c08-48d5-9ec2-91c8e5c43126'},
{from: 'a240a67e-6c08-48d5-9ec2-91c8e5c43126', to: 'd3c2ebaa-fc6b-426f-85d4-ea64ad352900'}
                            ]);