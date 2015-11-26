var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '112fca46-b3c1-40d9-b989-1a5f9a3b483e', label: 'INDIRECT\n10.0', color: '#f0ad4e', title: 'Name: INDIRECT<br>Alias: null<br>Value: 10.0<br>Type: FUNCTION<br>Id: 112fca46-b3c1-40d9-b989-1a5f9a3b483e<br>Formula Expression: Formula String: INDIRECT(VALUE); Formula Values: INDIRECT(Bolt); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@26f96b85'},
{id: 'ac889ecd-6004-4445-b3d8-3b9eefb2bd09', label: 'C7\n10.0', color: '#31b0d5', title: 'Name: C7<br>Alias: null<br>Value: 10.0<br>Type: CELL_WITH_FORMULA<br>Id: ac889ecd-6004-4445-b3d8-3b9eefb2bd09<br>Formula Expression: Formula String: INDIRECT(VALUE); Formula Values: INDIRECT(Bolt); Formula Ptg: Bolt INDIRECT ; Ptgs: VALUE INDIRECT  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@26f96b85'},
{id: '90666af9-1937-4adf-8344-1455f46b5ff9', label: 'VALUE\nBolt', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: Bolt<br>Type: CONSTANT_VALUE<br>Id: 90666af9-1937-4adf-8344-1455f46b5ff9<br>Formula Expression: Formula String: VALUE; Formula Values: Bolt; Formula Ptg: Bolt; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@26f96b85'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '112fca46-b3c1-40d9-b989-1a5f9a3b483e', to: 'ac889ecd-6004-4445-b3d8-3b9eefb2bd09'},
{from: '90666af9-1937-4adf-8344-1455f46b5ff9', to: '112fca46-b3c1-40d9-b989-1a5f9a3b483e'}
                            ]);