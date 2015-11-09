var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'a11f8020-04f5-4d51-af34-94f2226b30e3', label: 'A2:E2\n[[6.0, 4.0, 7.0, 65.0, 7.0]]', color: '#31b0d5', title: 'Name: A2:E2<br>Value: [[6.0, 4.0, 7.0, 65.0, 7.0]]<br>Type: RANGE<br>Id: a11f8020-04f5-4d51-af34-94f2226b30e3<br>Formula Expression: Formula String: A2:E2; Formula Values: [[6.0, 4.0, 7.0, 65.0, 7.0]]; Formula Ptg: [[6.0, 4.0, 7.0, 65.0, 7.0]]; Ptgs: A2:E2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2f95ce11'},
{id: '3e800ab0-8382-4a18-b92f-9170a35db0af', label: 'E5\n7.0', color: '#31b0d5', title: 'Name: E5<br>Value: 7.0<br>Type: CELL_WITH_FORMULA<br>Id: 3e800ab0-8382-4a18-b92f-9170a35db0af<br>Formula Expression: Formula String: MEDIAN(A2:E2); Formula Values: MEDIAN(6.0, 4.0, 7.0, 65.0, 7.0); Formula Ptg: 6.0, 4.0, 7.0, 65.0, 7.0 MEDIAN ; Ptgs: A2:E2 MEDIAN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2f95ce11'},
{id: '9ecb3333-45d2-4a32-9b61-867ce5b1cc95', label: 'MEDIAN\n7.0', color: '#f0ad4e', title: 'Name: MEDIAN<br>Value: 7.0<br>Type: FUNCTION<br>Id: 9ecb3333-45d2-4a32-9b61-867ce5b1cc95<br>Formula Expression: Formula String: MEDIAN(A2:E2); Formula Values: MEDIAN(6.0, 4.0, 7.0, 65.0, 7.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2f95ce11'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'a11f8020-04f5-4d51-af34-94f2226b30e3', to: '9ecb3333-45d2-4a32-9b61-867ce5b1cc95'},
{from: '9ecb3333-45d2-4a32-9b61-867ce5b1cc95', to: '3e800ab0-8382-4a18-b92f-9170a35db0af'}
                            ]);