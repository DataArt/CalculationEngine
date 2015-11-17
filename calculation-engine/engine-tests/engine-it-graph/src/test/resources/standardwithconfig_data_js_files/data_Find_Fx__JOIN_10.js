var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '2516d33f-b1f9-40ba-a8a2-bb3d61524ce9', label: 'A5\n6.0', color: '#31b0d5', title: 'Name: A5<br>Value: 6.0<br>Type: CELL_WITH_FORMULA<br>Id: 2516d33f-b1f9-40ba-a8a2-bb3d61524ce9<br>Formula Expression: Formula String: FIND(A1, VALUE); Formula Values: FIND(Some text for test, text); Formula Ptg: Some text for test, text FIND ; Ptgs: A1, VALUE FIND  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@600e2000'},
{id: '2205c87b-21cf-4317-833a-8ef368fe8b45', label: 'FIND\n6.0', color: '#f0ad4e', title: 'Name: FIND<br>Value: 6.0<br>Type: FUNCTION<br>Id: 2205c87b-21cf-4317-833a-8ef368fe8b45<br>Formula Expression: Formula String: FIND(A1, VALUE); Formula Values: FIND(Some text for test, text); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@600e2000'},
{id: '0f681ee2-e161-48ee-8de8-67821da92518', label: 'VALUE\ntext', color: '#31b0d5', title: 'Name: VALUE<br>Value: text<br>Type: CONSTANT_VALUE<br>Id: 0f681ee2-e161-48ee-8de8-67821da92518<br>Formula Expression: Formula String: VALUE; Formula Values: text; Formula Ptg: text; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@600e2000'},
{id: '6a4a14ce-d883-4f1b-bf76-c1cfb8d3d104', label: 'A1\nSome text for test', color: '#31b0d5', title: 'Name: A1<br>Value: Some text for test<br>Type: CELL_WITH_VALUE<br>Id: 6a4a14ce-d883-4f1b-bf76-c1cfb8d3d104<br>Formula Expression: Formula String: A1; Formula Values: Some text for test; Formula Ptg: Some text for test; Ptgs: A1 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@600e2000'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '0f681ee2-e161-48ee-8de8-67821da92518', to: '2205c87b-21cf-4317-833a-8ef368fe8b45'},
{from: '6a4a14ce-d883-4f1b-bf76-c1cfb8d3d104', to: '2205c87b-21cf-4317-833a-8ef368fe8b45'},
{from: '2205c87b-21cf-4317-833a-8ef368fe8b45', to: '2516d33f-b1f9-40ba-a8a2-bb3d61524ce9'}
                            ]);