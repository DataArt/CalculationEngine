var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '26bbb4d1-96b3-4be2-9bbd-ef68a2e64360', label: 'A3\n3.0', color: '#31b0d5', title: 'Name: A3<br>Value: 3.0<br>Type: CELL_WITH_VALUE<br>Id: 26bbb4d1-96b3-4be2-9bbd-ef68a2e64360<br>Formula Expression: Formula String: A3; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: A3 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1c32886a'},
{id: 'f02f46ef-7ac3-4e0a-a4ba-695f8a2eddcd', label: 'A4\n5.0', color: '#31b0d5', title: 'Name: A4<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: f02f46ef-7ac3-4e0a-a4ba-695f8a2eddcd<br>Formula Expression: Formula String: A4; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: A4 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1c32886a'},
{id: 'f3f522f5-008f-4e21-9d59-1f7317196d6a', label: '>\nFALSE', color: '#f0ad4e', title: 'Name: ><br>Value: FALSE<br>Type: OPERATOR<br>Id: f3f522f5-008f-4e21-9d59-1f7317196d6a<br>Formula Expression: Formula String: A3 > A4; Formula Values: 3.0 > 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1c32886a'},
{id: 'a480ab32-afb3-4e63-bb15-c016934bf703', label: 'IF\n6.0', color: '#f0ad4e', title: 'Name: IF<br>Value: 6.0<br>Type: IF<br>Id: a480ab32-afb3-4e63-bb15-c016934bf703<br>Formula Expression: Formula String: IF(A3>A4,B3,B4); Formula Values: IF(3.0 > 5.0, 6.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1c32886a'},
{id: '90a0971f-5670-416a-a112-08c05d0565e1', label: '+\n6.0', color: '#f0ad4e', title: 'Name: +<br>Value: 6.0<br>Type: OPERATOR<br>Id: 90a0971f-5670-416a-a112-08c05d0565e1<br>Formula Expression: Formula String:  + IF(A3>A4,B3,B4); Formula Values:  + IF(3.0 > 5.0, 6.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 9 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1c32886a'},
{id: 'fc57df6a-021b-433d-a6b1-581ea1077395', label: 'A1\n6.0', color: '#31b0d5', title: 'Name: A1<br>Value: 6.0<br>Type: CELL_WITH_FORMULA<br>Id: fc57df6a-021b-433d-a6b1-581ea1077395<br>Formula Expression: Formula String:  + IF(A3>A4,B3,B4); Formula Values:  + IF(3.0 > 5.0, 6.0); Formula Ptg:  6.0, 3.0 5.0 > IF  +; Ptgs:  B4, A3 A4 > IF  + Index in Ptgs: 9 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1c32886a'},
{id: '00092587-541d-4303-ac00-73f6a6b86eed', label: 'B4\n6.0', color: '#31b0d5', title: 'Name: B4<br>Value: 6.0<br>Type: CELL_WITH_VALUE<br>Id: 00092587-541d-4303-ac00-73f6a6b86eed<br>Formula Expression: Formula String: B4; Formula Values: 6.0; Formula Ptg: 6.0; Ptgs: B4 Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1c32886a'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'a480ab32-afb3-4e63-bb15-c016934bf703', to: '90a0971f-5670-416a-a112-08c05d0565e1'},
{from: '00092587-541d-4303-ac00-73f6a6b86eed', to: 'a480ab32-afb3-4e63-bb15-c016934bf703'},
{from: '90a0971f-5670-416a-a112-08c05d0565e1', to: 'fc57df6a-021b-433d-a6b1-581ea1077395'},
{from: 'f02f46ef-7ac3-4e0a-a4ba-695f8a2eddcd', to: 'f3f522f5-008f-4e21-9d59-1f7317196d6a'},
{from: '26bbb4d1-96b3-4be2-9bbd-ef68a2e64360', to: 'f3f522f5-008f-4e21-9d59-1f7317196d6a'},
{from: 'f3f522f5-008f-4e21-9d59-1f7317196d6a', to: 'a480ab32-afb3-4e63-bb15-c016934bf703'}
                            ]);