var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'da209449-505d-469f-86f4-fb449c763cc5', label: 'SUM\n115.0', color: '#f0ad4e', title: 'Name: SUM<br>Value: 115.0<br>Type: FUNCTION<br>Id: da209449-505d-469f-86f4-fb449c763cc5<br>Formula Expression: Formula String: SUM(E1:E4); Formula Values: SUM(5.0, 7.0, 57.0, 46.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3b4086c1'},
{id: 'a6590e71-e3bd-400f-8b93-0ebb8eae52b7', label: 'E5\n115.0', color: '#31b0d5', title: 'Name: E5<br>Value: 115.0<br>Type: CELL_WITH_FORMULA<br>Id: a6590e71-e3bd-400f-8b93-0ebb8eae52b7<br>Formula Expression: Formula String: SUM(E1:E4); Formula Values: SUM(5.0, 7.0, 57.0, 46.0); Formula Ptg: 5.0, 7.0, 57.0, 46.0 SUM ; Ptgs: E1:E4 SUM  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3b4086c1'},
{id: '7f6085b8-2335-4a1a-817a-49ec214ea73b', label: 'VALUE\n12.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 12.0<br>Type: CONSTANT_VALUE<br>Id: 7f6085b8-2335-4a1a-817a-49ec214ea73b<br>Formula Expression: Formula String: VALUE; Formula Values: 12.0; Formula Ptg: 12.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3b4086c1'},
{id: '43b36771-2fd6-4eea-a16b-7febed294d98', label: 'A1\n12.0', color: '#31b0d5', title: 'Name: A1<br>Value: 12.0<br>Type: CELL_WITH_FORMULA<br>Id: 43b36771-2fd6-4eea-a16b-7febed294d98<br>Formula Expression: Formula String: VALUE; Formula Values: 12.0; Formula Ptg: 12.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3b4086c1'},
{id: 'd6e38241-9609-4c61-b340-3bb1cfa93431', label: 'E1:E4\n[[5.0], [7.0], [57.0], [46.0]]', color: '#31b0d5', title: 'Name: E1:E4<br>Value: [[5.0], [7.0], [57.0], [46.0]]<br>Type: RANGE<br>Id: d6e38241-9609-4c61-b340-3bb1cfa93431<br>Formula Expression: Formula String: E1:E4; Formula Values: [[5.0], [7.0], [57.0], [46.0]]; Formula Ptg: [[5.0], [7.0], [57.0], [46.0]]; Ptgs: E1:E4 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3b4086c1'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '7f6085b8-2335-4a1a-817a-49ec214ea73b', to: '43b36771-2fd6-4eea-a16b-7febed294d98'},
{from: 'd6e38241-9609-4c61-b340-3bb1cfa93431', to: 'da209449-505d-469f-86f4-fb449c763cc5'},
{from: 'da209449-505d-469f-86f4-fb449c763cc5', to: 'a6590e71-e3bd-400f-8b93-0ebb8eae52b7'}
                            ]);