var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'e45c48ca-b900-4197-88fe-55cc70e8285b', label: 'C4\n0.0', color: '#31b0d5', title: 'Name: C4<br>Alias: null<br>Value: 0.0<br>Type: CELL_WITH_VALUE<br>Id: e45c48ca-b900-4197-88fe-55cc70e8285b<br>Formula Expression: Formula String: C4; Formula Values: 0.0; Formula Ptg: 0.0; Ptgs: C4 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@22b53226'},
{id: '9d0786ec-7f4f-4062-a75a-42ad671c91b9', label: 'E6\n#DIV/0!', color: '#31b0d5', title: 'Name: E6<br>Alias: null<br>Value: #DIV/0!<br>Type: CELL_WITH_FORMULA<br>Id: 9d0786ec-7f4f-4062-a75a-42ad671c91b9<br>Formula Expression: Formula String: C5 / C4; Formula Values: 67.0 / 0.0; Formula Ptg: 67.0 0.0 /; Ptgs: C5 C4 / Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@22b53226'},
{id: 'd913b7bb-912a-472b-95c0-50576bdf1c7a', label: '/\n#DIV/0!', color: '#f0ad4e', title: 'Name: /<br>Alias: null<br>Value: #DIV/0!<br>Type: OPERATOR<br>Id: d913b7bb-912a-472b-95c0-50576bdf1c7a<br>Formula Expression: Formula String: C5 / C4; Formula Values: 67.0 / 0.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@22b53226'},
{id: '174bc4d4-6c35-4077-9252-bfbc74788616', label: 'C5\n67.0', color: '#31b0d5', title: 'Name: C5<br>Alias: null<br>Value: 67.0<br>Type: CELL_WITH_VALUE<br>Id: 174bc4d4-6c35-4077-9252-bfbc74788616<br>Formula Expression: Formula String: C5; Formula Values: 67.0; Formula Ptg: 67.0; Ptgs: C5 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@22b53226'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'd913b7bb-912a-472b-95c0-50576bdf1c7a', to: '9d0786ec-7f4f-4062-a75a-42ad671c91b9'},
{from: 'e45c48ca-b900-4197-88fe-55cc70e8285b', to: 'd913b7bb-912a-472b-95c0-50576bdf1c7a'},
{from: '174bc4d4-6c35-4077-9252-bfbc74788616', to: 'd913b7bb-912a-472b-95c0-50576bdf1c7a'}
                            ]);