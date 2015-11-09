var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'd1847c56-7791-4e8b-9011-bc971c318fb9', label: 'C3\n?', color: '#31b0d5', title: 'Name: C3<br>Value: ?<br>Type: CELL_WITH_VALUE<br>Id: d1847c56-7791-4e8b-9011-bc971c318fb9<br>Formula Expression: Formula String: C3; Formula Values: ?; Formula Ptg: ?; Ptgs: C3 Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1dadd172'},
{id: '985e365a-0c97-422f-8103-a0eab722c900', label: 'CONCATENATE\nWhy do you think so?', color: '#f0ad4e', title: 'Name: CONCATENATE<br>Value: Why do you think so?<br>Type: FUNCTION<br>Id: 985e365a-0c97-422f-8103-a0eab722c900<br>Formula Expression: Formula String: CONCATENATE(C3, C2, B2, C1, B1, A1); Formula Values: CONCATENATE(?, so, think , you , do , Why ); Formula Ptg: ; Ptgs:  Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1dadd172'},
{id: '582a18b9-3582-4ac3-89b5-15be3af68181', label: 'A1\nWhy ', color: '#31b0d5', title: 'Name: A1<br>Value: Why <br>Type: CELL_WITH_VALUE<br>Id: 582a18b9-3582-4ac3-89b5-15be3af68181<br>Formula Expression: Formula String: A1; Formula Values: Why ; Formula Ptg: Why ; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1dadd172'},
{id: 'c920245d-16f0-47d4-a8cb-72e804f78861', label: 'C2\nso', color: '#31b0d5', title: 'Name: C2<br>Value: so<br>Type: CELL_WITH_VALUE<br>Id: c920245d-16f0-47d4-a8cb-72e804f78861<br>Formula Expression: Formula String: C2; Formula Values: so; Formula Ptg: so; Ptgs: C2 Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1dadd172'},
{id: 'fd0826d6-7d50-447b-85c7-24b24ed2bd3d', label: 'B1\ndo ', color: '#31b0d5', title: 'Name: B1<br>Value: do <br>Type: CELL_WITH_VALUE<br>Id: fd0826d6-7d50-447b-85c7-24b24ed2bd3d<br>Formula Expression: Formula String: B1; Formula Values: do ; Formula Ptg: do ; Ptgs: B1 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1dadd172'},
{id: '1dc7cf74-c4bb-4c56-974e-6bdb160629f1', label: 'B2\nthink ', color: '#31b0d5', title: 'Name: B2<br>Value: think <br>Type: CELL_WITH_VALUE<br>Id: 1dc7cf74-c4bb-4c56-974e-6bdb160629f1<br>Formula Expression: Formula String: B2; Formula Values: think ; Formula Ptg: think ; Ptgs: B2 Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1dadd172'},
{id: '405198c3-6f80-4f66-9ba4-7bf57c190d2e', label: 'D5\nWhy do you think so?', color: '#31b0d5', title: 'Name: D5<br>Value: Why do you think so?<br>Type: CELL_WITH_FORMULA<br>Id: 405198c3-6f80-4f66-9ba4-7bf57c190d2e<br>Formula Expression: Formula String: CONCATENATE(C3, C2, B2, C1, B1, A1); Formula Values: CONCATENATE(?, so, think , you , do , Why ); Formula Ptg: ?, so, think , you , do , Why  CONCATENATE ; Ptgs: C3, C2, B2, C1, B1, A1 CONCATENATE  Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1dadd172'},
{id: '521df828-e29a-4c07-8b93-e47e1530cc1c', label: 'C1\nyou ', color: '#31b0d5', title: 'Name: C1<br>Value: you <br>Type: CELL_WITH_VALUE<br>Id: 521df828-e29a-4c07-8b93-e47e1530cc1c<br>Formula Expression: Formula String: C1; Formula Values: you ; Formula Ptg: you ; Ptgs: C1 Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1dadd172'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '985e365a-0c97-422f-8103-a0eab722c900', to: '405198c3-6f80-4f66-9ba4-7bf57c190d2e'},
{from: 'c920245d-16f0-47d4-a8cb-72e804f78861', to: '985e365a-0c97-422f-8103-a0eab722c900'},
{from: '1dc7cf74-c4bb-4c56-974e-6bdb160629f1', to: '985e365a-0c97-422f-8103-a0eab722c900'},
{from: 'fd0826d6-7d50-447b-85c7-24b24ed2bd3d', to: '985e365a-0c97-422f-8103-a0eab722c900'},
{from: 'd1847c56-7791-4e8b-9011-bc971c318fb9', to: '985e365a-0c97-422f-8103-a0eab722c900'},
{from: '521df828-e29a-4c07-8b93-e47e1530cc1c', to: '985e365a-0c97-422f-8103-a0eab722c900'},
{from: '582a18b9-3582-4ac3-89b5-15be3af68181', to: '985e365a-0c97-422f-8103-a0eab722c900'}
                            ]);