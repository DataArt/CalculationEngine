var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'dc96cd5d-1aad-4b1a-84f6-0bbd3bd6e3a0', label: 'B2\n-1.6472311463710965', color: '#31b0d5', title: 'Name: B2<br>Value: -1.6472311463710965<br>Type: CELL_WITH_FORMULA<br>Id: dc96cd5d-1aad-4b1a-84f6-0bbd3bd6e3a0<br>Formula Expression: Formula String: ASINH(VALUE); Formula Values: ASINH(-2.5); Formula Ptg: -2.5 ASINH ; Ptgs: VALUE ASINH  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3c83e9ca'},
{id: '217f4a00-45c9-4360-9740-2717b873cf8b', label: 'VALUE\n-2.5', color: '#31b0d5', title: 'Name: VALUE<br>Value: -2.5<br>Type: CONSTANT_VALUE<br>Id: 217f4a00-45c9-4360-9740-2717b873cf8b<br>Formula Expression: Formula String: VALUE; Formula Values: -2.5; Formula Ptg: -2.5; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3c83e9ca'},
{id: '75360ce2-4281-424f-a2b8-6d2cd9376c9f', label: 'ASINH\n-1.6472311463710965', color: '#f0ad4e', title: 'Name: ASINH<br>Value: -1.6472311463710965<br>Type: FUNCTION<br>Id: 75360ce2-4281-424f-a2b8-6d2cd9376c9f<br>Formula Expression: Formula String: ASINH(VALUE); Formula Values: ASINH(-2.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3c83e9ca'},
{id: '222a30b4-ce18-4d48-9478-90860a2c5dd4', label: 'B3\n3.4023066454805946', color: '#31b0d5', title: 'Name: B3<br>Value: 3.4023066454805946<br>Type: CELL_WITH_FORMULA<br>Id: 222a30b4-ce18-4d48-9478-90860a2c5dd4<br>Formula Expression: Formula String: ASINH(VALUE); Formula Values: ASINH(15.0); Formula Ptg: 15.0 ASINH ; Ptgs: VALUE ASINH  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3c83e9ca'},
{id: '8f6d08dc-5677-4a23-a088-c9c613c86649', label: 'VALUE\n15.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 15.0<br>Type: CONSTANT_VALUE<br>Id: 8f6d08dc-5677-4a23-a088-c9c613c86649<br>Formula Expression: Formula String: VALUE; Formula Values: 15.0; Formula Ptg: 15.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3c83e9ca'},
{id: 'e4800e0d-03fc-4088-8f3a-207fbb9cd5b4', label: 'ASINH\n3.4023066454805946', color: '#f0ad4e', title: 'Name: ASINH<br>Value: 3.4023066454805946<br>Type: FUNCTION<br>Id: e4800e0d-03fc-4088-8f3a-207fbb9cd5b4<br>Formula Expression: Formula String: ASINH(VALUE); Formula Values: ASINH(15.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3c83e9ca'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '8f6d08dc-5677-4a23-a088-c9c613c86649', to: 'e4800e0d-03fc-4088-8f3a-207fbb9cd5b4'},
{from: 'e4800e0d-03fc-4088-8f3a-207fbb9cd5b4', to: '222a30b4-ce18-4d48-9478-90860a2c5dd4'},
{from: '75360ce2-4281-424f-a2b8-6d2cd9376c9f', to: 'dc96cd5d-1aad-4b1a-84f6-0bbd3bd6e3a0'},
{from: '217f4a00-45c9-4360-9740-2717b873cf8b', to: '75360ce2-4281-424f-a2b8-6d2cd9376c9f'}
                            ]);