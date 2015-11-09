var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '0a1176d1-afe4-422c-87c1-9ed6a80def5d', label: 'B4\n6.0', color: '#31b0d5', title: 'Name: B4<br>Value: 6.0<br>Type: CELL_WITH_VALUE<br>Id: 0a1176d1-afe4-422c-87c1-9ed6a80def5d<br>Formula Expression: Formula String: B4; Formula Values: 6.0; Formula Ptg: 6.0; Ptgs: B4 Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5e0e97b6'},
{id: '931bebad-399a-4285-bfa7-4f553505a013', label: '>\nFALSE', color: '#f0ad4e', title: 'Name: ><br>Value: FALSE<br>Type: OPERATOR<br>Id: 931bebad-399a-4285-bfa7-4f553505a013<br>Formula Expression: Formula String: A3 > A4; Formula Values: 3.0 > 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5e0e97b6'},
{id: '914b57bf-be24-4ea6-9451-4f0efaf32f14', label: 'A3\n3.0', color: '#31b0d5', title: 'Name: A3<br>Value: 3.0<br>Type: CELL_WITH_VALUE<br>Id: 914b57bf-be24-4ea6-9451-4f0efaf32f14<br>Formula Expression: Formula String: A3; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: A3 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5e0e97b6'},
{id: 'f76eb9fb-e5fd-4f78-a5c8-0d27e3ee86db', label: 'A1\n6.0', color: '#31b0d5', title: 'Name: A1<br>Value: 6.0<br>Type: CELL_WITH_FORMULA<br>Id: f76eb9fb-e5fd-4f78-a5c8-0d27e3ee86db<br>Formula Expression: Formula String:  + IF(A3>A4,B3,B4); Formula Values:  + IF(3.0 > 5.0, 6.0); Formula Ptg:  6.0, 3.0 5.0 > IF  +; Ptgs:  B4, A3 A4 > IF  + Index in Ptgs: 9 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5e0e97b6'},
{id: '5132e331-57f1-46c6-8b43-9385b760049b', label: 'A4\n5.0', color: '#31b0d5', title: 'Name: A4<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 5132e331-57f1-46c6-8b43-9385b760049b<br>Formula Expression: Formula String: A4; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: A4 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5e0e97b6'},
{id: 'bc8f2279-7532-4474-9c50-d339f6268539', label: 'IF\n6.0', color: '#f0ad4e', title: 'Name: IF<br>Value: 6.0<br>Type: IF<br>Id: bc8f2279-7532-4474-9c50-d339f6268539<br>Formula Expression: Formula String: IF(A3>A4,B3,B4); Formula Values: IF(3.0 > 5.0, 6.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5e0e97b6'},
{id: 'fd38b1ee-03c2-4f80-8eb6-daaafac1603d', label: '+\n6.0', color: '#f0ad4e', title: 'Name: +<br>Value: 6.0<br>Type: OPERATOR<br>Id: fd38b1ee-03c2-4f80-8eb6-daaafac1603d<br>Formula Expression: Formula String:  + IF(A3>A4,B3,B4); Formula Values:  + IF(3.0 > 5.0, 6.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 9 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5e0e97b6'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '914b57bf-be24-4ea6-9451-4f0efaf32f14', to: '931bebad-399a-4285-bfa7-4f553505a013'},
{from: 'bc8f2279-7532-4474-9c50-d339f6268539', to: 'fd38b1ee-03c2-4f80-8eb6-daaafac1603d'},
{from: '0a1176d1-afe4-422c-87c1-9ed6a80def5d', to: 'bc8f2279-7532-4474-9c50-d339f6268539'},
{from: '931bebad-399a-4285-bfa7-4f553505a013', to: 'bc8f2279-7532-4474-9c50-d339f6268539'},
{from: '5132e331-57f1-46c6-8b43-9385b760049b', to: '931bebad-399a-4285-bfa7-4f553505a013'},
{from: 'fd38b1ee-03c2-4f80-8eb6-daaafac1603d', to: 'f76eb9fb-e5fd-4f78-a5c8-0d27e3ee86db'}
                            ]);