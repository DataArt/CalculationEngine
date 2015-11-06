var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'b5df77cf-4d04-4201-b4a2-a3eceb33dbdf', label: 'DAYS360\n24.0', color: '#f0ad4e', title: 'Name: DAYS360<br>Value: 24.0<br>Type: FUNCTION<br>Id: b5df77cf-4d04-4201-b4a2-a3eceb33dbdf<br>Formula Expression: Formula String: DAYS360(A2, A1); Formula Values: DAYS360(42029.0, 42005.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@43f82e78'},
{id: '581818e1-e8d1-4179-b85b-40add0af1af6', label: 'A1\n42005.0', color: '#31b0d5', title: 'Name: A1<br>Value: 42005.0<br>Type: CELL_WITH_VALUE<br>Id: 581818e1-e8d1-4179-b85b-40add0af1af6<br>Formula Expression: Formula String: A1; Formula Values: 42005.0; Formula Ptg: 42005.0; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@43f82e78'},
{id: 'dfb5776c-bd7b-4edd-aa3b-29a559f407ca', label: 'A2\n42029.0', color: '#31b0d5', title: 'Name: A2<br>Value: 42029.0<br>Type: CELL_WITH_VALUE<br>Id: dfb5776c-bd7b-4edd-aa3b-29a559f407ca<br>Formula Expression: Formula String: A2; Formula Values: 42029.0; Formula Ptg: 42029.0; Ptgs: A2 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@43f82e78'},
{id: '9757f486-ccd7-4354-a813-c264b3c1fec2', label: 'B5\n24.0', color: '#31b0d5', title: 'Name: B5<br>Value: 24.0<br>Type: CELL_WITH_FORMULA<br>Id: 9757f486-ccd7-4354-a813-c264b3c1fec2<br>Formula Expression: Formula String: DAYS360(A2, A1); Formula Values: DAYS360(42029.0, 42005.0); Formula Ptg: 42029.0, 42005.0 DAYS360 ; Ptgs: A2, A1 DAYS360  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@43f82e78'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '581818e1-e8d1-4179-b85b-40add0af1af6', to: 'b5df77cf-4d04-4201-b4a2-a3eceb33dbdf'},
{from: 'b5df77cf-4d04-4201-b4a2-a3eceb33dbdf', to: '9757f486-ccd7-4354-a813-c264b3c1fec2'},
{from: 'dfb5776c-bd7b-4edd-aa3b-29a559f407ca', to: 'b5df77cf-4d04-4201-b4a2-a3eceb33dbdf'}
                            ]);