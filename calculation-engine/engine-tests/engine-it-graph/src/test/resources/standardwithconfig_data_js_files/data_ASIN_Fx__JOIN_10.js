var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '25a964b7-174f-43b4-a178-e2a9d3a3f04b', label: 'ASIN\n1.5707963267948966', color: '#f0ad4e', title: 'Name: ASIN<br>Value: 1.5707963267948966<br>Type: FUNCTION<br>Id: 25a964b7-174f-43b4-a178-e2a9d3a3f04b<br>Formula Expression: Formula String: ASIN(A2); Formula Values: ASIN(1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4ebd8d2'},
{id: 'fca3fad6-6d16-4a5f-81ac-cc97ac032012', label: 'E3\n1.5707963267948966', color: '#31b0d5', title: 'Name: E3<br>Value: 1.5707963267948966<br>Type: CELL_WITH_FORMULA<br>Id: fca3fad6-6d16-4a5f-81ac-cc97ac032012<br>Formula Expression: Formula String: ASIN(A2); Formula Values: ASIN(1.0); Formula Ptg: 1.0 ASIN ; Ptgs: A2 ASIN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4ebd8d2'},
{id: 'da5338a1-22e3-4057-86c2-1974554a0a17', label: 'A2\n1.0', color: '#31b0d5', title: 'Name: A2<br>Value: 1.0<br>Type: CELL_WITH_VALUE<br>Id: da5338a1-22e3-4057-86c2-1974554a0a17<br>Formula Expression: Formula String: A2; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4ebd8d2'},
{id: 'd647ff9f-3376-449b-8411-f5e5175003f5', label: 'ASIN\n-0.5235987755982989', color: '#f0ad4e', title: 'Name: ASIN<br>Value: -0.5235987755982989<br>Type: FUNCTION<br>Id: d647ff9f-3376-449b-8411-f5e5175003f5<br>Formula Expression: Formula String: ASIN(VALUE); Formula Values: ASIN(-0.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4ebd8d2'},
{id: 'be23c892-9cb9-4187-b8f9-9515b7f5d9a5', label: 'C1\n-0.5235987755982989', color: '#31b0d5', title: 'Name: C1<br>Value: -0.5235987755982989<br>Type: CELL_WITH_FORMULA<br>Id: be23c892-9cb9-4187-b8f9-9515b7f5d9a5<br>Formula Expression: Formula String: ASIN(VALUE); Formula Values: ASIN(-0.5); Formula Ptg: -0.5 ASIN ; Ptgs: VALUE ASIN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4ebd8d2'},
{id: '51ab7b0e-66c0-4644-9365-4505ecd2182f', label: 'VALUE\n-0.5', color: '#31b0d5', title: 'Name: VALUE<br>Value: -0.5<br>Type: CONSTANT_VALUE<br>Id: 51ab7b0e-66c0-4644-9365-4505ecd2182f<br>Formula Expression: Formula String: VALUE; Formula Values: -0.5; Formula Ptg: -0.5; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4ebd8d2'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '51ab7b0e-66c0-4644-9365-4505ecd2182f', to: 'd647ff9f-3376-449b-8411-f5e5175003f5'},
{from: 'da5338a1-22e3-4057-86c2-1974554a0a17', to: '25a964b7-174f-43b4-a178-e2a9d3a3f04b'},
{from: '25a964b7-174f-43b4-a178-e2a9d3a3f04b', to: 'fca3fad6-6d16-4a5f-81ac-cc97ac032012'},
{from: 'd647ff9f-3376-449b-8411-f5e5175003f5', to: 'be23c892-9cb9-4187-b8f9-9515b7f5d9a5'}
                            ]);