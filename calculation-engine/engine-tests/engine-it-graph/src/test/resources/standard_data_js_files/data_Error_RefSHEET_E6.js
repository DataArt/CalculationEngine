var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'e2ca9f74-180e-4e05-b453-7e079fe39926', label: 'E6\n#REF!', color: '#31b0d5', title: 'Name: E6<br>Value: #REF!<br>Type: CELL_WITH_FORMULA<br>Id: e2ca9f74-180e-4e05-b453-7e079fe39926<br>Formula Expression: Formula String: [1]Sheet2!B4; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: [1]Sheet2!B4 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7383eae2'},
{id: '2062a92e-34ae-4695-a5d4-acf7335f2f3e', label: '[1]Sheet2!B4\n#REF!', color: '#31b0d5', title: 'Name: [1]Sheet2!B4<br>Value: #REF!<br>Type: CELL_WITH_VALUE<br>Id: 2062a92e-34ae-4695-a5d4-acf7335f2f3e<br>Formula Expression: Formula String: [1]Sheet2!B4; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: [1]Sheet2!B4 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7383eae2'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '2062a92e-34ae-4695-a5d4-acf7335f2f3e', to: 'e2ca9f74-180e-4e05-b453-7e079fe39926'}
                            ]);