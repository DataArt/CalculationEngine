var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '1748297c-acef-4701-bfb1-f2b7d846bf9d', label: 'DEVSQ\n48.0', color: '#f0ad4e', title: 'Name: DEVSQ<br>Value: 48.0<br>Type: FUNCTION<br>Id: 1748297c-acef-4701-bfb1-f2b7d846bf9d<br>Formula Expression: Formula String: DEVSQ(A1:A7); Formula Values: DEVSQ(4.0, 5.0, 8.0, 7.0, 11.0, 4.0, 3.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@b5c902'},
{id: '78d867f2-68b0-4422-97c5-b1b38d11e66b', label: 'A8\n48.0', color: '#31b0d5', title: 'Name: A8<br>Value: 48.0<br>Type: CELL_WITH_FORMULA<br>Id: 78d867f2-68b0-4422-97c5-b1b38d11e66b<br>Formula Expression: Formula String: DEVSQ(A1:A7); Formula Values: DEVSQ(4.0, 5.0, 8.0, 7.0, 11.0, 4.0, 3.0); Formula Ptg: 4.0, 5.0, 8.0, 7.0, 11.0, 4.0, 3.0 DEVSQ ; Ptgs: A1:A7 DEVSQ  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@b5c902'},
{id: '66dacd8f-48ec-490c-8aec-b18e889f85b2', label: 'A1:A7\n[[4.0], [5.0], [8.0], [7.0], [11.0], [4.0], [3.0]]', color: '#31b0d5', title: 'Name: A1:A7<br>Value: [[4.0], [5.0], [8.0], [7.0], [11.0], [4.0], [3.0]]<br>Type: RANGE<br>Id: 66dacd8f-48ec-490c-8aec-b18e889f85b2<br>Formula Expression: Formula String: A1:A7; Formula Values: [[4.0], [5.0], [8.0], [7.0], [11.0], [4.0], [3.0]]; Formula Ptg: [[4.0], [5.0], [8.0], [7.0], [11.0], [4.0], [3.0]]; Ptgs: A1:A7 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@b5c902'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '1748297c-acef-4701-bfb1-f2b7d846bf9d', to: '78d867f2-68b0-4422-97c5-b1b38d11e66b'},
{from: '66dacd8f-48ec-490c-8aec-b18e889f85b2', to: '1748297c-acef-4701-bfb1-f2b7d846bf9d'}
                            ]);