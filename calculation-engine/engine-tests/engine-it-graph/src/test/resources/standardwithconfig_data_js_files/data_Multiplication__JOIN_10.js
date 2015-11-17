var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '85ba2936-15f4-4d9b-b5e4-cd75bedcb1b9', label: 'A2\n7.0', color: '#31b0d5', title: 'Name: A2<br>Value: 7.0<br>Type: CELL_WITH_VALUE<br>Id: 85ba2936-15f4-4d9b-b5e4-cd75bedcb1b9<br>Formula Expression: Formula String: A2; Formula Values: 7.0; Formula Ptg: 7.0; Ptgs: A2 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@43549c6c'},
{id: '5b938584-ad50-4dc3-a405-11a965406c2b', label: 'A1\n5.0', color: '#31b0d5', title: 'Name: A1<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 5b938584-ad50-4dc3-a405-11a965406c2b<br>Formula Expression: Formula String: A1; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@43549c6c'},
{id: '93f1254a-a9c4-4e84-82c2-088662a9a9c4', label: 'A3\n35.0', color: '#31b0d5', title: 'Name: A3<br>Value: 35.0<br>Type: CELL_WITH_FORMULA<br>Id: 93f1254a-a9c4-4e84-82c2-088662a9a9c4<br>Formula Expression: Formula String: A1 * A2; Formula Values: 5.0 * 7.0; Formula Ptg: 5.0 7.0 *; Ptgs: A1 A2 * Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@43549c6c'},
{id: 'cfdc5f71-ee13-477b-b4a0-9e4c3de3db74', label: '*\n35.0', color: '#f0ad4e', title: 'Name: *<br>Value: 35.0<br>Type: OPERATOR<br>Id: cfdc5f71-ee13-477b-b4a0-9e4c3de3db74<br>Formula Expression: Formula String: A1 * A2; Formula Values: 5.0 * 7.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@43549c6c'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '85ba2936-15f4-4d9b-b5e4-cd75bedcb1b9', to: 'cfdc5f71-ee13-477b-b4a0-9e4c3de3db74'},
{from: 'cfdc5f71-ee13-477b-b4a0-9e4c3de3db74', to: '93f1254a-a9c4-4e84-82c2-088662a9a9c4'},
{from: '5b938584-ad50-4dc3-a405-11a965406c2b', to: 'cfdc5f71-ee13-477b-b4a0-9e4c3de3db74'}
                            ]);