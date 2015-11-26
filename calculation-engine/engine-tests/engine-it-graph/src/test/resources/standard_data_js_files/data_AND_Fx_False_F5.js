var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '07ff450c-9365-4c71-ac7e-e7e5bdd92f8f', label: 'D3\n367.0', color: '#31b0d5', title: 'Name: D3<br>Alias: null<br>Value: 367.0<br>Type: CELL_WITH_VALUE<br>Id: 07ff450c-9365-4c71-ac7e-e7e5bdd92f8f<br>Formula Expression: Formula String: D3; Formula Values: 367.0; Formula Ptg: 367.0; Ptgs: D3 Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1dac5ef'},
{id: 'a1303251-8bdb-463d-a821-236917b6f99d', label: 'VALUE\n1.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 1.0<br>Type: CONSTANT_VALUE<br>Id: a1303251-8bdb-463d-a821-236917b6f99d<br>Formula Expression: Formula String: VALUE; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1dac5ef'},
{id: 'dffe6e76-0c48-483d-9cc8-fbee08a8e885', label: 'AND\nFALSE', color: '#f0ad4e', title: 'Name: AND<br>Alias: null<br>Value: FALSE<br>Type: FUNCTION<br>Id: dffe6e76-0c48-483d-9cc8-fbee08a8e885<br>Formula Expression: Formula String: AND(E1 + D3 = C4, VALUE < D1); Formula Values: AND(5.0 + 367.0 = 89.0, 1.0 < 0.4); Formula Ptg: ; Ptgs:  Index in Ptgs: 8 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1dac5ef'},
{id: '0757f19e-8db1-4d6b-ac76-0487e39c5b3a', label: '<\nFALSE', color: '#f0ad4e', title: 'Name: <<br>Alias: null<br>Value: FALSE<br>Type: OPERATOR<br>Id: 0757f19e-8db1-4d6b-ac76-0487e39c5b3a<br>Formula Expression: Formula String: VALUE < D1; Formula Values: 1.0 < 0.4; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1dac5ef'},
{id: 'b174b4b5-bf0b-478b-b2f1-99c697f24cc6', label: 'C4\n89.0', color: '#31b0d5', title: 'Name: C4<br>Alias: null<br>Value: 89.0<br>Type: CELL_WITH_VALUE<br>Id: b174b4b5-bf0b-478b-b2f1-99c697f24cc6<br>Formula Expression: Formula String: C4; Formula Values: 89.0; Formula Ptg: 89.0; Ptgs: C4 Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1dac5ef'},
{id: '53b4c0a0-da16-48c3-ad48-c922a92ab0eb', label: '=\nFALSE', color: '#f0ad4e', title: 'Name: =<br>Alias: null<br>Value: FALSE<br>Type: OPERATOR<br>Id: 53b4c0a0-da16-48c3-ad48-c922a92ab0eb<br>Formula Expression: Formula String: E1 + D3 = C4; Formula Values: 5.0 + 367.0 = 89.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 7 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1dac5ef'},
{id: 'bc7bf838-2f36-4af2-b756-1e5a98c28a73', label: 'F5\nFALSE', color: '#31b0d5', title: 'Name: F5<br>Alias: null<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: bc7bf838-2f36-4af2-b756-1e5a98c28a73<br>Formula Expression: Formula String: AND(E1 + D3 = C4, VALUE < D1); Formula Values: AND(5.0 + 367.0 = 89.0, 1.0 < 0.4); Formula Ptg: 5.0 367.0 + 89.0 =, 1.0 0.4 < AND ; Ptgs: E1 D3 + C4 =, VALUE D1 < AND  Index in Ptgs: 8 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1dac5ef'},
{id: '35fcf070-0ceb-4bbc-ae6a-0aa9ee01c9aa', label: 'E1\n5.0', color: '#31b0d5', title: 'Name: E1<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 35fcf070-0ceb-4bbc-ae6a-0aa9ee01c9aa<br>Formula Expression: Formula String: E1; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: E1 Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1dac5ef'},
{id: 'b4fecd53-789c-4cbf-8bb5-bc6dee046a84', label: 'D1\n0.4', color: '#31b0d5', title: 'Name: D1<br>Alias: null<br>Value: 0.4<br>Type: CELL_WITH_VALUE<br>Id: b4fecd53-789c-4cbf-8bb5-bc6dee046a84<br>Formula Expression: Formula String: D1; Formula Values: 0.4; Formula Ptg: 0.4; Ptgs: D1 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1dac5ef'},
{id: '3a41b1ed-c5bf-4111-a44e-44e42801b2bc', label: '+\n372.0', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 372.0<br>Type: OPERATOR<br>Id: 3a41b1ed-c5bf-4111-a44e-44e42801b2bc<br>Formula Expression: Formula String: E1 + D3; Formula Values: 5.0 + 367.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1dac5ef'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '0757f19e-8db1-4d6b-ac76-0487e39c5b3a', to: 'dffe6e76-0c48-483d-9cc8-fbee08a8e885'},
{from: 'b4fecd53-789c-4cbf-8bb5-bc6dee046a84', to: '0757f19e-8db1-4d6b-ac76-0487e39c5b3a'},
{from: 'a1303251-8bdb-463d-a821-236917b6f99d', to: '0757f19e-8db1-4d6b-ac76-0487e39c5b3a'},
{from: 'b174b4b5-bf0b-478b-b2f1-99c697f24cc6', to: '53b4c0a0-da16-48c3-ad48-c922a92ab0eb'},
{from: '07ff450c-9365-4c71-ac7e-e7e5bdd92f8f', to: '3a41b1ed-c5bf-4111-a44e-44e42801b2bc'},
{from: '35fcf070-0ceb-4bbc-ae6a-0aa9ee01c9aa', to: '3a41b1ed-c5bf-4111-a44e-44e42801b2bc'},
{from: 'dffe6e76-0c48-483d-9cc8-fbee08a8e885', to: 'bc7bf838-2f36-4af2-b756-1e5a98c28a73'},
{from: '3a41b1ed-c5bf-4111-a44e-44e42801b2bc', to: '53b4c0a0-da16-48c3-ad48-c922a92ab0eb'},
{from: '53b4c0a0-da16-48c3-ad48-c922a92ab0eb', to: 'dffe6e76-0c48-483d-9cc8-fbee08a8e885'}
                            ]);