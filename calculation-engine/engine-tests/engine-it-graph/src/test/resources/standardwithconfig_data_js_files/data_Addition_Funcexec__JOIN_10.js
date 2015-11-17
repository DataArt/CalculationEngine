var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'ab2812a3-0bb1-4407-8ecc-a1b0d8712852', label: 'VALUE\nDEVDEF', color: '#31b0d5', title: 'Name: VALUE<br>Value: DEVDEF<br>Type: CONSTANT_VALUE<br>Id: ab2812a3-0bb1-4407-8ecc-a1b0d8712852<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF; Formula Ptg: DEVDEF; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@16ef1160'},
{id: 'd14cb901-9d6c-424d-8ea2-471ff12057ba', label: 'D2\n790.0', color: '#31b0d5', title: 'Name: D2<br>Value: 790.0<br>Type: CELL_WITH_FORMULA<br>Id: d14cb901-9d6c-424d-8ea2-471ff12057ba<br>Formula Expression: Formula String: A2 + B2 + C2; Formula Values: 250.0 + 240.0 + 300.0; Formula Ptg: 250.0 240.0 + 300.0 +; Ptgs: A2 B2 + C2 + Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@16ef1160'},
{id: 'bd4ba66a-6903-4374-ae8e-c4dff3c6b8d3', label: 'A2\n250.0', color: '#31b0d5', title: 'Name: A2<br>Value: 250.0<br>Type: CELL_WITH_VALUE<br>Id: bd4ba66a-6903-4374-ae8e-c4dff3c6b8d3<br>Formula Expression: Formula String: A2; Formula Values: 250.0; Formula Ptg: 250.0; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@16ef1160'},
{id: '6379ee83-2127-4c78-af65-f2e0398c989f', label: 'B2\n240.0', color: '#31b0d5', title: 'Name: B2<br>Value: 240.0<br>Type: CELL_WITH_VALUE<br>Id: 6379ee83-2127-4c78-af65-f2e0398c989f<br>Formula Expression: Formula String: B2; Formula Values: 240.0; Formula Ptg: 240.0; Ptgs: B2 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@16ef1160'},
{id: '26cf4b49-892b-42f7-a09f-c3bf39750f27', label: 'A2\n250.0', color: '#31b0d5', title: 'Name: A2<br>Value: 250.0<br>Type: CELL_WITH_VALUE<br>Id: 26cf4b49-892b-42f7-a09f-c3bf39750f27<br>Formula Expression: Formula String: A2; Formula Values: 250.0; Formula Ptg: 250.0; Ptgs: A2 Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@16ef1160'},
{id: '17a60c30-2df0-4176-bef0-c6d703f10003', label: 'D2\n790.0', color: '#31b0d5', title: 'Name: D2<br>Value: 790.0<br>Type: CELL_WITH_FORMULA<br>Id: 17a60c30-2df0-4176-bef0-c6d703f10003<br>Formula Expression: Formula String: A2 + B2 + C2; Formula Values: 250.0 + 240.0 + 300.0; Formula Ptg: 250.0 240.0 + 300.0 +; Ptgs: A2 B2 + C2 + Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@16ef1160'},
{id: '631c6237-331c-4334-aaf9-8d28e5219562', label: 'D3\nDEFINE', color: '#31b0d5', title: 'Name: D3<br>Value: DEFINE<br>Type: CELL_WITH_FORMULA<br>Id: 631c6237-331c-4334-aaf9-8d28e5219562<br>Formula Expression: Formula String: DEFINE(A2 + B2 + C2, VALUE, C2, B2, A2, VALUE); Formula Values: DEFINE(250.0 + 240.0 + 300.0, #, 300.0, 240.0, 250.0, DEVDEF); Formula Ptg: 250.0 240.0 + 300.0 +, #, 300.0, 240.0, 250.0, DEVDEF DEFINE ; Ptgs: A2 B2 + C2 +, VALUE, C2, B2, A2, VALUE DEFINE  Index in Ptgs: 7 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@16ef1160'},
{id: 'fa1636ed-9d17-4268-989f-82e4138863f6', label: 'C2\n300.0', color: '#31b0d5', title: 'Name: C2<br>Value: 300.0<br>Type: CELL_WITH_VALUE<br>Id: fa1636ed-9d17-4268-989f-82e4138863f6<br>Formula Expression: Formula String: C2; Formula Values: 300.0; Formula Ptg: 300.0; Ptgs: C2 Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@16ef1160'},
{id: 'ee6a50cc-6e5a-4195-86bc-014d288e3094', label: '+\n790.0', color: '#f0ad4e', title: 'Name: +<br>Value: 790.0<br>Type: OPERATOR<br>Id: ee6a50cc-6e5a-4195-86bc-014d288e3094<br>Formula Expression: Formula String: A2 + B2 + C2; Formula Values: 250.0 + 240.0 + 300.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@16ef1160'},
{id: '316135ad-370b-490d-baec-bcacdc3e8912', label: 'DEFINE\nDEFINE', color: '#f0ad4e', title: 'Name: DEFINE<br>Value: DEFINE<br>Type: FUNCTION<br>Id: 316135ad-370b-490d-baec-bcacdc3e8912<br>Formula Expression: Formula String: DEFINE(A2 + B2 + C2, VALUE, C2, B2, A2, VALUE); Formula Values: DEFINE(250.0 + 240.0 + 300.0, #, 300.0, 240.0, 250.0, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 7 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@16ef1160'},
{id: 'da737482-0bad-4998-afbc-55efabc485e0', label: 'E3\n790.0', color: '#31b0d5', title: 'Name: E3<br>Value: 790.0<br>Type: CELL_WITH_FORMULA<br>Id: da737482-0bad-4998-afbc-55efabc485e0<br>Formula Expression: Formula String: FUNCEXEC(C2, B2, A2, VALUE); Formula Values: FUNCEXEC(300.0, 240.0, 250.0, DEVDEF); Formula Ptg: 300.0, 240.0, 250.0, DEVDEF FUNCEXEC ; Ptgs: C2, B2, A2, VALUE FUNCEXEC  Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@16ef1160'},
{id: '8979b59d-2b43-4eab-9dc8-5d1ebb947bc0', label: 'FUNCEXEC\n790.0', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Value: 790.0<br>Type: FUNCTION<br>Id: 8979b59d-2b43-4eab-9dc8-5d1ebb947bc0<br>Formula Expression: Formula String: FUNCEXEC(C2, B2, A2, VALUE); Formula Values: FUNCEXEC(300.0, 240.0, 250.0, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@16ef1160'},
{id: '3461f326-95aa-4d48-8c64-abfb7fab53ec', label: 'VALUE\nDEVDEF', color: '#31b0d5', title: 'Name: VALUE<br>Value: DEVDEF<br>Type: CONSTANT_VALUE<br>Id: 3461f326-95aa-4d48-8c64-abfb7fab53ec<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF; Formula Ptg: DEVDEF; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@16ef1160'},
{id: 'eca37f7f-fffa-418c-8f31-50d0369b07d2', label: 'B2\n240.0', color: '#31b0d5', title: 'Name: B2<br>Value: 240.0<br>Type: CELL_WITH_VALUE<br>Id: eca37f7f-fffa-418c-8f31-50d0369b07d2<br>Formula Expression: Formula String: B2; Formula Values: 240.0; Formula Ptg: 240.0; Ptgs: B2 Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@16ef1160'},
{id: '428909e1-b918-4743-8371-f1affa5df20b', label: 'B2\n240.0', color: '#31b0d5', title: 'Name: B2<br>Value: 240.0<br>Type: CELL_WITH_VALUE<br>Id: 428909e1-b918-4743-8371-f1affa5df20b<br>Formula Expression: Formula String: B2; Formula Values: 240.0; Formula Ptg: 240.0; Ptgs: B2 Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@16ef1160'},
{id: '95be234f-6ebf-4ddf-af1e-ea356cc19d43', label: '+\n490.0', color: '#f0ad4e', title: 'Name: +<br>Value: 490.0<br>Type: OPERATOR<br>Id: 95be234f-6ebf-4ddf-af1e-ea356cc19d43<br>Formula Expression: Formula String: A2 + B2; Formula Values: 250.0 + 240.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@16ef1160'},
{id: 'cc2c741c-0ea8-4ba4-b6da-45a0e91fc9f5', label: 'C2\n300.0', color: '#31b0d5', title: 'Name: C2<br>Value: 300.0<br>Type: CELL_WITH_VALUE<br>Id: cc2c741c-0ea8-4ba4-b6da-45a0e91fc9f5<br>Formula Expression: Formula String: C2; Formula Values: 300.0; Formula Ptg: 300.0; Ptgs: C2 Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@16ef1160'},
{id: 'e6dbabf9-50b3-4ff1-8775-969518130405', label: 'C2\n300.0', color: '#31b0d5', title: 'Name: C2<br>Value: 300.0<br>Type: CELL_WITH_VALUE<br>Id: e6dbabf9-50b3-4ff1-8775-969518130405<br>Formula Expression: Formula String: C2; Formula Values: 300.0; Formula Ptg: 300.0; Ptgs: C2 Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@16ef1160'},
{id: 'a82854c3-43e9-4f3f-9b1f-f22c85a4891f', label: 'VALUE\n#', color: '#31b0d5', title: 'Name: VALUE<br>Value: #<br>Type: CONSTANT_VALUE<br>Id: a82854c3-43e9-4f3f-9b1f-f22c85a4891f<br>Formula Expression: Formula String: VALUE; Formula Values: #; Formula Ptg: #; Ptgs: VALUE Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@16ef1160'},
{id: '5ef08b4c-3f79-4745-aa8a-fd8add5706de', label: 'A2\n250.0', color: '#31b0d5', title: 'Name: A2<br>Value: 250.0<br>Type: CELL_WITH_VALUE<br>Id: 5ef08b4c-3f79-4745-aa8a-fd8add5706de<br>Formula Expression: Formula String: A2; Formula Values: 250.0; Formula Ptg: 250.0; Ptgs: A2 Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@16ef1160'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'fa1636ed-9d17-4268-989f-82e4138863f6', to: '316135ad-370b-490d-baec-bcacdc3e8912'},
{from: '316135ad-370b-490d-baec-bcacdc3e8912', to: '631c6237-331c-4334-aaf9-8d28e5219562'},
{from: 'a82854c3-43e9-4f3f-9b1f-f22c85a4891f', to: '316135ad-370b-490d-baec-bcacdc3e8912'},
{from: 'e6dbabf9-50b3-4ff1-8775-969518130405', to: '8979b59d-2b43-4eab-9dc8-5d1ebb947bc0'},
{from: '428909e1-b918-4743-8371-f1affa5df20b', to: '8979b59d-2b43-4eab-9dc8-5d1ebb947bc0'},
{from: '8979b59d-2b43-4eab-9dc8-5d1ebb947bc0', to: 'da737482-0bad-4998-afbc-55efabc485e0'},
{from: 'ee6a50cc-6e5a-4195-86bc-014d288e3094', to: 'd14cb901-9d6c-424d-8ea2-471ff12057ba'},
{from: 'bd4ba66a-6903-4374-ae8e-c4dff3c6b8d3', to: '95be234f-6ebf-4ddf-af1e-ea356cc19d43'},
{from: 'ee6a50cc-6e5a-4195-86bc-014d288e3094', to: '17a60c30-2df0-4176-bef0-c6d703f10003'},
{from: 'cc2c741c-0ea8-4ba4-b6da-45a0e91fc9f5', to: 'ee6a50cc-6e5a-4195-86bc-014d288e3094'},
{from: '5ef08b4c-3f79-4745-aa8a-fd8add5706de', to: '8979b59d-2b43-4eab-9dc8-5d1ebb947bc0'},
{from: 'eca37f7f-fffa-418c-8f31-50d0369b07d2', to: '316135ad-370b-490d-baec-bcacdc3e8912'},
{from: '95be234f-6ebf-4ddf-af1e-ea356cc19d43', to: 'ee6a50cc-6e5a-4195-86bc-014d288e3094'},
{from: 'ab2812a3-0bb1-4407-8ecc-a1b0d8712852', to: '8979b59d-2b43-4eab-9dc8-5d1ebb947bc0'},
{from: '17a60c30-2df0-4176-bef0-c6d703f10003', to: '316135ad-370b-490d-baec-bcacdc3e8912'},
{from: '26cf4b49-892b-42f7-a09f-c3bf39750f27', to: '316135ad-370b-490d-baec-bcacdc3e8912'},
{from: '3461f326-95aa-4d48-8c64-abfb7fab53ec', to: '316135ad-370b-490d-baec-bcacdc3e8912'},
{from: '6379ee83-2127-4c78-af65-f2e0398c989f', to: '95be234f-6ebf-4ddf-af1e-ea356cc19d43'}
                            ]);