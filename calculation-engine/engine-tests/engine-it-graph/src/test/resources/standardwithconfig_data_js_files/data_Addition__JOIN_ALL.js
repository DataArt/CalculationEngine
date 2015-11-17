var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'a4f225f0-f08e-4c54-961b-e742c5631df6', label: 'A1\n20.0', color: '#31b0d5', title: 'Name: A1<br>Value: 20.0<br>Type: CELL_WITH_VALUE<br>Id: a4f225f0-f08e-4c54-961b-e742c5631df6<br>Formula Expression: Formula String: A1; Formula Values: 20.0; Formula Ptg: 20.0; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@69453e37'},
{id: '03c10bcc-6ec1-4b4a-b593-9cc69e4aeccf', label: '+\n50.0', color: '#f0ad4e', title: 'Name: +<br>Value: 50.0<br>Type: OPERATOR<br>Id: 03c10bcc-6ec1-4b4a-b593-9cc69e4aeccf<br>Formula Expression: Formula String: A1 + A2; Formula Values: 20.0 + 30.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@69453e37'},
{id: '4823b98c-3e7b-4823-9e2c-0954b17ad3db', label: 'A3\n50.0', color: '#31b0d5', title: 'Name: A3<br>Value: 50.0<br>Type: CELL_WITH_FORMULA<br>Id: 4823b98c-3e7b-4823-9e2c-0954b17ad3db<br>Formula Expression: Formula String: A1 + A2; Formula Values: 20.0 + 30.0; Formula Ptg: 20.0 30.0 +; Ptgs: A1 A2 + Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@69453e37'},
{id: '02e97148-a4b9-441f-a608-63a81f9ecdc3', label: 'A2\n30.0', color: '#31b0d5', title: 'Name: A2<br>Value: 30.0<br>Type: CELL_WITH_VALUE<br>Id: 02e97148-a4b9-441f-a608-63a81f9ecdc3<br>Formula Expression: Formula String: A2; Formula Values: 30.0; Formula Ptg: 30.0; Ptgs: A2 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@69453e37'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'a4f225f0-f08e-4c54-961b-e742c5631df6', to: '03c10bcc-6ec1-4b4a-b593-9cc69e4aeccf'},
{from: '02e97148-a4b9-441f-a608-63a81f9ecdc3', to: '03c10bcc-6ec1-4b4a-b593-9cc69e4aeccf'},
{from: '03c10bcc-6ec1-4b4a-b593-9cc69e4aeccf', to: '4823b98c-3e7b-4823-9e2c-0954b17ad3db'}
                            ]);