var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'fb57045c-2a72-4bf6-b42b-7454227e4699', label: 'B1\n9.0', color: '#31b0d5', title: 'Name: B1<br>Value: 9.0<br>Type: CELL_WITH_VALUE<br>Id: fb57045c-2a72-4bf6-b42b-7454227e4699<br>Formula Expression: Formula String: B1; Formula Values: 9.0; Formula Ptg: 9.0; Ptgs: B1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@35229f85'},
{id: '4504158d-7ac7-4632-93da-064507ab2b3c', label: 'A1\n2.993222846126381', color: '#31b0d5', title: 'Name: A1<br>Value: 2.993222846126381<br>Type: CELL_WITH_FORMULA<br>Id: 4504158d-7ac7-4632-93da-064507ab2b3c<br>Formula Expression: Formula String: ACOSH(VALUE); Formula Values: ACOSH(10.0); Formula Ptg: 10.0 ACOSH ; Ptgs: VALUE ACOSH  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@35229f85'},
{id: '754a5bec-e12b-4c19-9047-7c4d8976c761', label: 'B6\n9', color: '#31b0d5', title: 'Name: B6<br>Value: 9<br>Type: CELL_WITH_FORMULA<br>Id: 754a5bec-e12b-4c19-9047-7c4d8976c761<br>Formula Expression: Formula String: CLEAN(B1); Formula Values: CLEAN(9.0); Formula Ptg: 9.0 CLEAN ; Ptgs: B1 CLEAN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@35229f85'},
{id: '4bbdaa79-9f83-4917-9f3b-9a7a401dc100', label: 'CLEAN\n9', color: '#f0ad4e', title: 'Name: CLEAN<br>Value: 9<br>Type: FUNCTION<br>Id: 4bbdaa79-9f83-4917-9f3b-9a7a401dc100<br>Formula Expression: Formula String: CLEAN(B1); Formula Values: CLEAN(9.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@35229f85'},
{id: '5dea5fdb-22fb-481d-b112-f4fae887705b', label: 'ACOSH\n2.993222846126381', color: '#f0ad4e', title: 'Name: ACOSH<br>Value: 2.993222846126381<br>Type: FUNCTION<br>Id: 5dea5fdb-22fb-481d-b112-f4fae887705b<br>Formula Expression: Formula String: ACOSH(VALUE); Formula Values: ACOSH(10.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@35229f85'},
{id: 'bfedd1eb-f5e3-4ccb-b76e-ff9afe7767d4', label: 'VALUE\n10.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 10.0<br>Type: CONSTANT_VALUE<br>Id: bfedd1eb-f5e3-4ccb-b76e-ff9afe7767d4<br>Formula Expression: Formula String: VALUE; Formula Values: 10.0; Formula Ptg: 10.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@35229f85'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'fb57045c-2a72-4bf6-b42b-7454227e4699', to: '4bbdaa79-9f83-4917-9f3b-9a7a401dc100'},
{from: '4bbdaa79-9f83-4917-9f3b-9a7a401dc100', to: '754a5bec-e12b-4c19-9047-7c4d8976c761'},
{from: '5dea5fdb-22fb-481d-b112-f4fae887705b', to: '4504158d-7ac7-4632-93da-064507ab2b3c'},
{from: 'bfedd1eb-f5e3-4ccb-b76e-ff9afe7767d4', to: '5dea5fdb-22fb-481d-b112-f4fae887705b'}
                            ]);