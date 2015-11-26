var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'e471dec7-09e0-4788-a595-8f141bf6b838', label: 'MODE\n4.0', color: '#f0ad4e', title: 'Name: MODE<br>Alias: null<br>Value: 4.0<br>Type: FUNCTION<br>Id: e471dec7-09e0-4788-a595-8f141bf6b838<br>Formula Expression: Formula String: MODE(A1:E4); Formula Values: MODE(12.0, 2.0, 3.0, 4.0, 5.0, 6.0, 4.0, 7.0, 65.0, 7.0, 4.0, 6.0, 8.0, 367.0, 57.0, 45.0, 2.0, 89.0, 46.0, 46.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@379ab47b'},
{id: '561f190c-7474-4447-a2fb-611e341500d8', label: 'E5\n4.0', color: '#31b0d5', title: 'Name: E5<br>Alias: null<br>Value: 4.0<br>Type: CELL_WITH_FORMULA<br>Id: 561f190c-7474-4447-a2fb-611e341500d8<br>Formula Expression: Formula String: MODE(A1:E4); Formula Values: MODE(12.0, 2.0, 3.0, 4.0, 5.0, 6.0, 4.0, 7.0, 65.0, 7.0, 4.0, 6.0, 8.0, 367.0, 57.0, 45.0, 2.0, 89.0, 46.0, 46.0); Formula Ptg: 12.0, 2.0, 3.0, 4.0, 5.0, 6.0, 4.0, 7.0, 65.0, 7.0, 4.0, 6.0, 8.0, 367.0, 57.0, 45.0, 2.0, 89.0, 46.0, 46.0 MODE ; Ptgs: A1:E4 MODE  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@379ab47b'},
{id: 'bd4b6ff2-71eb-4743-a108-64899ecede4b', label: 'A1:E4\n...', color: '#31b0d5', title: 'Name: A1:E4<br>Alias: null<br>Value: [[12.0, 2.0, 3.0, 4.0, 5.0], [6.0, 4.0, 7.0, 65.0, 7.0], [4.0, 6.0, 8.0, 367.0, 57.0], [45.0, 2.0, 89.0, 46.0, 46.0]]<br>Type: RANGE<br>Id: bd4b6ff2-71eb-4743-a108-64899ecede4b<br>Formula Expression: Formula String: A1:E4; Formula Values: [[12.0, 2.0, 3.0, 4.0, 5.0], [6.0, 4.0, 7.0, 65.0, 7.0], [4.0, 6.0, 8.0, 367.0, 57.0], [45.0, 2.0, 89.0, 46.0, 46.0]]; Formula Ptg: [[12.0, 2.0, 3.0, 4.0, 5.0], [6.0, 4.0, 7.0, 65.0, 7.0], [4.0, 6.0, 8.0, 367.0, 57.0], [45.0, 2.0, 89.0, 46.0, 46.0]]; Ptgs: A1:E4 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@379ab47b'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'e471dec7-09e0-4788-a595-8f141bf6b838', to: '561f190c-7474-4447-a2fb-611e341500d8'},
{from: 'bd4b6ff2-71eb-4743-a108-64899ecede4b', to: 'e471dec7-09e0-4788-a595-8f141bf6b838'}
                            ]);