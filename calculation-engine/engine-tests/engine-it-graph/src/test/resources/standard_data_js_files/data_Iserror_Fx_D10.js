var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'bc6391df-46e6-4ff9-a32b-88c37ed6f05c', label: 'B2\n6.0', color: '#31b0d5', title: 'Name: B2<br>Alias: null<br>Value: 6.0<br>Type: CELL_WITH_VALUE<br>Id: bc6391df-46e6-4ff9-a32b-88c37ed6f05c<br>Formula Expression: Formula String: B2; Formula Values: 6.0; Formula Ptg: 6.0; Ptgs: B2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2b98b3bb'},
{id: '1421d751-945b-4639-aaf4-5049006cd8b9', label: 'ISERROR\nTRUE', color: '#f0ad4e', title: 'Name: ISERROR<br>Alias: null<br>Value: TRUE<br>Type: FUNCTION<br>Id: 1421d751-945b-4639-aaf4-5049006cd8b9<br>Formula Expression: Formula String: ISERROR(B2 / B7); Formula Values: ISERROR(6.0 / ); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2b98b3bb'},
{id: '77000911-1573-47eb-8f83-74f989a7b58f', label: 'E1\n#DIV/0!', color: '#31b0d5', title: 'Name: E1<br>Alias: null<br>Value: #DIV/0!<br>Type: CELL_WITH_FORMULA<br>Id: 77000911-1573-47eb-8f83-74f989a7b58f<br>Formula Expression: Formula String: B2 / B7; Formula Values: 6.0 / ; Formula Ptg: 6.0  /; Ptgs: B2 B7 / Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2b98b3bb'},
{id: 'a03a9939-c2f4-4aee-832b-d5d3ac992f51', label: 'D10\nTRUE', color: '#31b0d5', title: 'Name: D10<br>Alias: null<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: a03a9939-c2f4-4aee-832b-d5d3ac992f51<br>Formula Expression: Formula String: ISERROR(B2 / B7); Formula Values: ISERROR(6.0 / ); Formula Ptg: 6.0  / ISERROR ; Ptgs: B2 B7 / ISERROR  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2b98b3bb'},
{id: '60c4cb59-d2dd-4c2c-bc21-344b057fc008', label: '/\n#DIV/0!', color: '#f0ad4e', title: 'Name: /<br>Alias: null<br>Value: #DIV/0!<br>Type: OPERATOR<br>Id: 60c4cb59-d2dd-4c2c-bc21-344b057fc008<br>Formula Expression: Formula String: B2 / B7; Formula Values: 6.0 / ; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2b98b3bb'},
{id: 'cd8f01cb-483b-47a4-a248-008f73f1b071', label: 'B7\n', color: '#31b0d5', title: 'Name: B7<br>Alias: null<br>Value: <br>Type: EMPTY_CELL<br>Id: cd8f01cb-483b-47a4-a248-008f73f1b071<br>Formula Expression: Formula String: B7; Formula Values: ; Formula Ptg: ; Ptgs: B7 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2b98b3bb'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'bc6391df-46e6-4ff9-a32b-88c37ed6f05c', to: '60c4cb59-d2dd-4c2c-bc21-344b057fc008'},
{from: '77000911-1573-47eb-8f83-74f989a7b58f', to: '1421d751-945b-4639-aaf4-5049006cd8b9'},
{from: '60c4cb59-d2dd-4c2c-bc21-344b057fc008', to: '77000911-1573-47eb-8f83-74f989a7b58f'},
{from: '1421d751-945b-4639-aaf4-5049006cd8b9', to: 'a03a9939-c2f4-4aee-832b-d5d3ac992f51'},
{from: 'cd8f01cb-483b-47a4-a248-008f73f1b071', to: '60c4cb59-d2dd-4c2c-bc21-344b057fc008'}
                            ]);