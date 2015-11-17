var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'fdd04aec-b507-465b-a6a0-d6ce40c6882f', label: 'A4\n60.0', color: '#31b0d5', title: 'Name: A4<br>Value: 60.0<br>Type: CELL_WITH_FORMULA<br>Id: fdd04aec-b507-465b-a6a0-d6ce40c6882f<br>Formula Expression: Formula String: A1 - A2; Formula Values: 80.0 - 20.0; Formula Ptg: 80.0 20.0 -; Ptgs: A1 A2 - Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1578fa9'},
{id: '94d26814-cb72-4dbc-b3b7-0e5b6786abca', label: 'A2\n20.0', color: '#31b0d5', title: 'Name: A2<br>Value: 20.0<br>Type: CELL_WITH_VALUE<br>Id: 94d26814-cb72-4dbc-b3b7-0e5b6786abca<br>Formula Expression: Formula String: A2; Formula Values: 20.0; Formula Ptg: 20.0; Ptgs: A2 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1578fa9'},
{id: '0954ab39-a8d9-417d-bbd0-1461a249df7d', label: '-\n60.0', color: '#f0ad4e', title: 'Name: -<br>Value: 60.0<br>Type: OPERATOR<br>Id: 0954ab39-a8d9-417d-bbd0-1461a249df7d<br>Formula Expression: Formula String: A1 - A2; Formula Values: 80.0 - 20.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1578fa9'},
{id: '6f64c741-6ac6-44d0-811a-3c3309fec031', label: 'A1\n80.0', color: '#31b0d5', title: 'Name: A1<br>Value: 80.0<br>Type: CELL_WITH_VALUE<br>Id: 6f64c741-6ac6-44d0-811a-3c3309fec031<br>Formula Expression: Formula String: A1; Formula Values: 80.0; Formula Ptg: 80.0; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1578fa9'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '6f64c741-6ac6-44d0-811a-3c3309fec031', to: '0954ab39-a8d9-417d-bbd0-1461a249df7d'},
{from: '0954ab39-a8d9-417d-bbd0-1461a249df7d', to: 'fdd04aec-b507-465b-a6a0-d6ce40c6882f'},
{from: '94d26814-cb72-4dbc-b3b7-0e5b6786abca', to: '0954ab39-a8d9-417d-bbd0-1461a249df7d'}
                            ]);