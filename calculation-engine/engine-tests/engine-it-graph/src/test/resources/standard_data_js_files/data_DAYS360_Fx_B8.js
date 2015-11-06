var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '0119a3a0-997e-49e0-8881-42d1898b1714', label: 'DAYS360\n-160.0', color: '#f0ad4e', title: 'Name: DAYS360<br>Value: -160.0<br>Type: FUNCTION<br>Id: 0119a3a0-997e-49e0-8881-42d1898b1714<br>Formula Expression: Formula String: DAYS360(A3, A4); Formula Values: DAYS360(42184.0, 42347.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@54dcfa5a'},
{id: 'b847f029-4c07-4184-a567-8da9813e5386', label: 'B8\n-160.0', color: '#31b0d5', title: 'Name: B8<br>Value: -160.0<br>Type: CELL_WITH_FORMULA<br>Id: b847f029-4c07-4184-a567-8da9813e5386<br>Formula Expression: Formula String: DAYS360(A3, A4); Formula Values: DAYS360(42184.0, 42347.0); Formula Ptg: 42184.0, 42347.0 DAYS360 ; Ptgs: A3, A4 DAYS360  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@54dcfa5a'},
{id: '611d1bea-16f9-4550-b07e-99ddcf16e0b4', label: 'A3\n42184.0', color: '#31b0d5', title: 'Name: A3<br>Value: 42184.0<br>Type: CELL_WITH_VALUE<br>Id: 611d1bea-16f9-4550-b07e-99ddcf16e0b4<br>Formula Expression: Formula String: A3; Formula Values: 42184.0; Formula Ptg: 42184.0; Ptgs: A3 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@54dcfa5a'},
{id: 'c12eb1b2-ddef-4f78-b916-2a8c01f9aaa5', label: 'A4\n42347.0', color: '#31b0d5', title: 'Name: A4<br>Value: 42347.0<br>Type: CELL_WITH_VALUE<br>Id: c12eb1b2-ddef-4f78-b916-2a8c01f9aaa5<br>Formula Expression: Formula String: A4; Formula Values: 42347.0; Formula Ptg: 42347.0; Ptgs: A4 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@54dcfa5a'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '611d1bea-16f9-4550-b07e-99ddcf16e0b4', to: '0119a3a0-997e-49e0-8881-42d1898b1714'},
{from: 'c12eb1b2-ddef-4f78-b916-2a8c01f9aaa5', to: '0119a3a0-997e-49e0-8881-42d1898b1714'},
{from: '0119a3a0-997e-49e0-8881-42d1898b1714', to: 'b847f029-4c07-4184-a567-8da9813e5386'}
                            ]);