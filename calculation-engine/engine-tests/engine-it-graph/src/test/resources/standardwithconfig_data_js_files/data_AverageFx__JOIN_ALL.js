var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '2b491eaa-21de-4c16-9730-2afaef6fb333', label: 'E5\n5.2', color: '#31b0d5', title: 'Name: E5<br>Value: 5.2<br>Type: CELL_WITH_FORMULA<br>Id: 2b491eaa-21de-4c16-9730-2afaef6fb333<br>Formula Expression: Formula String: AVERAGE(A1:E1); Formula Values: AVERAGE(12.0, 2.0, 3.0, 4.0, 5.0); Formula Ptg: 12.0, 2.0, 3.0, 4.0, 5.0 AVERAGE ; Ptgs: A1:E1 AVERAGE  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1fd14d74'},
{id: '17a9eb8e-096e-46d1-ba24-c08ecb2c4e7a', label: 'A1:E1\n[[12.0, 2.0, 3.0, 4.0, 5.0]]', color: '#31b0d5', title: 'Name: A1:E1<br>Value: [[12.0, 2.0, 3.0, 4.0, 5.0]]<br>Type: RANGE<br>Id: 17a9eb8e-096e-46d1-ba24-c08ecb2c4e7a<br>Formula Expression: Formula String: A1:E1; Formula Values: [[12.0, 2.0, 3.0, 4.0, 5.0]]; Formula Ptg: [[12.0, 2.0, 3.0, 4.0, 5.0]]; Ptgs: A1:E1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1fd14d74'},
{id: '446a0f99-99f7-4882-b250-de075007b85c', label: 'AVERAGE\n5.2', color: '#f0ad4e', title: 'Name: AVERAGE<br>Value: 5.2<br>Type: FUNCTION<br>Id: 446a0f99-99f7-4882-b250-de075007b85c<br>Formula Expression: Formula String: AVERAGE(A1:E1); Formula Values: AVERAGE(12.0, 2.0, 3.0, 4.0, 5.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1fd14d74'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '446a0f99-99f7-4882-b250-de075007b85c', to: '2b491eaa-21de-4c16-9730-2afaef6fb333'},
{from: '17a9eb8e-096e-46d1-ba24-c08ecb2c4e7a', to: '446a0f99-99f7-4882-b250-de075007b85c'}
                            ]);