var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '8b8b33af-cd15-41e1-a21f-05933c60f3a0', label: 'D5\nWhy do you think so?', color: '#31b0d5', title: 'Name: D5<br>Value: Why do you think so?<br>Type: CELL_WITH_FORMULA<br>Id: 8b8b33af-cd15-41e1-a21f-05933c60f3a0<br>Formula Expression: Formula String: CONCATENATE(C3, C2, B2, C1, B1, A1); Formula Values: CONCATENATE(?, so, think , you , do , Why ); Formula Ptg: ?, so, think , you , do , Why  CONCATENATE ; Ptgs: C3, C2, B2, C1, B1, A1 CONCATENATE  Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6f1c3f18'},
{id: '118e7cb3-e697-4b2c-a9f1-ba107843ea16', label: 'C1\nyou ', color: '#31b0d5', title: 'Name: C1<br>Value: you <br>Type: CELL_WITH_VALUE<br>Id: 118e7cb3-e697-4b2c-a9f1-ba107843ea16<br>Formula Expression: Formula String: C1; Formula Values: you ; Formula Ptg: you ; Ptgs: C1 Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6f1c3f18'},
{id: '2e20db84-760f-4d8a-ae31-5123c19b1098', label: 'C3\n?', color: '#31b0d5', title: 'Name: C3<br>Value: ?<br>Type: CELL_WITH_VALUE<br>Id: 2e20db84-760f-4d8a-ae31-5123c19b1098<br>Formula Expression: Formula String: C3; Formula Values: ?; Formula Ptg: ?; Ptgs: C3 Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6f1c3f18'},
{id: '3b654e12-f8bb-4a9b-a307-1d7f39237dff', label: 'B1\ndo ', color: '#31b0d5', title: 'Name: B1<br>Value: do <br>Type: CELL_WITH_VALUE<br>Id: 3b654e12-f8bb-4a9b-a307-1d7f39237dff<br>Formula Expression: Formula String: B1; Formula Values: do ; Formula Ptg: do ; Ptgs: B1 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6f1c3f18'},
{id: 'd3ceed6f-7366-45f0-ae8c-2cfb82166fd9', label: 'A1\nWhy ', color: '#31b0d5', title: 'Name: A1<br>Value: Why <br>Type: CELL_WITH_VALUE<br>Id: d3ceed6f-7366-45f0-ae8c-2cfb82166fd9<br>Formula Expression: Formula String: A1; Formula Values: Why ; Formula Ptg: Why ; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6f1c3f18'},
{id: 'e58d6ee1-0f61-4aae-b3fd-ab5d61bb4c9b', label: 'C2\nso', color: '#31b0d5', title: 'Name: C2<br>Value: so<br>Type: CELL_WITH_VALUE<br>Id: e58d6ee1-0f61-4aae-b3fd-ab5d61bb4c9b<br>Formula Expression: Formula String: C2; Formula Values: so; Formula Ptg: so; Ptgs: C2 Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6f1c3f18'},
{id: '8c0a4b8f-1073-4574-ab8f-2ae01040a5ad', label: 'B2\nthink ', color: '#31b0d5', title: 'Name: B2<br>Value: think <br>Type: CELL_WITH_VALUE<br>Id: 8c0a4b8f-1073-4574-ab8f-2ae01040a5ad<br>Formula Expression: Formula String: B2; Formula Values: think ; Formula Ptg: think ; Ptgs: B2 Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6f1c3f18'},
{id: 'b0e4dedc-4f0b-488e-9de2-8c65e4269379', label: 'CONCATENATE\nWhy do you think so?', color: '#f0ad4e', title: 'Name: CONCATENATE<br>Value: Why do you think so?<br>Type: FUNCTION<br>Id: b0e4dedc-4f0b-488e-9de2-8c65e4269379<br>Formula Expression: Formula String: CONCATENATE(C3, C2, B2, C1, B1, A1); Formula Values: CONCATENATE(?, so, think , you , do , Why ); Formula Ptg: ; Ptgs:  Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6f1c3f18'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'd3ceed6f-7366-45f0-ae8c-2cfb82166fd9', to: 'b0e4dedc-4f0b-488e-9de2-8c65e4269379'},
{from: 'e58d6ee1-0f61-4aae-b3fd-ab5d61bb4c9b', to: 'b0e4dedc-4f0b-488e-9de2-8c65e4269379'},
{from: '2e20db84-760f-4d8a-ae31-5123c19b1098', to: 'b0e4dedc-4f0b-488e-9de2-8c65e4269379'},
{from: '8c0a4b8f-1073-4574-ab8f-2ae01040a5ad', to: 'b0e4dedc-4f0b-488e-9de2-8c65e4269379'},
{from: '3b654e12-f8bb-4a9b-a307-1d7f39237dff', to: 'b0e4dedc-4f0b-488e-9de2-8c65e4269379'},
{from: '118e7cb3-e697-4b2c-a9f1-ba107843ea16', to: 'b0e4dedc-4f0b-488e-9de2-8c65e4269379'},
{from: 'b0e4dedc-4f0b-488e-9de2-8c65e4269379', to: '8b8b33af-cd15-41e1-a21f-05933c60f3a0'}
                            ]);