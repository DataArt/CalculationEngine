var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '6f267b97-eb81-4f5b-9b80-a5439f943855', label: 'B2\n-1.6472311463710965', color: '#31b0d5', title: 'Name: B2<br>Value: -1.6472311463710965<br>Type: CELL_WITH_FORMULA<br>Id: 6f267b97-eb81-4f5b-9b80-a5439f943855<br>Formula Expression: Formula String: ASINH(VALUE); Formula Values: ASINH(-2.5); Formula Ptg: -2.5 ASINH ; Ptgs: VALUE ASINH  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3c83e9ca'},
{id: 'b6072e35-815d-4c63-9011-43921e6f78ce', label: 'VALUE\n-2.5', color: '#31b0d5', title: 'Name: VALUE<br>Value: -2.5<br>Type: CONSTANT_VALUE<br>Id: b6072e35-815d-4c63-9011-43921e6f78ce<br>Formula Expression: Formula String: VALUE; Formula Values: -2.5; Formula Ptg: -2.5; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3c83e9ca'},
{id: 'fc83bac0-d833-42f3-b5d2-760338bc9b17', label: 'ASINH\n-1.6472311463710965', color: '#f0ad4e', title: 'Name: ASINH<br>Value: -1.6472311463710965<br>Type: FUNCTION<br>Id: fc83bac0-d833-42f3-b5d2-760338bc9b17<br>Formula Expression: Formula String: ASINH(VALUE); Formula Values: ASINH(-2.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3c83e9ca'},
{id: 'ffbf1d3c-8be3-47cc-9077-0ca90ff06421', label: 'B3\n3.4023066454805946', color: '#31b0d5', title: 'Name: B3<br>Value: 3.4023066454805946<br>Type: CELL_WITH_FORMULA<br>Id: ffbf1d3c-8be3-47cc-9077-0ca90ff06421<br>Formula Expression: Formula String: ASINH(VALUE); Formula Values: ASINH(15.0); Formula Ptg: 15.0 ASINH ; Ptgs: VALUE ASINH  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3c83e9ca'},
{id: '7b07f07d-8bd7-41ca-9ba4-bc3160ce6397', label: 'VALUE\n15.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 15.0<br>Type: CONSTANT_VALUE<br>Id: 7b07f07d-8bd7-41ca-9ba4-bc3160ce6397<br>Formula Expression: Formula String: VALUE; Formula Values: 15.0; Formula Ptg: 15.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3c83e9ca'},
{id: '53be835f-3003-4cc4-8d11-d12d14e2acb4', label: 'ASINH\n3.4023066454805946', color: '#f0ad4e', title: 'Name: ASINH<br>Value: 3.4023066454805946<br>Type: FUNCTION<br>Id: 53be835f-3003-4cc4-8d11-d12d14e2acb4<br>Formula Expression: Formula String: ASINH(VALUE); Formula Values: ASINH(15.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3c83e9ca'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '7b07f07d-8bd7-41ca-9ba4-bc3160ce6397', to: '53be835f-3003-4cc4-8d11-d12d14e2acb4'},
{from: '53be835f-3003-4cc4-8d11-d12d14e2acb4', to: 'ffbf1d3c-8be3-47cc-9077-0ca90ff06421'},
{from: 'fc83bac0-d833-42f3-b5d2-760338bc9b17', to: '6f267b97-eb81-4f5b-9b80-a5439f943855'},
{from: 'b6072e35-815d-4c63-9011-43921e6f78ce', to: 'fc83bac0-d833-42f3-b5d2-760338bc9b17'}
                            ]);