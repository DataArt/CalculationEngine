var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '53b4033f-68c3-48a3-810b-ed65821dc0c6', label: 'D1\n4.0', color: '#31b0d5', title: 'Name: D1<br>Value: 4.0<br>Type: CELL_WITH_VALUE<br>Id: 53b4033f-68c3-48a3-810b-ed65821dc0c6<br>Formula Expression: Formula String: D1; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: D1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@402d45c6'},
{id: '042f829d-a9d8-4473-bebf-79f581161147', label: 'IF\n65.0', color: '#f0ad4e', title: 'Name: IF<br>Value: 65.0<br>Type: IF<br>Id: 042f829d-a9d8-4473-bebf-79f581161147<br>Formula Expression: Formula String: IF(D1<5,D2,C3); Formula Values: IF(4.0 < 5.0, 65.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@402d45c6'},
{id: '2f4e2584-8411-411c-8582-f2feb0f40d3c', label: 'E6\n65.0', color: '#31b0d5', title: 'Name: E6<br>Value: 65.0<br>Type: CELL_WITH_FORMULA<br>Id: 2f4e2584-8411-411c-8582-f2feb0f40d3c<br>Formula Expression: Formula String: IF(D1<5,D2,C3); Formula Values: IF(4.0 < 5.0, 65.0); Formula Ptg: 65.0, 4.0 5.0 < IF ; Ptgs: D2, D1 VALUE < IF  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@402d45c6'},
{id: '1d897e62-1710-4b09-9e0b-f42e4114944b', label: 'VALUE\n5.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 5.0<br>Type: CONSTANT_VALUE<br>Id: 1d897e62-1710-4b09-9e0b-f42e4114944b<br>Formula Expression: Formula String: VALUE; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@402d45c6'},
{id: '28e2ed8f-d926-49f5-b736-f54aae68ebd8', label: '<\nTRUE', color: '#f0ad4e', title: 'Name: <<br>Value: TRUE<br>Type: OPERATOR<br>Id: 28e2ed8f-d926-49f5-b736-f54aae68ebd8<br>Formula Expression: Formula String: D1 < VALUE; Formula Values: 4.0 < 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@402d45c6'},
{id: '2fae8ab5-8b72-46f1-b88e-f0647e6ad1f5', label: 'D2\n65.0', color: '#31b0d5', title: 'Name: D2<br>Value: 65.0<br>Type: CELL_WITH_VALUE<br>Id: 2fae8ab5-8b72-46f1-b88e-f0647e6ad1f5<br>Formula Expression: Formula String: D2; Formula Values: 65.0; Formula Ptg: 65.0; Ptgs: D2 Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@402d45c6'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '2fae8ab5-8b72-46f1-b88e-f0647e6ad1f5', to: '042f829d-a9d8-4473-bebf-79f581161147'},
{from: '042f829d-a9d8-4473-bebf-79f581161147', to: '2f4e2584-8411-411c-8582-f2feb0f40d3c'},
{from: '28e2ed8f-d926-49f5-b736-f54aae68ebd8', to: '042f829d-a9d8-4473-bebf-79f581161147'},
{from: '1d897e62-1710-4b09-9e0b-f42e4114944b', to: '28e2ed8f-d926-49f5-b736-f54aae68ebd8'},
{from: '53b4033f-68c3-48a3-810b-ed65821dc0c6', to: '28e2ed8f-d926-49f5-b736-f54aae68ebd8'}
                            ]);