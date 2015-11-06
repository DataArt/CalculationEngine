var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '8070d8c0-d1c1-4783-abaf-8f3813cff0de', label: 'INT\n7.0', color: '#f0ad4e', title: 'Name: INT<br>Value: 7.0<br>Type: FUNCTION<br>Id: 8070d8c0-d1c1-4783-abaf-8f3813cff0de<br>Formula Expression: Formula String: INT(VALUE); Formula Values: INT(7.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6c298dc'},
{id: 'd1eb8a2f-e671-490a-8988-ffb4d9c27dc2', label: 'VALUE\n7.5', color: '#31b0d5', title: 'Name: VALUE<br>Value: 7.5<br>Type: CONSTANT_VALUE<br>Id: d1eb8a2f-e671-490a-8988-ffb4d9c27dc2<br>Formula Expression: Formula String: VALUE; Formula Values: 7.5; Formula Ptg: 7.5; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6c298dc'},
{id: 'd6ad4f7d-95f9-4afb-b924-72425f6ab79d', label: 'B2\n7.0', color: '#31b0d5', title: 'Name: B2<br>Value: 7.0<br>Type: CELL_WITH_FORMULA<br>Id: d6ad4f7d-95f9-4afb-b924-72425f6ab79d<br>Formula Expression: Formula String: INT(VALUE); Formula Values: INT(7.5); Formula Ptg: 7.5 INT ; Ptgs: VALUE INT  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6c298dc'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'd1eb8a2f-e671-490a-8988-ffb4d9c27dc2', to: '8070d8c0-d1c1-4783-abaf-8f3813cff0de'},
{from: '8070d8c0-d1c1-4783-abaf-8f3813cff0de', to: 'd6ad4f7d-95f9-4afb-b924-72425f6ab79d'}
                            ]);