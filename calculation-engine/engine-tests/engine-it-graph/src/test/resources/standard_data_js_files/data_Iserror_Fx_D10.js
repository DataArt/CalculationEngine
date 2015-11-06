var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'f4f9b529-180e-402b-ab2b-8a6372250d00', label: 'B7\n', color: '#31b0d5', title: 'Name: B7<br>Value: <br>Type: EMPTY_CELL<br>Id: f4f9b529-180e-402b-ab2b-8a6372250d00<br>Formula Expression: Formula String: B7; Formula Values: ; Formula Ptg: ; Ptgs: B7 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@e1e2e5e'},
{id: '42c7c489-4b6a-4d7d-82d3-b7188f0affaf', label: 'ISERROR\nTRUE', color: '#f0ad4e', title: 'Name: ISERROR<br>Value: TRUE<br>Type: FUNCTION<br>Id: 42c7c489-4b6a-4d7d-82d3-b7188f0affaf<br>Formula Expression: Formula String: ISERROR(B2 / B7); Formula Values: ISERROR(6.0 / ); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@e1e2e5e'},
{id: 'f9627900-78be-45e5-a11c-b7d63e8e0a5b', label: 'E1\n#DIV/0!', color: '#31b0d5', title: 'Name: E1<br>Value: #DIV/0!<br>Type: CELL_WITH_FORMULA<br>Id: f9627900-78be-45e5-a11c-b7d63e8e0a5b<br>Formula Expression: Formula String: B2 / B7; Formula Values: 6.0 / ; Formula Ptg: 6.0  /; Ptgs: B2 B7 / Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@e1e2e5e'},
{id: '498e2518-8e2b-486d-b198-6cf86edae64b', label: 'B2\n6.0', color: '#31b0d5', title: 'Name: B2<br>Value: 6.0<br>Type: CELL_WITH_VALUE<br>Id: 498e2518-8e2b-486d-b198-6cf86edae64b<br>Formula Expression: Formula String: B2; Formula Values: 6.0; Formula Ptg: 6.0; Ptgs: B2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@e1e2e5e'},
{id: 'bad3628c-4ef5-402c-84fb-ce1e73345cbf', label: '/\n#DIV/0!', color: '#f0ad4e', title: 'Name: /<br>Value: #DIV/0!<br>Type: OPERATOR<br>Id: bad3628c-4ef5-402c-84fb-ce1e73345cbf<br>Formula Expression: Formula String: B2 / B7; Formula Values: 6.0 / ; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@e1e2e5e'},
{id: '01825e48-e6ca-428e-9133-551fbc4cc035', label: 'D10\nTRUE', color: '#31b0d5', title: 'Name: D10<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: 01825e48-e6ca-428e-9133-551fbc4cc035<br>Formula Expression: Formula String: ISERROR(B2 / B7); Formula Values: ISERROR(6.0 / ); Formula Ptg: 6.0  / ISERROR ; Ptgs: B2 B7 / ISERROR  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@e1e2e5e'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'f9627900-78be-45e5-a11c-b7d63e8e0a5b', to: '42c7c489-4b6a-4d7d-82d3-b7188f0affaf'},
{from: '498e2518-8e2b-486d-b198-6cf86edae64b', to: 'bad3628c-4ef5-402c-84fb-ce1e73345cbf'},
{from: '42c7c489-4b6a-4d7d-82d3-b7188f0affaf', to: '01825e48-e6ca-428e-9133-551fbc4cc035'},
{from: 'bad3628c-4ef5-402c-84fb-ce1e73345cbf', to: 'f9627900-78be-45e5-a11c-b7d63e8e0a5b'},
{from: 'f4f9b529-180e-402b-ab2b-8a6372250d00', to: 'bad3628c-4ef5-402c-84fb-ce1e73345cbf'}
                            ]);