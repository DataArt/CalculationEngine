var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '8faaad81-5b41-4a45-ba0d-7ac47f1b11b8', label: 'A8\n48.0', color: '#31b0d5', title: 'Name: A8<br>Value: 48.0<br>Type: CELL_WITH_FORMULA<br>Id: 8faaad81-5b41-4a45-ba0d-7ac47f1b11b8<br>Formula Expression: Formula String: DEVSQ(A1:A7); Formula Values: DEVSQ(4.0, 5.0, 8.0, 7.0, 11.0, 4.0, 3.0); Formula Ptg: 4.0, 5.0, 8.0, 7.0, 11.0, 4.0, 3.0 DEVSQ ; Ptgs: A1:A7 DEVSQ  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@250e9655'},
{id: '8eadc9f4-f447-41df-8c89-e92cdc735d5e', label: 'A1:A7\n[[4.0], [5.0], [8.0], [7.0], [11.0], [4.0], [3.0]]', color: '#31b0d5', title: 'Name: A1:A7<br>Value: [[4.0], [5.0], [8.0], [7.0], [11.0], [4.0], [3.0]]<br>Type: RANGE<br>Id: 8eadc9f4-f447-41df-8c89-e92cdc735d5e<br>Formula Expression: Formula String: A1:A7; Formula Values: [[4.0], [5.0], [8.0], [7.0], [11.0], [4.0], [3.0]]; Formula Ptg: [[4.0], [5.0], [8.0], [7.0], [11.0], [4.0], [3.0]]; Ptgs: A1:A7 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@250e9655'},
{id: '01da97fb-6a66-4713-b5d4-ae66b28c0993', label: 'DEVSQ\n48.0', color: '#f0ad4e', title: 'Name: DEVSQ<br>Value: 48.0<br>Type: FUNCTION<br>Id: 01da97fb-6a66-4713-b5d4-ae66b28c0993<br>Formula Expression: Formula String: DEVSQ(A1:A7); Formula Values: DEVSQ(4.0, 5.0, 8.0, 7.0, 11.0, 4.0, 3.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@250e9655'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '8eadc9f4-f447-41df-8c89-e92cdc735d5e', to: '01da97fb-6a66-4713-b5d4-ae66b28c0993'},
{from: '01da97fb-6a66-4713-b5d4-ae66b28c0993', to: '8faaad81-5b41-4a45-ba0d-7ac47f1b11b8'}
                            ]);