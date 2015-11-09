var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'fcbdc508-ad04-4ed2-a821-26355d63e968', label: 'E6\n#DIV/0!', color: '#31b0d5', title: 'Name: E6<br>Value: #DIV/0!<br>Type: CELL_WITH_FORMULA<br>Id: fcbdc508-ad04-4ed2-a821-26355d63e968<br>Formula Expression: Formula String: C5 / C4; Formula Values: 67.0 / 0.0; Formula Ptg: 67.0 0.0 /; Ptgs: C5 C4 / Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5444c63f'},
{id: '8bdd78e3-41fe-4bde-ad24-8f1021df82f9', label: '/\n#DIV/0!', color: '#f0ad4e', title: 'Name: /<br>Value: #DIV/0!<br>Type: OPERATOR<br>Id: 8bdd78e3-41fe-4bde-ad24-8f1021df82f9<br>Formula Expression: Formula String: C5 / C4; Formula Values: 67.0 / 0.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5444c63f'},
{id: 'd1fc0e25-3c38-4258-a51a-9d77a523682d', label: 'C5\n67.0', color: '#31b0d5', title: 'Name: C5<br>Value: 67.0<br>Type: CELL_WITH_VALUE<br>Id: d1fc0e25-3c38-4258-a51a-9d77a523682d<br>Formula Expression: Formula String: C5; Formula Values: 67.0; Formula Ptg: 67.0; Ptgs: C5 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5444c63f'},
{id: '2de3e381-0458-439f-82f0-2ad70533bb0e', label: 'C4\n0.0', color: '#31b0d5', title: 'Name: C4<br>Value: 0.0<br>Type: CELL_WITH_VALUE<br>Id: 2de3e381-0458-439f-82f0-2ad70533bb0e<br>Formula Expression: Formula String: C4; Formula Values: 0.0; Formula Ptg: 0.0; Ptgs: C4 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5444c63f'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'd1fc0e25-3c38-4258-a51a-9d77a523682d', to: '8bdd78e3-41fe-4bde-ad24-8f1021df82f9'},
{from: '2de3e381-0458-439f-82f0-2ad70533bb0e', to: '8bdd78e3-41fe-4bde-ad24-8f1021df82f9'},
{from: '8bdd78e3-41fe-4bde-ad24-8f1021df82f9', to: 'fcbdc508-ad04-4ed2-a821-26355d63e968'}
                            ]);