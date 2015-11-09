var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '82760c60-d8ea-4a45-a53f-f203c870504e', label: '/\n#DIV/0!', color: '#f0ad4e', title: 'Name: /<br>Value: #DIV/0!<br>Type: OPERATOR<br>Id: 82760c60-d8ea-4a45-a53f-f203c870504e<br>Formula Expression: Formula String: C5 / C4; Formula Values: 67.0 / 0.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6ca6a1a6'},
{id: 'c0a521aa-bd59-4aea-ab99-c64624a284f7', label: 'C4\n0.0', color: '#31b0d5', title: 'Name: C4<br>Value: 0.0<br>Type: CELL_WITH_VALUE<br>Id: c0a521aa-bd59-4aea-ab99-c64624a284f7<br>Formula Expression: Formula String: C4; Formula Values: 0.0; Formula Ptg: 0.0; Ptgs: C4 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6ca6a1a6'},
{id: '4a054ef1-4c42-45f0-beaf-813137098d0e', label: 'C5\n67.0', color: '#31b0d5', title: 'Name: C5<br>Value: 67.0<br>Type: CELL_WITH_VALUE<br>Id: 4a054ef1-4c42-45f0-beaf-813137098d0e<br>Formula Expression: Formula String: C5; Formula Values: 67.0; Formula Ptg: 67.0; Ptgs: C5 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6ca6a1a6'},
{id: '9ec6cf04-7f99-474e-b950-2ea131d968b6', label: 'E6\n#DIV/0!', color: '#31b0d5', title: 'Name: E6<br>Value: #DIV/0!<br>Type: CELL_WITH_FORMULA<br>Id: 9ec6cf04-7f99-474e-b950-2ea131d968b6<br>Formula Expression: Formula String: C5 / C4; Formula Values: 67.0 / 0.0; Formula Ptg: 67.0 0.0 /; Ptgs: C5 C4 / Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6ca6a1a6'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '82760c60-d8ea-4a45-a53f-f203c870504e', to: '9ec6cf04-7f99-474e-b950-2ea131d968b6'},
{from: '4a054ef1-4c42-45f0-beaf-813137098d0e', to: '82760c60-d8ea-4a45-a53f-f203c870504e'},
{from: 'c0a521aa-bd59-4aea-ab99-c64624a284f7', to: '82760c60-d8ea-4a45-a53f-f203c870504e'}
                            ]);