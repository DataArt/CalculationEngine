var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'be398bf1-bdd6-4ed9-a8ff-1ae3a7338a00', label: 'A1:E1\n[[12.0, 2.0, 3.0, 4.0, 5.0]]', color: '#31b0d5', title: 'Name: A1:E1<br>Value: [[12.0, 2.0, 3.0, 4.0, 5.0]]<br>Type: RANGE<br>Id: be398bf1-bdd6-4ed9-a8ff-1ae3a7338a00<br>Formula Expression: Formula String: A1:E1; Formula Values: [[12.0, 2.0, 3.0, 4.0, 5.0]]; Formula Ptg: [[12.0, 2.0, 3.0, 4.0, 5.0]]; Ptgs: A1:E1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@19d76106'},
{id: '68c531d3-884b-485f-b693-59aeab191025', label: 'E5\n5.2', color: '#31b0d5', title: 'Name: E5<br>Value: 5.2<br>Type: CELL_WITH_FORMULA<br>Id: 68c531d3-884b-485f-b693-59aeab191025<br>Formula Expression: Formula String: AVERAGE(A1:E1); Formula Values: AVERAGE(12.0, 2.0, 3.0, 4.0, 5.0); Formula Ptg: 12.0, 2.0, 3.0, 4.0, 5.0 AVERAGE ; Ptgs: A1:E1 AVERAGE  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@19d76106'},
{id: '71d06bf6-470e-4a20-8be1-e37798fd888e', label: 'AVERAGE\n5.2', color: '#f0ad4e', title: 'Name: AVERAGE<br>Value: 5.2<br>Type: FUNCTION<br>Id: 71d06bf6-470e-4a20-8be1-e37798fd888e<br>Formula Expression: Formula String: AVERAGE(A1:E1); Formula Values: AVERAGE(12.0, 2.0, 3.0, 4.0, 5.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@19d76106'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'be398bf1-bdd6-4ed9-a8ff-1ae3a7338a00', to: '71d06bf6-470e-4a20-8be1-e37798fd888e'},
{from: '71d06bf6-470e-4a20-8be1-e37798fd888e', to: '68c531d3-884b-485f-b693-59aeab191025'}
                            ]);