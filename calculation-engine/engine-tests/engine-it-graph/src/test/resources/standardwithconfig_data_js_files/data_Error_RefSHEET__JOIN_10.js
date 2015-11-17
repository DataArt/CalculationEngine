var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '539665e3-0371-4b48-9cde-a7137684c985', label: '[1]Sheet2!B4\n#REF!', color: '#31b0d5', title: 'Name: [1]Sheet2!B4<br>Value: #REF!<br>Type: CELL_WITH_VALUE<br>Id: 539665e3-0371-4b48-9cde-a7137684c985<br>Formula Expression: Formula String: [1]Sheet2!B4; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: [1]Sheet2!B4 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1f1ffc18'},
{id: 'f2764732-3291-41fa-aecf-ad2372905edd', label: 'E6\n#REF!', color: '#31b0d5', title: 'Name: E6<br>Value: #REF!<br>Type: CELL_WITH_FORMULA<br>Id: f2764732-3291-41fa-aecf-ad2372905edd<br>Formula Expression: Formula String: [1]Sheet2!B4; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: [1]Sheet2!B4 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1f1ffc18'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '539665e3-0371-4b48-9cde-a7137684c985', to: 'f2764732-3291-41fa-aecf-ad2372905edd'}
                            ]);