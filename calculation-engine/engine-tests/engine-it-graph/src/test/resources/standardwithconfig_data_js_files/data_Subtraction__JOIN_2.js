var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'c41bd228-b258-4291-b1fb-d288963af5cc', label: 'A1\n80.0', color: '#31b0d5', title: 'Name: A1<br>Value: 80.0<br>Type: CELL_WITH_VALUE<br>Id: c41bd228-b258-4291-b1fb-d288963af5cc<br>Formula Expression: Formula String: A1; Formula Values: 80.0; Formula Ptg: 80.0; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1b30a54e'},
{id: 'e161d600-725f-4f5c-9d59-cbdaa6838536', label: 'A4\n60.0', color: '#31b0d5', title: 'Name: A4<br>Value: 60.0<br>Type: CELL_WITH_FORMULA<br>Id: e161d600-725f-4f5c-9d59-cbdaa6838536<br>Formula Expression: Formula String: A1 - A2; Formula Values: 80.0 - 20.0; Formula Ptg: 80.0 20.0 -; Ptgs: A1 A2 - Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1b30a54e'},
{id: '228f1742-e1bf-4774-b74e-b9f97f4723a7', label: 'A2\n20.0', color: '#31b0d5', title: 'Name: A2<br>Value: 20.0<br>Type: CELL_WITH_VALUE<br>Id: 228f1742-e1bf-4774-b74e-b9f97f4723a7<br>Formula Expression: Formula String: A2; Formula Values: 20.0; Formula Ptg: 20.0; Ptgs: A2 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1b30a54e'},
{id: 'b6e0e3b9-28ba-43fa-a2bf-dd3113b9dbf3', label: '-\n60.0', color: '#f0ad4e', title: 'Name: -<br>Value: 60.0<br>Type: OPERATOR<br>Id: b6e0e3b9-28ba-43fa-a2bf-dd3113b9dbf3<br>Formula Expression: Formula String: A1 - A2; Formula Values: 80.0 - 20.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1b30a54e'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '228f1742-e1bf-4774-b74e-b9f97f4723a7', to: 'b6e0e3b9-28ba-43fa-a2bf-dd3113b9dbf3'},
{from: 'b6e0e3b9-28ba-43fa-a2bf-dd3113b9dbf3', to: 'e161d600-725f-4f5c-9d59-cbdaa6838536'},
{from: 'c41bd228-b258-4291-b1fb-d288963af5cc', to: 'b6e0e3b9-28ba-43fa-a2bf-dd3113b9dbf3'}
                            ]);