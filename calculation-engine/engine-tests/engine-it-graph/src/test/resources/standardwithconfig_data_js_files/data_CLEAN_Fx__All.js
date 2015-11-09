var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '020c0bca-3c77-4ee8-8619-a4bc0fdd54ff', label: 'A1\n2.993222846126381', color: '#31b0d5', title: 'Name: A1<br>Value: 2.993222846126381<br>Type: CELL_WITH_FORMULA<br>Id: 020c0bca-3c77-4ee8-8619-a4bc0fdd54ff<br>Formula Expression: Formula String: ACOSH(VALUE); Formula Values: ACOSH(10.0); Formula Ptg: 10.0 ACOSH ; Ptgs: VALUE ACOSH  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2f46bc25'},
{id: 'b5e7d843-8aab-48b9-ae2e-74dfdef87f87', label: 'ACOSH\n2.993222846126381', color: '#f0ad4e', title: 'Name: ACOSH<br>Value: 2.993222846126381<br>Type: FUNCTION<br>Id: b5e7d843-8aab-48b9-ae2e-74dfdef87f87<br>Formula Expression: Formula String: ACOSH(VALUE); Formula Values: ACOSH(10.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2f46bc25'},
{id: '275b5b9a-a355-4e73-8473-6952ae97046b', label: 'B6\n9', color: '#31b0d5', title: 'Name: B6<br>Value: 9<br>Type: CELL_WITH_FORMULA<br>Id: 275b5b9a-a355-4e73-8473-6952ae97046b<br>Formula Expression: Formula String: CLEAN(B1); Formula Values: CLEAN(9.0); Formula Ptg: 9.0 CLEAN ; Ptgs: B1 CLEAN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2f46bc25'},
{id: '3e93878f-209c-4107-9552-b0c4fda336aa', label: 'CLEAN\n9', color: '#f0ad4e', title: 'Name: CLEAN<br>Value: 9<br>Type: FUNCTION<br>Id: 3e93878f-209c-4107-9552-b0c4fda336aa<br>Formula Expression: Formula String: CLEAN(B1); Formula Values: CLEAN(9.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2f46bc25'},
{id: '06fa0d2c-eea6-4bb5-9d03-8a6e453fbe93', label: 'VALUE\n10.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 10.0<br>Type: CONSTANT_VALUE<br>Id: 06fa0d2c-eea6-4bb5-9d03-8a6e453fbe93<br>Formula Expression: Formula String: VALUE; Formula Values: 10.0; Formula Ptg: 10.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2f46bc25'},
{id: '72e8ac09-13ec-4d28-9307-b06da5cba089', label: 'B1\n9.0', color: '#31b0d5', title: 'Name: B1<br>Value: 9.0<br>Type: CELL_WITH_VALUE<br>Id: 72e8ac09-13ec-4d28-9307-b06da5cba089<br>Formula Expression: Formula String: B1; Formula Values: 9.0; Formula Ptg: 9.0; Ptgs: B1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2f46bc25'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '3e93878f-209c-4107-9552-b0c4fda336aa', to: '275b5b9a-a355-4e73-8473-6952ae97046b'},
{from: '06fa0d2c-eea6-4bb5-9d03-8a6e453fbe93', to: 'b5e7d843-8aab-48b9-ae2e-74dfdef87f87'},
{from: 'b5e7d843-8aab-48b9-ae2e-74dfdef87f87', to: '020c0bca-3c77-4ee8-8619-a4bc0fdd54ff'},
{from: '72e8ac09-13ec-4d28-9307-b06da5cba089', to: '3e93878f-209c-4107-9552-b0c4fda336aa'}
                            ]);