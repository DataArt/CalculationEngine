var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '33f8c5d7-997f-48f7-88e5-88639b02c09f', label: 'VALUE\n#REF!', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: #REF!<br>Type: CONSTANT_VALUE<br>Id: 33f8c5d7-997f-48f7-88e5-88639b02c09f<br>Formula Expression: Formula String: VALUE; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@21aa6d6c'},
{id: '95d263dd-4d03-4227-b3d5-b83a420b9d4f', label: 'E6\n#REF!', color: '#31b0d5', title: 'Name: E6<br>Alias: null<br>Value: #REF!<br>Type: CELL_WITH_FORMULA<br>Id: 95d263dd-4d03-4227-b3d5-b83a420b9d4f<br>Formula Expression: Formula String: VALUE; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@21aa6d6c'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '33f8c5d7-997f-48f7-88e5-88639b02c09f', to: '95d263dd-4d03-4227-b3d5-b83a420b9d4f'}
                            ]);