var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'f12a3b2f-f6b2-4c36-8ae8-ae6249c9029d', label: 'ACOSH\n5.192925985263684', color: '#f0ad4e', title: 'Name: ACOSH<br>Value: 5.192925985263684<br>Type: FUNCTION<br>Id: f12a3b2f-f6b2-4c36-8ae8-ae6249c9029d<br>Formula Expression: Formula String: ACOSH(C2); Formula Values: ACOSH(90.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@dbf57b3'},
{id: '3852b95e-3d87-48b7-bc33-0271bd49c2fc', label: 'E5\n5.192925985263684', color: '#31b0d5', title: 'Name: E5<br>Value: 5.192925985263684<br>Type: CELL_WITH_FORMULA<br>Id: 3852b95e-3d87-48b7-bc33-0271bd49c2fc<br>Formula Expression: Formula String: ACOSH(C2); Formula Values: ACOSH(90.0); Formula Ptg: 90.0 ACOSH ; Ptgs: C2 ACOSH  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@dbf57b3'},
{id: '23374965-d33b-47f8-b4bf-7032b624c596', label: 'C2\n90.0', color: '#31b0d5', title: 'Name: C2<br>Value: 90.0<br>Type: CELL_WITH_VALUE<br>Id: 23374965-d33b-47f8-b4bf-7032b624c596<br>Formula Expression: Formula String: C2; Formula Values: 90.0; Formula Ptg: 90.0; Ptgs: C2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@dbf57b3'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '23374965-d33b-47f8-b4bf-7032b624c596', to: 'f12a3b2f-f6b2-4c36-8ae8-ae6249c9029d'},
{from: 'f12a3b2f-f6b2-4c36-8ae8-ae6249c9029d', to: '3852b95e-3d87-48b7-bc33-0271bd49c2fc'}
                            ]);