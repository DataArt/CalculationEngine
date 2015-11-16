var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '3fc4c1f1-4376-4dcb-b8cb-5273ee9fe7d6', label: 'B2:B6\n[[6.0], [5.0], [11.0], [7.0], [5.0]]', color: '#31b0d5', title: 'Name: B2:B6<br>Value: [[6.0], [5.0], [11.0], [7.0], [5.0]]<br>Type: RANGE<br>Id: 3fc4c1f1-4376-4dcb-b8cb-5273ee9fe7d6<br>Formula Expression: Formula String: B2:B6; Formula Values: [[6.0], [5.0], [11.0], [7.0], [5.0]]; Formula Ptg: [[6.0], [5.0], [11.0], [7.0], [5.0]]; Ptgs: B2:B6 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@317fa5dd'},
{id: '4f9f89c0-4b9b-43dd-9216-3ae60a1be91e', label: 'A2:A6\n[[2.0], [3.0], [9.0], [1.0], [8.0]]', color: '#31b0d5', title: 'Name: A2:A6<br>Value: [[2.0], [3.0], [9.0], [1.0], [8.0]]<br>Type: RANGE<br>Id: 4f9f89c0-4b9b-43dd-9216-3ae60a1be91e<br>Formula Expression: Formula String: A2:A6; Formula Values: [[2.0], [3.0], [9.0], [1.0], [8.0]]; Formula Ptg: [[2.0], [3.0], [9.0], [1.0], [8.0]]; Ptgs: A2:A6 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@317fa5dd'},
{id: '0851bfd7-cbad-440f-8c3f-25055f14e9f3', label: 'INTERCEPT\n0.04838709677419217', color: '#f0ad4e', title: 'Name: INTERCEPT<br>Value: 0.04838709677419217<br>Type: FUNCTION<br>Id: 0851bfd7-cbad-440f-8c3f-25055f14e9f3<br>Formula Expression: Formula String: INTERCEPT(B2:B6, A2:A6); Formula Values: INTERCEPT(6.0, 5.0, 11.0, 7.0, 5.0, 2.0, 3.0, 9.0, 1.0, 8.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@317fa5dd'},
{id: 'a843c7a0-8eb6-4f24-93c9-927718ecae54', label: 'C7\n0.04838709677419217', color: '#31b0d5', title: 'Name: C7<br>Value: 0.04838709677419217<br>Type: CELL_WITH_FORMULA<br>Id: a843c7a0-8eb6-4f24-93c9-927718ecae54<br>Formula Expression: Formula String: INTERCEPT(B2:B6, A2:A6); Formula Values: INTERCEPT(6.0, 5.0, 11.0, 7.0, 5.0, 2.0, 3.0, 9.0, 1.0, 8.0); Formula Ptg: 6.0, 5.0, 11.0, 7.0, 5.0, 2.0, 3.0, 9.0, 1.0, 8.0 INTERCEPT ; Ptgs: B2:B6, A2:A6 INTERCEPT  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@317fa5dd'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '4f9f89c0-4b9b-43dd-9216-3ae60a1be91e', to: '0851bfd7-cbad-440f-8c3f-25055f14e9f3'},
{from: '3fc4c1f1-4376-4dcb-b8cb-5273ee9fe7d6', to: '0851bfd7-cbad-440f-8c3f-25055f14e9f3'},
{from: '0851bfd7-cbad-440f-8c3f-25055f14e9f3', to: 'a843c7a0-8eb6-4f24-93c9-927718ecae54'}
                            ]);