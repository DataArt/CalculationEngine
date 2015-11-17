var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '17d20e2a-8f5b-43c3-a8b2-2bca303bf691', label: 'VALUE\nFALSE', color: '#31b0d5', title: 'Name: VALUE<br>Value: FALSE<br>Type: CONSTANT_VALUE<br>Id: 17d20e2a-8f5b-43c3-a8b2-2bca303bf691<br>Formula Expression: Formula String: VALUE; Formula Values: FALSE; Formula Ptg: FALSE; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3ff3275b'},
{id: 'e4a40a05-b36d-4136-b0af-62c3c3541741', label: 'D4\nFALSE', color: '#31b0d5', title: 'Name: D4<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: e4a40a05-b36d-4136-b0af-62c3c3541741<br>Formula Expression: Formula String: VALUE; Formula Values: FALSE; Formula Ptg: FALSE; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3ff3275b'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '17d20e2a-8f5b-43c3-a8b2-2bca303bf691', to: 'e4a40a05-b36d-4136-b0af-62c3c3541741'}
                            ]);