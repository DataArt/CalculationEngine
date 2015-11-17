var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '35f26dad-b053-49f1-a562-c591f6adb7d3', label: 'E6\n#REF!', color: '#31b0d5', title: 'Name: E6<br>Value: #REF!<br>Type: CELL_WITH_FORMULA<br>Id: 35f26dad-b053-49f1-a562-c591f6adb7d3<br>Formula Expression: Formula String: VALUE; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1902ad0f'},
{id: '3afb88a6-5865-47f9-bb7c-be989c7b1e9b', label: 'D1\nA4', color: '#31b0d5', title: 'Name: D1<br>Value: A4<br>Type: CELL_WITH_VALUE<br>Id: 3afb88a6-5865-47f9-bb7c-be989c7b1e9b<br>Formula Expression: Formula String: D1; Formula Values: A4; Formula Ptg: A4; Ptgs: D1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1902ad0f'},
{id: '4dccf06b-6f32-47b6-bb5b-d8572a57c8ef', label: 'E7\nA4', color: '#31b0d5', title: 'Name: E7<br>Value: A4<br>Type: CELL_WITH_FORMULA<br>Id: 4dccf06b-6f32-47b6-bb5b-d8572a57c8ef<br>Formula Expression: Formula String: D1; Formula Values: A4; Formula Ptg: A4; Ptgs: D1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1902ad0f'},
{id: '7a22f7ff-e5e0-47d3-ba94-054b6b146037', label: 'VALUE\n#REF!', color: '#31b0d5', title: 'Name: VALUE<br>Value: #REF!<br>Type: CONSTANT_VALUE<br>Id: 7a22f7ff-e5e0-47d3-ba94-054b6b146037<br>Formula Expression: Formula String: VALUE; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1902ad0f'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '7a22f7ff-e5e0-47d3-ba94-054b6b146037', to: '35f26dad-b053-49f1-a562-c591f6adb7d3'},
{from: '3afb88a6-5865-47f9-bb7c-be989c7b1e9b', to: '4dccf06b-6f32-47b6-bb5b-d8572a57c8ef'}
                            ]);