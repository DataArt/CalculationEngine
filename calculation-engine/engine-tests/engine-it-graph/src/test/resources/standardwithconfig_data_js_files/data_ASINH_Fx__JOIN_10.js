var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '77da2a4c-f1ae-4e4d-9903-fa349d098945', label: 'B2\n-1.6472311463710965', color: '#31b0d5', title: 'Name: B2<br>Value: -1.6472311463710965<br>Type: CELL_WITH_FORMULA<br>Id: 77da2a4c-f1ae-4e4d-9903-fa349d098945<br>Formula Expression: Formula String: ASINH(VALUE); Formula Values: ASINH(-2.5); Formula Ptg: -2.5 ASINH ; Ptgs: VALUE ASINH  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2a510e0e'},
{id: 'f2828a31-2245-4131-a82f-ac9c4864737c', label: 'VALUE\n-2.5', color: '#31b0d5', title: 'Name: VALUE<br>Value: -2.5<br>Type: CONSTANT_VALUE<br>Id: f2828a31-2245-4131-a82f-ac9c4864737c<br>Formula Expression: Formula String: VALUE; Formula Values: -2.5; Formula Ptg: -2.5; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2a510e0e'},
{id: '8c48da00-316c-49d5-85e5-03fe36382955', label: 'VALUE\n15.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 15.0<br>Type: CONSTANT_VALUE<br>Id: 8c48da00-316c-49d5-85e5-03fe36382955<br>Formula Expression: Formula String: VALUE; Formula Values: 15.0; Formula Ptg: 15.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2a510e0e'},
{id: '547f4e38-b228-4575-b21a-7d31797c3b09', label: 'ASINH\n-1.6472311463710965', color: '#f0ad4e', title: 'Name: ASINH<br>Value: -1.6472311463710965<br>Type: FUNCTION<br>Id: 547f4e38-b228-4575-b21a-7d31797c3b09<br>Formula Expression: Formula String: ASINH(VALUE); Formula Values: ASINH(-2.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2a510e0e'},
{id: 'cee74788-d58a-4f55-a691-9bc74f974057', label: 'B3\n3.4023066454805946', color: '#31b0d5', title: 'Name: B3<br>Value: 3.4023066454805946<br>Type: CELL_WITH_FORMULA<br>Id: cee74788-d58a-4f55-a691-9bc74f974057<br>Formula Expression: Formula String: ASINH(VALUE); Formula Values: ASINH(15.0); Formula Ptg: 15.0 ASINH ; Ptgs: VALUE ASINH  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2a510e0e'},
{id: '865a6c9e-c710-4525-8c6b-8ac054eccf05', label: 'ASINH\n3.4023066454805946', color: '#f0ad4e', title: 'Name: ASINH<br>Value: 3.4023066454805946<br>Type: FUNCTION<br>Id: 865a6c9e-c710-4525-8c6b-8ac054eccf05<br>Formula Expression: Formula String: ASINH(VALUE); Formula Values: ASINH(15.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2a510e0e'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '865a6c9e-c710-4525-8c6b-8ac054eccf05', to: 'cee74788-d58a-4f55-a691-9bc74f974057'},
{from: 'f2828a31-2245-4131-a82f-ac9c4864737c', to: '547f4e38-b228-4575-b21a-7d31797c3b09'},
{from: '547f4e38-b228-4575-b21a-7d31797c3b09', to: '77da2a4c-f1ae-4e4d-9903-fa349d098945'},
{from: '8c48da00-316c-49d5-85e5-03fe36382955', to: '865a6c9e-c710-4525-8c6b-8ac054eccf05'}
                            ]);