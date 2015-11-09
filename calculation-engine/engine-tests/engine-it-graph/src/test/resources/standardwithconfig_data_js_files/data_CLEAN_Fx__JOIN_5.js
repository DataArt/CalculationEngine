var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '8d25d542-ccae-4f7b-b845-91c710b9d7c0', label: 'CLEAN\n9', color: '#f0ad4e', title: 'Name: CLEAN<br>Value: 9<br>Type: FUNCTION<br>Id: 8d25d542-ccae-4f7b-b845-91c710b9d7c0<br>Formula Expression: Formula String: CLEAN(B1); Formula Values: CLEAN(9.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1e490ed'},
{id: '112afa04-ace2-431f-9f5b-a15580c4584d', label: 'B6\n9', color: '#31b0d5', title: 'Name: B6<br>Value: 9<br>Type: CELL_WITH_FORMULA<br>Id: 112afa04-ace2-431f-9f5b-a15580c4584d<br>Formula Expression: Formula String: CLEAN(B1); Formula Values: CLEAN(9.0); Formula Ptg: 9.0 CLEAN ; Ptgs: B1 CLEAN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1e490ed'},
{id: '293ca920-402e-4a73-b364-39b738a724ce', label: 'VALUE\n10.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 10.0<br>Type: CONSTANT_VALUE<br>Id: 293ca920-402e-4a73-b364-39b738a724ce<br>Formula Expression: Formula String: VALUE; Formula Values: 10.0; Formula Ptg: 10.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1e490ed'},
{id: '6ccd467d-eebc-44d8-9920-3dda6d405eab', label: 'ACOSH\n2.993222846126381', color: '#f0ad4e', title: 'Name: ACOSH<br>Value: 2.993222846126381<br>Type: FUNCTION<br>Id: 6ccd467d-eebc-44d8-9920-3dda6d405eab<br>Formula Expression: Formula String: ACOSH(VALUE); Formula Values: ACOSH(10.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1e490ed'},
{id: 'e62cc3c8-4c96-4d12-b49e-99010f747a9e', label: 'A1\n2.993222846126381', color: '#31b0d5', title: 'Name: A1<br>Value: 2.993222846126381<br>Type: CELL_WITH_FORMULA<br>Id: e62cc3c8-4c96-4d12-b49e-99010f747a9e<br>Formula Expression: Formula String: ACOSH(VALUE); Formula Values: ACOSH(10.0); Formula Ptg: 10.0 ACOSH ; Ptgs: VALUE ACOSH  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1e490ed'},
{id: 'a7f4781f-1f90-47f9-b6cb-34eb59b1c9cf', label: 'B1\n9.0', color: '#31b0d5', title: 'Name: B1<br>Value: 9.0<br>Type: CELL_WITH_VALUE<br>Id: a7f4781f-1f90-47f9-b6cb-34eb59b1c9cf<br>Formula Expression: Formula String: B1; Formula Values: 9.0; Formula Ptg: 9.0; Ptgs: B1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1e490ed'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '293ca920-402e-4a73-b364-39b738a724ce', to: '6ccd467d-eebc-44d8-9920-3dda6d405eab'},
{from: 'a7f4781f-1f90-47f9-b6cb-34eb59b1c9cf', to: '8d25d542-ccae-4f7b-b845-91c710b9d7c0'},
{from: '8d25d542-ccae-4f7b-b845-91c710b9d7c0', to: '112afa04-ace2-431f-9f5b-a15580c4584d'},
{from: '6ccd467d-eebc-44d8-9920-3dda6d405eab', to: 'e62cc3c8-4c96-4d12-b49e-99010f747a9e'}
                            ]);