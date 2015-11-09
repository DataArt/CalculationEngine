var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'ddcb1008-df26-4379-a5e5-eb4ed5b246d8', label: 'A2\n7.0', color: '#31b0d5', title: 'Name: A2<br>Value: 7.0<br>Type: CELL_WITH_VALUE<br>Id: ddcb1008-df26-4379-a5e5-eb4ed5b246d8<br>Formula Expression: Formula String: A2; Formula Values: 7.0; Formula Ptg: 7.0; Ptgs: A2 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@43549c6c'},
{id: '37ab13c3-2b0a-471e-9f52-488cbed26b9a', label: 'A1\n5.0', color: '#31b0d5', title: 'Name: A1<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 37ab13c3-2b0a-471e-9f52-488cbed26b9a<br>Formula Expression: Formula String: A1; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@43549c6c'},
{id: '6276c364-bbe8-4487-88d0-107648c0e813', label: 'A3\n35.0', color: '#31b0d5', title: 'Name: A3<br>Value: 35.0<br>Type: CELL_WITH_FORMULA<br>Id: 6276c364-bbe8-4487-88d0-107648c0e813<br>Formula Expression: Formula String: A1 * A2; Formula Values: 5.0 * 7.0; Formula Ptg: 5.0 7.0 *; Ptgs: A1 A2 * Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@43549c6c'},
{id: '3b58cbc6-dc5a-42d8-8c2c-95de3070645e', label: '*\n35.0', color: '#f0ad4e', title: 'Name: *<br>Value: 35.0<br>Type: OPERATOR<br>Id: 3b58cbc6-dc5a-42d8-8c2c-95de3070645e<br>Formula Expression: Formula String: A1 * A2; Formula Values: 5.0 * 7.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@43549c6c'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'ddcb1008-df26-4379-a5e5-eb4ed5b246d8', to: '3b58cbc6-dc5a-42d8-8c2c-95de3070645e'},
{from: '3b58cbc6-dc5a-42d8-8c2c-95de3070645e', to: '6276c364-bbe8-4487-88d0-107648c0e813'},
{from: '37ab13c3-2b0a-471e-9f52-488cbed26b9a', to: '3b58cbc6-dc5a-42d8-8c2c-95de3070645e'}
                            ]);