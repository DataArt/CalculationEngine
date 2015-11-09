var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '3a967500-b959-4dc4-ab20-8f372f55a686', label: 'A4\n60.0', color: '#31b0d5', title: 'Name: A4<br>Value: 60.0<br>Type: CELL_WITH_FORMULA<br>Id: 3a967500-b959-4dc4-ab20-8f372f55a686<br>Formula Expression: Formula String: A1 - A2; Formula Values: 80.0 - 20.0; Formula Ptg: 80.0 20.0 -; Ptgs: A1 A2 - Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@47609e3d'},
{id: 'e44de24c-427f-4230-8d01-64594b61177d', label: 'A1\n80.0', color: '#31b0d5', title: 'Name: A1<br>Value: 80.0<br>Type: CELL_WITH_VALUE<br>Id: e44de24c-427f-4230-8d01-64594b61177d<br>Formula Expression: Formula String: A1; Formula Values: 80.0; Formula Ptg: 80.0; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@47609e3d'},
{id: 'f725736b-004b-4249-881e-a2157b2e529f', label: '-\n60.0', color: '#f0ad4e', title: 'Name: -<br>Value: 60.0<br>Type: OPERATOR<br>Id: f725736b-004b-4249-881e-a2157b2e529f<br>Formula Expression: Formula String: A1 - A2; Formula Values: 80.0 - 20.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@47609e3d'},
{id: '45575124-a17a-4a4e-9480-28342cf3b5c1', label: 'A2\n20.0', color: '#31b0d5', title: 'Name: A2<br>Value: 20.0<br>Type: CELL_WITH_VALUE<br>Id: 45575124-a17a-4a4e-9480-28342cf3b5c1<br>Formula Expression: Formula String: A2; Formula Values: 20.0; Formula Ptg: 20.0; Ptgs: A2 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@47609e3d'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'f725736b-004b-4249-881e-a2157b2e529f', to: '3a967500-b959-4dc4-ab20-8f372f55a686'},
{from: 'e44de24c-427f-4230-8d01-64594b61177d', to: 'f725736b-004b-4249-881e-a2157b2e529f'},
{from: '45575124-a17a-4a4e-9480-28342cf3b5c1', to: 'f725736b-004b-4249-881e-a2157b2e529f'}
                            ]);