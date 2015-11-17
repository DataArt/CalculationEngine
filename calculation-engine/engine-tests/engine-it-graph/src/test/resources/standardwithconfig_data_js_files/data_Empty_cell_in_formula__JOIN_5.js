var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '5e5ed999-bd9a-4f83-ae34-f8af19deaa72', label: 'E1\n5.0', color: '#31b0d5', title: 'Name: E1<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 5e5ed999-bd9a-4f83-ae34-f8af19deaa72<br>Formula Expression: Formula String: E1; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: E1 Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4299b47d'},
{id: '12e16ca3-34f1-4998-b0ef-cc663d72fcd4', label: '+\n7.0', color: '#f0ad4e', title: 'Name: +<br>Value: 7.0<br>Type: OPERATOR<br>Id: 12e16ca3-34f1-4998-b0ef-cc663d72fcd4<br>Formula Expression: Formula String: C1 + D1; Formula Values: 3.0 + 4.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4299b47d'},
{id: '9a5ce25e-0c39-46af-bb9a-84a875ca8f66', label: 'D1\n4.0', color: '#31b0d5', title: 'Name: D1<br>Value: 4.0<br>Type: CELL_WITH_VALUE<br>Id: 9a5ce25e-0c39-46af-bb9a-84a875ca8f66<br>Formula Expression: Formula String: D1; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: D1 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4299b47d'},
{id: '2667703f-2259-4318-9bc4-3e430627f527', label: 'F1\n', color: '#31b0d5', title: 'Name: F1<br>Value: <br>Type: EMPTY_CELL<br>Id: 2667703f-2259-4318-9bc4-3e430627f527<br>Formula Expression: Formula String: F1; Formula Values: ; Formula Ptg: ; Ptgs: F1 Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4299b47d'},
{id: '21ef94b9-1bf5-4073-864c-ec2b4cc62566', label: 'C1\n3.0', color: '#31b0d5', title: 'Name: C1<br>Value: 3.0<br>Type: CELL_WITH_VALUE<br>Id: 21ef94b9-1bf5-4073-864c-ec2b4cc62566<br>Formula Expression: Formula String: C1; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: C1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4299b47d'},
{id: '005ed9e6-54e6-46bb-94f1-6789802e849d', label: 'E5\n12.0', color: '#31b0d5', title: 'Name: E5<br>Value: 12.0<br>Type: CELL_WITH_FORMULA<br>Id: 005ed9e6-54e6-46bb-94f1-6789802e849d<br>Formula Expression: Formula String: C1 + D1 + E1 + F1; Formula Values: 3.0 + 4.0 + 5.0 + ; Formula Ptg: 3.0 4.0 + 5.0 +  +; Ptgs: C1 D1 + E1 + F1 + Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4299b47d'},
{id: 'ddc7bcb0-66df-401d-baed-9b4dcf8f1985', label: '+\n12.0', color: '#f0ad4e', title: 'Name: +<br>Value: 12.0<br>Type: OPERATOR<br>Id: ddc7bcb0-66df-401d-baed-9b4dcf8f1985<br>Formula Expression: Formula String: C1 + D1 + E1 + F1; Formula Values: 3.0 + 4.0 + 5.0 + ; Formula Ptg: ; Ptgs:  Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4299b47d'},
{id: 'f95eb409-d1c4-463d-997a-83442ebcac7d', label: '+\n12.0', color: '#f0ad4e', title: 'Name: +<br>Value: 12.0<br>Type: OPERATOR<br>Id: f95eb409-d1c4-463d-997a-83442ebcac7d<br>Formula Expression: Formula String: C1 + D1 + E1; Formula Values: 3.0 + 4.0 + 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4299b47d'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '9a5ce25e-0c39-46af-bb9a-84a875ca8f66', to: '12e16ca3-34f1-4998-b0ef-cc663d72fcd4'},
{from: '5e5ed999-bd9a-4f83-ae34-f8af19deaa72', to: 'f95eb409-d1c4-463d-997a-83442ebcac7d'},
{from: '2667703f-2259-4318-9bc4-3e430627f527', to: 'ddc7bcb0-66df-401d-baed-9b4dcf8f1985'},
{from: '12e16ca3-34f1-4998-b0ef-cc663d72fcd4', to: 'f95eb409-d1c4-463d-997a-83442ebcac7d'},
{from: 'f95eb409-d1c4-463d-997a-83442ebcac7d', to: 'ddc7bcb0-66df-401d-baed-9b4dcf8f1985'},
{from: 'ddc7bcb0-66df-401d-baed-9b4dcf8f1985', to: '005ed9e6-54e6-46bb-94f1-6789802e849d'},
{from: '21ef94b9-1bf5-4073-864c-ec2b4cc62566', to: '12e16ca3-34f1-4998-b0ef-cc663d72fcd4'}
                            ]);