var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '4695db71-51f6-4a18-bd65-8f4702d1149a', label: 'E6\n#REF!', color: '#31b0d5', title: 'Name: E6<br>Value: #REF!<br>Type: CELL_WITH_FORMULA<br>Id: 4695db71-51f6-4a18-bd65-8f4702d1149a<br>Formula Expression: Formula String: [1]Sheet2!B4; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: [1]Sheet2!B4 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@319dead1'},
{id: '318dcbfe-abb1-4d7c-be75-a3467b3d56e3', label: '[1]Sheet2!B4\n#REF!', color: '#31b0d5', title: 'Name: [1]Sheet2!B4<br>Value: #REF!<br>Type: CELL_WITH_VALUE<br>Id: 318dcbfe-abb1-4d7c-be75-a3467b3d56e3<br>Formula Expression: Formula String: [1]Sheet2!B4; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: [1]Sheet2!B4 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@319dead1'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '318dcbfe-abb1-4d7c-be75-a3467b3d56e3', to: '4695db71-51f6-4a18-bd65-8f4702d1149a'}
                            ]);