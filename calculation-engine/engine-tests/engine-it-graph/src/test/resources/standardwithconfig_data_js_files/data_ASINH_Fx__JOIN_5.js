var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'd193d3bd-c8b5-4a86-b12f-94e5479a485d', label: 'ASINH\n3.4023066454805946', color: '#f0ad4e', title: 'Name: ASINH<br>Value: 3.4023066454805946<br>Type: FUNCTION<br>Id: d193d3bd-c8b5-4a86-b12f-94e5479a485d<br>Formula Expression: Formula String: ASINH(VALUE); Formula Values: ASINH(15.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2aa143ba'},
{id: '87e347cf-9bf4-4c23-9fb3-7ac9b343b0c6', label: 'VALUE\n15.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 15.0<br>Type: CONSTANT_VALUE<br>Id: 87e347cf-9bf4-4c23-9fb3-7ac9b343b0c6<br>Formula Expression: Formula String: VALUE; Formula Values: 15.0; Formula Ptg: 15.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2aa143ba'},
{id: 'deeb10b3-c185-4288-8619-ae73c3eccc6d', label: 'VALUE\n-2.5', color: '#31b0d5', title: 'Name: VALUE<br>Value: -2.5<br>Type: CONSTANT_VALUE<br>Id: deeb10b3-c185-4288-8619-ae73c3eccc6d<br>Formula Expression: Formula String: VALUE; Formula Values: -2.5; Formula Ptg: -2.5; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2aa143ba'},
{id: '293c7de7-80b9-4b91-9ea9-14225dbe8a13', label: 'B2\n-1.6472311463710965', color: '#31b0d5', title: 'Name: B2<br>Value: -1.6472311463710965<br>Type: CELL_WITH_FORMULA<br>Id: 293c7de7-80b9-4b91-9ea9-14225dbe8a13<br>Formula Expression: Formula String: ASINH(VALUE); Formula Values: ASINH(-2.5); Formula Ptg: -2.5 ASINH ; Ptgs: VALUE ASINH  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2aa143ba'},
{id: '5ae66183-e3e4-4c49-800f-1ff84aaf3827', label: 'B3\n3.4023066454805946', color: '#31b0d5', title: 'Name: B3<br>Value: 3.4023066454805946<br>Type: CELL_WITH_FORMULA<br>Id: 5ae66183-e3e4-4c49-800f-1ff84aaf3827<br>Formula Expression: Formula String: ASINH(VALUE); Formula Values: ASINH(15.0); Formula Ptg: 15.0 ASINH ; Ptgs: VALUE ASINH  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2aa143ba'},
{id: '9899b9ac-5078-4368-a8c5-1ad51450eb9e', label: 'ASINH\n-1.6472311463710965', color: '#f0ad4e', title: 'Name: ASINH<br>Value: -1.6472311463710965<br>Type: FUNCTION<br>Id: 9899b9ac-5078-4368-a8c5-1ad51450eb9e<br>Formula Expression: Formula String: ASINH(VALUE); Formula Values: ASINH(-2.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2aa143ba'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'd193d3bd-c8b5-4a86-b12f-94e5479a485d', to: '5ae66183-e3e4-4c49-800f-1ff84aaf3827'},
{from: '9899b9ac-5078-4368-a8c5-1ad51450eb9e', to: '293c7de7-80b9-4b91-9ea9-14225dbe8a13'},
{from: 'deeb10b3-c185-4288-8619-ae73c3eccc6d', to: '9899b9ac-5078-4368-a8c5-1ad51450eb9e'},
{from: '87e347cf-9bf4-4c23-9fb3-7ac9b343b0c6', to: 'd193d3bd-c8b5-4a86-b12f-94e5479a485d'}
                            ]);