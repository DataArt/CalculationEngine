var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '2204fa72-102f-4abc-ba03-49c7e7245f1f', label: 'A1\n12.0', color: '#31b0d5', title: 'Name: A1<br>Value: 12.0<br>Type: CELL_WITH_FORMULA<br>Id: 2204fa72-102f-4abc-ba03-49c7e7245f1f<br>Formula Expression: Formula String: VALUE; Formula Values: 12.0; Formula Ptg: 12.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@34672fb'},
{id: '5ff43448-b6e0-4f56-9b98-93c6bb9ff23e', label: 'E5\n115.0', color: '#31b0d5', title: 'Name: E5<br>Value: 115.0<br>Type: CELL_WITH_FORMULA<br>Id: 5ff43448-b6e0-4f56-9b98-93c6bb9ff23e<br>Formula Expression: Formula String: SUM(E1:E4); Formula Values: SUM(5.0, 7.0, 57.0, 46.0); Formula Ptg: 5.0, 7.0, 57.0, 46.0 SUM ; Ptgs: E1:E4 SUM  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@34672fb'},
{id: 'b2ff4383-8778-44e4-96ee-da7bcdca13a8', label: 'E1:E4\n[[5.0], [7.0], [57.0], [46.0]]', color: '#31b0d5', title: 'Name: E1:E4<br>Value: [[5.0], [7.0], [57.0], [46.0]]<br>Type: RANGE<br>Id: b2ff4383-8778-44e4-96ee-da7bcdca13a8<br>Formula Expression: Formula String: E1:E4; Formula Values: [[5.0], [7.0], [57.0], [46.0]]; Formula Ptg: [[5.0], [7.0], [57.0], [46.0]]; Ptgs: E1:E4 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@34672fb'},
{id: 'ffeef2c4-171f-4537-aa4b-60f6a1fecdd8', label: 'SUM\n115.0', color: '#f0ad4e', title: 'Name: SUM<br>Value: 115.0<br>Type: FUNCTION<br>Id: ffeef2c4-171f-4537-aa4b-60f6a1fecdd8<br>Formula Expression: Formula String: SUM(E1:E4); Formula Values: SUM(5.0, 7.0, 57.0, 46.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@34672fb'},
{id: '4302e896-5314-4a28-9800-13280421f0b7', label: 'VALUE\n12.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 12.0<br>Type: CONSTANT_VALUE<br>Id: 4302e896-5314-4a28-9800-13280421f0b7<br>Formula Expression: Formula String: VALUE; Formula Values: 12.0; Formula Ptg: 12.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@34672fb'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'b2ff4383-8778-44e4-96ee-da7bcdca13a8', to: 'ffeef2c4-171f-4537-aa4b-60f6a1fecdd8'},
{from: '4302e896-5314-4a28-9800-13280421f0b7', to: '2204fa72-102f-4abc-ba03-49c7e7245f1f'},
{from: 'ffeef2c4-171f-4537-aa4b-60f6a1fecdd8', to: '5ff43448-b6e0-4f56-9b98-93c6bb9ff23e'}
                            ]);