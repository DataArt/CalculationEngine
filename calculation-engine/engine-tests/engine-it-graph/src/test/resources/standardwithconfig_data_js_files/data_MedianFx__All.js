var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '711fa182-d799-45a7-840f-cbe0ff6b492c', label: 'A2:E2\n[[6.0, 4.0, 7.0, 65.0, 7.0]]', color: '#31b0d5', title: 'Name: A2:E2<br>Value: [[6.0, 4.0, 7.0, 65.0, 7.0]]<br>Type: RANGE<br>Id: 711fa182-d799-45a7-840f-cbe0ff6b492c<br>Formula Expression: Formula String: A2:E2; Formula Values: [[6.0, 4.0, 7.0, 65.0, 7.0]]; Formula Ptg: [[6.0, 4.0, 7.0, 65.0, 7.0]]; Ptgs: A2:E2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2f95ce11'},
{id: 'b2ce7cdb-19d6-4743-b90c-d10ad4b287ef', label: 'E5\n7.0', color: '#31b0d5', title: 'Name: E5<br>Value: 7.0<br>Type: CELL_WITH_FORMULA<br>Id: b2ce7cdb-19d6-4743-b90c-d10ad4b287ef<br>Formula Expression: Formula String: MEDIAN(A2:E2); Formula Values: MEDIAN(6.0, 4.0, 7.0, 65.0, 7.0); Formula Ptg: 6.0, 4.0, 7.0, 65.0, 7.0 MEDIAN ; Ptgs: A2:E2 MEDIAN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2f95ce11'},
{id: '631cbfbf-fdf0-4d20-b6a8-4ae698288fc4', label: 'MEDIAN\n7.0', color: '#f0ad4e', title: 'Name: MEDIAN<br>Value: 7.0<br>Type: FUNCTION<br>Id: 631cbfbf-fdf0-4d20-b6a8-4ae698288fc4<br>Formula Expression: Formula String: MEDIAN(A2:E2); Formula Values: MEDIAN(6.0, 4.0, 7.0, 65.0, 7.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2f95ce11'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '711fa182-d799-45a7-840f-cbe0ff6b492c', to: '631cbfbf-fdf0-4d20-b6a8-4ae698288fc4'},
{from: '631cbfbf-fdf0-4d20-b6a8-4ae698288fc4', to: 'b2ce7cdb-19d6-4743-b90c-d10ad4b287ef'}
                            ]);