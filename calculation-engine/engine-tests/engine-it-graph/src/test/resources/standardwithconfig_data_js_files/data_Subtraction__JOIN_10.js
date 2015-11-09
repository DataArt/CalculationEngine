var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '7b1b474a-d490-4ddb-b9a6-c742a62974c7', label: 'A2\n20.0', color: '#31b0d5', title: 'Name: A2<br>Value: 20.0<br>Type: CELL_WITH_VALUE<br>Id: 7b1b474a-d490-4ddb-b9a6-c742a62974c7<br>Formula Expression: Formula String: A2; Formula Values: 20.0; Formula Ptg: 20.0; Ptgs: A2 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@646bf8a6'},
{id: 'c31a4507-7de5-4b1b-8869-54ac31449164', label: '-\n60.0', color: '#f0ad4e', title: 'Name: -<br>Value: 60.0<br>Type: OPERATOR<br>Id: c31a4507-7de5-4b1b-8869-54ac31449164<br>Formula Expression: Formula String: A1 - A2; Formula Values: 80.0 - 20.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@646bf8a6'},
{id: '7768b318-6449-4cf3-9398-1bff4018400e', label: 'A1\n80.0', color: '#31b0d5', title: 'Name: A1<br>Value: 80.0<br>Type: CELL_WITH_VALUE<br>Id: 7768b318-6449-4cf3-9398-1bff4018400e<br>Formula Expression: Formula String: A1; Formula Values: 80.0; Formula Ptg: 80.0; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@646bf8a6'},
{id: 'c2e6e37e-9a55-49bf-91c2-39e81f8d6aba', label: 'A4\n60.0', color: '#31b0d5', title: 'Name: A4<br>Value: 60.0<br>Type: CELL_WITH_FORMULA<br>Id: c2e6e37e-9a55-49bf-91c2-39e81f8d6aba<br>Formula Expression: Formula String: A1 - A2; Formula Values: 80.0 - 20.0; Formula Ptg: 80.0 20.0 -; Ptgs: A1 A2 - Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@646bf8a6'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '7b1b474a-d490-4ddb-b9a6-c742a62974c7', to: 'c31a4507-7de5-4b1b-8869-54ac31449164'},
{from: '7768b318-6449-4cf3-9398-1bff4018400e', to: 'c31a4507-7de5-4b1b-8869-54ac31449164'},
{from: 'c31a4507-7de5-4b1b-8869-54ac31449164', to: 'c2e6e37e-9a55-49bf-91c2-39e81f8d6aba'}
                            ]);