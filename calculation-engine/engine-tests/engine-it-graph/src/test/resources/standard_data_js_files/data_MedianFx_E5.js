var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '384a8c89-9f44-4eae-b858-38e7fe70b523', label: 'MEDIAN\n7.0', color: '#f0ad4e', title: 'Name: MEDIAN<br>Alias: null<br>Value: 7.0<br>Type: FUNCTION<br>Id: 384a8c89-9f44-4eae-b858-38e7fe70b523<br>Formula Expression: Formula String: MEDIAN(A2:E2); Formula Values: MEDIAN(6.0, 4.0, 7.0, 65.0, 7.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4a9cc6cb'},
{id: '237240f4-7a01-4501-aa40-d4b2c4364c1d', label: 'A2:E2\n[[6.0, 4.0, 7.0, 65.0, 7.0]]', color: '#31b0d5', title: 'Name: A2:E2<br>Alias: null<br>Value: [[6.0, 4.0, 7.0, 65.0, 7.0]]<br>Type: RANGE<br>Id: 237240f4-7a01-4501-aa40-d4b2c4364c1d<br>Formula Expression: Formula String: A2:E2; Formula Values: [[6.0, 4.0, 7.0, 65.0, 7.0]]; Formula Ptg: [[6.0, 4.0, 7.0, 65.0, 7.0]]; Ptgs: A2:E2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4a9cc6cb'},
{id: '600ad7d3-7747-4e78-a6fe-d1e637835388', label: 'E5\n7.0', color: '#31b0d5', title: 'Name: E5<br>Alias: null<br>Value: 7.0<br>Type: CELL_WITH_FORMULA<br>Id: 600ad7d3-7747-4e78-a6fe-d1e637835388<br>Formula Expression: Formula String: MEDIAN(A2:E2); Formula Values: MEDIAN(6.0, 4.0, 7.0, 65.0, 7.0); Formula Ptg: 6.0, 4.0, 7.0, 65.0, 7.0 MEDIAN ; Ptgs: A2:E2 MEDIAN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4a9cc6cb'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '237240f4-7a01-4501-aa40-d4b2c4364c1d', to: '384a8c89-9f44-4eae-b858-38e7fe70b523'},
{from: '384a8c89-9f44-4eae-b858-38e7fe70b523', to: '600ad7d3-7747-4e78-a6fe-d1e637835388'}
                            ]);