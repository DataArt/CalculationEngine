var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '53f5262d-e793-43c0-afe5-9ebbb40c2959', label: 'VALUE\n5.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 5.0<br>Type: CONSTANT_VALUE<br>Id: 53f5262d-e793-43c0-afe5-9ebbb40c2959<br>Formula Expression: Formula String: VALUE; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7d59e968'},
{id: '7ca56b6f-957f-49f0-b321-450c970c337a', label: 'E6\n8.0', color: '#31b0d5', title: 'Name: E6<br>Value: 8.0<br>Type: CELL_WITH_FORMULA<br>Id: 7ca56b6f-957f-49f0-b321-450c970c337a<br>Formula Expression: Formula String: IF(D1>5,D2,C3); Formula Values: IF(4.0 > 5.0, 8.0); Formula Ptg: 8.0, 4.0 5.0 > IF ; Ptgs: C3, D1 VALUE > IF  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7d59e968'},
{id: '1cf75800-779c-475b-9fee-fc3c5410618c', label: '>\nFALSE', color: '#f0ad4e', title: 'Name: ><br>Value: FALSE<br>Type: OPERATOR<br>Id: 1cf75800-779c-475b-9fee-fc3c5410618c<br>Formula Expression: Formula String: D1 > VALUE; Formula Values: 4.0 > 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7d59e968'},
{id: 'ba77ae07-028e-4280-b456-bdca7e7d8e54', label: 'IF\n8.0', color: '#f0ad4e', title: 'Name: IF<br>Value: 8.0<br>Type: IF<br>Id: ba77ae07-028e-4280-b456-bdca7e7d8e54<br>Formula Expression: Formula String: IF(D1>5,D2,C3); Formula Values: IF(4.0 > 5.0, 8.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7d59e968'},
{id: '4e8e38cf-21fb-4367-aa9a-b5c6d41b5486', label: 'D1\n4.0', color: '#31b0d5', title: 'Name: D1<br>Value: 4.0<br>Type: CELL_WITH_VALUE<br>Id: 4e8e38cf-21fb-4367-aa9a-b5c6d41b5486<br>Formula Expression: Formula String: D1; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: D1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7d59e968'},
{id: 'e5e9e8d1-09e9-4cdb-a718-609881596a0a', label: 'C3\n8.0', color: '#31b0d5', title: 'Name: C3<br>Value: 8.0<br>Type: CELL_WITH_VALUE<br>Id: e5e9e8d1-09e9-4cdb-a718-609881596a0a<br>Formula Expression: Formula String: C3; Formula Values: 8.0; Formula Ptg: 8.0; Ptgs: C3 Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7d59e968'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '1cf75800-779c-475b-9fee-fc3c5410618c', to: 'ba77ae07-028e-4280-b456-bdca7e7d8e54'},
{from: 'ba77ae07-028e-4280-b456-bdca7e7d8e54', to: '7ca56b6f-957f-49f0-b321-450c970c337a'},
{from: '4e8e38cf-21fb-4367-aa9a-b5c6d41b5486', to: '1cf75800-779c-475b-9fee-fc3c5410618c'},
{from: 'e5e9e8d1-09e9-4cdb-a718-609881596a0a', to: 'ba77ae07-028e-4280-b456-bdca7e7d8e54'},
{from: '53f5262d-e793-43c0-afe5-9ebbb40c2959', to: '1cf75800-779c-475b-9fee-fc3c5410618c'}
                            ]);