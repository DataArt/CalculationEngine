var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'cdd92aba-eac5-4d7b-90e8-385042e162d1', label: 'A1\n12.0', color: '#31b0d5', title: 'Name: A1<br>Value: 12.0<br>Type: CELL_WITH_FORMULA<br>Id: cdd92aba-eac5-4d7b-90e8-385042e162d1<br>Formula Expression: Formula String: VALUE; Formula Values: 12.0; Formula Ptg: 12.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1a9ce44'},
{id: '823c4987-1d8d-4479-b18a-85fd00c4b975', label: 'VALUE\n12.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 12.0<br>Type: CONSTANT_VALUE<br>Id: 823c4987-1d8d-4479-b18a-85fd00c4b975<br>Formula Expression: Formula String: VALUE; Formula Values: 12.0; Formula Ptg: 12.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1a9ce44'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '823c4987-1d8d-4479-b18a-85fd00c4b975', to: 'cdd92aba-eac5-4d7b-90e8-385042e162d1'}
                            ]);