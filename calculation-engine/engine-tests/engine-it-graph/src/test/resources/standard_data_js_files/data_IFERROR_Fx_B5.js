var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '4e9d6b8c-bc61-48d9-ba72-9b31caf03021', label: 'B3\n7.0', color: '#31b0d5', title: 'Name: B3<br>Alias: null<br>Value: 7.0<br>Type: CELL_WITH_VALUE<br>Id: 4e9d6b8c-bc61-48d9-ba72-9b31caf03021<br>Formula Expression: Formula String: B3; Formula Values: 7.0; Formula Ptg: 7.0; Ptgs: B3 Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7f69d591'},
{id: 'cbdd0254-5a66-4a70-a4c1-0aa4f4cdae16', label: 'VALUE\n5.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 5.0<br>Type: CONSTANT_VALUE<br>Id: cbdd0254-5a66-4a70-a4c1-0aa4f4cdae16<br>Formula Expression: Formula String: VALUE; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7f69d591'},
{id: '843d6f4d-6db8-45e3-bda4-a049012d11ef', label: 'B5\n-2.0', color: '#31b0d5', title: 'Name: B5<br>Alias: null<br>Value: -2.0<br>Type: CELL_WITH_FORMULA<br>Id: 843d6f4d-6db8-45e3-bda4-a049012d11ef<br>Formula Expression: Formula String: IFERROR(B3, A3 - VALUE); Formula Values: IFERROR(7.0, 3.0 - 5.0); Formula Ptg: 7.0, 3.0 5.0 - IFERROR ; Ptgs: B3, A3 VALUE - IFERROR  Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7f69d591'},
{id: '8d2994e8-3776-47e7-8e24-6ab2098bd595', label: 'IFERROR\n-2.0', color: '#f0ad4e', title: 'Name: IFERROR<br>Alias: null<br>Value: -2.0<br>Type: FUNCTION<br>Id: 8d2994e8-3776-47e7-8e24-6ab2098bd595<br>Formula Expression: Formula String: IFERROR(B3, A3 - VALUE); Formula Values: IFERROR(7.0, 3.0 - 5.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7f69d591'},
{id: 'd3818020-3528-49bb-8504-84592b526a4e', label: 'A3\n3.0', color: '#31b0d5', title: 'Name: A3<br>Alias: null<br>Value: 3.0<br>Type: CELL_WITH_VALUE<br>Id: d3818020-3528-49bb-8504-84592b526a4e<br>Formula Expression: Formula String: A3; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: A3 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7f69d591'},
{id: '684bf7bd-84f0-459c-ad7b-047d144bd9fe', label: '-\n-2.0', color: '#f0ad4e', title: 'Name: -<br>Alias: null<br>Value: -2.0<br>Type: OPERATOR<br>Id: 684bf7bd-84f0-459c-ad7b-047d144bd9fe<br>Formula Expression: Formula String: A3 - VALUE; Formula Values: 3.0 - 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7f69d591'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'cbdd0254-5a66-4a70-a4c1-0aa4f4cdae16', to: '684bf7bd-84f0-459c-ad7b-047d144bd9fe'},
{from: '8d2994e8-3776-47e7-8e24-6ab2098bd595', to: '843d6f4d-6db8-45e3-bda4-a049012d11ef'},
{from: 'd3818020-3528-49bb-8504-84592b526a4e', to: '684bf7bd-84f0-459c-ad7b-047d144bd9fe'},
{from: '684bf7bd-84f0-459c-ad7b-047d144bd9fe', to: '8d2994e8-3776-47e7-8e24-6ab2098bd595'},
{from: '4e9d6b8c-bc61-48d9-ba72-9b31caf03021', to: '8d2994e8-3776-47e7-8e24-6ab2098bd595'}
                            ]);