var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'a2b3f724-ae49-47c7-b0f9-322585c22b2d', label: 'VALUE\n10.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 10.0<br>Type: CONSTANT_VALUE<br>Id: a2b3f724-ae49-47c7-b0f9-322585c22b2d<br>Formula Expression: Formula String: VALUE; Formula Values: 10.0; Formula Ptg: 10.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7f608e21'},
{id: 'e31dc98f-f4dc-411b-85fa-4f5b4b95ab2e', label: 'ACOSH\n2.993222846126381', color: '#f0ad4e', title: 'Name: ACOSH<br>Value: 2.993222846126381<br>Type: FUNCTION<br>Id: e31dc98f-f4dc-411b-85fa-4f5b4b95ab2e<br>Formula Expression: Formula String: ACOSH(VALUE); Formula Values: ACOSH(10.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7f608e21'},
{id: '176a0adb-d733-4892-8330-a54c211b95c5', label: 'ACOSH\n5.192925985263684', color: '#f0ad4e', title: 'Name: ACOSH<br>Value: 5.192925985263684<br>Type: FUNCTION<br>Id: 176a0adb-d733-4892-8330-a54c211b95c5<br>Formula Expression: Formula String: ACOSH(C2); Formula Values: ACOSH(90.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7f608e21'},
{id: 'bc3de2d3-8699-41b6-b666-4024a29da26e', label: 'E5\n5.192925985263684', color: '#31b0d5', title: 'Name: E5<br>Value: 5.192925985263684<br>Type: CELL_WITH_FORMULA<br>Id: bc3de2d3-8699-41b6-b666-4024a29da26e<br>Formula Expression: Formula String: ACOSH(C2); Formula Values: ACOSH(90.0); Formula Ptg: 90.0 ACOSH ; Ptgs: C2 ACOSH  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7f608e21'},
{id: '87fc936f-2c0f-49a1-9795-d7855eb5cc31', label: 'A1\n2.993222846126381', color: '#31b0d5', title: 'Name: A1<br>Value: 2.993222846126381<br>Type: CELL_WITH_FORMULA<br>Id: 87fc936f-2c0f-49a1-9795-d7855eb5cc31<br>Formula Expression: Formula String: ACOSH(VALUE); Formula Values: ACOSH(10.0); Formula Ptg: 10.0 ACOSH ; Ptgs: VALUE ACOSH  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7f608e21'},
{id: '6799bc61-84cd-48c6-b796-f986d2716cf1', label: 'C2\n90.0', color: '#31b0d5', title: 'Name: C2<br>Value: 90.0<br>Type: CELL_WITH_VALUE<br>Id: 6799bc61-84cd-48c6-b796-f986d2716cf1<br>Formula Expression: Formula String: C2; Formula Values: 90.0; Formula Ptg: 90.0; Ptgs: C2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7f608e21'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '176a0adb-d733-4892-8330-a54c211b95c5', to: 'bc3de2d3-8699-41b6-b666-4024a29da26e'},
{from: 'a2b3f724-ae49-47c7-b0f9-322585c22b2d', to: 'e31dc98f-f4dc-411b-85fa-4f5b4b95ab2e'},
{from: 'e31dc98f-f4dc-411b-85fa-4f5b4b95ab2e', to: '87fc936f-2c0f-49a1-9795-d7855eb5cc31'},
{from: '6799bc61-84cd-48c6-b796-f986d2716cf1', to: '176a0adb-d733-4892-8330-a54c211b95c5'}
                            ]);