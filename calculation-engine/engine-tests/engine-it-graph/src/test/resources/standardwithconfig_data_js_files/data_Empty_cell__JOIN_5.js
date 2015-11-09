var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '157eb868-6139-43f4-9ad1-e63d57f8285d', label: 'A1\n12.0', color: '#31b0d5', title: 'Name: A1<br>Value: 12.0<br>Type: CELL_WITH_FORMULA<br>Id: 157eb868-6139-43f4-9ad1-e63d57f8285d<br>Formula Expression: Formula String: VALUE; Formula Values: 12.0; Formula Ptg: 12.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@34672fb'},
{id: '84a0ec66-315d-416d-803d-fea626dead2d', label: 'E5\n115.0', color: '#31b0d5', title: 'Name: E5<br>Value: 115.0<br>Type: CELL_WITH_FORMULA<br>Id: 84a0ec66-315d-416d-803d-fea626dead2d<br>Formula Expression: Formula String: SUM(E1:E4); Formula Values: SUM(5.0, 7.0, 57.0, 46.0); Formula Ptg: 5.0, 7.0, 57.0, 46.0 SUM ; Ptgs: E1:E4 SUM  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@34672fb'},
{id: 'bbda97b6-76b4-4706-ada8-b43f5ac6d737', label: 'E1:E4\n[[5.0], [7.0], [57.0], [46.0]]', color: '#31b0d5', title: 'Name: E1:E4<br>Value: [[5.0], [7.0], [57.0], [46.0]]<br>Type: RANGE<br>Id: bbda97b6-76b4-4706-ada8-b43f5ac6d737<br>Formula Expression: Formula String: E1:E4; Formula Values: [[5.0], [7.0], [57.0], [46.0]]; Formula Ptg: [[5.0], [7.0], [57.0], [46.0]]; Ptgs: E1:E4 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@34672fb'},
{id: 'abf81da1-9b98-49df-b531-afd32d3695d3', label: 'SUM\n115.0', color: '#f0ad4e', title: 'Name: SUM<br>Value: 115.0<br>Type: FUNCTION<br>Id: abf81da1-9b98-49df-b531-afd32d3695d3<br>Formula Expression: Formula String: SUM(E1:E4); Formula Values: SUM(5.0, 7.0, 57.0, 46.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@34672fb'},
{id: '0d7c02e7-4ead-424d-98c8-4b4f8a07a27d', label: 'VALUE\n12.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 12.0<br>Type: CONSTANT_VALUE<br>Id: 0d7c02e7-4ead-424d-98c8-4b4f8a07a27d<br>Formula Expression: Formula String: VALUE; Formula Values: 12.0; Formula Ptg: 12.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@34672fb'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'bbda97b6-76b4-4706-ada8-b43f5ac6d737', to: 'abf81da1-9b98-49df-b531-afd32d3695d3'},
{from: '0d7c02e7-4ead-424d-98c8-4b4f8a07a27d', to: '157eb868-6139-43f4-9ad1-e63d57f8285d'},
{from: 'abf81da1-9b98-49df-b531-afd32d3695d3', to: '84a0ec66-315d-416d-803d-fea626dead2d'}
                            ]);