var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '41f1ff34-7b19-421b-9433-5c38ad1172dd', label: 'A2\n20.0', color: '#31b0d5', title: 'Name: A2<br>Value: 20.0<br>Type: CELL_WITH_VALUE<br>Id: 41f1ff34-7b19-421b-9433-5c38ad1172dd<br>Formula Expression: Formula String: A2; Formula Values: 20.0; Formula Ptg: 20.0; Ptgs: A2 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@64d7b720'},
{id: '015e1d72-4b3b-4317-82ec-663f154ca48a', label: 'A4\n60.0', color: '#31b0d5', title: 'Name: A4<br>Value: 60.0<br>Type: CELL_WITH_FORMULA<br>Id: 015e1d72-4b3b-4317-82ec-663f154ca48a<br>Formula Expression: Formula String: A1 - A2; Formula Values: 80.0 - 20.0; Formula Ptg: 80.0 20.0 -; Ptgs: A1 A2 - Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@64d7b720'},
{id: 'b6966037-60ca-46c4-a097-3ee07c147628', label: 'A1\n80.0', color: '#31b0d5', title: 'Name: A1<br>Value: 80.0<br>Type: CELL_WITH_VALUE<br>Id: b6966037-60ca-46c4-a097-3ee07c147628<br>Formula Expression: Formula String: A1; Formula Values: 80.0; Formula Ptg: 80.0; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@64d7b720'},
{id: 'e10a9e43-5b42-43f7-8f60-34e130a418d9', label: '-\n60.0', color: '#f0ad4e', title: 'Name: -<br>Value: 60.0<br>Type: OPERATOR<br>Id: e10a9e43-5b42-43f7-8f60-34e130a418d9<br>Formula Expression: Formula String: A1 - A2; Formula Values: 80.0 - 20.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@64d7b720'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '41f1ff34-7b19-421b-9433-5c38ad1172dd', to: 'e10a9e43-5b42-43f7-8f60-34e130a418d9'},
{from: 'e10a9e43-5b42-43f7-8f60-34e130a418d9', to: '015e1d72-4b3b-4317-82ec-663f154ca48a'},
{from: 'b6966037-60ca-46c4-a097-3ee07c147628', to: 'e10a9e43-5b42-43f7-8f60-34e130a418d9'}
                            ]);