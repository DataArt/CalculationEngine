var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '59070880-44a2-4098-a59d-5cb2a5d5e543', label: 'B1\n15.154262241479259', color: '#31b0d5', title: 'Name: B1<br>Value: 15.154262241479259<br>Type: CELL_WITH_FORMULA<br>Id: 59070880-44a2-4098-a59d-5cb2a5d5e543<br>Formula Expression: Formula String: EXP(EXP(VALUE)); Formula Values: EXP(EXP(1.0)); Formula Ptg: 1.0 EXP  EXP ; Ptgs: VALUE EXP  EXP  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@73a00e09'},
{id: 'b41c2dba-f4c8-450f-bd8f-b5acb40774e0', label: 'A1\n2.718281828459045', color: '#31b0d5', title: 'Name: A1<br>Value: 2.718281828459045<br>Type: CELL_WITH_FORMULA<br>Id: b41c2dba-f4c8-450f-bd8f-b5acb40774e0<br>Formula Expression: Formula String: EXP(VALUE); Formula Values: EXP(1.0); Formula Ptg: 1.0 EXP ; Ptgs: VALUE EXP  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@73a00e09'},
{id: '8ce7a3f2-bf83-468f-b16b-4c03d9d8d742', label: 'VALUE\n1.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 1.0<br>Type: CONSTANT_VALUE<br>Id: 8ce7a3f2-bf83-468f-b16b-4c03d9d8d742<br>Formula Expression: Formula String: VALUE; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@73a00e09'},
{id: 'a2b02938-c14a-4eec-b0d8-0f3c7df83e6f', label: 'A2\n7.3890560989306495', color: '#31b0d5', title: 'Name: A2<br>Value: 7.3890560989306495<br>Type: CELL_WITH_FORMULA<br>Id: a2b02938-c14a-4eec-b0d8-0f3c7df83e6f<br>Formula Expression: Formula String: EXP(VALUE); Formula Values: EXP(2.0); Formula Ptg: 2.0 EXP ; Ptgs: VALUE EXP  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@73a00e09'},
{id: '42179b05-ead3-4a7e-8fa6-2b4dd158d27e', label: 'VALUE\n2.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 2.0<br>Type: CONSTANT_VALUE<br>Id: 42179b05-ead3-4a7e-8fa6-2b4dd158d27e<br>Formula Expression: Formula String: VALUE; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@73a00e09'},
{id: 'dcb60b7a-a4c2-409e-b83b-326ca257e714', label: 'EXP\n2.718281828459045', color: '#f0ad4e', title: 'Name: EXP<br>Value: 2.718281828459045<br>Type: FUNCTION<br>Id: dcb60b7a-a4c2-409e-b83b-326ca257e714<br>Formula Expression: Formula String: EXP(VALUE); Formula Values: EXP(1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@73a00e09'},
{id: '934a2b4c-4a94-4886-ab8e-a59b5a8bbfcc', label: 'EXP\n7.3890560989306495', color: '#f0ad4e', title: 'Name: EXP<br>Value: 7.3890560989306495<br>Type: FUNCTION<br>Id: 934a2b4c-4a94-4886-ab8e-a59b5a8bbfcc<br>Formula Expression: Formula String: EXP(VALUE); Formula Values: EXP(2.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@73a00e09'},
{id: '2322b267-3512-40fb-8a08-5015515da064', label: 'EXP\n15.154262241479259', color: '#f0ad4e', title: 'Name: EXP<br>Value: 15.154262241479259<br>Type: FUNCTION<br>Id: 2322b267-3512-40fb-8a08-5015515da064<br>Formula Expression: Formula String: EXP(EXP(VALUE)); Formula Values: EXP(EXP(1.0)); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@73a00e09'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '2322b267-3512-40fb-8a08-5015515da064', to: '59070880-44a2-4098-a59d-5cb2a5d5e543'},
{from: '42179b05-ead3-4a7e-8fa6-2b4dd158d27e', to: '934a2b4c-4a94-4886-ab8e-a59b5a8bbfcc'},
{from: 'b41c2dba-f4c8-450f-bd8f-b5acb40774e0', to: '2322b267-3512-40fb-8a08-5015515da064'},
{from: '934a2b4c-4a94-4886-ab8e-a59b5a8bbfcc', to: 'a2b02938-c14a-4eec-b0d8-0f3c7df83e6f'},
{from: '8ce7a3f2-bf83-468f-b16b-4c03d9d8d742', to: 'dcb60b7a-a4c2-409e-b83b-326ca257e714'},
{from: 'dcb60b7a-a4c2-409e-b83b-326ca257e714', to: 'b41c2dba-f4c8-450f-bd8f-b5acb40774e0'}
                            ]);