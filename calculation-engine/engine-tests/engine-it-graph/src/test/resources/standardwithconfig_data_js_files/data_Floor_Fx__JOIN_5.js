var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '7650c8a8-b5cb-4772-82f9-c7199f02507a', label: 'A1\n2.0', color: '#31b0d5', title: 'Name: A1<br>Value: 2.0<br>Type: CELL_WITH_FORMULA<br>Id: 7650c8a8-b5cb-4772-82f9-c7199f02507a<br>Formula Expression: Formula String: FLOOR(VALUE, VALUE); Formula Values: FLOOR(2.0, 3.7); Formula Ptg: 2.0, 3.7 FLOOR ; Ptgs: VALUE, VALUE FLOOR  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@108817cc'},
{id: 'ae2611c5-341a-4501-b214-c2a7fc28ec37', label: 'B2\n30.0', color: '#31b0d5', title: 'Name: B2<br>Value: 30.0<br>Type: CELL_WITH_FORMULA<br>Id: ae2611c5-341a-4501-b214-c2a7fc28ec37<br>Formula Expression: Formula String: FLOOR(VALUE, VALUE); Formula Values: FLOOR(3.0, 32.5678); Formula Ptg: 3.0, 32.5678 FLOOR ; Ptgs: VALUE, VALUE FLOOR  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@108817cc'},
{id: '6cc696ab-f6c4-421b-8332-5639a5aed9d5', label: 'VALUE\n32.5678', color: '#31b0d5', title: 'Name: VALUE<br>Value: 32.5678<br>Type: CONSTANT_VALUE<br>Id: 6cc696ab-f6c4-421b-8332-5639a5aed9d5<br>Formula Expression: Formula String: VALUE; Formula Values: 32.5678; Formula Ptg: 32.5678; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@108817cc'},
{id: 'b559bc0b-28d2-4578-8689-57c3c647e1ef', label: 'FLOOR\n2.0', color: '#f0ad4e', title: 'Name: FLOOR<br>Value: 2.0<br>Type: FUNCTION<br>Id: b559bc0b-28d2-4578-8689-57c3c647e1ef<br>Formula Expression: Formula String: FLOOR(VALUE, VALUE); Formula Values: FLOOR(2.0, 3.7); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@108817cc'},
{id: '646eb7e3-ed4f-4826-9d1f-f0a3eeaeca0b', label: 'FLOOR\n30.0', color: '#f0ad4e', title: 'Name: FLOOR<br>Value: 30.0<br>Type: FUNCTION<br>Id: 646eb7e3-ed4f-4826-9d1f-f0a3eeaeca0b<br>Formula Expression: Formula String: FLOOR(VALUE, VALUE); Formula Values: FLOOR(3.0, 32.5678); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@108817cc'},
{id: 'd06e5a78-d607-4244-acd9-0456f7eb6a1d', label: 'VALUE\n3.7', color: '#31b0d5', title: 'Name: VALUE<br>Value: 3.7<br>Type: CONSTANT_VALUE<br>Id: d06e5a78-d607-4244-acd9-0456f7eb6a1d<br>Formula Expression: Formula String: VALUE; Formula Values: 3.7; Formula Ptg: 3.7; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@108817cc'},
{id: '326d3ee2-551f-4562-9846-f1ad4cf49809', label: 'VALUE\n2.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 2.0<br>Type: CONSTANT_VALUE<br>Id: 326d3ee2-551f-4562-9846-f1ad4cf49809<br>Formula Expression: Formula String: VALUE; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@108817cc'},
{id: '3ef2e634-cb36-43be-a4a0-5c47b5eed62f', label: 'VALUE\n3.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 3.0<br>Type: CONSTANT_VALUE<br>Id: 3ef2e634-cb36-43be-a4a0-5c47b5eed62f<br>Formula Expression: Formula String: VALUE; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@108817cc'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '3ef2e634-cb36-43be-a4a0-5c47b5eed62f', to: '646eb7e3-ed4f-4826-9d1f-f0a3eeaeca0b'},
{from: '6cc696ab-f6c4-421b-8332-5639a5aed9d5', to: '646eb7e3-ed4f-4826-9d1f-f0a3eeaeca0b'},
{from: 'b559bc0b-28d2-4578-8689-57c3c647e1ef', to: '7650c8a8-b5cb-4772-82f9-c7199f02507a'},
{from: '646eb7e3-ed4f-4826-9d1f-f0a3eeaeca0b', to: 'ae2611c5-341a-4501-b214-c2a7fc28ec37'},
{from: '326d3ee2-551f-4562-9846-f1ad4cf49809', to: 'b559bc0b-28d2-4578-8689-57c3c647e1ef'},
{from: 'd06e5a78-d607-4244-acd9-0456f7eb6a1d', to: 'b559bc0b-28d2-4578-8689-57c3c647e1ef'}
                            ]);