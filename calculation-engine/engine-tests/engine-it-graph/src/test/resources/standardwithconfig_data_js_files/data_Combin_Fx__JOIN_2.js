var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '84b44e38-1a18-4455-9245-c0c4fa5b17e1', label: 'VALUE\n3.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 3.0<br>Type: CONSTANT_VALUE<br>Id: 84b44e38-1a18-4455-9245-c0c4fa5b17e1<br>Formula Expression: Formula String: VALUE; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@477021ee'},
{id: '115f21f3-1275-4a08-b5cb-d529ae3f0846', label: 'VALUE\n1.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 1.0<br>Type: CONSTANT_VALUE<br>Id: 115f21f3-1275-4a08-b5cb-d529ae3f0846<br>Formula Expression: Formula String: VALUE; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@477021ee'},
{id: 'cafbf569-8997-4d66-8f63-b5d335893dac', label: 'COMBIN\n3.0', color: '#f0ad4e', title: 'Name: COMBIN<br>Value: 3.0<br>Type: FUNCTION<br>Id: cafbf569-8997-4d66-8f63-b5d335893dac<br>Formula Expression: Formula String: COMBIN(VALUE, VALUE); Formula Values: COMBIN(1.0, 3.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@477021ee'},
{id: '894f5e63-5cd8-4ef0-bf14-f643b916c334', label: 'E6\n3.0', color: '#31b0d5', title: 'Name: E6<br>Value: 3.0<br>Type: CELL_WITH_FORMULA<br>Id: 894f5e63-5cd8-4ef0-bf14-f643b916c334<br>Formula Expression: Formula String: COMBIN(VALUE, VALUE); Formula Values: COMBIN(1.0, 3.0); Formula Ptg: 1.0, 3.0 COMBIN ; Ptgs: VALUE, VALUE COMBIN  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@477021ee'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'cafbf569-8997-4d66-8f63-b5d335893dac', to: '894f5e63-5cd8-4ef0-bf14-f643b916c334'},
{from: '115f21f3-1275-4a08-b5cb-d529ae3f0846', to: 'cafbf569-8997-4d66-8f63-b5d335893dac'},
{from: '84b44e38-1a18-4455-9245-c0c4fa5b17e1', to: 'cafbf569-8997-4d66-8f63-b5d335893dac'}
                            ]);