var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '00b9363a-15e6-457f-a798-66753f12b1a7', label: 'A1\n2.993222846126381', color: '#31b0d5', title: 'Name: A1<br>Value: 2.993222846126381<br>Type: CELL_WITH_FORMULA<br>Id: 00b9363a-15e6-457f-a798-66753f12b1a7<br>Formula Expression: Formula String: ACOSH(VALUE); Formula Values: ACOSH(10.0); Formula Ptg: 10.0 ACOSH ; Ptgs: VALUE ACOSH  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2a898881'},
{id: 'a059f0c7-4bbc-4439-90a8-e2c9618f2320', label: 'CLEAN\n9', color: '#f0ad4e', title: 'Name: CLEAN<br>Value: 9<br>Type: FUNCTION<br>Id: a059f0c7-4bbc-4439-90a8-e2c9618f2320<br>Formula Expression: Formula String: CLEAN(B1); Formula Values: CLEAN(9.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2a898881'},
{id: 'fbddf8f6-fef0-45fd-87bf-d5f0a8d3e798', label: 'VALUE\n10.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 10.0<br>Type: CONSTANT_VALUE<br>Id: fbddf8f6-fef0-45fd-87bf-d5f0a8d3e798<br>Formula Expression: Formula String: VALUE; Formula Values: 10.0; Formula Ptg: 10.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2a898881'},
{id: '25726904-4554-4746-88e5-7d2e4fe7d4d0', label: 'B1\n9.0', color: '#31b0d5', title: 'Name: B1<br>Value: 9.0<br>Type: CELL_WITH_VALUE<br>Id: 25726904-4554-4746-88e5-7d2e4fe7d4d0<br>Formula Expression: Formula String: B1; Formula Values: 9.0; Formula Ptg: 9.0; Ptgs: B1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2a898881'},
{id: '78c5a697-882d-4add-8748-401dbdc447de', label: 'ACOSH\n2.993222846126381', color: '#f0ad4e', title: 'Name: ACOSH<br>Value: 2.993222846126381<br>Type: FUNCTION<br>Id: 78c5a697-882d-4add-8748-401dbdc447de<br>Formula Expression: Formula String: ACOSH(VALUE); Formula Values: ACOSH(10.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2a898881'},
{id: 'ab92f666-9d62-4d29-a3ff-a82fda36e530', label: 'B6\n9', color: '#31b0d5', title: 'Name: B6<br>Value: 9<br>Type: CELL_WITH_FORMULA<br>Id: ab92f666-9d62-4d29-a3ff-a82fda36e530<br>Formula Expression: Formula String: CLEAN(B1); Formula Values: CLEAN(9.0); Formula Ptg: 9.0 CLEAN ; Ptgs: B1 CLEAN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2a898881'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'a059f0c7-4bbc-4439-90a8-e2c9618f2320', to: 'ab92f666-9d62-4d29-a3ff-a82fda36e530'},
{from: '25726904-4554-4746-88e5-7d2e4fe7d4d0', to: 'a059f0c7-4bbc-4439-90a8-e2c9618f2320'},
{from: 'fbddf8f6-fef0-45fd-87bf-d5f0a8d3e798', to: '78c5a697-882d-4add-8748-401dbdc447de'},
{from: '78c5a697-882d-4add-8748-401dbdc447de', to: '00b9363a-15e6-457f-a798-66753f12b1a7'}
                            ]);