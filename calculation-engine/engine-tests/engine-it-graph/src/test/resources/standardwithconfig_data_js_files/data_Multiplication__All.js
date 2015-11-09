var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '8d947259-6f75-48aa-8d29-22bc04d6ef21', label: '*\n35.0', color: '#f0ad4e', title: 'Name: *<br>Value: 35.0<br>Type: OPERATOR<br>Id: 8d947259-6f75-48aa-8d29-22bc04d6ef21<br>Formula Expression: Formula String: A1 * A2; Formula Values: 5.0 * 7.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@62a09668'},
{id: '31887dda-0cc5-47b4-8db4-0ceb029aa7ae', label: 'A3\n35.0', color: '#31b0d5', title: 'Name: A3<br>Value: 35.0<br>Type: CELL_WITH_FORMULA<br>Id: 31887dda-0cc5-47b4-8db4-0ceb029aa7ae<br>Formula Expression: Formula String: A1 * A2; Formula Values: 5.0 * 7.0; Formula Ptg: 5.0 7.0 *; Ptgs: A1 A2 * Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@62a09668'},
{id: '09547cf9-59a0-47fb-9e32-aeef649a3a91', label: 'A1\n5.0', color: '#31b0d5', title: 'Name: A1<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 09547cf9-59a0-47fb-9e32-aeef649a3a91<br>Formula Expression: Formula String: A1; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@62a09668'},
{id: '5a47f2b1-3e6d-4218-8ba8-a067211f5686', label: 'A2\n7.0', color: '#31b0d5', title: 'Name: A2<br>Value: 7.0<br>Type: CELL_WITH_VALUE<br>Id: 5a47f2b1-3e6d-4218-8ba8-a067211f5686<br>Formula Expression: Formula String: A2; Formula Values: 7.0; Formula Ptg: 7.0; Ptgs: A2 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@62a09668'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '09547cf9-59a0-47fb-9e32-aeef649a3a91', to: '8d947259-6f75-48aa-8d29-22bc04d6ef21'},
{from: '5a47f2b1-3e6d-4218-8ba8-a067211f5686', to: '8d947259-6f75-48aa-8d29-22bc04d6ef21'},
{from: '8d947259-6f75-48aa-8d29-22bc04d6ef21', to: '31887dda-0cc5-47b4-8db4-0ceb029aa7ae'}
                            ]);