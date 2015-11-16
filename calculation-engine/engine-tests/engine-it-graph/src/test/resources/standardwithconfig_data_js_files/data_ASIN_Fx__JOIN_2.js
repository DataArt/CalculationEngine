var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'e071c72a-fe3f-4fce-902e-12eda0b5526f', label: 'C1\n-0.5235987755982989', color: '#31b0d5', title: 'Name: C1<br>Value: -0.5235987755982989<br>Type: CELL_WITH_FORMULA<br>Id: e071c72a-fe3f-4fce-902e-12eda0b5526f<br>Formula Expression: Formula String: ASIN(VALUE); Formula Values: ASIN(-0.5); Formula Ptg: -0.5 ASIN ; Ptgs: VALUE ASIN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3eb292cd'},
{id: '4a3a8d8e-258b-4575-931c-65e505e0a8ca', label: 'E3\n1.5707963267948966', color: '#31b0d5', title: 'Name: E3<br>Value: 1.5707963267948966<br>Type: CELL_WITH_FORMULA<br>Id: 4a3a8d8e-258b-4575-931c-65e505e0a8ca<br>Formula Expression: Formula String: ASIN(A2); Formula Values: ASIN(1.0); Formula Ptg: 1.0 ASIN ; Ptgs: A2 ASIN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3eb292cd'},
{id: '52e0d67c-5da0-484d-80c9-64441c55baf1', label: 'ASIN\n-0.5235987755982989', color: '#f0ad4e', title: 'Name: ASIN<br>Value: -0.5235987755982989<br>Type: FUNCTION<br>Id: 52e0d67c-5da0-484d-80c9-64441c55baf1<br>Formula Expression: Formula String: ASIN(VALUE); Formula Values: ASIN(-0.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3eb292cd'},
{id: 'd918c472-c3a9-4c51-a82c-f33d8649b7e1', label: 'A2\n1.0', color: '#31b0d5', title: 'Name: A2<br>Value: 1.0<br>Type: CELL_WITH_VALUE<br>Id: d918c472-c3a9-4c51-a82c-f33d8649b7e1<br>Formula Expression: Formula String: A2; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3eb292cd'},
{id: '237476f2-3bff-47d9-92f6-23fa44aa9603', label: 'VALUE\n-0.5', color: '#31b0d5', title: 'Name: VALUE<br>Value: -0.5<br>Type: CONSTANT_VALUE<br>Id: 237476f2-3bff-47d9-92f6-23fa44aa9603<br>Formula Expression: Formula String: VALUE; Formula Values: -0.5; Formula Ptg: -0.5; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3eb292cd'},
{id: '222f401c-645b-4352-9bf9-a66cf609b9e8', label: 'ASIN\n1.5707963267948966', color: '#f0ad4e', title: 'Name: ASIN<br>Value: 1.5707963267948966<br>Type: FUNCTION<br>Id: 222f401c-645b-4352-9bf9-a66cf609b9e8<br>Formula Expression: Formula String: ASIN(A2); Formula Values: ASIN(1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3eb292cd'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '52e0d67c-5da0-484d-80c9-64441c55baf1', to: 'e071c72a-fe3f-4fce-902e-12eda0b5526f'},
{from: '222f401c-645b-4352-9bf9-a66cf609b9e8', to: '4a3a8d8e-258b-4575-931c-65e505e0a8ca'},
{from: '237476f2-3bff-47d9-92f6-23fa44aa9603', to: '52e0d67c-5da0-484d-80c9-64441c55baf1'},
{from: 'd918c472-c3a9-4c51-a82c-f33d8649b7e1', to: '222f401c-645b-4352-9bf9-a66cf609b9e8'}
                            ]);