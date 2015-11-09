var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '2d543e5c-1108-4c1a-bb27-77371279a490', label: 'A1\n12.0', color: '#31b0d5', title: 'Name: A1<br>Value: 12.0<br>Type: CELL_WITH_FORMULA<br>Id: 2d543e5c-1108-4c1a-bb27-77371279a490<br>Formula Expression: Formula String: VALUE; Formula Values: 12.0; Formula Ptg: 12.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@23ad71bf'},
{id: 'e944b017-0d6a-4a8f-a6a6-2ef372e26efc', label: 'VALUE\n12.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 12.0<br>Type: CONSTANT_VALUE<br>Id: e944b017-0d6a-4a8f-a6a6-2ef372e26efc<br>Formula Expression: Formula String: VALUE; Formula Values: 12.0; Formula Ptg: 12.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@23ad71bf'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'e944b017-0d6a-4a8f-a6a6-2ef372e26efc', to: '2d543e5c-1108-4c1a-bb27-77371279a490'}
                            ]);