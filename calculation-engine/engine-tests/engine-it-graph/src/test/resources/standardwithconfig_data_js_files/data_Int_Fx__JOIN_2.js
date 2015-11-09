var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '544ec941-18f0-4007-a805-593fe04642ae', label: 'INT\n19.0', color: '#f0ad4e', title: 'Name: INT<br>Value: 19.0<br>Type: FUNCTION<br>Id: 544ec941-18f0-4007-a805-593fe04642ae<br>Formula Expression: Formula String: INT(A1); Formula Values: INT(19.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4fe2dd02'},
{id: 'eccd4967-680c-4a18-9fc9-8e613cca1f04', label: 'B2\n7.0', color: '#31b0d5', title: 'Name: B2<br>Value: 7.0<br>Type: CELL_WITH_FORMULA<br>Id: eccd4967-680c-4a18-9fc9-8e613cca1f04<br>Formula Expression: Formula String: INT(VALUE); Formula Values: INT(7.5); Formula Ptg: 7.5 INT ; Ptgs: VALUE INT  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4fe2dd02'},
{id: 'd997dc4e-478b-47ce-9a28-2b7289b479f3', label: 'INT\n7.0', color: '#f0ad4e', title: 'Name: INT<br>Value: 7.0<br>Type: FUNCTION<br>Id: d997dc4e-478b-47ce-9a28-2b7289b479f3<br>Formula Expression: Formula String: INT(VALUE); Formula Values: INT(7.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4fe2dd02'},
{id: 'c597f481-0aa0-403e-a913-e0886214bccf', label: 'B3\n19.0', color: '#31b0d5', title: 'Name: B3<br>Value: 19.0<br>Type: CELL_WITH_FORMULA<br>Id: c597f481-0aa0-403e-a913-e0886214bccf<br>Formula Expression: Formula String: INT(A1); Formula Values: INT(19.5); Formula Ptg: 19.5 INT ; Ptgs: A1 INT  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4fe2dd02'},
{id: '1194a380-666e-49eb-8869-ae93b7ec21ca', label: 'A1\n19.5', color: '#31b0d5', title: 'Name: A1<br>Value: 19.5<br>Type: CELL_WITH_VALUE<br>Id: 1194a380-666e-49eb-8869-ae93b7ec21ca<br>Formula Expression: Formula String: A1; Formula Values: 19.5; Formula Ptg: 19.5; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4fe2dd02'},
{id: '4cf61597-86d8-4775-83c5-f77c3e8c817e', label: 'VALUE\n7.5', color: '#31b0d5', title: 'Name: VALUE<br>Value: 7.5<br>Type: CONSTANT_VALUE<br>Id: 4cf61597-86d8-4775-83c5-f77c3e8c817e<br>Formula Expression: Formula String: VALUE; Formula Values: 7.5; Formula Ptg: 7.5; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4fe2dd02'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '544ec941-18f0-4007-a805-593fe04642ae', to: 'c597f481-0aa0-403e-a913-e0886214bccf'},
{from: '1194a380-666e-49eb-8869-ae93b7ec21ca', to: '544ec941-18f0-4007-a805-593fe04642ae'},
{from: '4cf61597-86d8-4775-83c5-f77c3e8c817e', to: 'd997dc4e-478b-47ce-9a28-2b7289b479f3'},
{from: 'd997dc4e-478b-47ce-9a28-2b7289b479f3', to: 'eccd4967-680c-4a18-9fc9-8e613cca1f04'}
                            ]);