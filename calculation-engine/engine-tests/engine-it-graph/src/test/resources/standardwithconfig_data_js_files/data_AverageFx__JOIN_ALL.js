var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '4722bbd0-0cac-4b36-82ba-9425b7963111', label: 'E5\n5.2', color: '#31b0d5', title: 'Name: E5<br>Value: 5.2<br>Type: CELL_WITH_FORMULA<br>Id: 4722bbd0-0cac-4b36-82ba-9425b7963111<br>Formula Expression: Formula String: AVERAGE(A1:E1); Formula Values: AVERAGE(12.0, 2.0, 3.0, 4.0, 5.0); Formula Ptg: 12.0, 2.0, 3.0, 4.0, 5.0 AVERAGE ; Ptgs: A1:E1 AVERAGE  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1fd14d74'},
{id: 'f7213d25-ae23-4620-bd41-c1ac244ca5e6', label: 'A1:E1\n[[12.0, 2.0, 3.0, 4.0, 5.0]]', color: '#31b0d5', title: 'Name: A1:E1<br>Value: [[12.0, 2.0, 3.0, 4.0, 5.0]]<br>Type: RANGE<br>Id: f7213d25-ae23-4620-bd41-c1ac244ca5e6<br>Formula Expression: Formula String: A1:E1; Formula Values: [[12.0, 2.0, 3.0, 4.0, 5.0]]; Formula Ptg: [[12.0, 2.0, 3.0, 4.0, 5.0]]; Ptgs: A1:E1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1fd14d74'},
{id: '80bdadc6-7d5a-406d-90e2-f3f9223c02f3', label: 'AVERAGE\n5.2', color: '#f0ad4e', title: 'Name: AVERAGE<br>Value: 5.2<br>Type: FUNCTION<br>Id: 80bdadc6-7d5a-406d-90e2-f3f9223c02f3<br>Formula Expression: Formula String: AVERAGE(A1:E1); Formula Values: AVERAGE(12.0, 2.0, 3.0, 4.0, 5.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1fd14d74'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '80bdadc6-7d5a-406d-90e2-f3f9223c02f3', to: '4722bbd0-0cac-4b36-82ba-9425b7963111'},
{from: 'f7213d25-ae23-4620-bd41-c1ac244ca5e6', to: '80bdadc6-7d5a-406d-90e2-f3f9223c02f3'}
                            ]);