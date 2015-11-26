var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'ca8b771b-864b-4647-9c48-55630eabdc84', label: 'CEILING\n2.0', color: '#f0ad4e', title: 'Name: CEILING<br>Alias: null<br>Value: 2.0<br>Type: FUNCTION<br>Id: ca8b771b-864b-4647-9c48-55630eabdc84<br>Formula Expression: Formula String: CEILING(VALUE, VALUE); Formula Values: CEILING(2.0, 0.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7354b8c5'},
{id: '9e9aa58e-0080-4ab5-af60-cafd4caa21c4', label: 'VALUE\n2.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 2.0<br>Type: CONSTANT_VALUE<br>Id: 9e9aa58e-0080-4ab5-af60-cafd4caa21c4<br>Formula Expression: Formula String: VALUE; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7354b8c5'},
{id: 'ed8c1706-1ffe-4e11-834e-80d152b0ab81', label: 'VALUE\n0.5', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 0.5<br>Type: CONSTANT_VALUE<br>Id: ed8c1706-1ffe-4e11-834e-80d152b0ab81<br>Formula Expression: Formula String: VALUE; Formula Values: 0.5; Formula Ptg: 0.5; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7354b8c5'},
{id: 'fc220051-6e02-436c-a098-f6cb42c0cf98', label: 'B4\n2.0', color: '#31b0d5', title: 'Name: B4<br>Alias: null<br>Value: 2.0<br>Type: CELL_WITH_FORMULA<br>Id: fc220051-6e02-436c-a098-f6cb42c0cf98<br>Formula Expression: Formula String: CEILING(VALUE, VALUE); Formula Values: CEILING(2.0, 0.5); Formula Ptg: 2.0, 0.5 CEILING ; Ptgs: VALUE, VALUE CEILING  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7354b8c5'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '9e9aa58e-0080-4ab5-af60-cafd4caa21c4', to: 'ca8b771b-864b-4647-9c48-55630eabdc84'},
{from: 'ca8b771b-864b-4647-9c48-55630eabdc84', to: 'fc220051-6e02-436c-a098-f6cb42c0cf98'},
{from: 'ed8c1706-1ffe-4e11-834e-80d152b0ab81', to: 'ca8b771b-864b-4647-9c48-55630eabdc84'}
                            ]);