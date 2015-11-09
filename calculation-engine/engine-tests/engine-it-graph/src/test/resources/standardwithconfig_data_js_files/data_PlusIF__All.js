var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'cab0d3e5-79c2-4d0e-a54e-b8d92ea8b4dd', label: 'IF\n6.0', color: '#f0ad4e', title: 'Name: IF<br>Value: 6.0<br>Type: IF<br>Id: cab0d3e5-79c2-4d0e-a54e-b8d92ea8b4dd<br>Formula Expression: Formula String: IF(A3>A4,B3,B4); Formula Values: IF(3.0 > 5.0, 6.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@52e2e426'},
{id: '1656181b-e6c7-4b3e-bdf0-85a830fb528b', label: 'B4\n6.0', color: '#31b0d5', title: 'Name: B4<br>Value: 6.0<br>Type: CELL_WITH_VALUE<br>Id: 1656181b-e6c7-4b3e-bdf0-85a830fb528b<br>Formula Expression: Formula String: B4; Formula Values: 6.0; Formula Ptg: 6.0; Ptgs: B4 Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@52e2e426'},
{id: 'a3bd6ec9-6900-405f-baa7-dffd0a29e02f', label: '>\nFALSE', color: '#f0ad4e', title: 'Name: ><br>Value: FALSE<br>Type: OPERATOR<br>Id: a3bd6ec9-6900-405f-baa7-dffd0a29e02f<br>Formula Expression: Formula String: A3 > A4; Formula Values: 3.0 > 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@52e2e426'},
{id: '1cb5ec7a-4e2b-4913-a408-49c95003211f', label: 'A1\n6.0', color: '#31b0d5', title: 'Name: A1<br>Value: 6.0<br>Type: CELL_WITH_FORMULA<br>Id: 1cb5ec7a-4e2b-4913-a408-49c95003211f<br>Formula Expression: Formula String:  + IF(A3>A4,B3,B4); Formula Values:  + IF(3.0 > 5.0, 6.0); Formula Ptg:  6.0, 3.0 5.0 > IF  +; Ptgs:  B4, A3 A4 > IF  + Index in Ptgs: 9 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@52e2e426'},
{id: '9c673aeb-c1b7-4ed0-9cd8-df4745c52f31', label: '+\n6.0', color: '#f0ad4e', title: 'Name: +<br>Value: 6.0<br>Type: OPERATOR<br>Id: 9c673aeb-c1b7-4ed0-9cd8-df4745c52f31<br>Formula Expression: Formula String:  + IF(A3>A4,B3,B4); Formula Values:  + IF(3.0 > 5.0, 6.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 9 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@52e2e426'},
{id: 'd27b0e8d-4ce2-4833-841e-30cc8b1e71f2', label: 'A3\n3.0', color: '#31b0d5', title: 'Name: A3<br>Value: 3.0<br>Type: CELL_WITH_VALUE<br>Id: d27b0e8d-4ce2-4833-841e-30cc8b1e71f2<br>Formula Expression: Formula String: A3; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: A3 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@52e2e426'},
{id: 'dc76fb39-827d-4e8f-a8e1-d6e0543fd964', label: 'A4\n5.0', color: '#31b0d5', title: 'Name: A4<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: dc76fb39-827d-4e8f-a8e1-d6e0543fd964<br>Formula Expression: Formula String: A4; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: A4 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@52e2e426'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'dc76fb39-827d-4e8f-a8e1-d6e0543fd964', to: 'a3bd6ec9-6900-405f-baa7-dffd0a29e02f'},
{from: '1656181b-e6c7-4b3e-bdf0-85a830fb528b', to: 'cab0d3e5-79c2-4d0e-a54e-b8d92ea8b4dd'},
{from: '9c673aeb-c1b7-4ed0-9cd8-df4745c52f31', to: '1cb5ec7a-4e2b-4913-a408-49c95003211f'},
{from: 'd27b0e8d-4ce2-4833-841e-30cc8b1e71f2', to: 'a3bd6ec9-6900-405f-baa7-dffd0a29e02f'},
{from: 'a3bd6ec9-6900-405f-baa7-dffd0a29e02f', to: 'cab0d3e5-79c2-4d0e-a54e-b8d92ea8b4dd'},
{from: 'cab0d3e5-79c2-4d0e-a54e-b8d92ea8b4dd', to: '9c673aeb-c1b7-4ed0-9cd8-df4745c52f31'}
                            ]);