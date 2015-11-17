var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '1fdb29fb-2cc1-4d5c-b47b-f7ed9e099384', label: 'A2:E2\n[[6.0, 4.0, 7.0, 65.0, 7.0]]', color: '#31b0d5', title: 'Name: A2:E2<br>Value: [[6.0, 4.0, 7.0, 65.0, 7.0]]<br>Type: RANGE<br>Id: 1fdb29fb-2cc1-4d5c-b47b-f7ed9e099384<br>Formula Expression: Formula String: A2:E2; Formula Values: [[6.0, 4.0, 7.0, 65.0, 7.0]]; Formula Ptg: [[6.0, 4.0, 7.0, 65.0, 7.0]]; Ptgs: A2:E2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@276961df'},
{id: '9cf556ad-242f-4b3c-94f4-83b14f2a7385', label: 'MEDIAN\n7.0', color: '#f0ad4e', title: 'Name: MEDIAN<br>Value: 7.0<br>Type: FUNCTION<br>Id: 9cf556ad-242f-4b3c-94f4-83b14f2a7385<br>Formula Expression: Formula String: MEDIAN(A2:E2); Formula Values: MEDIAN(6.0, 4.0, 7.0, 65.0, 7.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@276961df'},
{id: '2bfd8eba-8adf-44dc-af8d-a16b2c134e3c', label: 'E5\n7.0', color: '#31b0d5', title: 'Name: E5<br>Value: 7.0<br>Type: CELL_WITH_FORMULA<br>Id: 2bfd8eba-8adf-44dc-af8d-a16b2c134e3c<br>Formula Expression: Formula String: MEDIAN(A2:E2); Formula Values: MEDIAN(6.0, 4.0, 7.0, 65.0, 7.0); Formula Ptg: 6.0, 4.0, 7.0, 65.0, 7.0 MEDIAN ; Ptgs: A2:E2 MEDIAN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@276961df'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '1fdb29fb-2cc1-4d5c-b47b-f7ed9e099384', to: '9cf556ad-242f-4b3c-94f4-83b14f2a7385'},
{from: '9cf556ad-242f-4b3c-94f4-83b14f2a7385', to: '2bfd8eba-8adf-44dc-af8d-a16b2c134e3c'}
                            ]);