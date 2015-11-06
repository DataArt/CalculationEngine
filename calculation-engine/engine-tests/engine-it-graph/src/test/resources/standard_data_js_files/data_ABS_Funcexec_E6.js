var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '8f3d397a-2a80-4101-a4a0-46727036f812', label: 'A2\n5.0', color: '#31b0d5', title: 'Name: A2<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 8f3d397a-2a80-4101-a4a0-46727036f812<br>Formula Expression: Formula String: A2; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: A2 Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@61dd025'},
{id: '9d5df540-cf81-4bd8-827a-edef7c4aa326', label: 'FUNCEXEC\n5.0', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Value: 5.0<br>Type: FUNCTION<br>Id: 9d5df540-cf81-4bd8-827a-edef7c4aa326<br>Formula Expression: Formula String: FUNCEXEC(A2, VALUE); Formula Values: FUNCEXEC(5.0, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@61dd025'},
{id: 'bc9cd0ce-b656-4804-86d6-8b9a96230dcc', label: 'VALUE\nDEVDEF', color: '#31b0d5', title: 'Name: VALUE<br>Value: DEVDEF<br>Type: CONSTANT_VALUE<br>Id: bc9cd0ce-b656-4804-86d6-8b9a96230dcc<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF; Formula Ptg: DEVDEF; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@61dd025'},
{id: '7420f7da-f28b-4ccb-9690-713b94b77437', label: 'E6\n5.0', color: '#31b0d5', title: 'Name: E6<br>Value: 5.0<br>Type: CELL_WITH_FORMULA<br>Id: 7420f7da-f28b-4ccb-9690-713b94b77437<br>Formula Expression: Formula String: FUNCEXEC(A2, VALUE); Formula Values: FUNCEXEC(5.0, DEVDEF); Formula Ptg: 5.0, DEVDEF FUNCEXEC ; Ptgs: A2, VALUE FUNCEXEC  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@61dd025'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '9d5df540-cf81-4bd8-827a-edef7c4aa326', to: '7420f7da-f28b-4ccb-9690-713b94b77437'},
{from: 'bc9cd0ce-b656-4804-86d6-8b9a96230dcc', to: '9d5df540-cf81-4bd8-827a-edef7c4aa326'},
{from: '8f3d397a-2a80-4101-a4a0-46727036f812', to: '9d5df540-cf81-4bd8-827a-edef7c4aa326'}
                            ]);