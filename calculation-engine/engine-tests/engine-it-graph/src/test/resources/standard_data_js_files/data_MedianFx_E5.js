var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '6fdc610c-d4db-4d31-84cc-c335db9c49a7', label: 'E5\n7.0', color: '#31b0d5', title: 'Name: E5<br>Value: 7.0<br>Type: CELL_WITH_FORMULA<br>Id: 6fdc610c-d4db-4d31-84cc-c335db9c49a7<br>Formula Expression: Formula String: MEDIAN(A2:E2); Formula Values: MEDIAN(6.0, 4.0, 7.0, 65.0, 7.0); Formula Ptg: 6.0, 4.0, 7.0, 65.0, 7.0 MEDIAN ; Ptgs: A2:E2 MEDIAN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@50687efb'},
{id: 'a517bdcf-8ebf-476b-b3d1-2a3807fe1e4d', label: 'A2:E2\n[[6.0, 4.0, 7.0, 65.0, 7.0]]', color: '#31b0d5', title: 'Name: A2:E2<br>Value: [[6.0, 4.0, 7.0, 65.0, 7.0]]<br>Type: RANGE<br>Id: a517bdcf-8ebf-476b-b3d1-2a3807fe1e4d<br>Formula Expression: Formula String: A2:E2; Formula Values: [[6.0, 4.0, 7.0, 65.0, 7.0]]; Formula Ptg: [[6.0, 4.0, 7.0, 65.0, 7.0]]; Ptgs: A2:E2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@50687efb'},
{id: '3ffb3e30-4c34-4040-b5e3-546773937b6e', label: 'MEDIAN\n7.0', color: '#f0ad4e', title: 'Name: MEDIAN<br>Value: 7.0<br>Type: FUNCTION<br>Id: 3ffb3e30-4c34-4040-b5e3-546773937b6e<br>Formula Expression: Formula String: MEDIAN(A2:E2); Formula Values: MEDIAN(6.0, 4.0, 7.0, 65.0, 7.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@50687efb'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'a517bdcf-8ebf-476b-b3d1-2a3807fe1e4d', to: '3ffb3e30-4c34-4040-b5e3-546773937b6e'},
{from: '3ffb3e30-4c34-4040-b5e3-546773937b6e', to: '6fdc610c-d4db-4d31-84cc-c335db9c49a7'}
                            ]);