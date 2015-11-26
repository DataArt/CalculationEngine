var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '94350554-f1fd-4b9e-b3e2-62c90b937f64', label: 'E6\n#REF!', color: '#31b0d5', title: 'Name: E6<br>Alias: null<br>Value: #REF!<br>Type: CELL_WITH_FORMULA<br>Id: 94350554-f1fd-4b9e-b3e2-62c90b937f64<br>Formula Expression: Formula String: [1]Sheet2!B4; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: [1]Sheet2!B4 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@24fb6a80'},
{id: 'a65f524b-e88e-4662-9bae-4b4685c11363', label: '[1]Sheet2!B4\n#REF!', color: '#31b0d5', title: 'Name: [1]Sheet2!B4<br>Alias: null<br>Value: #REF!<br>Type: CELL_WITH_VALUE<br>Id: a65f524b-e88e-4662-9bae-4b4685c11363<br>Formula Expression: Formula String: [1]Sheet2!B4; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: [1]Sheet2!B4 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@24fb6a80'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'a65f524b-e88e-4662-9bae-4b4685c11363', to: '94350554-f1fd-4b9e-b3e2-62c90b937f64'}
                            ]);