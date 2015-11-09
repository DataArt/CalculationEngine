var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '820474cd-8f80-4199-8606-dc34ebda461c', label: 'A2:E2\n[[6.0, 4.0, 7.0, 65.0, 7.0]]', color: '#31b0d5', title: 'Name: A2:E2<br>Value: [[6.0, 4.0, 7.0, 65.0, 7.0]]<br>Type: RANGE<br>Id: 820474cd-8f80-4199-8606-dc34ebda461c<br>Formula Expression: Formula String: A2:E2; Formula Values: [[6.0, 4.0, 7.0, 65.0, 7.0]]; Formula Ptg: [[6.0, 4.0, 7.0, 65.0, 7.0]]; Ptgs: A2:E2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@276961df'},
{id: '92de364c-5898-4aef-b43a-808d31032ef6', label: 'MEDIAN\n7.0', color: '#f0ad4e', title: 'Name: MEDIAN<br>Value: 7.0<br>Type: FUNCTION<br>Id: 92de364c-5898-4aef-b43a-808d31032ef6<br>Formula Expression: Formula String: MEDIAN(A2:E2); Formula Values: MEDIAN(6.0, 4.0, 7.0, 65.0, 7.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@276961df'},
{id: '09d0018f-6b6e-40d5-a086-8493fd16d662', label: 'E5\n7.0', color: '#31b0d5', title: 'Name: E5<br>Value: 7.0<br>Type: CELL_WITH_FORMULA<br>Id: 09d0018f-6b6e-40d5-a086-8493fd16d662<br>Formula Expression: Formula String: MEDIAN(A2:E2); Formula Values: MEDIAN(6.0, 4.0, 7.0, 65.0, 7.0); Formula Ptg: 6.0, 4.0, 7.0, 65.0, 7.0 MEDIAN ; Ptgs: A2:E2 MEDIAN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@276961df'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '820474cd-8f80-4199-8606-dc34ebda461c', to: '92de364c-5898-4aef-b43a-808d31032ef6'},
{from: '92de364c-5898-4aef-b43a-808d31032ef6', to: '09d0018f-6b6e-40d5-a086-8493fd16d662'}
                            ]);