var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '51688ea7-5635-4e95-8286-8d56f2e10fa2', label: 'A2\n23.0', color: '#31b0d5', title: 'Name: A2<br>Value: 23.0<br>Type: CELL_WITH_VALUE<br>Id: 51688ea7-5635-4e95-8286-8d56f2e10fa2<br>Formula Expression: Formula String: A2; Formula Values: 23.0; Formula Ptg: 23.0; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5a9800f8'},
{id: 'c4f850a7-cda4-44be-93e0-48cc0d8a8f3b', label: 'B2\n56.0', color: '#31b0d5', title: 'Name: B2<br>Value: 56.0<br>Type: CELL_WITH_VALUE<br>Id: c4f850a7-cda4-44be-93e0-48cc0d8a8f3b<br>Formula Expression: Formula String: B2; Formula Values: 56.0; Formula Ptg: 56.0; Ptgs: B2 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5a9800f8'},
{id: '10d87089-048c-4b1a-bc4e-1f27cdd48c52', label: 'E5\nFALSE', color: '#31b0d5', title: 'Name: E5<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 10d87089-048c-4b1a-bc4e-1f27cdd48c52<br>Formula Expression: Formula String: EXACT(B2, A2); Formula Values: EXACT(56.0, 23.0); Formula Ptg: 56.0, 23.0 EXACT ; Ptgs: B2, A2 EXACT  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5a9800f8'},
{id: 'f83e0995-40da-4935-a4f0-ccd7f0d2cdda', label: 'EXACT\nFALSE', color: '#f0ad4e', title: 'Name: EXACT<br>Value: FALSE<br>Type: FUNCTION<br>Id: f83e0995-40da-4935-a4f0-ccd7f0d2cdda<br>Formula Expression: Formula String: EXACT(B2, A2); Formula Values: EXACT(56.0, 23.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5a9800f8'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'c4f850a7-cda4-44be-93e0-48cc0d8a8f3b', to: 'f83e0995-40da-4935-a4f0-ccd7f0d2cdda'},
{from: '51688ea7-5635-4e95-8286-8d56f2e10fa2', to: 'f83e0995-40da-4935-a4f0-ccd7f0d2cdda'},
{from: 'f83e0995-40da-4935-a4f0-ccd7f0d2cdda', to: '10d87089-048c-4b1a-bc4e-1f27cdd48c52'}
                            ]);