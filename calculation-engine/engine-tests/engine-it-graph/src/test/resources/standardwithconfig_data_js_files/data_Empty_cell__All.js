var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '2e5f5008-58a1-408e-83b9-4785767652e2', label: 'E5\n115.0', color: '#31b0d5', title: 'Name: E5<br>Value: 115.0<br>Type: CELL_WITH_FORMULA<br>Id: 2e5f5008-58a1-408e-83b9-4785767652e2<br>Formula Expression: Formula String: SUM(E1:E4); Formula Values: SUM(5.0, 7.0, 57.0, 46.0); Formula Ptg: 5.0, 7.0, 57.0, 46.0 SUM ; Ptgs: E1:E4 SUM  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@d140627'},
{id: '8a398504-465c-4015-91f6-08b9f2bd941c', label: 'A1\n12.0', color: '#31b0d5', title: 'Name: A1<br>Value: 12.0<br>Type: CELL_WITH_FORMULA<br>Id: 8a398504-465c-4015-91f6-08b9f2bd941c<br>Formula Expression: Formula String: VALUE; Formula Values: 12.0; Formula Ptg: 12.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@d140627'},
{id: 'fbbf71a1-c57d-450e-81d7-e590511ebd21', label: 'E1:E4\n[[5.0], [7.0], [57.0], [46.0]]', color: '#31b0d5', title: 'Name: E1:E4<br>Value: [[5.0], [7.0], [57.0], [46.0]]<br>Type: RANGE<br>Id: fbbf71a1-c57d-450e-81d7-e590511ebd21<br>Formula Expression: Formula String: E1:E4; Formula Values: [[5.0], [7.0], [57.0], [46.0]]; Formula Ptg: [[5.0], [7.0], [57.0], [46.0]]; Ptgs: E1:E4 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@d140627'},
{id: '2f60fb11-8aad-4b7b-98b6-195e9e5b3604', label: 'SUM\n115.0', color: '#f0ad4e', title: 'Name: SUM<br>Value: 115.0<br>Type: FUNCTION<br>Id: 2f60fb11-8aad-4b7b-98b6-195e9e5b3604<br>Formula Expression: Formula String: SUM(E1:E4); Formula Values: SUM(5.0, 7.0, 57.0, 46.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@d140627'},
{id: '763488df-a482-4ec5-bd7e-77dd40cda3f6', label: 'VALUE\n12.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 12.0<br>Type: CONSTANT_VALUE<br>Id: 763488df-a482-4ec5-bd7e-77dd40cda3f6<br>Formula Expression: Formula String: VALUE; Formula Values: 12.0; Formula Ptg: 12.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@d140627'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '2f60fb11-8aad-4b7b-98b6-195e9e5b3604', to: '2e5f5008-58a1-408e-83b9-4785767652e2'},
{from: 'fbbf71a1-c57d-450e-81d7-e590511ebd21', to: '2f60fb11-8aad-4b7b-98b6-195e9e5b3604'},
{from: '763488df-a482-4ec5-bd7e-77dd40cda3f6', to: '8a398504-465c-4015-91f6-08b9f2bd941c'}
                            ]);