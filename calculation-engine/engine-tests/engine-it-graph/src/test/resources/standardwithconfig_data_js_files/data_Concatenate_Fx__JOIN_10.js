var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'd9289559-0c4b-43f1-bc47-e10a670b9038', label: 'C3\n?', color: '#31b0d5', title: 'Name: C3<br>Value: ?<br>Type: CELL_WITH_VALUE<br>Id: d9289559-0c4b-43f1-bc47-e10a670b9038<br>Formula Expression: Formula String: C3; Formula Values: ?; Formula Ptg: ?; Ptgs: C3 Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1dadd172'},
{id: '686ece74-7618-4d48-94e7-41340d2d2af9', label: 'CONCATENATE\nWhy do you think so?', color: '#f0ad4e', title: 'Name: CONCATENATE<br>Value: Why do you think so?<br>Type: FUNCTION<br>Id: 686ece74-7618-4d48-94e7-41340d2d2af9<br>Formula Expression: Formula String: CONCATENATE(C3, C2, B2, C1, B1, A1); Formula Values: CONCATENATE(?, so, think , you , do , Why ); Formula Ptg: ; Ptgs:  Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1dadd172'},
{id: 'bc9ee757-3f16-4339-830f-3682560892a2', label: 'A1\nWhy ', color: '#31b0d5', title: 'Name: A1<br>Value: Why <br>Type: CELL_WITH_VALUE<br>Id: bc9ee757-3f16-4339-830f-3682560892a2<br>Formula Expression: Formula String: A1; Formula Values: Why ; Formula Ptg: Why ; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1dadd172'},
{id: '09f1f9d2-b078-4e47-afa4-098f9f6f7e97', label: 'C2\nso', color: '#31b0d5', title: 'Name: C2<br>Value: so<br>Type: CELL_WITH_VALUE<br>Id: 09f1f9d2-b078-4e47-afa4-098f9f6f7e97<br>Formula Expression: Formula String: C2; Formula Values: so; Formula Ptg: so; Ptgs: C2 Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1dadd172'},
{id: 'c4d8c8a4-57ef-48af-9e02-b70ee0c065dc', label: 'B1\ndo ', color: '#31b0d5', title: 'Name: B1<br>Value: do <br>Type: CELL_WITH_VALUE<br>Id: c4d8c8a4-57ef-48af-9e02-b70ee0c065dc<br>Formula Expression: Formula String: B1; Formula Values: do ; Formula Ptg: do ; Ptgs: B1 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1dadd172'},
{id: 'da1e903b-9db3-4b21-be3b-343f55b6a1d1', label: 'B2\nthink ', color: '#31b0d5', title: 'Name: B2<br>Value: think <br>Type: CELL_WITH_VALUE<br>Id: da1e903b-9db3-4b21-be3b-343f55b6a1d1<br>Formula Expression: Formula String: B2; Formula Values: think ; Formula Ptg: think ; Ptgs: B2 Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1dadd172'},
{id: '670616fe-65c0-4c35-b347-6fb6d6cff9f0', label: 'D5\nWhy do you think so?', color: '#31b0d5', title: 'Name: D5<br>Value: Why do you think so?<br>Type: CELL_WITH_FORMULA<br>Id: 670616fe-65c0-4c35-b347-6fb6d6cff9f0<br>Formula Expression: Formula String: CONCATENATE(C3, C2, B2, C1, B1, A1); Formula Values: CONCATENATE(?, so, think , you , do , Why ); Formula Ptg: ?, so, think , you , do , Why  CONCATENATE ; Ptgs: C3, C2, B2, C1, B1, A1 CONCATENATE  Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1dadd172'},
{id: 'acc529b1-e011-40ad-9749-5639b72b0665', label: 'C1\nyou ', color: '#31b0d5', title: 'Name: C1<br>Value: you <br>Type: CELL_WITH_VALUE<br>Id: acc529b1-e011-40ad-9749-5639b72b0665<br>Formula Expression: Formula String: C1; Formula Values: you ; Formula Ptg: you ; Ptgs: C1 Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1dadd172'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '686ece74-7618-4d48-94e7-41340d2d2af9', to: '670616fe-65c0-4c35-b347-6fb6d6cff9f0'},
{from: '09f1f9d2-b078-4e47-afa4-098f9f6f7e97', to: '686ece74-7618-4d48-94e7-41340d2d2af9'},
{from: 'da1e903b-9db3-4b21-be3b-343f55b6a1d1', to: '686ece74-7618-4d48-94e7-41340d2d2af9'},
{from: 'c4d8c8a4-57ef-48af-9e02-b70ee0c065dc', to: '686ece74-7618-4d48-94e7-41340d2d2af9'},
{from: 'd9289559-0c4b-43f1-bc47-e10a670b9038', to: '686ece74-7618-4d48-94e7-41340d2d2af9'},
{from: 'acc529b1-e011-40ad-9749-5639b72b0665', to: '686ece74-7618-4d48-94e7-41340d2d2af9'},
{from: 'bc9ee757-3f16-4339-830f-3682560892a2', to: '686ece74-7618-4d48-94e7-41340d2d2af9'}
                            ]);