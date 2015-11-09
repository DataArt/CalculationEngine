var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '2bf2e3b0-1f86-4e8c-ba62-1e47c7ed7595', label: 'ASINH\n3.4023066454805946', color: '#f0ad4e', title: 'Name: ASINH<br>Value: 3.4023066454805946<br>Type: FUNCTION<br>Id: 2bf2e3b0-1f86-4e8c-ba62-1e47c7ed7595<br>Formula Expression: Formula String: ASINH(VALUE); Formula Values: ASINH(15.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2aa143ba'},
{id: '3975fe80-5f37-479d-ae81-d4b6cd6e3aa4', label: 'VALUE\n15.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 15.0<br>Type: CONSTANT_VALUE<br>Id: 3975fe80-5f37-479d-ae81-d4b6cd6e3aa4<br>Formula Expression: Formula String: VALUE; Formula Values: 15.0; Formula Ptg: 15.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2aa143ba'},
{id: 'f0cf55f2-931f-4e14-89a6-184e4fa72232', label: 'VALUE\n-2.5', color: '#31b0d5', title: 'Name: VALUE<br>Value: -2.5<br>Type: CONSTANT_VALUE<br>Id: f0cf55f2-931f-4e14-89a6-184e4fa72232<br>Formula Expression: Formula String: VALUE; Formula Values: -2.5; Formula Ptg: -2.5; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2aa143ba'},
{id: 'a1250060-17ff-4d8a-8b6b-0c1d02b75a58', label: 'B2\n-1.6472311463710965', color: '#31b0d5', title: 'Name: B2<br>Value: -1.6472311463710965<br>Type: CELL_WITH_FORMULA<br>Id: a1250060-17ff-4d8a-8b6b-0c1d02b75a58<br>Formula Expression: Formula String: ASINH(VALUE); Formula Values: ASINH(-2.5); Formula Ptg: -2.5 ASINH ; Ptgs: VALUE ASINH  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2aa143ba'},
{id: '0ed9f282-08c9-4776-8fc5-52e3e37abd02', label: 'B3\n3.4023066454805946', color: '#31b0d5', title: 'Name: B3<br>Value: 3.4023066454805946<br>Type: CELL_WITH_FORMULA<br>Id: 0ed9f282-08c9-4776-8fc5-52e3e37abd02<br>Formula Expression: Formula String: ASINH(VALUE); Formula Values: ASINH(15.0); Formula Ptg: 15.0 ASINH ; Ptgs: VALUE ASINH  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2aa143ba'},
{id: 'd3c8fa39-7ae8-4601-a16e-5c80b8c3230b', label: 'ASINH\n-1.6472311463710965', color: '#f0ad4e', title: 'Name: ASINH<br>Value: -1.6472311463710965<br>Type: FUNCTION<br>Id: d3c8fa39-7ae8-4601-a16e-5c80b8c3230b<br>Formula Expression: Formula String: ASINH(VALUE); Formula Values: ASINH(-2.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2aa143ba'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '2bf2e3b0-1f86-4e8c-ba62-1e47c7ed7595', to: '0ed9f282-08c9-4776-8fc5-52e3e37abd02'},
{from: 'd3c8fa39-7ae8-4601-a16e-5c80b8c3230b', to: 'a1250060-17ff-4d8a-8b6b-0c1d02b75a58'},
{from: 'f0cf55f2-931f-4e14-89a6-184e4fa72232', to: 'd3c8fa39-7ae8-4601-a16e-5c80b8c3230b'},
{from: '3975fe80-5f37-479d-ae81-d4b6cd6e3aa4', to: '2bf2e3b0-1f86-4e8c-ba62-1e47c7ed7595'}
                            ]);