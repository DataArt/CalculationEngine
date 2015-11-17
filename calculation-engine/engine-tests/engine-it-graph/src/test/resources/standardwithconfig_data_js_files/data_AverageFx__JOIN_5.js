var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '5289b77f-601c-4c72-addb-027f00506d08', label: 'A1:E1\n[[12.0, 2.0, 3.0, 4.0, 5.0]]', color: '#31b0d5', title: 'Name: A1:E1<br>Value: [[12.0, 2.0, 3.0, 4.0, 5.0]]<br>Type: RANGE<br>Id: 5289b77f-601c-4c72-addb-027f00506d08<br>Formula Expression: Formula String: A1:E1; Formula Values: [[12.0, 2.0, 3.0, 4.0, 5.0]]; Formula Ptg: [[12.0, 2.0, 3.0, 4.0, 5.0]]; Ptgs: A1:E1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7241872c'},
{id: '77cf0537-6742-4ac3-abaa-ee232ea6ce14', label: 'E5\n5.2', color: '#31b0d5', title: 'Name: E5<br>Value: 5.2<br>Type: CELL_WITH_FORMULA<br>Id: 77cf0537-6742-4ac3-abaa-ee232ea6ce14<br>Formula Expression: Formula String: AVERAGE(A1:E1); Formula Values: AVERAGE(12.0, 2.0, 3.0, 4.0, 5.0); Formula Ptg: 12.0, 2.0, 3.0, 4.0, 5.0 AVERAGE ; Ptgs: A1:E1 AVERAGE  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7241872c'},
{id: '835301e1-5c21-44f9-bf01-5cd95a77c8f7', label: 'AVERAGE\n5.2', color: '#f0ad4e', title: 'Name: AVERAGE<br>Value: 5.2<br>Type: FUNCTION<br>Id: 835301e1-5c21-44f9-bf01-5cd95a77c8f7<br>Formula Expression: Formula String: AVERAGE(A1:E1); Formula Values: AVERAGE(12.0, 2.0, 3.0, 4.0, 5.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7241872c'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '835301e1-5c21-44f9-bf01-5cd95a77c8f7', to: '77cf0537-6742-4ac3-abaa-ee232ea6ce14'},
{from: '5289b77f-601c-4c72-addb-027f00506d08', to: '835301e1-5c21-44f9-bf01-5cd95a77c8f7'}
                            ]);