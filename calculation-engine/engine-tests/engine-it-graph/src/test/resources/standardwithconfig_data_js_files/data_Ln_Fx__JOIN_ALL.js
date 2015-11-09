var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '9f2e2b11-1f28-4e78-b3f7-94e35d6f1c74', label: 'VALUE\n20.08554', color: '#31b0d5', title: 'Name: VALUE<br>Value: 20.08554<br>Type: CONSTANT_VALUE<br>Id: 9f2e2b11-1f28-4e78-b3f7-94e35d6f1c74<br>Formula Expression: Formula String: VALUE; Formula Values: 20.08554; Formula Ptg: 20.08554; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1e9804b9'},
{id: '696ceb4f-f14e-4553-99f0-73db785fa88d', label: 'C3\n3.0', color: '#31b0d5', title: 'Name: C3<br>Value: 3.0<br>Type: CELL_WITH_FORMULA<br>Id: 696ceb4f-f14e-4553-99f0-73db785fa88d<br>Formula Expression: Formula String: LN(EXP(VALUE)); Formula Values: LN(EXP(3.0)); Formula Ptg: 3.0 EXP  LN ; Ptgs: VALUE EXP  LN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1e9804b9'},
{id: '30f695e2-2e6d-49fc-a609-cfe575af826f', label: 'B2\n20.085536923187664', color: '#31b0d5', title: 'Name: B2<br>Value: 20.085536923187664<br>Type: CELL_WITH_FORMULA<br>Id: 30f695e2-2e6d-49fc-a609-cfe575af826f<br>Formula Expression: Formula String: EXP(VALUE); Formula Values: EXP(3.0); Formula Ptg: 3.0 EXP ; Ptgs: VALUE EXP  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1e9804b9'},
{id: 'f30e9eeb-1342-415b-bd0f-9dc3157da551', label: 'EXP\n20.085536923187664', color: '#f0ad4e', title: 'Name: EXP<br>Value: 20.085536923187664<br>Type: FUNCTION<br>Id: f30e9eeb-1342-415b-bd0f-9dc3157da551<br>Formula Expression: Formula String: EXP(VALUE); Formula Values: EXP(3.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1e9804b9'},
{id: '3c75731a-a286-414a-abdd-19181e66b62e', label: 'VALUE\n3.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 3.0<br>Type: CONSTANT_VALUE<br>Id: 3c75731a-a286-414a-abdd-19181e66b62e<br>Formula Expression: Formula String: VALUE; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1e9804b9'},
{id: 'eb75804a-a453-4480-accf-7a7d6a48d1ea', label: 'C4\n3.000000153185454', color: '#31b0d5', title: 'Name: C4<br>Value: 3.000000153185454<br>Type: CELL_WITH_FORMULA<br>Id: eb75804a-a453-4480-accf-7a7d6a48d1ea<br>Formula Expression: Formula String: LN(VALUE); Formula Values: LN(20.08554); Formula Ptg: 20.08554 LN ; Ptgs: VALUE LN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1e9804b9'},
{id: '70a31c80-0ae2-499f-ba5b-ab46923b53be', label: 'LN\n3.0', color: '#f0ad4e', title: 'Name: LN<br>Value: 3.0<br>Type: FUNCTION<br>Id: 70a31c80-0ae2-499f-ba5b-ab46923b53be<br>Formula Expression: Formula String: LN(EXP(VALUE)); Formula Values: LN(EXP(3.0)); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1e9804b9'},
{id: '9deda905-fe33-47c7-b40c-13da3904956a', label: 'LN\n3.000000153185454', color: '#f0ad4e', title: 'Name: LN<br>Value: 3.000000153185454<br>Type: FUNCTION<br>Id: 9deda905-fe33-47c7-b40c-13da3904956a<br>Formula Expression: Formula String: LN(VALUE); Formula Values: LN(20.08554); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1e9804b9'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'f30e9eeb-1342-415b-bd0f-9dc3157da551', to: '30f695e2-2e6d-49fc-a609-cfe575af826f'},
{from: '3c75731a-a286-414a-abdd-19181e66b62e', to: 'f30e9eeb-1342-415b-bd0f-9dc3157da551'},
{from: '9f2e2b11-1f28-4e78-b3f7-94e35d6f1c74', to: '9deda905-fe33-47c7-b40c-13da3904956a'},
{from: '30f695e2-2e6d-49fc-a609-cfe575af826f', to: '70a31c80-0ae2-499f-ba5b-ab46923b53be'},
{from: '70a31c80-0ae2-499f-ba5b-ab46923b53be', to: '696ceb4f-f14e-4553-99f0-73db785fa88d'},
{from: '9deda905-fe33-47c7-b40c-13da3904956a', to: 'eb75804a-a453-4480-accf-7a7d6a48d1ea'}
                            ]);