var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '53ef98b6-63ed-4076-ab6f-b23a6479f5f8', label: 'B2\n-1.6472311463710965', color: '#31b0d5', title: 'Name: B2<br>Value: -1.6472311463710965<br>Type: CELL_WITH_FORMULA<br>Id: 53ef98b6-63ed-4076-ab6f-b23a6479f5f8<br>Formula Expression: Formula String: ASINH(VALUE); Formula Values: ASINH(-2.5); Formula Ptg: -2.5 ASINH ; Ptgs: VALUE ASINH  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@58253c57'},
{id: '859458d1-d9e3-4095-b7d7-75b317341f2d', label: 'ASINH\n-1.6472311463710965', color: '#f0ad4e', title: 'Name: ASINH<br>Value: -1.6472311463710965<br>Type: FUNCTION<br>Id: 859458d1-d9e3-4095-b7d7-75b317341f2d<br>Formula Expression: Formula String: ASINH(VALUE); Formula Values: ASINH(-2.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@58253c57'},
{id: '1587331b-d10b-4aaf-a6f5-258613a079cb', label: 'VALUE\n-2.5', color: '#31b0d5', title: 'Name: VALUE<br>Value: -2.5<br>Type: CONSTANT_VALUE<br>Id: 1587331b-d10b-4aaf-a6f5-258613a079cb<br>Formula Expression: Formula String: VALUE; Formula Values: -2.5; Formula Ptg: -2.5; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@58253c57'},
{id: 'f973d12e-d236-4363-a635-554aa467f143', label: 'B3\n3.4023066454805946', color: '#31b0d5', title: 'Name: B3<br>Value: 3.4023066454805946<br>Type: CELL_WITH_FORMULA<br>Id: f973d12e-d236-4363-a635-554aa467f143<br>Formula Expression: Formula String: ASINH(VALUE); Formula Values: ASINH(15.0); Formula Ptg: 15.0 ASINH ; Ptgs: VALUE ASINH  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@58253c57'},
{id: '4d23cacc-e8c2-4bb0-85db-38a36dc556ad', label: 'ASINH\n3.4023066454805946', color: '#f0ad4e', title: 'Name: ASINH<br>Value: 3.4023066454805946<br>Type: FUNCTION<br>Id: 4d23cacc-e8c2-4bb0-85db-38a36dc556ad<br>Formula Expression: Formula String: ASINH(VALUE); Formula Values: ASINH(15.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@58253c57'},
{id: '86cf3b30-3882-468b-b4c0-4326fb8a8bf9', label: 'VALUE\n15.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 15.0<br>Type: CONSTANT_VALUE<br>Id: 86cf3b30-3882-468b-b4c0-4326fb8a8bf9<br>Formula Expression: Formula String: VALUE; Formula Values: 15.0; Formula Ptg: 15.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@58253c57'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '859458d1-d9e3-4095-b7d7-75b317341f2d', to: '53ef98b6-63ed-4076-ab6f-b23a6479f5f8'},
{from: '86cf3b30-3882-468b-b4c0-4326fb8a8bf9', to: '4d23cacc-e8c2-4bb0-85db-38a36dc556ad'},
{from: '4d23cacc-e8c2-4bb0-85db-38a36dc556ad', to: 'f973d12e-d236-4363-a635-554aa467f143'},
{from: '1587331b-d10b-4aaf-a6f5-258613a079cb', to: '859458d1-d9e3-4095-b7d7-75b317341f2d'}
                            ]);