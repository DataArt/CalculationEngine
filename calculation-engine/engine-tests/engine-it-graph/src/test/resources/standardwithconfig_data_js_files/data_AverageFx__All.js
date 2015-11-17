var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'e57567db-2067-434f-8e1e-24729e7a8e1d', label: 'E5\n5.2', color: '#31b0d5', title: 'Name: E5<br>Value: 5.2<br>Type: CELL_WITH_FORMULA<br>Id: e57567db-2067-434f-8e1e-24729e7a8e1d<br>Formula Expression: Formula String: AVERAGE(A1:E1); Formula Values: AVERAGE(12.0, 2.0, 3.0, 4.0, 5.0); Formula Ptg: 12.0, 2.0, 3.0, 4.0, 5.0 AVERAGE ; Ptgs: A1:E1 AVERAGE  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@308d8de8'},
{id: '0c1c1a9e-3d84-4c37-b122-65077d0f5246', label: 'A1:E1\n[[12.0, 2.0, 3.0, 4.0, 5.0]]', color: '#31b0d5', title: 'Name: A1:E1<br>Value: [[12.0, 2.0, 3.0, 4.0, 5.0]]<br>Type: RANGE<br>Id: 0c1c1a9e-3d84-4c37-b122-65077d0f5246<br>Formula Expression: Formula String: A1:E1; Formula Values: [[12.0, 2.0, 3.0, 4.0, 5.0]]; Formula Ptg: [[12.0, 2.0, 3.0, 4.0, 5.0]]; Ptgs: A1:E1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@308d8de8'},
{id: 'a5edf447-569b-4c46-b6ef-5289faad2465', label: 'AVERAGE\n5.2', color: '#f0ad4e', title: 'Name: AVERAGE<br>Value: 5.2<br>Type: FUNCTION<br>Id: a5edf447-569b-4c46-b6ef-5289faad2465<br>Formula Expression: Formula String: AVERAGE(A1:E1); Formula Values: AVERAGE(12.0, 2.0, 3.0, 4.0, 5.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@308d8de8'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'a5edf447-569b-4c46-b6ef-5289faad2465', to: 'e57567db-2067-434f-8e1e-24729e7a8e1d'},
{from: '0c1c1a9e-3d84-4c37-b122-65077d0f5246', to: 'a5edf447-569b-4c46-b6ef-5289faad2465'}
                            ]);