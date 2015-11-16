var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '390197e9-cd58-47ac-9cf5-e8120c26ea69', label: 'VALUE\n2.5', color: '#31b0d5', title: 'Name: VALUE<br>Value: 2.5<br>Type: CONSTANT_VALUE<br>Id: 390197e9-cd58-47ac-9cf5-e8120c26ea69<br>Formula Expression: Formula String: VALUE; Formula Values: 2.5; Formula Ptg: 2.5; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@73877e19'},
{id: 'af55a6fb-bd97-440d-abda-8793dfe45db6', label: 'B2\n2.0', color: '#31b0d5', title: 'Name: B2<br>Value: 2.0<br>Type: CELL_WITH_FORMULA<br>Id: af55a6fb-bd97-440d-abda-8793dfe45db6<br>Formula Expression: Formula String: EVEN(VALUE); Formula Values: EVEN(1.5); Formula Ptg: 1.5 EVEN ; Ptgs: VALUE EVEN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@73877e19'},
{id: '7000e5f8-edc2-4b91-bfa5-70fcd30c9abc', label: 'EVEN\n2.0', color: '#f0ad4e', title: 'Name: EVEN<br>Value: 2.0<br>Type: FUNCTION<br>Id: 7000e5f8-edc2-4b91-bfa5-70fcd30c9abc<br>Formula Expression: Formula String: EVEN(VALUE); Formula Values: EVEN(1.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@73877e19'},
{id: '66160155-e39e-4b65-925b-621201ff07ab', label: 'EVEN\n4.0', color: '#f0ad4e', title: 'Name: EVEN<br>Value: 4.0<br>Type: FUNCTION<br>Id: 66160155-e39e-4b65-925b-621201ff07ab<br>Formula Expression: Formula String: EVEN(VALUE); Formula Values: EVEN(2.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@73877e19'},
{id: '346f28d9-be12-4b25-93f1-d006bc403d9b', label: 'B3\n4.0', color: '#31b0d5', title: 'Name: B3<br>Value: 4.0<br>Type: CELL_WITH_FORMULA<br>Id: 346f28d9-be12-4b25-93f1-d006bc403d9b<br>Formula Expression: Formula String: EVEN(VALUE); Formula Values: EVEN(2.5); Formula Ptg: 2.5 EVEN ; Ptgs: VALUE EVEN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@73877e19'},
{id: '4cb78360-404b-400e-942b-7dfa1fe68e68', label: 'VALUE\n1.5', color: '#31b0d5', title: 'Name: VALUE<br>Value: 1.5<br>Type: CONSTANT_VALUE<br>Id: 4cb78360-404b-400e-942b-7dfa1fe68e68<br>Formula Expression: Formula String: VALUE; Formula Values: 1.5; Formula Ptg: 1.5; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@73877e19'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '66160155-e39e-4b65-925b-621201ff07ab', to: '346f28d9-be12-4b25-93f1-d006bc403d9b'},
{from: '7000e5f8-edc2-4b91-bfa5-70fcd30c9abc', to: 'af55a6fb-bd97-440d-abda-8793dfe45db6'},
{from: '4cb78360-404b-400e-942b-7dfa1fe68e68', to: '7000e5f8-edc2-4b91-bfa5-70fcd30c9abc'},
{from: '390197e9-cd58-47ac-9cf5-e8120c26ea69', to: '66160155-e39e-4b65-925b-621201ff07ab'}
                            ]);