var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '385466cb-a6fa-45e7-93ea-2b500eb7246c', label: 'B6\n9', color: '#31b0d5', title: 'Name: B6<br>Value: 9<br>Type: CELL_WITH_FORMULA<br>Id: 385466cb-a6fa-45e7-93ea-2b500eb7246c<br>Formula Expression: Formula String: CLEAN(B1); Formula Values: CLEAN(9.0); Formula Ptg: 9.0 CLEAN ; Ptgs: B1 CLEAN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@8ecc457'},
{id: '12a29b3f-fe81-4045-95bb-547a00b7bfa9', label: 'ACOSH\n2.993222846126381', color: '#f0ad4e', title: 'Name: ACOSH<br>Value: 2.993222846126381<br>Type: FUNCTION<br>Id: 12a29b3f-fe81-4045-95bb-547a00b7bfa9<br>Formula Expression: Formula String: ACOSH(VALUE); Formula Values: ACOSH(10.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@8ecc457'},
{id: '77cf255f-9b31-4993-a965-7a1ea8f6fac8', label: 'B1\n9.0', color: '#31b0d5', title: 'Name: B1<br>Value: 9.0<br>Type: CELL_WITH_VALUE<br>Id: 77cf255f-9b31-4993-a965-7a1ea8f6fac8<br>Formula Expression: Formula String: B1; Formula Values: 9.0; Formula Ptg: 9.0; Ptgs: B1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@8ecc457'},
{id: '1646dede-2939-44dc-ac69-c6a596e503cf', label: 'CLEAN\n9', color: '#f0ad4e', title: 'Name: CLEAN<br>Value: 9<br>Type: FUNCTION<br>Id: 1646dede-2939-44dc-ac69-c6a596e503cf<br>Formula Expression: Formula String: CLEAN(B1); Formula Values: CLEAN(9.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@8ecc457'},
{id: '447f69eb-1a03-4617-875d-8a8406b0c64d', label: 'VALUE\n10.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 10.0<br>Type: CONSTANT_VALUE<br>Id: 447f69eb-1a03-4617-875d-8a8406b0c64d<br>Formula Expression: Formula String: VALUE; Formula Values: 10.0; Formula Ptg: 10.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@8ecc457'},
{id: '6a7080f8-a071-412c-b530-04aed6e9fee2', label: 'A1\n2.993222846126381', color: '#31b0d5', title: 'Name: A1<br>Value: 2.993222846126381<br>Type: CELL_WITH_FORMULA<br>Id: 6a7080f8-a071-412c-b530-04aed6e9fee2<br>Formula Expression: Formula String: ACOSH(VALUE); Formula Values: ACOSH(10.0); Formula Ptg: 10.0 ACOSH ; Ptgs: VALUE ACOSH  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@8ecc457'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '12a29b3f-fe81-4045-95bb-547a00b7bfa9', to: '6a7080f8-a071-412c-b530-04aed6e9fee2'},
{from: '1646dede-2939-44dc-ac69-c6a596e503cf', to: '385466cb-a6fa-45e7-93ea-2b500eb7246c'},
{from: '447f69eb-1a03-4617-875d-8a8406b0c64d', to: '12a29b3f-fe81-4045-95bb-547a00b7bfa9'},
{from: '77cf255f-9b31-4993-a965-7a1ea8f6fac8', to: '1646dede-2939-44dc-ac69-c6a596e503cf'}
                            ]);