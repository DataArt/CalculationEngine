var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '8c8cf3cb-5ecc-4f68-8647-5555e7e0d6f9', label: 'ACOSH\n5.192925985263684', color: '#f0ad4e', title: 'Name: ACOSH<br>Value: 5.192925985263684<br>Type: FUNCTION<br>Id: 8c8cf3cb-5ecc-4f68-8647-5555e7e0d6f9<br>Formula Expression: Formula String: ACOSH(C2); Formula Values: ACOSH(90.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3590fc5b'},
{id: 'd88172ca-ee61-4c81-9f3c-5051f7b947f0', label: 'VALUE\n10.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 10.0<br>Type: CONSTANT_VALUE<br>Id: d88172ca-ee61-4c81-9f3c-5051f7b947f0<br>Formula Expression: Formula String: VALUE; Formula Values: 10.0; Formula Ptg: 10.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3590fc5b'},
{id: '9a77c3c1-2e7c-4af9-90e4-2bd7966ebc80', label: 'ACOSH\n2.993222846126381', color: '#f0ad4e', title: 'Name: ACOSH<br>Value: 2.993222846126381<br>Type: FUNCTION<br>Id: 9a77c3c1-2e7c-4af9-90e4-2bd7966ebc80<br>Formula Expression: Formula String: ACOSH(VALUE); Formula Values: ACOSH(10.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3590fc5b'},
{id: '7c73823c-8e40-4938-8554-cfb034aeaee2', label: 'A1\n2.993222846126381', color: '#31b0d5', title: 'Name: A1<br>Value: 2.993222846126381<br>Type: CELL_WITH_FORMULA<br>Id: 7c73823c-8e40-4938-8554-cfb034aeaee2<br>Formula Expression: Formula String: ACOSH(VALUE); Formula Values: ACOSH(10.0); Formula Ptg: 10.0 ACOSH ; Ptgs: VALUE ACOSH  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3590fc5b'},
{id: '3947160f-5738-4343-a26c-5d8ec102d8df', label: 'E5\n5.192925985263684', color: '#31b0d5', title: 'Name: E5<br>Value: 5.192925985263684<br>Type: CELL_WITH_FORMULA<br>Id: 3947160f-5738-4343-a26c-5d8ec102d8df<br>Formula Expression: Formula String: ACOSH(C2); Formula Values: ACOSH(90.0); Formula Ptg: 90.0 ACOSH ; Ptgs: C2 ACOSH  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3590fc5b'},
{id: '6dbe2731-6a0a-4b98-9a15-94dd07b1e56c', label: 'C2\n90.0', color: '#31b0d5', title: 'Name: C2<br>Value: 90.0<br>Type: CELL_WITH_VALUE<br>Id: 6dbe2731-6a0a-4b98-9a15-94dd07b1e56c<br>Formula Expression: Formula String: C2; Formula Values: 90.0; Formula Ptg: 90.0; Ptgs: C2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3590fc5b'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '9a77c3c1-2e7c-4af9-90e4-2bd7966ebc80', to: '7c73823c-8e40-4938-8554-cfb034aeaee2'},
{from: 'd88172ca-ee61-4c81-9f3c-5051f7b947f0', to: '9a77c3c1-2e7c-4af9-90e4-2bd7966ebc80'},
{from: '6dbe2731-6a0a-4b98-9a15-94dd07b1e56c', to: '8c8cf3cb-5ecc-4f68-8647-5555e7e0d6f9'},
{from: '8c8cf3cb-5ecc-4f68-8647-5555e7e0d6f9', to: '3947160f-5738-4343-a26c-5d8ec102d8df'}
                            ]);