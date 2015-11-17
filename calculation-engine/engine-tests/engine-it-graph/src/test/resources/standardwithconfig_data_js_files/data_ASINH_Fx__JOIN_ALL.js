var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'd3d25abc-6df1-499a-bca5-af464e91d096', label: 'VALUE\n15.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 15.0<br>Type: CONSTANT_VALUE<br>Id: d3d25abc-6df1-499a-bca5-af464e91d096<br>Formula Expression: Formula String: VALUE; Formula Values: 15.0; Formula Ptg: 15.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@783a467b'},
{id: '2251f6e7-50ef-4a20-b1cc-110a1e69bfda', label: 'B2\n-1.6472311463710965', color: '#31b0d5', title: 'Name: B2<br>Value: -1.6472311463710965<br>Type: CELL_WITH_FORMULA<br>Id: 2251f6e7-50ef-4a20-b1cc-110a1e69bfda<br>Formula Expression: Formula String: ASINH(VALUE); Formula Values: ASINH(-2.5); Formula Ptg: -2.5 ASINH ; Ptgs: VALUE ASINH  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@783a467b'},
{id: 'a19a8871-ebbd-47bb-8328-c52d01ecf2a9', label: 'ASINH\n3.4023066454805946', color: '#f0ad4e', title: 'Name: ASINH<br>Value: 3.4023066454805946<br>Type: FUNCTION<br>Id: a19a8871-ebbd-47bb-8328-c52d01ecf2a9<br>Formula Expression: Formula String: ASINH(VALUE); Formula Values: ASINH(15.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@783a467b'},
{id: '444b5246-c583-46b3-aff8-4e4adf225dc2', label: 'ASINH\n-1.6472311463710965', color: '#f0ad4e', title: 'Name: ASINH<br>Value: -1.6472311463710965<br>Type: FUNCTION<br>Id: 444b5246-c583-46b3-aff8-4e4adf225dc2<br>Formula Expression: Formula String: ASINH(VALUE); Formula Values: ASINH(-2.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@783a467b'},
{id: '12a32237-48fb-41de-a13d-dfb315b40f0b', label: 'VALUE\n-2.5', color: '#31b0d5', title: 'Name: VALUE<br>Value: -2.5<br>Type: CONSTANT_VALUE<br>Id: 12a32237-48fb-41de-a13d-dfb315b40f0b<br>Formula Expression: Formula String: VALUE; Formula Values: -2.5; Formula Ptg: -2.5; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@783a467b'},
{id: '354c9243-1a0e-4bed-b4ee-30455368fb02', label: 'B3\n3.4023066454805946', color: '#31b0d5', title: 'Name: B3<br>Value: 3.4023066454805946<br>Type: CELL_WITH_FORMULA<br>Id: 354c9243-1a0e-4bed-b4ee-30455368fb02<br>Formula Expression: Formula String: ASINH(VALUE); Formula Values: ASINH(15.0); Formula Ptg: 15.0 ASINH ; Ptgs: VALUE ASINH  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@783a467b'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '12a32237-48fb-41de-a13d-dfb315b40f0b', to: '444b5246-c583-46b3-aff8-4e4adf225dc2'},
{from: 'a19a8871-ebbd-47bb-8328-c52d01ecf2a9', to: '354c9243-1a0e-4bed-b4ee-30455368fb02'},
{from: 'd3d25abc-6df1-499a-bca5-af464e91d096', to: 'a19a8871-ebbd-47bb-8328-c52d01ecf2a9'},
{from: '444b5246-c583-46b3-aff8-4e4adf225dc2', to: '2251f6e7-50ef-4a20-b1cc-110a1e69bfda'}
                            ]);