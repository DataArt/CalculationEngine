var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '80d9dd6a-f102-412b-9ed5-75282f22d7c5', label: 'B3\n4.0', color: '#31b0d5', title: 'Name: B3<br>Value: 4.0<br>Type: CELL_WITH_FORMULA<br>Id: 80d9dd6a-f102-412b-9ed5-75282f22d7c5<br>Formula Expression: Formula String: A1 / A2; Formula Values: 100.0 / 25.0; Formula Ptg: 100.0 25.0 /; Ptgs: A1 A2 / Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@55342f40'},
{id: '0469bf7d-d816-49a9-8eb5-17ec47dd3edf', label: 'A1\n100.0', color: '#31b0d5', title: 'Name: A1<br>Value: 100.0<br>Type: CELL_WITH_VALUE<br>Id: 0469bf7d-d816-49a9-8eb5-17ec47dd3edf<br>Formula Expression: Formula String: A1; Formula Values: 100.0; Formula Ptg: 100.0; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@55342f40'},
{id: '77212671-d83c-484e-925f-e1ae27933733', label: '/\n4.0', color: '#f0ad4e', title: 'Name: /<br>Value: 4.0<br>Type: OPERATOR<br>Id: 77212671-d83c-484e-925f-e1ae27933733<br>Formula Expression: Formula String: A1 / A2; Formula Values: 100.0 / 25.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@55342f40'},
{id: 'a9bfd1d4-760f-44f7-8e33-93b1acd64da5', label: 'A2\n25.0', color: '#31b0d5', title: 'Name: A2<br>Value: 25.0<br>Type: CELL_WITH_VALUE<br>Id: a9bfd1d4-760f-44f7-8e33-93b1acd64da5<br>Formula Expression: Formula String: A2; Formula Values: 25.0; Formula Ptg: 25.0; Ptgs: A2 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@55342f40'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'a9bfd1d4-760f-44f7-8e33-93b1acd64da5', to: '77212671-d83c-484e-925f-e1ae27933733'},
{from: '0469bf7d-d816-49a9-8eb5-17ec47dd3edf', to: '77212671-d83c-484e-925f-e1ae27933733'},
{from: '77212671-d83c-484e-925f-e1ae27933733', to: '80d9dd6a-f102-412b-9ed5-75282f22d7c5'}
                            ]);