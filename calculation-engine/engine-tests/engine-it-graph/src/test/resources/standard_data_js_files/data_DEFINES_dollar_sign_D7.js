var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'c9363e03-5a51-4757-bcee-ea0ddcf10c7b', label: 'FUNCEXEC\n$1800', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Value: $1800<br>Type: FUNCTION<br>Id: c9363e03-5a51-4757-bcee-ea0ddcf10c7b<br>Formula Expression: Formula String: FUNCEXEC(B2, A2, VALUE); Formula Values: FUNCEXEC($1500, $1000, DEVDEF_1); Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2d1dee39'},
{id: '69e7fca3-f688-4808-89a1-5deb1e541214', label: 'B2\n$1500', color: '#31b0d5', title: 'Name: B2<br>Value: $1500<br>Type: CELL_WITH_VALUE<br>Id: 69e7fca3-f688-4808-89a1-5deb1e541214<br>Formula Expression: Formula String: B2; Formula Values: $1500; Formula Ptg: $1500; Ptgs: B2 Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2d1dee39'},
{id: '3c5213a2-3ef3-49d0-bf7a-749c84b01c85', label: 'A2\n$1000', color: '#31b0d5', title: 'Name: A2<br>Value: $1000<br>Type: CELL_WITH_VALUE<br>Id: 3c5213a2-3ef3-49d0-bf7a-749c84b01c85<br>Formula Expression: Formula String: A2; Formula Values: $1000; Formula Ptg: $1000; Ptgs: A2 Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2d1dee39'},
{id: 'e07ef885-a818-43c4-8494-da6e6a9e6078', label: 'D7\n$1800', color: '#31b0d5', title: 'Name: D7<br>Value: $1800<br>Type: CELL_WITH_FORMULA<br>Id: e07ef885-a818-43c4-8494-da6e6a9e6078<br>Formula Expression: Formula String: FUNCEXEC(B2, A2, VALUE); Formula Values: FUNCEXEC($1500, $1000, DEVDEF_1); Formula Ptg: $1500, $1000, DEVDEF_1 FUNCEXEC ; Ptgs: B2, A2, VALUE FUNCEXEC  Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2d1dee39'},
{id: '440af2ca-8677-4b63-aa5d-c768997e0d27', label: 'VALUE\nDEVDEF_1', color: '#31b0d5', title: 'Name: VALUE<br>Value: DEVDEF_1<br>Type: CONSTANT_VALUE<br>Id: 440af2ca-8677-4b63-aa5d-c768997e0d27<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF_1; Formula Ptg: DEVDEF_1; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2d1dee39'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '440af2ca-8677-4b63-aa5d-c768997e0d27', to: 'c9363e03-5a51-4757-bcee-ea0ddcf10c7b'},
{from: 'c9363e03-5a51-4757-bcee-ea0ddcf10c7b', to: 'e07ef885-a818-43c4-8494-da6e6a9e6078'},
{from: '3c5213a2-3ef3-49d0-bf7a-749c84b01c85', to: 'c9363e03-5a51-4757-bcee-ea0ddcf10c7b'},
{from: '69e7fca3-f688-4808-89a1-5deb1e541214', to: 'c9363e03-5a51-4757-bcee-ea0ddcf10c7b'}
                            ]);