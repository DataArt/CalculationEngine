var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'e9840563-81de-41e0-94f2-9daf60c79125', label: 'VALUE\n2.5', color: '#31b0d5', title: 'Name: VALUE<br>Value: 2.5<br>Type: CONSTANT_VALUE<br>Id: e9840563-81de-41e0-94f2-9daf60c79125<br>Formula Expression: Formula String: VALUE; Formula Values: 2.5; Formula Ptg: 2.5; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@729cd862'},
{id: '82f88ae6-8d27-44d7-8b3b-2f72c5df5050', label: 'B3\n4.0', color: '#31b0d5', title: 'Name: B3<br>Value: 4.0<br>Type: CELL_WITH_FORMULA<br>Id: 82f88ae6-8d27-44d7-8b3b-2f72c5df5050<br>Formula Expression: Formula String: EVEN(VALUE); Formula Values: EVEN(2.5); Formula Ptg: 2.5 EVEN ; Ptgs: VALUE EVEN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@729cd862'},
{id: '40e6130b-dc1e-4b66-864f-2df2edaea1ff', label: 'B2\n2.0', color: '#31b0d5', title: 'Name: B2<br>Value: 2.0<br>Type: CELL_WITH_FORMULA<br>Id: 40e6130b-dc1e-4b66-864f-2df2edaea1ff<br>Formula Expression: Formula String: EVEN(VALUE); Formula Values: EVEN(1.5); Formula Ptg: 1.5 EVEN ; Ptgs: VALUE EVEN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@729cd862'},
{id: '74c59dde-b67b-4966-8ce9-32865fc9fd9e', label: 'VALUE\n1.5', color: '#31b0d5', title: 'Name: VALUE<br>Value: 1.5<br>Type: CONSTANT_VALUE<br>Id: 74c59dde-b67b-4966-8ce9-32865fc9fd9e<br>Formula Expression: Formula String: VALUE; Formula Values: 1.5; Formula Ptg: 1.5; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@729cd862'},
{id: '738670b0-dfa4-43f4-8383-51ea65c98010', label: 'EVEN\n2.0', color: '#f0ad4e', title: 'Name: EVEN<br>Value: 2.0<br>Type: FUNCTION<br>Id: 738670b0-dfa4-43f4-8383-51ea65c98010<br>Formula Expression: Formula String: EVEN(VALUE); Formula Values: EVEN(1.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@729cd862'},
{id: 'e51d75af-ac23-4f80-8b37-3545b6b91d42', label: 'EVEN\n4.0', color: '#f0ad4e', title: 'Name: EVEN<br>Value: 4.0<br>Type: FUNCTION<br>Id: e51d75af-ac23-4f80-8b37-3545b6b91d42<br>Formula Expression: Formula String: EVEN(VALUE); Formula Values: EVEN(2.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@729cd862'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'e51d75af-ac23-4f80-8b37-3545b6b91d42', to: '82f88ae6-8d27-44d7-8b3b-2f72c5df5050'},
{from: '738670b0-dfa4-43f4-8383-51ea65c98010', to: '40e6130b-dc1e-4b66-864f-2df2edaea1ff'},
{from: 'e9840563-81de-41e0-94f2-9daf60c79125', to: 'e51d75af-ac23-4f80-8b37-3545b6b91d42'},
{from: '74c59dde-b67b-4966-8ce9-32865fc9fd9e', to: '738670b0-dfa4-43f4-8383-51ea65c98010'}
                            ]);