var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '90271aec-8bab-45e2-86c0-f5db2cefc510', label: 'A8\n48.0', color: '#31b0d5', title: 'Name: A8<br>Value: 48.0<br>Type: CELL_WITH_FORMULA<br>Id: 90271aec-8bab-45e2-86c0-f5db2cefc510<br>Formula Expression: Formula String: DEVSQ(A1:A7); Formula Values: DEVSQ(4.0, 5.0, 8.0, 7.0, 11.0, 4.0, 3.0); Formula Ptg: 4.0, 5.0, 8.0, 7.0, 11.0, 4.0, 3.0 DEVSQ ; Ptgs: A1:A7 DEVSQ  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@250e9655'},
{id: '9edfed33-6066-4dfe-8e60-c54912c2fd3a', label: 'A1:A7\n[[4.0], [5.0], [8.0], [7.0], [11.0], [4.0], [3.0]]', color: '#31b0d5', title: 'Name: A1:A7<br>Value: [[4.0], [5.0], [8.0], [7.0], [11.0], [4.0], [3.0]]<br>Type: RANGE<br>Id: 9edfed33-6066-4dfe-8e60-c54912c2fd3a<br>Formula Expression: Formula String: A1:A7; Formula Values: [[4.0], [5.0], [8.0], [7.0], [11.0], [4.0], [3.0]]; Formula Ptg: [[4.0], [5.0], [8.0], [7.0], [11.0], [4.0], [3.0]]; Ptgs: A1:A7 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@250e9655'},
{id: '6b9af7b2-82f1-421b-8aec-4b235577b4bc', label: 'DEVSQ\n48.0', color: '#f0ad4e', title: 'Name: DEVSQ<br>Value: 48.0<br>Type: FUNCTION<br>Id: 6b9af7b2-82f1-421b-8aec-4b235577b4bc<br>Formula Expression: Formula String: DEVSQ(A1:A7); Formula Values: DEVSQ(4.0, 5.0, 8.0, 7.0, 11.0, 4.0, 3.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@250e9655'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '9edfed33-6066-4dfe-8e60-c54912c2fd3a', to: '6b9af7b2-82f1-421b-8aec-4b235577b4bc'},
{from: '6b9af7b2-82f1-421b-8aec-4b235577b4bc', to: '90271aec-8bab-45e2-86c0-f5db2cefc510'}
                            ]);