var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'ff00b1e5-b01b-4b4c-b660-926419680845', label: 'FLOOR\n30.0', color: '#f0ad4e', title: 'Name: FLOOR<br>Value: 30.0<br>Type: FUNCTION<br>Id: ff00b1e5-b01b-4b4c-b660-926419680845<br>Formula Expression: Formula String: FLOOR(VALUE, VALUE); Formula Values: FLOOR(3.0, 32.5678); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@659925f4'},
{id: '77cab810-6dd5-40a0-b125-2529894e7d1a', label: 'VALUE\n32.5678', color: '#31b0d5', title: 'Name: VALUE<br>Value: 32.5678<br>Type: CONSTANT_VALUE<br>Id: 77cab810-6dd5-40a0-b125-2529894e7d1a<br>Formula Expression: Formula String: VALUE; Formula Values: 32.5678; Formula Ptg: 32.5678; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@659925f4'},
{id: '9d70ad8b-248f-4a0e-ba76-43bd27dda3b2', label: 'VALUE\n3.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 3.0<br>Type: CONSTANT_VALUE<br>Id: 9d70ad8b-248f-4a0e-ba76-43bd27dda3b2<br>Formula Expression: Formula String: VALUE; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@659925f4'},
{id: '82deec2e-ac46-45f9-bade-97ea0a7351e6', label: 'B2\n30.0', color: '#31b0d5', title: 'Name: B2<br>Value: 30.0<br>Type: CELL_WITH_FORMULA<br>Id: 82deec2e-ac46-45f9-bade-97ea0a7351e6<br>Formula Expression: Formula String: FLOOR(VALUE, VALUE); Formula Values: FLOOR(3.0, 32.5678); Formula Ptg: 3.0, 32.5678 FLOOR ; Ptgs: VALUE, VALUE FLOOR  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@659925f4'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '77cab810-6dd5-40a0-b125-2529894e7d1a', to: 'ff00b1e5-b01b-4b4c-b660-926419680845'},
{from: '9d70ad8b-248f-4a0e-ba76-43bd27dda3b2', to: 'ff00b1e5-b01b-4b4c-b660-926419680845'},
{from: 'ff00b1e5-b01b-4b4c-b660-926419680845', to: '82deec2e-ac46-45f9-bade-97ea0a7351e6'}
                            ]);