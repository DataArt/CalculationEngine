var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '6f36b05e-05b5-49fb-aef2-48eefab5c2b6', label: 'E6\n#REF!', color: '#31b0d5', title: 'Name: E6<br>Value: #REF!<br>Type: CELL_WITH_FORMULA<br>Id: 6f36b05e-05b5-49fb-aef2-48eefab5c2b6<br>Formula Expression: Formula String: VALUE; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1260c85e'},
{id: 'da4a6e1d-11ce-4686-b333-b527aa158ed6', label: 'VALUE\n#REF!', color: '#31b0d5', title: 'Name: VALUE<br>Value: #REF!<br>Type: CONSTANT_VALUE<br>Id: da4a6e1d-11ce-4686-b333-b527aa158ed6<br>Formula Expression: Formula String: VALUE; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1260c85e'},
{id: 'bf9ce535-1e47-4142-8529-5f9ee02474bf', label: 'D1\nA4', color: '#31b0d5', title: 'Name: D1<br>Value: A4<br>Type: CELL_WITH_VALUE<br>Id: bf9ce535-1e47-4142-8529-5f9ee02474bf<br>Formula Expression: Formula String: D1; Formula Values: A4; Formula Ptg: A4; Ptgs: D1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1260c85e'},
{id: 'c84af826-efb4-4cb7-9372-4b22a7f330a4', label: 'E7\nA4', color: '#31b0d5', title: 'Name: E7<br>Value: A4<br>Type: CELL_WITH_FORMULA<br>Id: c84af826-efb4-4cb7-9372-4b22a7f330a4<br>Formula Expression: Formula String: D1; Formula Values: A4; Formula Ptg: A4; Ptgs: D1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1260c85e'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'bf9ce535-1e47-4142-8529-5f9ee02474bf', to: 'c84af826-efb4-4cb7-9372-4b22a7f330a4'},
{from: 'da4a6e1d-11ce-4686-b333-b527aa158ed6', to: '6f36b05e-05b5-49fb-aef2-48eefab5c2b6'}
                            ]);