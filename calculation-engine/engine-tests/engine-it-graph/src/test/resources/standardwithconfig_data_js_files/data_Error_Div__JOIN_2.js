var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '31c61d20-5bdf-4022-8e13-2f3be35f9472', label: 'E6\n#DIV/0!', color: '#31b0d5', title: 'Name: E6<br>Value: #DIV/0!<br>Type: CELL_WITH_FORMULA<br>Id: 31c61d20-5bdf-4022-8e13-2f3be35f9472<br>Formula Expression: Formula String: C5 / C4; Formula Values: 67.0 / 0.0; Formula Ptg: 67.0 0.0 /; Ptgs: C5 C4 / Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@17c0274c'},
{id: '7ead89c6-f9e7-4001-80e6-ebe6d652538e', label: 'C5\n67.0', color: '#31b0d5', title: 'Name: C5<br>Value: 67.0<br>Type: CELL_WITH_VALUE<br>Id: 7ead89c6-f9e7-4001-80e6-ebe6d652538e<br>Formula Expression: Formula String: C5; Formula Values: 67.0; Formula Ptg: 67.0; Ptgs: C5 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@17c0274c'},
{id: 'c3f4130e-52e8-4cd5-ba5d-31296f95a74c', label: 'C4\n0.0', color: '#31b0d5', title: 'Name: C4<br>Value: 0.0<br>Type: CELL_WITH_VALUE<br>Id: c3f4130e-52e8-4cd5-ba5d-31296f95a74c<br>Formula Expression: Formula String: C4; Formula Values: 0.0; Formula Ptg: 0.0; Ptgs: C4 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@17c0274c'},
{id: 'b8365132-b080-4a9b-80a9-49b3ed2aabc3', label: '/\n#DIV/0!', color: '#f0ad4e', title: 'Name: /<br>Value: #DIV/0!<br>Type: OPERATOR<br>Id: b8365132-b080-4a9b-80a9-49b3ed2aabc3<br>Formula Expression: Formula String: C5 / C4; Formula Values: 67.0 / 0.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@17c0274c'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '7ead89c6-f9e7-4001-80e6-ebe6d652538e', to: 'b8365132-b080-4a9b-80a9-49b3ed2aabc3'},
{from: 'c3f4130e-52e8-4cd5-ba5d-31296f95a74c', to: 'b8365132-b080-4a9b-80a9-49b3ed2aabc3'},
{from: 'b8365132-b080-4a9b-80a9-49b3ed2aabc3', to: '31c61d20-5bdf-4022-8e13-2f3be35f9472'}
                            ]);