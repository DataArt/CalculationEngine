var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '05058bb2-9e0f-4861-b718-b43a3d761945', label: '+\n51.0', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 51.0<br>Type: OPERATOR<br>Id: 05058bb2-9e0f-4861-b718-b43a3d761945<br>Formula Expression: Formula String: B1 + A1 + C1; Formula Values: 32.0 + 15.0 + 4.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@436a4e4b'},
{id: '9a2cade2-a8d9-4356-bb37-1bbc4f6f119a', label: 'B3\n51.0', color: '#31b0d5', title: 'Name: B3<br>Alias: null<br>Value: 51.0<br>Type: CELL_WITH_FORMULA<br>Id: 9a2cade2-a8d9-4356-bb37-1bbc4f6f119a<br>Formula Expression: Formula String: B1 + A1 + C1; Formula Values: 32.0 + 15.0 + 4.0; Formula Ptg: 32.0 15.0 + 4.0 +; Ptgs: B1 A1 + C1 + Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@436a4e4b'},
{id: '96ac06c9-b219-4cbf-a6e0-c856f6377fe1', label: 'B1\n32.0', color: '#31b0d5', title: 'Name: B1<br>Alias: My_Age<br>Value: 32.0<br>Type: CELL_WITH_VALUE<br>Id: 96ac06c9-b219-4cbf-a6e0-c856f6377fe1<br>Formula Expression: Formula String: B1; Formula Values: 32.0; Formula Ptg: 32.0; Ptgs: B1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@436a4e4b'},
{id: '3f0a2db5-93fb-4c66-b306-8640d34b4a33', label: 'C1\n4.0', color: '#31b0d5', title: 'Name: C1<br>Alias: null<br>Value: 4.0<br>Type: CELL_WITH_VALUE<br>Id: 3f0a2db5-93fb-4c66-b306-8640d34b4a33<br>Formula Expression: Formula String: C1; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: C1 Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@436a4e4b'},
{id: '5290c088-20a3-44a8-bc87-c19489e78348', label: '+\n47.0', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 47.0<br>Type: OPERATOR<br>Id: 5290c088-20a3-44a8-bc87-c19489e78348<br>Formula Expression: Formula String: B1 + A1; Formula Values: 32.0 + 15.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@436a4e4b'},
{id: 'defb0ab9-ae0b-4386-be76-acdd1bed3bfc', label: 'A1\n15.0', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: 15.0<br>Type: CELL_WITH_VALUE<br>Id: defb0ab9-ae0b-4386-be76-acdd1bed3bfc<br>Formula Expression: Formula String: A1; Formula Values: 15.0; Formula Ptg: 15.0; Ptgs: A1 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@436a4e4b'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '96ac06c9-b219-4cbf-a6e0-c856f6377fe1', to: '5290c088-20a3-44a8-bc87-c19489e78348'},
{from: '3f0a2db5-93fb-4c66-b306-8640d34b4a33', to: '05058bb2-9e0f-4861-b718-b43a3d761945'},
{from: 'defb0ab9-ae0b-4386-be76-acdd1bed3bfc', to: '5290c088-20a3-44a8-bc87-c19489e78348'},
{from: '05058bb2-9e0f-4861-b718-b43a3d761945', to: '9a2cade2-a8d9-4356-bb37-1bbc4f6f119a'},
{from: '5290c088-20a3-44a8-bc87-c19489e78348', to: '05058bb2-9e0f-4861-b718-b43a3d761945'}
                            ]);