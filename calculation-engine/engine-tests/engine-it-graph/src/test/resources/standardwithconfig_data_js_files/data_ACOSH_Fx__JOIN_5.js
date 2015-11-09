var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '2b89e26d-717b-49d7-bc9f-de3c373b5d75', label: 'VALUE\n10.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 10.0<br>Type: CONSTANT_VALUE<br>Id: 2b89e26d-717b-49d7-bc9f-de3c373b5d75<br>Formula Expression: Formula String: VALUE; Formula Values: 10.0; Formula Ptg: 10.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@70b2819f'},
{id: '98e486a4-934c-4f2a-82c2-8e36b5dc6ee4', label: 'C2\n90.0', color: '#31b0d5', title: 'Name: C2<br>Value: 90.0<br>Type: CELL_WITH_VALUE<br>Id: 98e486a4-934c-4f2a-82c2-8e36b5dc6ee4<br>Formula Expression: Formula String: C2; Formula Values: 90.0; Formula Ptg: 90.0; Ptgs: C2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@70b2819f'},
{id: 'ff88efd1-b8df-415c-b7a3-99bf6ef54715', label: 'ACOSH\n5.192925985263684', color: '#f0ad4e', title: 'Name: ACOSH<br>Value: 5.192925985263684<br>Type: FUNCTION<br>Id: ff88efd1-b8df-415c-b7a3-99bf6ef54715<br>Formula Expression: Formula String: ACOSH(C2); Formula Values: ACOSH(90.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@70b2819f'},
{id: 'acc9fa1d-1444-4072-9054-a6c49a55a831', label: 'E5\n5.192925985263684', color: '#31b0d5', title: 'Name: E5<br>Value: 5.192925985263684<br>Type: CELL_WITH_FORMULA<br>Id: acc9fa1d-1444-4072-9054-a6c49a55a831<br>Formula Expression: Formula String: ACOSH(C2); Formula Values: ACOSH(90.0); Formula Ptg: 90.0 ACOSH ; Ptgs: C2 ACOSH  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@70b2819f'},
{id: 'c6cbc92e-7ea7-48a8-979e-2dad2c3fcf34', label: 'A1\n2.993222846126381', color: '#31b0d5', title: 'Name: A1<br>Value: 2.993222846126381<br>Type: CELL_WITH_FORMULA<br>Id: c6cbc92e-7ea7-48a8-979e-2dad2c3fcf34<br>Formula Expression: Formula String: ACOSH(VALUE); Formula Values: ACOSH(10.0); Formula Ptg: 10.0 ACOSH ; Ptgs: VALUE ACOSH  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@70b2819f'},
{id: '09d68612-6e38-4ef1-81c1-0723b5d7d489', label: 'ACOSH\n2.993222846126381', color: '#f0ad4e', title: 'Name: ACOSH<br>Value: 2.993222846126381<br>Type: FUNCTION<br>Id: 09d68612-6e38-4ef1-81c1-0723b5d7d489<br>Formula Expression: Formula String: ACOSH(VALUE); Formula Values: ACOSH(10.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@70b2819f'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '2b89e26d-717b-49d7-bc9f-de3c373b5d75', to: '09d68612-6e38-4ef1-81c1-0723b5d7d489'},
{from: '09d68612-6e38-4ef1-81c1-0723b5d7d489', to: 'c6cbc92e-7ea7-48a8-979e-2dad2c3fcf34'},
{from: 'ff88efd1-b8df-415c-b7a3-99bf6ef54715', to: 'acc9fa1d-1444-4072-9054-a6c49a55a831'},
{from: '98e486a4-934c-4f2a-82c2-8e36b5dc6ee4', to: 'ff88efd1-b8df-415c-b7a3-99bf6ef54715'}
                            ]);