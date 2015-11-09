var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '4a14b4e4-e188-4f18-842e-ae9c84f0a3ac', label: 'A2\n7.0', color: '#31b0d5', title: 'Name: A2<br>Value: 7.0<br>Type: CELL_WITH_VALUE<br>Id: 4a14b4e4-e188-4f18-842e-ae9c84f0a3ac<br>Formula Expression: Formula String: A2; Formula Values: 7.0; Formula Ptg: 7.0; Ptgs: A2 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@339b1c34'},
{id: 'a336804e-1dd9-49b7-86d6-aef63d36af41', label: '*\n35.0', color: '#f0ad4e', title: 'Name: *<br>Value: 35.0<br>Type: OPERATOR<br>Id: a336804e-1dd9-49b7-86d6-aef63d36af41<br>Formula Expression: Formula String: A1 * A2; Formula Values: 5.0 * 7.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@339b1c34'},
{id: 'cac61515-61e1-4196-bb5d-03243d5f84c8', label: 'A1\n5.0', color: '#31b0d5', title: 'Name: A1<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: cac61515-61e1-4196-bb5d-03243d5f84c8<br>Formula Expression: Formula String: A1; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@339b1c34'},
{id: 'a01973d1-3b2f-43cf-895f-bcd04ac78282', label: 'A3\n35.0', color: '#31b0d5', title: 'Name: A3<br>Value: 35.0<br>Type: CELL_WITH_FORMULA<br>Id: a01973d1-3b2f-43cf-895f-bcd04ac78282<br>Formula Expression: Formula String: A1 * A2; Formula Values: 5.0 * 7.0; Formula Ptg: 5.0 7.0 *; Ptgs: A1 A2 * Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@339b1c34'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'a336804e-1dd9-49b7-86d6-aef63d36af41', to: 'a01973d1-3b2f-43cf-895f-bcd04ac78282'},
{from: '4a14b4e4-e188-4f18-842e-ae9c84f0a3ac', to: 'a336804e-1dd9-49b7-86d6-aef63d36af41'},
{from: 'cac61515-61e1-4196-bb5d-03243d5f84c8', to: 'a336804e-1dd9-49b7-86d6-aef63d36af41'}
                            ]);