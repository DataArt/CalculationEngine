var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'aa8b9a35-0353-4420-9bc1-933c022a5041', label: 'E6\n#REF!', color: '#31b0d5', title: 'Name: E6<br>Value: #REF!<br>Type: CELL_WITH_FORMULA<br>Id: aa8b9a35-0353-4420-9bc1-933c022a5041<br>Formula Expression: Formula String: [1]Sheet2!B4; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: [1]Sheet2!B4 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3815146b'},
{id: 'a43ad067-099b-4eb3-a657-035aee4a15b1', label: '[1]Sheet2!B4\n#REF!', color: '#31b0d5', title: 'Name: [1]Sheet2!B4<br>Value: #REF!<br>Type: CELL_WITH_VALUE<br>Id: a43ad067-099b-4eb3-a657-035aee4a15b1<br>Formula Expression: Formula String: [1]Sheet2!B4; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: [1]Sheet2!B4 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3815146b'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'a43ad067-099b-4eb3-a657-035aee4a15b1', to: 'aa8b9a35-0353-4420-9bc1-933c022a5041'}
                            ]);