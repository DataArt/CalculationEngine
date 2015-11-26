var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '999ca400-745a-4166-8684-488ca320c1fa', label: 'D5\nwhy not?', color: '#31b0d5', title: 'Name: D5<br>Alias: null<br>Value: why not?<br>Type: CELL_WITH_FORMULA<br>Id: 999ca400-745a-4166-8684-488ca320c1fa<br>Formula Expression: Formula String: T(C3); Formula Values: T(why not?); Formula Ptg: why not? T ; Ptgs: C3 T  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1ea9f009'},
{id: '5e601874-eca6-4251-82f1-a8b46bbf8ab4', label: 'C3\nwhy not?', color: '#31b0d5', title: 'Name: C3<br>Alias: null<br>Value: why not?<br>Type: CELL_WITH_VALUE<br>Id: 5e601874-eca6-4251-82f1-a8b46bbf8ab4<br>Formula Expression: Formula String: C3; Formula Values: why not?; Formula Ptg: why not?; Ptgs: C3 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1ea9f009'},
{id: '84de3cd3-525e-4a9c-aea6-c2c0e1d66b15', label: 'T\nwhy not?', color: '#f0ad4e', title: 'Name: T<br>Alias: null<br>Value: why not?<br>Type: FUNCTION<br>Id: 84de3cd3-525e-4a9c-aea6-c2c0e1d66b15<br>Formula Expression: Formula String: T(C3); Formula Values: T(why not?); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1ea9f009'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '84de3cd3-525e-4a9c-aea6-c2c0e1d66b15', to: '999ca400-745a-4166-8684-488ca320c1fa'},
{from: '5e601874-eca6-4251-82f1-a8b46bbf8ab4', to: '84de3cd3-525e-4a9c-aea6-c2c0e1d66b15'}
                            ]);