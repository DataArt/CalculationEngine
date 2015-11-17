var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'eebba37d-168f-4583-9eb0-bbc9f75d407e', label: 'E6\n3.0', color: '#31b0d5', title: 'Name: E6<br>Value: 3.0<br>Type: CELL_WITH_FORMULA<br>Id: eebba37d-168f-4583-9eb0-bbc9f75d407e<br>Formula Expression: Formula String: COMBIN(VALUE, VALUE); Formula Values: COMBIN(1.0, 3.0); Formula Ptg: 1.0, 3.0 COMBIN ; Ptgs: VALUE, VALUE COMBIN  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@d96f413'},
{id: '3e4d82f7-72a3-49bd-95b0-1160a295ea7a', label: 'VALUE\n3.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 3.0<br>Type: CONSTANT_VALUE<br>Id: 3e4d82f7-72a3-49bd-95b0-1160a295ea7a<br>Formula Expression: Formula String: VALUE; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@d96f413'},
{id: '6c2cf43d-70c6-4294-9c61-cb3f8eabbb03', label: 'COMBIN\n3.0', color: '#f0ad4e', title: 'Name: COMBIN<br>Value: 3.0<br>Type: FUNCTION<br>Id: 6c2cf43d-70c6-4294-9c61-cb3f8eabbb03<br>Formula Expression: Formula String: COMBIN(VALUE, VALUE); Formula Values: COMBIN(1.0, 3.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@d96f413'},
{id: '10875e82-f9c5-4d28-a89d-31c0816105c7', label: 'VALUE\n1.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 1.0<br>Type: CONSTANT_VALUE<br>Id: 10875e82-f9c5-4d28-a89d-31c0816105c7<br>Formula Expression: Formula String: VALUE; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@d96f413'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '3e4d82f7-72a3-49bd-95b0-1160a295ea7a', to: '6c2cf43d-70c6-4294-9c61-cb3f8eabbb03'},
{from: '10875e82-f9c5-4d28-a89d-31c0816105c7', to: '6c2cf43d-70c6-4294-9c61-cb3f8eabbb03'},
{from: '6c2cf43d-70c6-4294-9c61-cb3f8eabbb03', to: 'eebba37d-168f-4583-9eb0-bbc9f75d407e'}
                            ]);