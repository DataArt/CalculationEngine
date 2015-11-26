var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'f22e9b1e-23ad-4317-b72f-106e66b08e14', label: 'A3\n42184.0', color: '#31b0d5', title: 'Name: A3<br>Alias: null<br>Value: 42184.0<br>Type: CELL_WITH_VALUE<br>Id: f22e9b1e-23ad-4317-b72f-106e66b08e14<br>Formula Expression: Formula String: A3; Formula Values: 42184.0; Formula Ptg: 42184.0; Ptgs: A3 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2a640157'},
{id: 'f3a4833b-afb4-4b4d-8fe8-f2f748eb3e7c', label: 'B7\n160.0', color: '#31b0d5', title: 'Name: B7<br>Alias: null<br>Value: 160.0<br>Type: CELL_WITH_FORMULA<br>Id: f3a4833b-afb4-4b4d-8fe8-f2f748eb3e7c<br>Formula Expression: Formula String: DAYS360(A4, A3); Formula Values: DAYS360(42347.0, 42184.0); Formula Ptg: 42347.0, 42184.0 DAYS360 ; Ptgs: A4, A3 DAYS360  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2a640157'},
{id: 'd27d68ce-d38c-4b5f-b27d-d64f6a1fc893', label: 'DAYS360\n160.0', color: '#f0ad4e', title: 'Name: DAYS360<br>Alias: null<br>Value: 160.0<br>Type: FUNCTION<br>Id: d27d68ce-d38c-4b5f-b27d-d64f6a1fc893<br>Formula Expression: Formula String: DAYS360(A4, A3); Formula Values: DAYS360(42347.0, 42184.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2a640157'},
{id: 'b84e1982-433c-4b5e-85cd-8e528bb470d8', label: 'A4\n42347.0', color: '#31b0d5', title: 'Name: A4<br>Alias: null<br>Value: 42347.0<br>Type: CELL_WITH_VALUE<br>Id: b84e1982-433c-4b5e-85cd-8e528bb470d8<br>Formula Expression: Formula String: A4; Formula Values: 42347.0; Formula Ptg: 42347.0; Ptgs: A4 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2a640157'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'b84e1982-433c-4b5e-85cd-8e528bb470d8', to: 'd27d68ce-d38c-4b5f-b27d-d64f6a1fc893'},
{from: 'f22e9b1e-23ad-4317-b72f-106e66b08e14', to: 'd27d68ce-d38c-4b5f-b27d-d64f6a1fc893'},
{from: 'd27d68ce-d38c-4b5f-b27d-d64f6a1fc893', to: 'f3a4833b-afb4-4b4d-8fe8-f2f748eb3e7c'}
                            ]);