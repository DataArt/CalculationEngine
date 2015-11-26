var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'e3a1beab-8f4c-4065-8ce8-b37357aa632f', label: 'A1:E1\n[[1.0, 2.0, 3.0, 4.0, 5.0]]', color: '#31b0d5', title: 'Name: A1:E1<br>Alias: null<br>Value: [[1.0, 2.0, 3.0, 4.0, 5.0]]<br>Type: RANGE<br>Id: e3a1beab-8f4c-4065-8ce8-b37357aa632f<br>Formula Expression: Formula String: A1:E1; Formula Values: [[1.0, 2.0, 3.0, 4.0, 5.0]]; Formula Ptg: [[1.0, 2.0, 3.0, 4.0, 5.0]]; Ptgs: A1:E1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@251ebf23'},
{id: '14bd9cf7-1aa3-4e7a-91b8-2e49966f26bf', label: 'SUM\n15.0', color: '#f0ad4e', title: 'Name: SUM<br>Alias: null<br>Value: 15.0<br>Type: FUNCTION<br>Id: 14bd9cf7-1aa3-4e7a-91b8-2e49966f26bf<br>Formula Expression: Formula String: SUM(A1:E1); Formula Values: SUM(1.0, 2.0, 3.0, 4.0, 5.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@251ebf23'},
{id: '4a9aa155-2c6a-471f-b47d-7acde8dfe337', label: 'E6\n15.0', color: '#31b0d5', title: 'Name: E6<br>Alias: null<br>Value: 15.0<br>Type: CELL_WITH_FORMULA<br>Id: 4a9aa155-2c6a-471f-b47d-7acde8dfe337<br>Formula Expression: Formula String: SUM(A1:E1); Formula Values: SUM(1.0, 2.0, 3.0, 4.0, 5.0); Formula Ptg: 1.0, 2.0, 3.0, 4.0, 5.0 SUM ; Ptgs: A1:E1 SUM  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@251ebf23'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '14bd9cf7-1aa3-4e7a-91b8-2e49966f26bf', to: '4a9aa155-2c6a-471f-b47d-7acde8dfe337'},
{from: 'e3a1beab-8f4c-4065-8ce8-b37357aa632f', to: '14bd9cf7-1aa3-4e7a-91b8-2e49966f26bf'}
                            ]);