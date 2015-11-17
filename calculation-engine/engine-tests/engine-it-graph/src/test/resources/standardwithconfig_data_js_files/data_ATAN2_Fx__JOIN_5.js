var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'c6a41ad2-1624-400b-b121-4595e97263cd', label: 'ATAN2\n-2.356194490192345', color: '#f0ad4e', title: 'Name: ATAN2<br>Value: -2.356194490192345<br>Type: FUNCTION<br>Id: c6a41ad2-1624-400b-b121-4595e97263cd<br>Formula Expression: Formula String: ATAN2(VALUE, VALUE); Formula Values: ATAN2(-1.0, -1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@47a9bcf1'},
{id: '670a4714-b3b0-4a45-8291-01778cbbf77f', label: 'ATAN2\n0.7853981633974483', color: '#f0ad4e', title: 'Name: ATAN2<br>Value: 0.7853981633974483<br>Type: FUNCTION<br>Id: 670a4714-b3b0-4a45-8291-01778cbbf77f<br>Formula Expression: Formula String: ATAN2(VALUE, VALUE); Formula Values: ATAN2(1.0, 1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@47a9bcf1'},
{id: '3427acb8-4374-4676-955a-3630120b20f4', label: 'B2\n0.7853981633974483', color: '#31b0d5', title: 'Name: B2<br>Value: 0.7853981633974483<br>Type: CELL_WITH_FORMULA<br>Id: 3427acb8-4374-4676-955a-3630120b20f4<br>Formula Expression: Formula String: ATAN2(VALUE, VALUE); Formula Values: ATAN2(1.0, 1.0); Formula Ptg: 1.0, 1.0 ATAN2 ; Ptgs: VALUE, VALUE ATAN2  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@47a9bcf1'},
{id: '1099e122-09a0-47fa-b45d-36067f159d79', label: 'VALUE\n1.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 1.0<br>Type: CONSTANT_VALUE<br>Id: 1099e122-09a0-47fa-b45d-36067f159d79<br>Formula Expression: Formula String: VALUE; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@47a9bcf1'},
{id: '0ca0352e-a5c0-4e76-855c-0da4d190ba04', label: 'VALUE\n1.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 1.0<br>Type: CONSTANT_VALUE<br>Id: 0ca0352e-a5c0-4e76-855c-0da4d190ba04<br>Formula Expression: Formula String: VALUE; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@47a9bcf1'},
{id: '116975c4-89f8-4b47-a77e-3f6ee5b9cd17', label: 'B3\n-2.356194490192345', color: '#31b0d5', title: 'Name: B3<br>Value: -2.356194490192345<br>Type: CELL_WITH_FORMULA<br>Id: 116975c4-89f8-4b47-a77e-3f6ee5b9cd17<br>Formula Expression: Formula String: ATAN2(VALUE, VALUE); Formula Values: ATAN2(-1.0, -1.0); Formula Ptg: -1.0, -1.0 ATAN2 ; Ptgs: VALUE, VALUE ATAN2  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@47a9bcf1'},
{id: '1d3a701a-a62e-464e-bbe6-5effe1da42a7', label: 'VALUE\n-1.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: -1.0<br>Type: CONSTANT_VALUE<br>Id: 1d3a701a-a62e-464e-bbe6-5effe1da42a7<br>Formula Expression: Formula String: VALUE; Formula Values: -1.0; Formula Ptg: -1.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@47a9bcf1'},
{id: '03b9f9f6-13c3-4f6e-abb2-c253067edb7f', label: 'VALUE\n-1.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: -1.0<br>Type: CONSTANT_VALUE<br>Id: 03b9f9f6-13c3-4f6e-abb2-c253067edb7f<br>Formula Expression: Formula String: VALUE; Formula Values: -1.0; Formula Ptg: -1.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@47a9bcf1'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '1d3a701a-a62e-464e-bbe6-5effe1da42a7', to: 'c6a41ad2-1624-400b-b121-4595e97263cd'},
{from: '0ca0352e-a5c0-4e76-855c-0da4d190ba04', to: '670a4714-b3b0-4a45-8291-01778cbbf77f'},
{from: 'c6a41ad2-1624-400b-b121-4595e97263cd', to: '116975c4-89f8-4b47-a77e-3f6ee5b9cd17'},
{from: '670a4714-b3b0-4a45-8291-01778cbbf77f', to: '3427acb8-4374-4676-955a-3630120b20f4'},
{from: '1099e122-09a0-47fa-b45d-36067f159d79', to: '670a4714-b3b0-4a45-8291-01778cbbf77f'},
{from: '03b9f9f6-13c3-4f6e-abb2-c253067edb7f', to: 'c6a41ad2-1624-400b-b121-4595e97263cd'}
                            ]);