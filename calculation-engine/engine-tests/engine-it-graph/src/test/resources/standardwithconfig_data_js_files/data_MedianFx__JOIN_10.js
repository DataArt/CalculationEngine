var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'b0440362-9d2d-4b46-8273-51c460f1def0', label: 'MEDIAN\n7.0', color: '#f0ad4e', title: 'Name: MEDIAN<br>Value: 7.0<br>Type: FUNCTION<br>Id: b0440362-9d2d-4b46-8273-51c460f1def0<br>Formula Expression: Formula String: MEDIAN(A2:E2); Formula Values: MEDIAN(6.0, 4.0, 7.0, 65.0, 7.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7d563c13'},
{id: 'dd5620c1-7fb8-4a9d-b4a7-15f1228dd101', label: 'E5\n7.0', color: '#31b0d5', title: 'Name: E5<br>Value: 7.0<br>Type: CELL_WITH_FORMULA<br>Id: dd5620c1-7fb8-4a9d-b4a7-15f1228dd101<br>Formula Expression: Formula String: MEDIAN(A2:E2); Formula Values: MEDIAN(6.0, 4.0, 7.0, 65.0, 7.0); Formula Ptg: 6.0, 4.0, 7.0, 65.0, 7.0 MEDIAN ; Ptgs: A2:E2 MEDIAN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7d563c13'},
{id: '2ad65b4d-767a-47af-ab12-9d95d6724cac', label: 'A2:E2\n[[6.0, 4.0, 7.0, 65.0, 7.0]]', color: '#31b0d5', title: 'Name: A2:E2<br>Value: [[6.0, 4.0, 7.0, 65.0, 7.0]]<br>Type: RANGE<br>Id: 2ad65b4d-767a-47af-ab12-9d95d6724cac<br>Formula Expression: Formula String: A2:E2; Formula Values: [[6.0, 4.0, 7.0, 65.0, 7.0]]; Formula Ptg: [[6.0, 4.0, 7.0, 65.0, 7.0]]; Ptgs: A2:E2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7d563c13'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '2ad65b4d-767a-47af-ab12-9d95d6724cac', to: 'b0440362-9d2d-4b46-8273-51c460f1def0'},
{from: 'b0440362-9d2d-4b46-8273-51c460f1def0', to: 'dd5620c1-7fb8-4a9d-b4a7-15f1228dd101'}
                            ]);