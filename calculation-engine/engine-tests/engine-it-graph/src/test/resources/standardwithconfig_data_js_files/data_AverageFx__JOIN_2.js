var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'ebbeb313-a32a-430a-b825-f3349ab0489f', label: 'E5\n5.2', color: '#31b0d5', title: 'Name: E5<br>Value: 5.2<br>Type: CELL_WITH_FORMULA<br>Id: ebbeb313-a32a-430a-b825-f3349ab0489f<br>Formula Expression: Formula String: AVERAGE(A1:E1); Formula Values: AVERAGE(12.0, 2.0, 3.0, 4.0, 5.0); Formula Ptg: 12.0, 2.0, 3.0, 4.0, 5.0 AVERAGE ; Ptgs: A1:E1 AVERAGE  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5974b7e8'},
{id: '8efda258-0b9b-40c0-be77-05f45b6838f0', label: 'A1:E1\n[[12.0, 2.0, 3.0, 4.0, 5.0]]', color: '#31b0d5', title: 'Name: A1:E1<br>Value: [[12.0, 2.0, 3.0, 4.0, 5.0]]<br>Type: RANGE<br>Id: 8efda258-0b9b-40c0-be77-05f45b6838f0<br>Formula Expression: Formula String: A1:E1; Formula Values: [[12.0, 2.0, 3.0, 4.0, 5.0]]; Formula Ptg: [[12.0, 2.0, 3.0, 4.0, 5.0]]; Ptgs: A1:E1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5974b7e8'},
{id: '6ebf2321-d255-4e5e-a6fa-17e23d880bdd', label: 'AVERAGE\n5.2', color: '#f0ad4e', title: 'Name: AVERAGE<br>Value: 5.2<br>Type: FUNCTION<br>Id: 6ebf2321-d255-4e5e-a6fa-17e23d880bdd<br>Formula Expression: Formula String: AVERAGE(A1:E1); Formula Values: AVERAGE(12.0, 2.0, 3.0, 4.0, 5.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5974b7e8'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '8efda258-0b9b-40c0-be77-05f45b6838f0', to: '6ebf2321-d255-4e5e-a6fa-17e23d880bdd'},
{from: '6ebf2321-d255-4e5e-a6fa-17e23d880bdd', to: 'ebbeb313-a32a-430a-b825-f3349ab0489f'}
                            ]);