var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '0fcfd460-8a5b-4034-b7b3-2c7a7386c1a8', label: 'C4\n0.0', color: '#31b0d5', title: 'Name: C4<br>Value: 0.0<br>Type: CELL_WITH_VALUE<br>Id: 0fcfd460-8a5b-4034-b7b3-2c7a7386c1a8<br>Formula Expression: Formula String: C4; Formula Values: 0.0; Formula Ptg: 0.0; Ptgs: C4 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@25791d40'},
{id: '9ce70692-4545-4482-8384-7b75c2aff304', label: 'E6\n#DIV/0!', color: '#31b0d5', title: 'Name: E6<br>Value: #DIV/0!<br>Type: CELL_WITH_FORMULA<br>Id: 9ce70692-4545-4482-8384-7b75c2aff304<br>Formula Expression: Formula String: C5 / C4; Formula Values: 67.0 / 0.0; Formula Ptg: 67.0 0.0 /; Ptgs: C5 C4 / Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@25791d40'},
{id: '6a35faca-f311-4d1b-b1c7-21507693e1b6', label: '/\n#DIV/0!', color: '#f0ad4e', title: 'Name: /<br>Value: #DIV/0!<br>Type: OPERATOR<br>Id: 6a35faca-f311-4d1b-b1c7-21507693e1b6<br>Formula Expression: Formula String: C5 / C4; Formula Values: 67.0 / 0.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@25791d40'},
{id: 'a1e79b8e-4135-4928-b7bb-5e515663f390', label: 'C5\n67.0', color: '#31b0d5', title: 'Name: C5<br>Value: 67.0<br>Type: CELL_WITH_VALUE<br>Id: a1e79b8e-4135-4928-b7bb-5e515663f390<br>Formula Expression: Formula String: C5; Formula Values: 67.0; Formula Ptg: 67.0; Ptgs: C5 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@25791d40'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '0fcfd460-8a5b-4034-b7b3-2c7a7386c1a8', to: '6a35faca-f311-4d1b-b1c7-21507693e1b6'},
{from: 'a1e79b8e-4135-4928-b7bb-5e515663f390', to: '6a35faca-f311-4d1b-b1c7-21507693e1b6'},
{from: '6a35faca-f311-4d1b-b1c7-21507693e1b6', to: '9ce70692-4545-4482-8384-7b75c2aff304'}
                            ]);