var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'f0deedd8-1d8d-48c1-be8d-522070b7a93c', label: '[1]Sheet2!B4\n#REF!', color: '#31b0d5', title: 'Name: [1]Sheet2!B4<br>Value: #REF!<br>Type: CELL_WITH_VALUE<br>Id: f0deedd8-1d8d-48c1-be8d-522070b7a93c<br>Formula Expression: Formula String: [1]Sheet2!B4; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: [1]Sheet2!B4 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7af22a6'},
{id: 'fc964142-194a-4ebb-995e-1f4cdffef897', label: 'E6\n#REF!', color: '#31b0d5', title: 'Name: E6<br>Value: #REF!<br>Type: CELL_WITH_FORMULA<br>Id: fc964142-194a-4ebb-995e-1f4cdffef897<br>Formula Expression: Formula String: [1]Sheet2!B4; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: [1]Sheet2!B4 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7af22a6'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'f0deedd8-1d8d-48c1-be8d-522070b7a93c', to: 'fc964142-194a-4ebb-995e-1f4cdffef897'}
                            ]);