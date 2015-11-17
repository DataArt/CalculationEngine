var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '6bce8363-38ad-4214-aa6e-1fb7858d333f', label: 'A4\n60.0', color: '#31b0d5', title: 'Name: A4<br>Value: 60.0<br>Type: CELL_WITH_FORMULA<br>Id: 6bce8363-38ad-4214-aa6e-1fb7858d333f<br>Formula Expression: Formula String: A1 - A2; Formula Values: 80.0 - 20.0; Formula Ptg: 80.0 20.0 -; Ptgs: A1 A2 - Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@47609e3d'},
{id: '2d6f8dcc-ced4-462e-9480-e048e156c7aa', label: 'A1\n80.0', color: '#31b0d5', title: 'Name: A1<br>Value: 80.0<br>Type: CELL_WITH_VALUE<br>Id: 2d6f8dcc-ced4-462e-9480-e048e156c7aa<br>Formula Expression: Formula String: A1; Formula Values: 80.0; Formula Ptg: 80.0; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@47609e3d'},
{id: 'cd696b63-aef9-4a49-a36e-613b36976e22', label: '-\n60.0', color: '#f0ad4e', title: 'Name: -<br>Value: 60.0<br>Type: OPERATOR<br>Id: cd696b63-aef9-4a49-a36e-613b36976e22<br>Formula Expression: Formula String: A1 - A2; Formula Values: 80.0 - 20.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@47609e3d'},
{id: 'ff03cb7e-19a7-4ea2-9bee-0723fc039bb0', label: 'A2\n20.0', color: '#31b0d5', title: 'Name: A2<br>Value: 20.0<br>Type: CELL_WITH_VALUE<br>Id: ff03cb7e-19a7-4ea2-9bee-0723fc039bb0<br>Formula Expression: Formula String: A2; Formula Values: 20.0; Formula Ptg: 20.0; Ptgs: A2 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@47609e3d'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'cd696b63-aef9-4a49-a36e-613b36976e22', to: '6bce8363-38ad-4214-aa6e-1fb7858d333f'},
{from: '2d6f8dcc-ced4-462e-9480-e048e156c7aa', to: 'cd696b63-aef9-4a49-a36e-613b36976e22'},
{from: 'ff03cb7e-19a7-4ea2-9bee-0723fc039bb0', to: 'cd696b63-aef9-4a49-a36e-613b36976e22'}
                            ]);