var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'b49081ad-d996-495c-aaaf-57759617d5f4', label: 'VALUE\n1.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 1.0<br>Type: CONSTANT_VALUE<br>Id: b49081ad-d996-495c-aaaf-57759617d5f4<br>Formula Expression: Formula String: VALUE; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@378bd86d'},
{id: 'f98d6b61-2306-4ffa-9ee1-a982ba5cda00', label: 'EXP\n2.718281828459045', color: '#f0ad4e', title: 'Name: EXP<br>Value: 2.718281828459045<br>Type: FUNCTION<br>Id: f98d6b61-2306-4ffa-9ee1-a982ba5cda00<br>Formula Expression: Formula String: EXP(VALUE); Formula Values: EXP(1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@378bd86d'},
{id: '170135f7-e6ab-4b1a-ba84-85a88e738329', label: 'A1\n2.718281828459045', color: '#31b0d5', title: 'Name: A1<br>Value: 2.718281828459045<br>Type: CELL_WITH_FORMULA<br>Id: 170135f7-e6ab-4b1a-ba84-85a88e738329<br>Formula Expression: Formula String: EXP(VALUE); Formula Values: EXP(1.0); Formula Ptg: 1.0 EXP ; Ptgs: VALUE EXP  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@378bd86d'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'f98d6b61-2306-4ffa-9ee1-a982ba5cda00', to: '170135f7-e6ab-4b1a-ba84-85a88e738329'},
{from: 'b49081ad-d996-495c-aaaf-57759617d5f4', to: 'f98d6b61-2306-4ffa-9ee1-a982ba5cda00'}
                            ]);