var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '30aed7b1-bd93-4d76-8022-56fff4eb0961', label: 'VALUE\nTRUE', color: '#31b0d5', title: 'Name: VALUE<br>Value: TRUE<br>Type: CONSTANT_VALUE<br>Id: 30aed7b1-bd93-4d76-8022-56fff4eb0961<br>Formula Expression: Formula String: VALUE; Formula Values: TRUE; Formula Ptg: TRUE; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7b44bfb8'},
{id: 'b61e080c-3235-4039-a42f-e08fd847a437', label: 'C3\nTRUE', color: '#31b0d5', title: 'Name: C3<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: b61e080c-3235-4039-a42f-e08fd847a437<br>Formula Expression: Formula String: VALUE; Formula Values: TRUE; Formula Ptg: TRUE; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7b44bfb8'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '30aed7b1-bd93-4d76-8022-56fff4eb0961', to: 'b61e080c-3235-4039-a42f-e08fd847a437'}
                            ]);