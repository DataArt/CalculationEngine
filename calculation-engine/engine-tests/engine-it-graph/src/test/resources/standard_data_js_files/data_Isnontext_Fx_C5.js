var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'edc0b2be-8679-4bcd-8590-6a58b176fada', label: 'C5\nTRUE', color: '#31b0d5', title: 'Name: C5<br>Alias: null<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: edc0b2be-8679-4bcd-8590-6a58b176fada<br>Formula Expression: Formula String: ISNONTEXT(A1); Formula Values: ISNONTEXT(1.0); Formula Ptg: 1.0 ISNONTEXT ; Ptgs: A1 ISNONTEXT  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6fc29daa'},
{id: '324f7f53-ebc9-4422-b11b-33c37e72a1e3', label: 'ISNONTEXT\nTRUE', color: '#f0ad4e', title: 'Name: ISNONTEXT<br>Alias: null<br>Value: TRUE<br>Type: FUNCTION<br>Id: 324f7f53-ebc9-4422-b11b-33c37e72a1e3<br>Formula Expression: Formula String: ISNONTEXT(A1); Formula Values: ISNONTEXT(1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6fc29daa'},
{id: '1fd7de93-2f0c-4eb6-8298-f39801e77543', label: 'A1\n1.0', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: 1.0<br>Type: CELL_WITH_VALUE<br>Id: 1fd7de93-2f0c-4eb6-8298-f39801e77543<br>Formula Expression: Formula String: A1; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6fc29daa'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '1fd7de93-2f0c-4eb6-8298-f39801e77543', to: '324f7f53-ebc9-4422-b11b-33c37e72a1e3'},
{from: '324f7f53-ebc9-4422-b11b-33c37e72a1e3', to: 'edc0b2be-8679-4bcd-8590-6a58b176fada'}
                            ]);