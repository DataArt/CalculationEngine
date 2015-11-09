var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '659fbb99-1463-4c27-adf9-10e6ae302e79', label: 'VALUE\n3.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 3.0<br>Type: CONSTANT_VALUE<br>Id: 659fbb99-1463-4c27-adf9-10e6ae302e79<br>Formula Expression: Formula String: VALUE; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@579846cc'},
{id: 'eddc9973-86a6-4abb-8cb6-3b6939f877c4', label: 'B2\n30.0', color: '#31b0d5', title: 'Name: B2<br>Value: 30.0<br>Type: CELL_WITH_FORMULA<br>Id: eddc9973-86a6-4abb-8cb6-3b6939f877c4<br>Formula Expression: Formula String: FLOOR(VALUE, VALUE); Formula Values: FLOOR(3.0, 32.5678); Formula Ptg: 3.0, 32.5678 FLOOR ; Ptgs: VALUE, VALUE FLOOR  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@579846cc'},
{id: 'b8acf0ac-213d-4553-babc-0e55fc776625', label: 'VALUE\n2.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 2.0<br>Type: CONSTANT_VALUE<br>Id: b8acf0ac-213d-4553-babc-0e55fc776625<br>Formula Expression: Formula String: VALUE; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@579846cc'},
{id: '6efffd25-763b-4ae4-8322-bbde23d3340b', label: 'VALUE\n32.5678', color: '#31b0d5', title: 'Name: VALUE<br>Value: 32.5678<br>Type: CONSTANT_VALUE<br>Id: 6efffd25-763b-4ae4-8322-bbde23d3340b<br>Formula Expression: Formula String: VALUE; Formula Values: 32.5678; Formula Ptg: 32.5678; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@579846cc'},
{id: 'f9e7664e-0ba9-4e45-bfc6-ae867cdf413d', label: 'VALUE\n3.7', color: '#31b0d5', title: 'Name: VALUE<br>Value: 3.7<br>Type: CONSTANT_VALUE<br>Id: f9e7664e-0ba9-4e45-bfc6-ae867cdf413d<br>Formula Expression: Formula String: VALUE; Formula Values: 3.7; Formula Ptg: 3.7; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@579846cc'},
{id: 'eb39f3e9-9fc7-469d-8275-dfdc165b0629', label: 'FLOOR\n30.0', color: '#f0ad4e', title: 'Name: FLOOR<br>Value: 30.0<br>Type: FUNCTION<br>Id: eb39f3e9-9fc7-469d-8275-dfdc165b0629<br>Formula Expression: Formula String: FLOOR(VALUE, VALUE); Formula Values: FLOOR(3.0, 32.5678); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@579846cc'},
{id: 'e8dfb7f7-0897-4cf1-a1c1-3cea97331a30', label: 'FLOOR\n2.0', color: '#f0ad4e', title: 'Name: FLOOR<br>Value: 2.0<br>Type: FUNCTION<br>Id: e8dfb7f7-0897-4cf1-a1c1-3cea97331a30<br>Formula Expression: Formula String: FLOOR(VALUE, VALUE); Formula Values: FLOOR(2.0, 3.7); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@579846cc'},
{id: 'f33e563e-7640-4cab-b51c-4c8c7406f7c6', label: 'A1\n2.0', color: '#31b0d5', title: 'Name: A1<br>Value: 2.0<br>Type: CELL_WITH_FORMULA<br>Id: f33e563e-7640-4cab-b51c-4c8c7406f7c6<br>Formula Expression: Formula String: FLOOR(VALUE, VALUE); Formula Values: FLOOR(2.0, 3.7); Formula Ptg: 2.0, 3.7 FLOOR ; Ptgs: VALUE, VALUE FLOOR  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@579846cc'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'e8dfb7f7-0897-4cf1-a1c1-3cea97331a30', to: 'f33e563e-7640-4cab-b51c-4c8c7406f7c6'},
{from: 'eb39f3e9-9fc7-469d-8275-dfdc165b0629', to: 'eddc9973-86a6-4abb-8cb6-3b6939f877c4'},
{from: '659fbb99-1463-4c27-adf9-10e6ae302e79', to: 'eb39f3e9-9fc7-469d-8275-dfdc165b0629'},
{from: '6efffd25-763b-4ae4-8322-bbde23d3340b', to: 'eb39f3e9-9fc7-469d-8275-dfdc165b0629'},
{from: 'b8acf0ac-213d-4553-babc-0e55fc776625', to: 'e8dfb7f7-0897-4cf1-a1c1-3cea97331a30'},
{from: 'f9e7664e-0ba9-4e45-bfc6-ae867cdf413d', to: 'e8dfb7f7-0897-4cf1-a1c1-3cea97331a30'}
                            ]);