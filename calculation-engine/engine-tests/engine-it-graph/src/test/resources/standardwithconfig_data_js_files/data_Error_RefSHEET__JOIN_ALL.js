var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '8406fceb-7000-4911-8abc-a6c08cf793f2', label: 'E6\n#REF!', color: '#31b0d5', title: 'Name: E6<br>Value: #REF!<br>Type: CELL_WITH_FORMULA<br>Id: 8406fceb-7000-4911-8abc-a6c08cf793f2<br>Formula Expression: Formula String: [1]Sheet2!B4; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: [1]Sheet2!B4 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@319dead1'},
{id: '158e0800-6486-4649-a69f-38dadb715e0f', label: '[1]Sheet2!B4\n#REF!', color: '#31b0d5', title: 'Name: [1]Sheet2!B4<br>Value: #REF!<br>Type: CELL_WITH_VALUE<br>Id: 158e0800-6486-4649-a69f-38dadb715e0f<br>Formula Expression: Formula String: [1]Sheet2!B4; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: [1]Sheet2!B4 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@319dead1'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '158e0800-6486-4649-a69f-38dadb715e0f', to: '8406fceb-7000-4911-8abc-a6c08cf793f2'}
                            ]);