var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '64cb62c0-b3c7-4cd0-81ff-c4599537ac3d', label: 'C2\n76.0', color: '#31b0d5', title: 'Name: C2<br>Value: 76.0<br>Type: CELL_WITH_VALUE<br>Id: 64cb62c0-b3c7-4cd0-81ff-c4599537ac3d<br>Formula Expression: Formula String: C2; Formula Values: 76.0; Formula Ptg: 76.0; Ptgs: C2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@21b508a0'},
{id: '3766bd03-c7c9-4bf7-85fe-3a503d43eb54', label: 'EXACT\nFALSE', color: '#f0ad4e', title: 'Name: EXACT<br>Value: FALSE<br>Type: FUNCTION<br>Id: 3766bd03-c7c9-4bf7-85fe-3a503d43eb54<br>Formula Expression: Formula String: EXACT(B2, A2); Formula Values: EXACT(56.0, 23.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@21b508a0'},
{id: '67676a08-8707-4d55-8af1-dbfccbc8c12b', label: 'C3\n76.0', color: '#31b0d5', title: 'Name: C3<br>Value: 76.0<br>Type: CELL_WITH_VALUE<br>Id: 67676a08-8707-4d55-8af1-dbfccbc8c12b<br>Formula Expression: Formula String: C3; Formula Values: 76.0; Formula Ptg: 76.0; Ptgs: C3 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@21b508a0'},
{id: '0cc6cfc3-c81b-4fd5-871d-1af545d34bfb', label: 'E6\nTRUE', color: '#31b0d5', title: 'Name: E6<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: 0cc6cfc3-c81b-4fd5-871d-1af545d34bfb<br>Formula Expression: Formula String: EXACT(C3, C2); Formula Values: EXACT(76.0, 76.0); Formula Ptg: 76.0, 76.0 EXACT ; Ptgs: C3, C2 EXACT  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@21b508a0'},
{id: '535de6fd-9364-4f66-9f46-f0c0ca6c7b24', label: 'A2\n23.0', color: '#31b0d5', title: 'Name: A2<br>Value: 23.0<br>Type: CELL_WITH_VALUE<br>Id: 535de6fd-9364-4f66-9f46-f0c0ca6c7b24<br>Formula Expression: Formula String: A2; Formula Values: 23.0; Formula Ptg: 23.0; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@21b508a0'},
{id: '6db3573a-6086-4f4c-a727-db6082e49521', label: 'EXACT\nTRUE', color: '#f0ad4e', title: 'Name: EXACT<br>Value: TRUE<br>Type: FUNCTION<br>Id: 6db3573a-6086-4f4c-a727-db6082e49521<br>Formula Expression: Formula String: EXACT(C3, C2); Formula Values: EXACT(76.0, 76.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@21b508a0'},
{id: 'c1ed0f0e-8328-4672-a0ea-71f649a02c77', label: 'E5\nFALSE', color: '#31b0d5', title: 'Name: E5<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: c1ed0f0e-8328-4672-a0ea-71f649a02c77<br>Formula Expression: Formula String: EXACT(B2, A2); Formula Values: EXACT(56.0, 23.0); Formula Ptg: 56.0, 23.0 EXACT ; Ptgs: B2, A2 EXACT  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@21b508a0'},
{id: 'de654327-96ab-4287-a616-af629977b6ee', label: 'B2\n56.0', color: '#31b0d5', title: 'Name: B2<br>Value: 56.0<br>Type: CELL_WITH_VALUE<br>Id: de654327-96ab-4287-a616-af629977b6ee<br>Formula Expression: Formula String: B2; Formula Values: 56.0; Formula Ptg: 56.0; Ptgs: B2 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@21b508a0'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '67676a08-8707-4d55-8af1-dbfccbc8c12b', to: '6db3573a-6086-4f4c-a727-db6082e49521'},
{from: 'de654327-96ab-4287-a616-af629977b6ee', to: '3766bd03-c7c9-4bf7-85fe-3a503d43eb54'},
{from: '535de6fd-9364-4f66-9f46-f0c0ca6c7b24', to: '3766bd03-c7c9-4bf7-85fe-3a503d43eb54'},
{from: '64cb62c0-b3c7-4cd0-81ff-c4599537ac3d', to: '6db3573a-6086-4f4c-a727-db6082e49521'},
{from: '6db3573a-6086-4f4c-a727-db6082e49521', to: '0cc6cfc3-c81b-4fd5-871d-1af545d34bfb'},
{from: '3766bd03-c7c9-4bf7-85fe-3a503d43eb54', to: 'c1ed0f0e-8328-4672-a0ea-71f649a02c77'}
                            ]);