var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '13f071e7-c40b-49f2-9100-2aea3b9bd0e2', label: 'A1\n80.0', color: '#31b0d5', title: 'Name: A1<br>Value: 80.0<br>Type: CELL_WITH_VALUE<br>Id: 13f071e7-c40b-49f2-9100-2aea3b9bd0e2<br>Formula Expression: Formula String: A1; Formula Values: 80.0; Formula Ptg: 80.0; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@29ad44e3'},
{id: '7027c02e-0b94-484f-a2ed-f37acbcf564a', label: 'A2\n20.0', color: '#31b0d5', title: 'Name: A2<br>Value: 20.0<br>Type: CELL_WITH_VALUE<br>Id: 7027c02e-0b94-484f-a2ed-f37acbcf564a<br>Formula Expression: Formula String: A2; Formula Values: 20.0; Formula Ptg: 20.0; Ptgs: A2 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@29ad44e3'},
{id: 'fefd17a2-332c-45e6-bccb-04bf42327fb6', label: '-\n60.0', color: '#f0ad4e', title: 'Name: -<br>Value: 60.0<br>Type: OPERATOR<br>Id: fefd17a2-332c-45e6-bccb-04bf42327fb6<br>Formula Expression: Formula String: A1 - A2; Formula Values: 80.0 - 20.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@29ad44e3'},
{id: '232b74d9-4f5e-4581-8080-9d63c7539df5', label: 'A4\n60.0', color: '#31b0d5', title: 'Name: A4<br>Value: 60.0<br>Type: CELL_WITH_FORMULA<br>Id: 232b74d9-4f5e-4581-8080-9d63c7539df5<br>Formula Expression: Formula String: A1 - A2; Formula Values: 80.0 - 20.0; Formula Ptg: 80.0 20.0 -; Ptgs: A1 A2 - Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@29ad44e3'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'fefd17a2-332c-45e6-bccb-04bf42327fb6', to: '232b74d9-4f5e-4581-8080-9d63c7539df5'},
{from: '7027c02e-0b94-484f-a2ed-f37acbcf564a', to: 'fefd17a2-332c-45e6-bccb-04bf42327fb6'},
{from: '13f071e7-c40b-49f2-9100-2aea3b9bd0e2', to: 'fefd17a2-332c-45e6-bccb-04bf42327fb6'}
                            ]);