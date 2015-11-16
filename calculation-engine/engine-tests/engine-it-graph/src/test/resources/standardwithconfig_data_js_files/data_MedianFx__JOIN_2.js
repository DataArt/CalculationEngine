var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '8a489c92-abb2-4c28-adda-0aa3f8f405cb', label: 'MEDIAN\n7.0', color: '#f0ad4e', title: 'Name: MEDIAN<br>Value: 7.0<br>Type: FUNCTION<br>Id: 8a489c92-abb2-4c28-adda-0aa3f8f405cb<br>Formula Expression: Formula String: MEDIAN(A2:E2); Formula Values: MEDIAN(6.0, 4.0, 7.0, 65.0, 7.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2d206a71'},
{id: '862ab10d-1b28-4ac4-8d7f-fd9d971dce89', label: 'A2:E2\n[[6.0, 4.0, 7.0, 65.0, 7.0]]', color: '#31b0d5', title: 'Name: A2:E2<br>Value: [[6.0, 4.0, 7.0, 65.0, 7.0]]<br>Type: RANGE<br>Id: 862ab10d-1b28-4ac4-8d7f-fd9d971dce89<br>Formula Expression: Formula String: A2:E2; Formula Values: [[6.0, 4.0, 7.0, 65.0, 7.0]]; Formula Ptg: [[6.0, 4.0, 7.0, 65.0, 7.0]]; Ptgs: A2:E2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2d206a71'},
{id: '90956537-f2ac-483c-a433-b42666cad374', label: 'E5\n7.0', color: '#31b0d5', title: 'Name: E5<br>Value: 7.0<br>Type: CELL_WITH_FORMULA<br>Id: 90956537-f2ac-483c-a433-b42666cad374<br>Formula Expression: Formula String: MEDIAN(A2:E2); Formula Values: MEDIAN(6.0, 4.0, 7.0, 65.0, 7.0); Formula Ptg: 6.0, 4.0, 7.0, 65.0, 7.0 MEDIAN ; Ptgs: A2:E2 MEDIAN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2d206a71'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '8a489c92-abb2-4c28-adda-0aa3f8f405cb', to: '90956537-f2ac-483c-a433-b42666cad374'},
{from: '862ab10d-1b28-4ac4-8d7f-fd9d971dce89', to: '8a489c92-abb2-4c28-adda-0aa3f8f405cb'}
                            ]);