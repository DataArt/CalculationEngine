var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'db80b590-6e2f-4834-a568-106306ecccf2', label: 'COMBIN\n3.0', color: '#f0ad4e', title: 'Name: COMBIN<br>Value: 3.0<br>Type: FUNCTION<br>Id: db80b590-6e2f-4834-a568-106306ecccf2<br>Formula Expression: Formula String: COMBIN(VALUE, VALUE); Formula Values: COMBIN(1.0, 3.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4b79ac84'},
{id: '653ba64c-468a-42f3-bc62-2521b4f1b642', label: 'VALUE\n3.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 3.0<br>Type: CONSTANT_VALUE<br>Id: 653ba64c-468a-42f3-bc62-2521b4f1b642<br>Formula Expression: Formula String: VALUE; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4b79ac84'},
{id: 'd7652b9d-4d17-402d-a894-d36e47fcf2a1', label: 'E6\n3.0', color: '#31b0d5', title: 'Name: E6<br>Value: 3.0<br>Type: CELL_WITH_FORMULA<br>Id: d7652b9d-4d17-402d-a894-d36e47fcf2a1<br>Formula Expression: Formula String: COMBIN(VALUE, VALUE); Formula Values: COMBIN(1.0, 3.0); Formula Ptg: 1.0, 3.0 COMBIN ; Ptgs: VALUE, VALUE COMBIN  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4b79ac84'},
{id: '8e50a90f-b3aa-495e-a058-08d003fcad1b', label: 'VALUE\n1.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 1.0<br>Type: CONSTANT_VALUE<br>Id: 8e50a90f-b3aa-495e-a058-08d003fcad1b<br>Formula Expression: Formula String: VALUE; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4b79ac84'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'db80b590-6e2f-4834-a568-106306ecccf2', to: 'd7652b9d-4d17-402d-a894-d36e47fcf2a1'},
{from: '653ba64c-468a-42f3-bc62-2521b4f1b642', to: 'db80b590-6e2f-4834-a568-106306ecccf2'},
{from: '8e50a90f-b3aa-495e-a058-08d003fcad1b', to: 'db80b590-6e2f-4834-a568-106306ecccf2'}
                            ]);