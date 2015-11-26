var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '2d2de5b1-fb03-4254-8274-b0b4ed3c7315', label: 'VALUE\nDEVDEF', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: DEVDEF<br>Type: CONSTANT_VALUE<br>Id: 2d2de5b1-fb03-4254-8274-b0b4ed3c7315<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF; Formula Ptg: DEVDEF; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@77167fb7'},
{id: '5be584ca-e83b-410c-b2b0-677543c7dce4', label: 'A2\n5.0', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 5be584ca-e83b-410c-b2b0-677543c7dce4<br>Formula Expression: Formula String: A2; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: A2 Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@77167fb7'},
{id: 'e8651171-c2ed-4eed-a38f-cd6f2cd34d9d', label: 'E6\n5.0', color: '#31b0d5', title: 'Name: E6<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_FORMULA<br>Id: e8651171-c2ed-4eed-a38f-cd6f2cd34d9d<br>Formula Expression: Formula String: FUNCEXEC(A2, VALUE); Formula Values: FUNCEXEC(5.0, DEVDEF); Formula Ptg: 5.0, DEVDEF FUNCEXEC ; Ptgs: A2, VALUE FUNCEXEC  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@77167fb7'},
{id: '4a2cb8b8-a3f1-481b-bfe2-5364f84e03fb', label: 'FUNCEXEC\n5.0', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Alias: null<br>Value: 5.0<br>Type: FUNCTION<br>Id: 4a2cb8b8-a3f1-481b-bfe2-5364f84e03fb<br>Formula Expression: Formula String: FUNCEXEC(A2, VALUE); Formula Values: FUNCEXEC(5.0, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@77167fb7'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '4a2cb8b8-a3f1-481b-bfe2-5364f84e03fb', to: 'e8651171-c2ed-4eed-a38f-cd6f2cd34d9d'},
{from: '2d2de5b1-fb03-4254-8274-b0b4ed3c7315', to: '4a2cb8b8-a3f1-481b-bfe2-5364f84e03fb'},
{from: '5be584ca-e83b-410c-b2b0-677543c7dce4', to: '4a2cb8b8-a3f1-481b-bfe2-5364f84e03fb'}
                            ]);