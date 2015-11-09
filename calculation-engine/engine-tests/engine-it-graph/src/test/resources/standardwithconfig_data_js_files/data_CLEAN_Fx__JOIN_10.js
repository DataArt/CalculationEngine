var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '2927eda2-67cf-4ebd-b2a9-4471f8f1cc65', label: 'B6\n9', color: '#31b0d5', title: 'Name: B6<br>Value: 9<br>Type: CELL_WITH_FORMULA<br>Id: 2927eda2-67cf-4ebd-b2a9-4471f8f1cc65<br>Formula Expression: Formula String: CLEAN(B1); Formula Values: CLEAN(9.0); Formula Ptg: 9.0 CLEAN ; Ptgs: B1 CLEAN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@8ecc457'},
{id: '7d865d6a-706a-4b68-bdf2-bb40a0bc5669', label: 'ACOSH\n2.993222846126381', color: '#f0ad4e', title: 'Name: ACOSH<br>Value: 2.993222846126381<br>Type: FUNCTION<br>Id: 7d865d6a-706a-4b68-bdf2-bb40a0bc5669<br>Formula Expression: Formula String: ACOSH(VALUE); Formula Values: ACOSH(10.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@8ecc457'},
{id: '91073fd1-1a6b-4a45-b6b7-301e48a6063c', label: 'B1\n9.0', color: '#31b0d5', title: 'Name: B1<br>Value: 9.0<br>Type: CELL_WITH_VALUE<br>Id: 91073fd1-1a6b-4a45-b6b7-301e48a6063c<br>Formula Expression: Formula String: B1; Formula Values: 9.0; Formula Ptg: 9.0; Ptgs: B1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@8ecc457'},
{id: '5aa60726-404b-4c0b-8790-1d0c25fbcd13', label: 'CLEAN\n9', color: '#f0ad4e', title: 'Name: CLEAN<br>Value: 9<br>Type: FUNCTION<br>Id: 5aa60726-404b-4c0b-8790-1d0c25fbcd13<br>Formula Expression: Formula String: CLEAN(B1); Formula Values: CLEAN(9.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@8ecc457'},
{id: '3b438657-2730-4f59-acac-5ce2480a133d', label: 'VALUE\n10.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 10.0<br>Type: CONSTANT_VALUE<br>Id: 3b438657-2730-4f59-acac-5ce2480a133d<br>Formula Expression: Formula String: VALUE; Formula Values: 10.0; Formula Ptg: 10.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@8ecc457'},
{id: 'c936e1d6-1d7f-422d-8eaa-468f4ecbd8ae', label: 'A1\n2.993222846126381', color: '#31b0d5', title: 'Name: A1<br>Value: 2.993222846126381<br>Type: CELL_WITH_FORMULA<br>Id: c936e1d6-1d7f-422d-8eaa-468f4ecbd8ae<br>Formula Expression: Formula String: ACOSH(VALUE); Formula Values: ACOSH(10.0); Formula Ptg: 10.0 ACOSH ; Ptgs: VALUE ACOSH  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@8ecc457'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '7d865d6a-706a-4b68-bdf2-bb40a0bc5669', to: 'c936e1d6-1d7f-422d-8eaa-468f4ecbd8ae'},
{from: '5aa60726-404b-4c0b-8790-1d0c25fbcd13', to: '2927eda2-67cf-4ebd-b2a9-4471f8f1cc65'},
{from: '3b438657-2730-4f59-acac-5ce2480a133d', to: '7d865d6a-706a-4b68-bdf2-bb40a0bc5669'},
{from: '91073fd1-1a6b-4a45-b6b7-301e48a6063c', to: '5aa60726-404b-4c0b-8790-1d0c25fbcd13'}
                            ]);