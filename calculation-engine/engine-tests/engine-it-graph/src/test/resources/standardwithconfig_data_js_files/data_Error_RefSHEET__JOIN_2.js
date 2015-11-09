var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'a59cafc5-547d-4aac-80d7-47c09fb5adbe', label: '[1]Sheet2!B4\n#REF!', color: '#31b0d5', title: 'Name: [1]Sheet2!B4<br>Value: #REF!<br>Type: CELL_WITH_VALUE<br>Id: a59cafc5-547d-4aac-80d7-47c09fb5adbe<br>Formula Expression: Formula String: [1]Sheet2!B4; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: [1]Sheet2!B4 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@71936a92'},
{id: '53a1065f-20ba-43e8-bcd6-f9bb86e8ffbe', label: 'E6\n#REF!', color: '#31b0d5', title: 'Name: E6<br>Value: #REF!<br>Type: CELL_WITH_FORMULA<br>Id: 53a1065f-20ba-43e8-bcd6-f9bb86e8ffbe<br>Formula Expression: Formula String: [1]Sheet2!B4; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: [1]Sheet2!B4 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@71936a92'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'a59cafc5-547d-4aac-80d7-47c09fb5adbe', to: '53a1065f-20ba-43e8-bcd6-f9bb86e8ffbe'}
                            ]);