var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '99ecf1d2-784d-422e-9310-68c3ad4c12ff', label: 'A2:E2\n[[6.0, 4.0, 7.0, 65.0, 7.0]]', color: '#31b0d5', title: 'Name: A2:E2<br>Value: [[6.0, 4.0, 7.0, 65.0, 7.0]]<br>Type: RANGE<br>Id: 99ecf1d2-784d-422e-9310-68c3ad4c12ff<br>Formula Expression: Formula String: A2:E2; Formula Values: [[6.0, 4.0, 7.0, 65.0, 7.0]]; Formula Ptg: [[6.0, 4.0, 7.0, 65.0, 7.0]]; Ptgs: A2:E2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1a15b789'},
{id: '657d4ac9-8463-4262-a51b-c8b8bd5e505c', label: 'MEDIAN\n7.0', color: '#f0ad4e', title: 'Name: MEDIAN<br>Value: 7.0<br>Type: FUNCTION<br>Id: 657d4ac9-8463-4262-a51b-c8b8bd5e505c<br>Formula Expression: Formula String: MEDIAN(A2:E2); Formula Values: MEDIAN(6.0, 4.0, 7.0, 65.0, 7.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1a15b789'},
{id: 'fe892e15-32c4-4b27-9b62-e087ad00ca8b', label: 'E5\n7.0', color: '#31b0d5', title: 'Name: E5<br>Value: 7.0<br>Type: CELL_WITH_FORMULA<br>Id: fe892e15-32c4-4b27-9b62-e087ad00ca8b<br>Formula Expression: Formula String: MEDIAN(A2:E2); Formula Values: MEDIAN(6.0, 4.0, 7.0, 65.0, 7.0); Formula Ptg: 6.0, 4.0, 7.0, 65.0, 7.0 MEDIAN ; Ptgs: A2:E2 MEDIAN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1a15b789'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '99ecf1d2-784d-422e-9310-68c3ad4c12ff', to: '657d4ac9-8463-4262-a51b-c8b8bd5e505c'},
{from: '657d4ac9-8463-4262-a51b-c8b8bd5e505c', to: 'fe892e15-32c4-4b27-9b62-e087ad00ca8b'}
                            ]);