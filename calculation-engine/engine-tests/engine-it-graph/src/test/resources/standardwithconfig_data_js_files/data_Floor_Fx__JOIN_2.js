var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '28b87f67-8eba-4ca1-9982-801cc8bc8cba', label: 'VALUE\n3.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 3.0<br>Type: CONSTANT_VALUE<br>Id: 28b87f67-8eba-4ca1-9982-801cc8bc8cba<br>Formula Expression: Formula String: VALUE; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@579846cc'},
{id: '57041cb9-beeb-4f93-b774-25e54c461ead', label: 'B2\n30.0', color: '#31b0d5', title: 'Name: B2<br>Value: 30.0<br>Type: CELL_WITH_FORMULA<br>Id: 57041cb9-beeb-4f93-b774-25e54c461ead<br>Formula Expression: Formula String: FLOOR(VALUE, VALUE); Formula Values: FLOOR(3.0, 32.5678); Formula Ptg: 3.0, 32.5678 FLOOR ; Ptgs: VALUE, VALUE FLOOR  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@579846cc'},
{id: 'ffbeb4f8-fb65-4a24-b7bc-a0f5f20be1df', label: 'VALUE\n2.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 2.0<br>Type: CONSTANT_VALUE<br>Id: ffbeb4f8-fb65-4a24-b7bc-a0f5f20be1df<br>Formula Expression: Formula String: VALUE; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@579846cc'},
{id: 'c6d194c4-3c9a-4848-8880-aa23079db9a8', label: 'VALUE\n32.5678', color: '#31b0d5', title: 'Name: VALUE<br>Value: 32.5678<br>Type: CONSTANT_VALUE<br>Id: c6d194c4-3c9a-4848-8880-aa23079db9a8<br>Formula Expression: Formula String: VALUE; Formula Values: 32.5678; Formula Ptg: 32.5678; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@579846cc'},
{id: '03a7bf47-9a55-4b96-91a9-12eb202ec474', label: 'VALUE\n3.7', color: '#31b0d5', title: 'Name: VALUE<br>Value: 3.7<br>Type: CONSTANT_VALUE<br>Id: 03a7bf47-9a55-4b96-91a9-12eb202ec474<br>Formula Expression: Formula String: VALUE; Formula Values: 3.7; Formula Ptg: 3.7; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@579846cc'},
{id: '6f249097-3a13-414a-ad02-cb7dd2798a36', label: 'FLOOR\n30.0', color: '#f0ad4e', title: 'Name: FLOOR<br>Value: 30.0<br>Type: FUNCTION<br>Id: 6f249097-3a13-414a-ad02-cb7dd2798a36<br>Formula Expression: Formula String: FLOOR(VALUE, VALUE); Formula Values: FLOOR(3.0, 32.5678); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@579846cc'},
{id: '377e4bd6-a23a-43b9-aba3-2f71b92d85e0', label: 'FLOOR\n2.0', color: '#f0ad4e', title: 'Name: FLOOR<br>Value: 2.0<br>Type: FUNCTION<br>Id: 377e4bd6-a23a-43b9-aba3-2f71b92d85e0<br>Formula Expression: Formula String: FLOOR(VALUE, VALUE); Formula Values: FLOOR(2.0, 3.7); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@579846cc'},
{id: 'cdc25fdc-15fa-45e2-bbf7-6dcf6d3eba4c', label: 'A1\n2.0', color: '#31b0d5', title: 'Name: A1<br>Value: 2.0<br>Type: CELL_WITH_FORMULA<br>Id: cdc25fdc-15fa-45e2-bbf7-6dcf6d3eba4c<br>Formula Expression: Formula String: FLOOR(VALUE, VALUE); Formula Values: FLOOR(2.0, 3.7); Formula Ptg: 2.0, 3.7 FLOOR ; Ptgs: VALUE, VALUE FLOOR  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@579846cc'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '377e4bd6-a23a-43b9-aba3-2f71b92d85e0', to: 'cdc25fdc-15fa-45e2-bbf7-6dcf6d3eba4c'},
{from: '6f249097-3a13-414a-ad02-cb7dd2798a36', to: '57041cb9-beeb-4f93-b774-25e54c461ead'},
{from: '28b87f67-8eba-4ca1-9982-801cc8bc8cba', to: '6f249097-3a13-414a-ad02-cb7dd2798a36'},
{from: 'c6d194c4-3c9a-4848-8880-aa23079db9a8', to: '6f249097-3a13-414a-ad02-cb7dd2798a36'},
{from: 'ffbeb4f8-fb65-4a24-b7bc-a0f5f20be1df', to: '377e4bd6-a23a-43b9-aba3-2f71b92d85e0'},
{from: '03a7bf47-9a55-4b96-91a9-12eb202ec474', to: '377e4bd6-a23a-43b9-aba3-2f71b92d85e0'}
                            ]);