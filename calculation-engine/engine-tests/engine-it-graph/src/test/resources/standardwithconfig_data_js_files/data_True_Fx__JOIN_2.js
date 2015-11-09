var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'b26bb3af-b41c-465d-9a2f-3b6161bc3ed8', label: 'VALUE\nTRUE', color: '#31b0d5', title: 'Name: VALUE<br>Value: TRUE<br>Type: CONSTANT_VALUE<br>Id: b26bb3af-b41c-465d-9a2f-3b6161bc3ed8<br>Formula Expression: Formula String: VALUE; Formula Values: TRUE; Formula Ptg: TRUE; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7b44bfb8'},
{id: 'e9a7cd5b-e794-4dc2-9c0b-6d0d76feae19', label: 'C3\nTRUE', color: '#31b0d5', title: 'Name: C3<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: e9a7cd5b-e794-4dc2-9c0b-6d0d76feae19<br>Formula Expression: Formula String: VALUE; Formula Values: TRUE; Formula Ptg: TRUE; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7b44bfb8'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'b26bb3af-b41c-465d-9a2f-3b6161bc3ed8', to: 'e9a7cd5b-e794-4dc2-9c0b-6d0d76feae19'}
                            ]);