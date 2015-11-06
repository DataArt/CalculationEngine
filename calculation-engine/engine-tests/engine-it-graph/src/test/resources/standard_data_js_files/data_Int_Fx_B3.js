var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'e60207a4-a27c-4f6b-bc6f-fc62b628d336', label: 'A1\n19.5', color: '#31b0d5', title: 'Name: A1<br>Value: 19.5<br>Type: CELL_WITH_VALUE<br>Id: e60207a4-a27c-4f6b-bc6f-fc62b628d336<br>Formula Expression: Formula String: A1; Formula Values: 19.5; Formula Ptg: 19.5; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@56f71edb'},
{id: '7e5a7920-8e48-4328-8811-bdbe11f9213a', label: 'INT\n19.0', color: '#f0ad4e', title: 'Name: INT<br>Value: 19.0<br>Type: FUNCTION<br>Id: 7e5a7920-8e48-4328-8811-bdbe11f9213a<br>Formula Expression: Formula String: INT(A1); Formula Values: INT(19.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@56f71edb'},
{id: 'ab3181b5-7762-41ed-a128-28e81dc245cf', label: 'B3\n19.0', color: '#31b0d5', title: 'Name: B3<br>Value: 19.0<br>Type: CELL_WITH_FORMULA<br>Id: ab3181b5-7762-41ed-a128-28e81dc245cf<br>Formula Expression: Formula String: INT(A1); Formula Values: INT(19.5); Formula Ptg: 19.5 INT ; Ptgs: A1 INT  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@56f71edb'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '7e5a7920-8e48-4328-8811-bdbe11f9213a', to: 'ab3181b5-7762-41ed-a128-28e81dc245cf'},
{from: 'e60207a4-a27c-4f6b-bc6f-fc62b628d336', to: '7e5a7920-8e48-4328-8811-bdbe11f9213a'}
                            ]);