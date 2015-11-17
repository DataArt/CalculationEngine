var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'b14f71ea-54d8-4dbf-a58a-c054d1894589', label: 'A1\n12.0', color: '#31b0d5', title: 'Name: A1<br>Value: 12.0<br>Type: CELL_WITH_FORMULA<br>Id: b14f71ea-54d8-4dbf-a58a-c054d1894589<br>Formula Expression: Formula String: VALUE; Formula Values: 12.0; Formula Ptg: 12.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5bb39285'},
{id: 'a7203e35-2cb9-45e2-be44-b557ae41a53f', label: 'VALUE\n12.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 12.0<br>Type: CONSTANT_VALUE<br>Id: a7203e35-2cb9-45e2-be44-b557ae41a53f<br>Formula Expression: Formula String: VALUE; Formula Values: 12.0; Formula Ptg: 12.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5bb39285'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'a7203e35-2cb9-45e2-be44-b557ae41a53f', to: 'b14f71ea-54d8-4dbf-a58a-c054d1894589'}
                            ]);