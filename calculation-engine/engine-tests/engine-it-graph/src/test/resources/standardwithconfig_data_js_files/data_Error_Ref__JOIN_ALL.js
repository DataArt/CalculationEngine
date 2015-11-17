var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '6c78bbc3-91bf-4779-8af4-9e12ff19feec', label: 'VALUE\n#REF!', color: '#31b0d5', title: 'Name: VALUE<br>Value: #REF!<br>Type: CONSTANT_VALUE<br>Id: 6c78bbc3-91bf-4779-8af4-9e12ff19feec<br>Formula Expression: Formula String: VALUE; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@60bdf15d'},
{id: '9de554ab-25e1-4f47-8a3a-d97cfe368c84', label: 'E6\n#REF!', color: '#31b0d5', title: 'Name: E6<br>Value: #REF!<br>Type: CELL_WITH_FORMULA<br>Id: 9de554ab-25e1-4f47-8a3a-d97cfe368c84<br>Formula Expression: Formula String: VALUE; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@60bdf15d'},
{id: 'c7a1b355-4906-432f-aff4-08d737fd5308', label: 'D1\nA4', color: '#31b0d5', title: 'Name: D1<br>Value: A4<br>Type: CELL_WITH_VALUE<br>Id: c7a1b355-4906-432f-aff4-08d737fd5308<br>Formula Expression: Formula String: D1; Formula Values: A4; Formula Ptg: A4; Ptgs: D1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@60bdf15d'},
{id: 'aa499c6e-f0e8-4c43-bcf9-322c7c0cc67f', label: 'E7\nA4', color: '#31b0d5', title: 'Name: E7<br>Value: A4<br>Type: CELL_WITH_FORMULA<br>Id: aa499c6e-f0e8-4c43-bcf9-322c7c0cc67f<br>Formula Expression: Formula String: D1; Formula Values: A4; Formula Ptg: A4; Ptgs: D1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@60bdf15d'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'c7a1b355-4906-432f-aff4-08d737fd5308', to: 'aa499c6e-f0e8-4c43-bcf9-322c7c0cc67f'},
{from: '6c78bbc3-91bf-4779-8af4-9e12ff19feec', to: '9de554ab-25e1-4f47-8a3a-d97cfe368c84'}
                            ]);