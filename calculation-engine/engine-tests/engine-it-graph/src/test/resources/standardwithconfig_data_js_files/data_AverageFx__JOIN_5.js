var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'ad6587b0-ca5b-4273-85b7-997ace44e2ee', label: 'A1:E1\n[[12.0, 2.0, 3.0, 4.0, 5.0]]', color: '#31b0d5', title: 'Name: A1:E1<br>Value: [[12.0, 2.0, 3.0, 4.0, 5.0]]<br>Type: RANGE<br>Id: ad6587b0-ca5b-4273-85b7-997ace44e2ee<br>Formula Expression: Formula String: A1:E1; Formula Values: [[12.0, 2.0, 3.0, 4.0, 5.0]]; Formula Ptg: [[12.0, 2.0, 3.0, 4.0, 5.0]]; Ptgs: A1:E1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7241872c'},
{id: '9abb0709-c572-4132-917f-ba62fb4ff632', label: 'E5\n5.2', color: '#31b0d5', title: 'Name: E5<br>Value: 5.2<br>Type: CELL_WITH_FORMULA<br>Id: 9abb0709-c572-4132-917f-ba62fb4ff632<br>Formula Expression: Formula String: AVERAGE(A1:E1); Formula Values: AVERAGE(12.0, 2.0, 3.0, 4.0, 5.0); Formula Ptg: 12.0, 2.0, 3.0, 4.0, 5.0 AVERAGE ; Ptgs: A1:E1 AVERAGE  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7241872c'},
{id: '7e5ee0cc-b440-4c4f-bbe0-762b2f4a776d', label: 'AVERAGE\n5.2', color: '#f0ad4e', title: 'Name: AVERAGE<br>Value: 5.2<br>Type: FUNCTION<br>Id: 7e5ee0cc-b440-4c4f-bbe0-762b2f4a776d<br>Formula Expression: Formula String: AVERAGE(A1:E1); Formula Values: AVERAGE(12.0, 2.0, 3.0, 4.0, 5.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7241872c'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '7e5ee0cc-b440-4c4f-bbe0-762b2f4a776d', to: '9abb0709-c572-4132-917f-ba62fb4ff632'},
{from: 'ad6587b0-ca5b-4273-85b7-997ace44e2ee', to: '7e5ee0cc-b440-4c4f-bbe0-762b2f4a776d'}
                            ]);