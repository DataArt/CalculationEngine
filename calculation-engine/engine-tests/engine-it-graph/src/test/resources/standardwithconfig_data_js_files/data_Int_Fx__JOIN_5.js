var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '04d8a1c9-090f-4809-86f0-eb20bb293ca5', label: 'VALUE\n7.5', color: '#31b0d5', title: 'Name: VALUE<br>Value: 7.5<br>Type: CONSTANT_VALUE<br>Id: 04d8a1c9-090f-4809-86f0-eb20bb293ca5<br>Formula Expression: Formula String: VALUE; Formula Values: 7.5; Formula Ptg: 7.5; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@69235eea'},
{id: '9bb05a19-fd97-495c-a7cc-12f94f2ba51a', label: 'INT\n19.0', color: '#f0ad4e', title: 'Name: INT<br>Value: 19.0<br>Type: FUNCTION<br>Id: 9bb05a19-fd97-495c-a7cc-12f94f2ba51a<br>Formula Expression: Formula String: INT(A1); Formula Values: INT(19.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@69235eea'},
{id: '62059d0a-2f14-4ab7-bf40-a1095efd58d2', label: 'INT\n7.0', color: '#f0ad4e', title: 'Name: INT<br>Value: 7.0<br>Type: FUNCTION<br>Id: 62059d0a-2f14-4ab7-bf40-a1095efd58d2<br>Formula Expression: Formula String: INT(VALUE); Formula Values: INT(7.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@69235eea'},
{id: '36caf193-2b65-4697-9cbe-f7506ac7707b', label: 'A1\n19.5', color: '#31b0d5', title: 'Name: A1<br>Value: 19.5<br>Type: CELL_WITH_VALUE<br>Id: 36caf193-2b65-4697-9cbe-f7506ac7707b<br>Formula Expression: Formula String: A1; Formula Values: 19.5; Formula Ptg: 19.5; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@69235eea'},
{id: '01b46cc9-9f2e-4b76-8ab5-96328d9f7c21', label: 'B2\n7.0', color: '#31b0d5', title: 'Name: B2<br>Value: 7.0<br>Type: CELL_WITH_FORMULA<br>Id: 01b46cc9-9f2e-4b76-8ab5-96328d9f7c21<br>Formula Expression: Formula String: INT(VALUE); Formula Values: INT(7.5); Formula Ptg: 7.5 INT ; Ptgs: VALUE INT  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@69235eea'},
{id: '82630474-86c6-4398-8df7-e7071151067b', label: 'B3\n19.0', color: '#31b0d5', title: 'Name: B3<br>Value: 19.0<br>Type: CELL_WITH_FORMULA<br>Id: 82630474-86c6-4398-8df7-e7071151067b<br>Formula Expression: Formula String: INT(A1); Formula Values: INT(19.5); Formula Ptg: 19.5 INT ; Ptgs: A1 INT  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@69235eea'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '9bb05a19-fd97-495c-a7cc-12f94f2ba51a', to: '82630474-86c6-4398-8df7-e7071151067b'},
{from: '04d8a1c9-090f-4809-86f0-eb20bb293ca5', to: '62059d0a-2f14-4ab7-bf40-a1095efd58d2'},
{from: '62059d0a-2f14-4ab7-bf40-a1095efd58d2', to: '01b46cc9-9f2e-4b76-8ab5-96328d9f7c21'},
{from: '36caf193-2b65-4697-9cbe-f7506ac7707b', to: '9bb05a19-fd97-495c-a7cc-12f94f2ba51a'}
                            ]);