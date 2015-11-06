var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'a8e3a438-68d8-42da-a3b1-082e485dd5c3', label: 'C8\nTRUE', color: '#31b0d5', title: 'Name: C8<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: a8e3a438-68d8-42da-a3b1-082e485dd5c3<br>Formula Expression: Formula String: ISNONTEXT(VALUE); Formula Values: ISNONTEXT(67.0); Formula Ptg: 67.0 ISNONTEXT ; Ptgs: VALUE ISNONTEXT  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@73c9e8e8'},
{id: '19eebc9c-40f9-4be9-80d7-c746b2436cd5', label: 'ISNONTEXT\nTRUE', color: '#f0ad4e', title: 'Name: ISNONTEXT<br>Value: TRUE<br>Type: FUNCTION<br>Id: 19eebc9c-40f9-4be9-80d7-c746b2436cd5<br>Formula Expression: Formula String: ISNONTEXT(VALUE); Formula Values: ISNONTEXT(67.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@73c9e8e8'},
{id: '7164920b-df7a-46a7-b922-dfddfa3369e0', label: 'VALUE\n67.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 67.0<br>Type: CONSTANT_VALUE<br>Id: 7164920b-df7a-46a7-b922-dfddfa3369e0<br>Formula Expression: Formula String: VALUE; Formula Values: 67.0; Formula Ptg: 67.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@73c9e8e8'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '19eebc9c-40f9-4be9-80d7-c746b2436cd5', to: 'a8e3a438-68d8-42da-a3b1-082e485dd5c3'},
{from: '7164920b-df7a-46a7-b922-dfddfa3369e0', to: '19eebc9c-40f9-4be9-80d7-c746b2436cd5'}
                            ]);