var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '70e38fbe-4805-4720-bac8-301c716a151b', label: '/\n4.0', color: '#f0ad4e', title: 'Name: /<br>Value: 4.0<br>Type: OPERATOR<br>Id: 70e38fbe-4805-4720-bac8-301c716a151b<br>Formula Expression: Formula String: A1 / A2; Formula Values: 100.0 / 25.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3095c449'},
{id: 'bcc6b029-99c4-4afc-a875-01e0f981d05f', label: 'A1\n100.0', color: '#31b0d5', title: 'Name: A1<br>Value: 100.0<br>Type: CELL_WITH_VALUE<br>Id: bcc6b029-99c4-4afc-a875-01e0f981d05f<br>Formula Expression: Formula String: A1; Formula Values: 100.0; Formula Ptg: 100.0; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3095c449'},
{id: '7b7fdee2-7714-4366-85f9-32a4a2f1a687', label: 'A2\n25.0', color: '#31b0d5', title: 'Name: A2<br>Value: 25.0<br>Type: CELL_WITH_VALUE<br>Id: 7b7fdee2-7714-4366-85f9-32a4a2f1a687<br>Formula Expression: Formula String: A2; Formula Values: 25.0; Formula Ptg: 25.0; Ptgs: A2 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3095c449'},
{id: '677e42d3-bb55-4ed5-8005-7d93b6a74308', label: 'B3\n4.0', color: '#31b0d5', title: 'Name: B3<br>Value: 4.0<br>Type: CELL_WITH_FORMULA<br>Id: 677e42d3-bb55-4ed5-8005-7d93b6a74308<br>Formula Expression: Formula String: A1 / A2; Formula Values: 100.0 / 25.0; Formula Ptg: 100.0 25.0 /; Ptgs: A1 A2 / Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3095c449'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '7b7fdee2-7714-4366-85f9-32a4a2f1a687', to: '70e38fbe-4805-4720-bac8-301c716a151b'},
{from: 'bcc6b029-99c4-4afc-a875-01e0f981d05f', to: '70e38fbe-4805-4720-bac8-301c716a151b'},
{from: '70e38fbe-4805-4720-bac8-301c716a151b', to: '677e42d3-bb55-4ed5-8005-7d93b6a74308'}
                            ]);