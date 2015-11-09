var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'bccebf6b-ac86-49b4-b4d6-e44e5001e1bb', label: '/\n4.0', color: '#f0ad4e', title: 'Name: /<br>Value: 4.0<br>Type: OPERATOR<br>Id: bccebf6b-ac86-49b4-b4d6-e44e5001e1bb<br>Formula Expression: Formula String: A1 / A2; Formula Values: 100.0 / 25.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3095c449'},
{id: 'a90857da-826f-4900-9c50-c26fe57f42fc', label: 'A1\n100.0', color: '#31b0d5', title: 'Name: A1<br>Value: 100.0<br>Type: CELL_WITH_VALUE<br>Id: a90857da-826f-4900-9c50-c26fe57f42fc<br>Formula Expression: Formula String: A1; Formula Values: 100.0; Formula Ptg: 100.0; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3095c449'},
{id: 'd4564f51-6ae8-4d7a-8da3-9ae3ce79ceb8', label: 'A2\n25.0', color: '#31b0d5', title: 'Name: A2<br>Value: 25.0<br>Type: CELL_WITH_VALUE<br>Id: d4564f51-6ae8-4d7a-8da3-9ae3ce79ceb8<br>Formula Expression: Formula String: A2; Formula Values: 25.0; Formula Ptg: 25.0; Ptgs: A2 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3095c449'},
{id: 'd9e80592-c16a-4c18-9128-37b9504adb1c', label: 'B3\n4.0', color: '#31b0d5', title: 'Name: B3<br>Value: 4.0<br>Type: CELL_WITH_FORMULA<br>Id: d9e80592-c16a-4c18-9128-37b9504adb1c<br>Formula Expression: Formula String: A1 / A2; Formula Values: 100.0 / 25.0; Formula Ptg: 100.0 25.0 /; Ptgs: A1 A2 / Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3095c449'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'd4564f51-6ae8-4d7a-8da3-9ae3ce79ceb8', to: 'bccebf6b-ac86-49b4-b4d6-e44e5001e1bb'},
{from: 'a90857da-826f-4900-9c50-c26fe57f42fc', to: 'bccebf6b-ac86-49b4-b4d6-e44e5001e1bb'},
{from: 'bccebf6b-ac86-49b4-b4d6-e44e5001e1bb', to: 'd9e80592-c16a-4c18-9128-37b9504adb1c'}
                            ]);