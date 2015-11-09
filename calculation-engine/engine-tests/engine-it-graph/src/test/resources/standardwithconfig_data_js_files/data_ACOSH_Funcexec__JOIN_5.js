var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '3c8cd489-3c60-49e8-a4fd-9c6aa5e76498', label: 'A1\n2.993222846126381', color: '#31b0d5', title: 'Name: A1<br>Value: 2.993222846126381<br>Type: CELL_WITH_FORMULA<br>Id: 3c8cd489-3c60-49e8-a4fd-9c6aa5e76498<br>Formula Expression: Formula String: ACOSH(VALUE); Formula Values: ACOSH(10.0); Formula Ptg: 10.0 ACOSH ; Ptgs: VALUE ACOSH  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@16e6a643'},
{id: 'c7cfe2ce-8ec1-4c2f-ad9d-886ca8fe7d05', label: 'E5\n5.192925985263684', color: '#31b0d5', title: 'Name: E5<br>Value: 5.192925985263684<br>Type: CELL_WITH_FORMULA<br>Id: c7cfe2ce-8ec1-4c2f-ad9d-886ca8fe7d05<br>Formula Expression: Formula String: ACOSH(C2); Formula Values: ACOSH(90.0); Formula Ptg: 90.0 ACOSH ; Ptgs: C2 ACOSH  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@16e6a643'},
{id: '77e18b30-12df-4c16-8156-a58014d28411', label: 'ACOSH\n5.192925985263684', color: '#f0ad4e', title: 'Name: ACOSH<br>Value: 5.192925985263684<br>Type: FUNCTION<br>Id: 77e18b30-12df-4c16-8156-a58014d28411<br>Formula Expression: Formula String: ACOSH(C2); Formula Values: ACOSH(90.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@16e6a643'},
{id: 'f674df00-9d76-4ff6-8dcb-b84673d9a2a4', label: 'VALUE\n10.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 10.0<br>Type: CONSTANT_VALUE<br>Id: f674df00-9d76-4ff6-8dcb-b84673d9a2a4<br>Formula Expression: Formula String: VALUE; Formula Values: 10.0; Formula Ptg: 10.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@16e6a643'},
{id: 'cb65f12a-cfe5-44b2-ad08-b33fd55ca0e7', label: 'VALUE\nDEVDEF', color: '#31b0d5', title: 'Name: VALUE<br>Value: DEVDEF<br>Type: CONSTANT_VALUE<br>Id: cb65f12a-cfe5-44b2-ad08-b33fd55ca0e7<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF; Formula Ptg: DEVDEF; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@16e6a643'},
{id: '22f7b295-4d6d-48ec-b03f-501541520869', label: 'DEFINE\nDEFINE', color: '#f0ad4e', title: 'Name: DEFINE<br>Value: DEFINE<br>Type: FUNCTION<br>Id: 22f7b295-4d6d-48ec-b03f-501541520869<br>Formula Expression: Formula String: DEFINE(ACOSH(C2), VALUE, C2, VALUE); Formula Values: DEFINE(ACOSH(90.0), #, 90.0, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@16e6a643'},
{id: '86ffa190-f974-4904-937f-f0c5cdbaa62c', label: 'C2\n90.0', color: '#31b0d5', title: 'Name: C2<br>Value: 90.0<br>Type: CELL_WITH_VALUE<br>Id: 86ffa190-f974-4904-937f-f0c5cdbaa62c<br>Formula Expression: Formula String: C2; Formula Values: 90.0; Formula Ptg: 90.0; Ptgs: C2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@16e6a643'},
{id: 'fab0bec2-803c-45e7-b022-a5b4f688a869', label: 'ACOSH\n2.993222846126381', color: '#f0ad4e', title: 'Name: ACOSH<br>Value: 2.993222846126381<br>Type: FUNCTION<br>Id: fab0bec2-803c-45e7-b022-a5b4f688a869<br>Formula Expression: Formula String: ACOSH(VALUE); Formula Values: ACOSH(10.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@16e6a643'},
{id: '54e7a53a-59da-498e-bc3c-660abf4ca4d2', label: 'C2\n90.0', color: '#31b0d5', title: 'Name: C2<br>Value: 90.0<br>Type: CELL_WITH_VALUE<br>Id: 54e7a53a-59da-498e-bc3c-660abf4ca4d2<br>Formula Expression: Formula String: C2; Formula Values: 90.0; Formula Ptg: 90.0; Ptgs: C2 Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@16e6a643'},
{id: '58311d06-8916-4805-b925-24593824c0ff', label: 'E7\nDEFINE', color: '#31b0d5', title: 'Name: E7<br>Value: DEFINE<br>Type: CELL_WITH_FORMULA<br>Id: 58311d06-8916-4805-b925-24593824c0ff<br>Formula Expression: Formula String: DEFINE(ACOSH(C2), VALUE, C2, VALUE); Formula Values: DEFINE(ACOSH(90.0), #, 90.0, DEVDEF); Formula Ptg: 90.0 ACOSH , #, 90.0, DEVDEF DEFINE ; Ptgs: C2 ACOSH , VALUE, C2, VALUE DEFINE  Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@16e6a643'},
{id: 'f58079b4-f3ab-4219-908d-475f2e77a376', label: 'FUNCEXEC\n5.192925985263684', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Value: 5.192925985263684<br>Type: FUNCTION<br>Id: f58079b4-f3ab-4219-908d-475f2e77a376<br>Formula Expression: Formula String: FUNCEXEC(C2, VALUE); Formula Values: FUNCEXEC(90.0, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@16e6a643'},
{id: '9b5f11eb-07e0-4958-a61c-d1872e70701a', label: 'E5\n5.192925985263684', color: '#31b0d5', title: 'Name: E5<br>Value: 5.192925985263684<br>Type: CELL_WITH_FORMULA<br>Id: 9b5f11eb-07e0-4958-a61c-d1872e70701a<br>Formula Expression: Formula String: ACOSH(C2); Formula Values: ACOSH(90.0); Formula Ptg: 90.0 ACOSH ; Ptgs: C2 ACOSH  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@16e6a643'},
{id: 'b273ee8c-2ea0-4ba7-bf49-f64bab9ca072', label: 'F7\n5.192925985263684', color: '#31b0d5', title: 'Name: F7<br>Value: 5.192925985263684<br>Type: CELL_WITH_FORMULA<br>Id: b273ee8c-2ea0-4ba7-bf49-f64bab9ca072<br>Formula Expression: Formula String: FUNCEXEC(C2, VALUE); Formula Values: FUNCEXEC(90.0, DEVDEF); Formula Ptg: 90.0, DEVDEF FUNCEXEC ; Ptgs: C2, VALUE FUNCEXEC  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@16e6a643'},
{id: '03b5eb00-4d76-423d-b4e3-4b3ca1923b5f', label: 'C2\n90.0', color: '#31b0d5', title: 'Name: C2<br>Value: 90.0<br>Type: CELL_WITH_VALUE<br>Id: 03b5eb00-4d76-423d-b4e3-4b3ca1923b5f<br>Formula Expression: Formula String: C2; Formula Values: 90.0; Formula Ptg: 90.0; Ptgs: C2 Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@16e6a643'},
{id: '8d1d7581-382d-4a91-a2be-69d1dac89548', label: 'VALUE\nDEVDEF', color: '#31b0d5', title: 'Name: VALUE<br>Value: DEVDEF<br>Type: CONSTANT_VALUE<br>Id: 8d1d7581-382d-4a91-a2be-69d1dac89548<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF; Formula Ptg: DEVDEF; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@16e6a643'},
{id: '2da33c2d-263e-4c01-ba32-c9aeff64d50d', label: 'VALUE\n#', color: '#31b0d5', title: 'Name: VALUE<br>Value: #<br>Type: CONSTANT_VALUE<br>Id: 2da33c2d-263e-4c01-ba32-c9aeff64d50d<br>Formula Expression: Formula String: VALUE; Formula Values: #; Formula Ptg: #; Ptgs: VALUE Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@16e6a643'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '2da33c2d-263e-4c01-ba32-c9aeff64d50d', to: '22f7b295-4d6d-48ec-b03f-501541520869'},
{from: 'cb65f12a-cfe5-44b2-ad08-b33fd55ca0e7', to: 'f58079b4-f3ab-4219-908d-475f2e77a376'},
{from: '54e7a53a-59da-498e-bc3c-660abf4ca4d2', to: '22f7b295-4d6d-48ec-b03f-501541520869'},
{from: 'f674df00-9d76-4ff6-8dcb-b84673d9a2a4', to: 'fab0bec2-803c-45e7-b022-a5b4f688a869'},
{from: 'f58079b4-f3ab-4219-908d-475f2e77a376', to: 'b273ee8c-2ea0-4ba7-bf49-f64bab9ca072'},
{from: '77e18b30-12df-4c16-8156-a58014d28411', to: '9b5f11eb-07e0-4958-a61c-d1872e70701a'},
{from: 'fab0bec2-803c-45e7-b022-a5b4f688a869', to: '3c8cd489-3c60-49e8-a4fd-9c6aa5e76498'},
{from: '8d1d7581-382d-4a91-a2be-69d1dac89548', to: '22f7b295-4d6d-48ec-b03f-501541520869'},
{from: '77e18b30-12df-4c16-8156-a58014d28411', to: 'c7cfe2ce-8ec1-4c2f-ad9d-886ca8fe7d05'},
{from: '9b5f11eb-07e0-4958-a61c-d1872e70701a', to: '22f7b295-4d6d-48ec-b03f-501541520869'},
{from: '03b5eb00-4d76-423d-b4e3-4b3ca1923b5f', to: 'f58079b4-f3ab-4219-908d-475f2e77a376'},
{from: '86ffa190-f974-4904-937f-f0c5cdbaa62c', to: '77e18b30-12df-4c16-8156-a58014d28411'},
{from: '22f7b295-4d6d-48ec-b03f-501541520869', to: '58311d06-8916-4805-b925-24593824c0ff'}
                            ]);