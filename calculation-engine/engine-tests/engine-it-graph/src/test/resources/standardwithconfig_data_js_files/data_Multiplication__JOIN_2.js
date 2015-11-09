var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'cd193cd7-dd88-48af-9189-c423c1978d29', label: 'A2\n7.0', color: '#31b0d5', title: 'Name: A2<br>Value: 7.0<br>Type: CELL_WITH_VALUE<br>Id: cd193cd7-dd88-48af-9189-c423c1978d29<br>Formula Expression: Formula String: A2; Formula Values: 7.0; Formula Ptg: 7.0; Ptgs: A2 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7be94cd6'},
{id: 'a19acbbd-3de1-4854-bb8f-f235f1c4819d', label: '*\n35.0', color: '#f0ad4e', title: 'Name: *<br>Value: 35.0<br>Type: OPERATOR<br>Id: a19acbbd-3de1-4854-bb8f-f235f1c4819d<br>Formula Expression: Formula String: A1 * A2; Formula Values: 5.0 * 7.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7be94cd6'},
{id: '4fd0e9dd-54e4-4a5f-a63d-b7797658017f', label: 'A1\n5.0', color: '#31b0d5', title: 'Name: A1<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 4fd0e9dd-54e4-4a5f-a63d-b7797658017f<br>Formula Expression: Formula String: A1; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7be94cd6'},
{id: '07776535-1472-4627-983a-ee0e025419c1', label: 'A3\n35.0', color: '#31b0d5', title: 'Name: A3<br>Value: 35.0<br>Type: CELL_WITH_FORMULA<br>Id: 07776535-1472-4627-983a-ee0e025419c1<br>Formula Expression: Formula String: A1 * A2; Formula Values: 5.0 * 7.0; Formula Ptg: 5.0 7.0 *; Ptgs: A1 A2 * Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7be94cd6'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '4fd0e9dd-54e4-4a5f-a63d-b7797658017f', to: 'a19acbbd-3de1-4854-bb8f-f235f1c4819d'},
{from: 'cd193cd7-dd88-48af-9189-c423c1978d29', to: 'a19acbbd-3de1-4854-bb8f-f235f1c4819d'},
{from: 'a19acbbd-3de1-4854-bb8f-f235f1c4819d', to: '07776535-1472-4627-983a-ee0e025419c1'}
                            ]);