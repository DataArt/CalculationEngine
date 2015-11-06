var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'adb0c9f5-4f78-470d-9d0d-ac4e2cbe63d3', label: 'A1\n1.0', color: '#31b0d5', title: 'Name: A1<br>Value: 1.0<br>Type: CELL_WITH_VALUE<br>Id: adb0c9f5-4f78-470d-9d0d-ac4e2cbe63d3<br>Formula Expression: Formula String: A1; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@711d1a52'},
{id: '120b5d97-10c1-4772-9a48-5e2058848032', label: 'C5\nTRUE', color: '#31b0d5', title: 'Name: C5<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: 120b5d97-10c1-4772-9a48-5e2058848032<br>Formula Expression: Formula String: ISNONTEXT(A1); Formula Values: ISNONTEXT(1.0); Formula Ptg: 1.0 ISNONTEXT ; Ptgs: A1 ISNONTEXT  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@711d1a52'},
{id: 'df722c67-66d9-4058-b512-98ab271fe037', label: 'ISNONTEXT\nTRUE', color: '#f0ad4e', title: 'Name: ISNONTEXT<br>Value: TRUE<br>Type: FUNCTION<br>Id: df722c67-66d9-4058-b512-98ab271fe037<br>Formula Expression: Formula String: ISNONTEXT(A1); Formula Values: ISNONTEXT(1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@711d1a52'},
{id: '08fb6fe3-c10e-496c-9a5d-9250d11c3ea4', label: 'ISNONTEXT\nTRUE', color: '#f0ad4e', title: 'Name: ISNONTEXT<br>Value: TRUE<br>Type: FUNCTION<br>Id: 08fb6fe3-c10e-496c-9a5d-9250d11c3ea4<br>Formula Expression: Formula String: ISNONTEXT(ISNONTEXT(A1)); Formula Values: ISNONTEXT(ISNONTEXT(1.0)); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@711d1a52'},
{id: '4bcc9684-354d-4203-a5ce-a235ca91045e', label: 'C7\nTRUE', color: '#31b0d5', title: 'Name: C7<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: 4bcc9684-354d-4203-a5ce-a235ca91045e<br>Formula Expression: Formula String: ISNONTEXT(ISNONTEXT(A1)); Formula Values: ISNONTEXT(ISNONTEXT(1.0)); Formula Ptg: 1.0 ISNONTEXT  ISNONTEXT ; Ptgs: A1 ISNONTEXT  ISNONTEXT  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@711d1a52'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'df722c67-66d9-4058-b512-98ab271fe037', to: '120b5d97-10c1-4772-9a48-5e2058848032'},
{from: '08fb6fe3-c10e-496c-9a5d-9250d11c3ea4', to: '4bcc9684-354d-4203-a5ce-a235ca91045e'},
{from: 'adb0c9f5-4f78-470d-9d0d-ac4e2cbe63d3', to: 'df722c67-66d9-4058-b512-98ab271fe037'},
{from: '120b5d97-10c1-4772-9a48-5e2058848032', to: '08fb6fe3-c10e-496c-9a5d-9250d11c3ea4'}
                            ]);