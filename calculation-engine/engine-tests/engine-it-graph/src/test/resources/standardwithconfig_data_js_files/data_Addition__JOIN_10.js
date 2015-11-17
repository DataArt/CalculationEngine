var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '96e277ef-83d6-4643-86e1-1929a80453e8', label: '+\n50.0', color: '#f0ad4e', title: 'Name: +<br>Value: 50.0<br>Type: OPERATOR<br>Id: 96e277ef-83d6-4643-86e1-1929a80453e8<br>Formula Expression: Formula String: A1 + A2; Formula Values: 20.0 + 30.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@56402642'},
{id: '47fa9539-1a4f-460f-a3b2-b50102b364df', label: 'A3\n50.0', color: '#31b0d5', title: 'Name: A3<br>Value: 50.0<br>Type: CELL_WITH_FORMULA<br>Id: 47fa9539-1a4f-460f-a3b2-b50102b364df<br>Formula Expression: Formula String: A1 + A2; Formula Values: 20.0 + 30.0; Formula Ptg: 20.0 30.0 +; Ptgs: A1 A2 + Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@56402642'},
{id: '4abfdc2e-c770-4f9a-929d-ddc8e158a46e', label: 'A2\n30.0', color: '#31b0d5', title: 'Name: A2<br>Value: 30.0<br>Type: CELL_WITH_VALUE<br>Id: 4abfdc2e-c770-4f9a-929d-ddc8e158a46e<br>Formula Expression: Formula String: A2; Formula Values: 30.0; Formula Ptg: 30.0; Ptgs: A2 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@56402642'},
{id: '4056a2cf-dcdf-4a34-8e4e-7b36921de9f8', label: 'A1\n20.0', color: '#31b0d5', title: 'Name: A1<br>Value: 20.0<br>Type: CELL_WITH_VALUE<br>Id: 4056a2cf-dcdf-4a34-8e4e-7b36921de9f8<br>Formula Expression: Formula String: A1; Formula Values: 20.0; Formula Ptg: 20.0; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@56402642'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '4056a2cf-dcdf-4a34-8e4e-7b36921de9f8', to: '96e277ef-83d6-4643-86e1-1929a80453e8'},
{from: '96e277ef-83d6-4643-86e1-1929a80453e8', to: '47fa9539-1a4f-460f-a3b2-b50102b364df'},
{from: '4abfdc2e-c770-4f9a-929d-ddc8e158a46e', to: '96e277ef-83d6-4643-86e1-1929a80453e8'}
                            ]);