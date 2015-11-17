var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '6564ac99-5746-4b5d-9733-af593e8b7c31', label: 'VALUE\ntext', color: '#31b0d5', title: 'Name: VALUE<br>Value: text<br>Type: CONSTANT_VALUE<br>Id: 6564ac99-5746-4b5d-9733-af593e8b7c31<br>Formula Expression: Formula String: VALUE; Formula Values: text; Formula Ptg: text; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@579c24c2'},
{id: '92e8696c-e0bb-4237-a474-8c48d35fd592', label: 'A1\nSome text for test', color: '#31b0d5', title: 'Name: A1<br>Value: Some text for test<br>Type: CELL_WITH_VALUE<br>Id: 92e8696c-e0bb-4237-a474-8c48d35fd592<br>Formula Expression: Formula String: A1; Formula Values: Some text for test; Formula Ptg: Some text for test; Ptgs: A1 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@579c24c2'},
{id: '0f606ed6-8af3-40b4-99cd-8d500607ae4d', label: 'FIND\n6.0', color: '#f0ad4e', title: 'Name: FIND<br>Value: 6.0<br>Type: FUNCTION<br>Id: 0f606ed6-8af3-40b4-99cd-8d500607ae4d<br>Formula Expression: Formula String: FIND(A1, VALUE); Formula Values: FIND(Some text for test, text); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@579c24c2'},
{id: 'a6768653-7cb9-41df-b2ff-de1ca6257d1b', label: 'A5\n6.0', color: '#31b0d5', title: 'Name: A5<br>Value: 6.0<br>Type: CELL_WITH_FORMULA<br>Id: a6768653-7cb9-41df-b2ff-de1ca6257d1b<br>Formula Expression: Formula String: FIND(A1, VALUE); Formula Values: FIND(Some text for test, text); Formula Ptg: Some text for test, text FIND ; Ptgs: A1, VALUE FIND  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@579c24c2'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '0f606ed6-8af3-40b4-99cd-8d500607ae4d', to: 'a6768653-7cb9-41df-b2ff-de1ca6257d1b'},
{from: '92e8696c-e0bb-4237-a474-8c48d35fd592', to: '0f606ed6-8af3-40b4-99cd-8d500607ae4d'},
{from: '6564ac99-5746-4b5d-9733-af593e8b7c31', to: '0f606ed6-8af3-40b4-99cd-8d500607ae4d'}
                            ]);