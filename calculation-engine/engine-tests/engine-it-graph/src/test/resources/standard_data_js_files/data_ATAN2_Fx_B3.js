var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '0134c340-f23a-485d-9e9e-ecd06d79fd67', label: 'VALUE\n-1.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: -1.0<br>Type: CONSTANT_VALUE<br>Id: 0134c340-f23a-485d-9e9e-ecd06d79fd67<br>Formula Expression: Formula String: VALUE; Formula Values: -1.0; Formula Ptg: -1.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@82de64a'},
{id: 'ef0f47b3-c33e-4c58-bbcf-91ed3f1df7c4', label: 'ATAN2\n-2.356194490192345', color: '#f0ad4e', title: 'Name: ATAN2<br>Alias: null<br>Value: -2.356194490192345<br>Type: FUNCTION<br>Id: ef0f47b3-c33e-4c58-bbcf-91ed3f1df7c4<br>Formula Expression: Formula String: ATAN2(VALUE, VALUE); Formula Values: ATAN2(-1.0, -1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@82de64a'},
{id: '6282e590-bffb-49b7-a9d0-fb563be4af9c', label: 'B3\n-2.356194490192345', color: '#31b0d5', title: 'Name: B3<br>Alias: null<br>Value: -2.356194490192345<br>Type: CELL_WITH_FORMULA<br>Id: 6282e590-bffb-49b7-a9d0-fb563be4af9c<br>Formula Expression: Formula String: ATAN2(VALUE, VALUE); Formula Values: ATAN2(-1.0, -1.0); Formula Ptg: -1.0, -1.0 ATAN2 ; Ptgs: VALUE, VALUE ATAN2  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@82de64a'},
{id: '870b2ab2-5923-4a9d-9923-2f650dfc87a6', label: 'VALUE\n-1.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: -1.0<br>Type: CONSTANT_VALUE<br>Id: 870b2ab2-5923-4a9d-9923-2f650dfc87a6<br>Formula Expression: Formula String: VALUE; Formula Values: -1.0; Formula Ptg: -1.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@82de64a'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '0134c340-f23a-485d-9e9e-ecd06d79fd67', to: 'ef0f47b3-c33e-4c58-bbcf-91ed3f1df7c4'},
{from: '870b2ab2-5923-4a9d-9923-2f650dfc87a6', to: 'ef0f47b3-c33e-4c58-bbcf-91ed3f1df7c4'},
{from: 'ef0f47b3-c33e-4c58-bbcf-91ed3f1df7c4', to: '6282e590-bffb-49b7-a9d0-fb563be4af9c'}
                            ]);