var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '42bfa1dc-879b-4e5d-a545-b5d47405aa88', label: '+\n50.0', color: '#f0ad4e', title: 'Name: +<br>Value: 50.0<br>Type: OPERATOR<br>Id: 42bfa1dc-879b-4e5d-a545-b5d47405aa88<br>Formula Expression: Formula String: A1 + A2; Formula Values: 20.0 + 30.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@56402642'},
{id: 'b3f06296-b7e2-4eee-a896-2f9dd9fc80eb', label: 'A3\n50.0', color: '#31b0d5', title: 'Name: A3<br>Value: 50.0<br>Type: CELL_WITH_FORMULA<br>Id: b3f06296-b7e2-4eee-a896-2f9dd9fc80eb<br>Formula Expression: Formula String: A1 + A2; Formula Values: 20.0 + 30.0; Formula Ptg: 20.0 30.0 +; Ptgs: A1 A2 + Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@56402642'},
{id: 'ea5322a5-943b-4354-b591-c4feda0c612b', label: 'A2\n30.0', color: '#31b0d5', title: 'Name: A2<br>Value: 30.0<br>Type: CELL_WITH_VALUE<br>Id: ea5322a5-943b-4354-b591-c4feda0c612b<br>Formula Expression: Formula String: A2; Formula Values: 30.0; Formula Ptg: 30.0; Ptgs: A2 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@56402642'},
{id: 'e933e291-bcac-4752-ad0f-99f1a97151f8', label: 'A1\n20.0', color: '#31b0d5', title: 'Name: A1<br>Value: 20.0<br>Type: CELL_WITH_VALUE<br>Id: e933e291-bcac-4752-ad0f-99f1a97151f8<br>Formula Expression: Formula String: A1; Formula Values: 20.0; Formula Ptg: 20.0; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@56402642'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'e933e291-bcac-4752-ad0f-99f1a97151f8', to: '42bfa1dc-879b-4e5d-a545-b5d47405aa88'},
{from: '42bfa1dc-879b-4e5d-a545-b5d47405aa88', to: 'b3f06296-b7e2-4eee-a896-2f9dd9fc80eb'},
{from: 'ea5322a5-943b-4354-b591-c4feda0c612b', to: '42bfa1dc-879b-4e5d-a545-b5d47405aa88'}
                            ]);