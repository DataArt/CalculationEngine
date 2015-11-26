var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '53431abc-c39c-4ecf-b16c-4e812ba7ca84', label: 'DEGREES\n6875.493541569879', color: '#f0ad4e', title: 'Name: DEGREES<br>Alias: null<br>Value: 6875.493541569879<br>Type: FUNCTION<br>Id: 53431abc-c39c-4ecf-b16c-4e812ba7ca84<br>Formula Expression: Formula String: DEGREES(B5); Formula Values: DEGREES(120.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4c4748bf'},
{id: '3dcf736d-2457-4cd4-8ff8-5555cad52a92', label: 'B5\n120.0', color: '#31b0d5', title: 'Name: B5<br>Alias: null<br>Value: 120.0<br>Type: CELL_WITH_VALUE<br>Id: 3dcf736d-2457-4cd4-8ff8-5555cad52a92<br>Formula Expression: Formula String: B5; Formula Values: 120.0; Formula Ptg: 120.0; Ptgs: B5 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4c4748bf'},
{id: '7995c92d-a245-40ca-b5e9-5aeac96f532d', label: 'E7\n6875.493541569879', color: '#31b0d5', title: 'Name: E7<br>Alias: null<br>Value: 6875.493541569879<br>Type: CELL_WITH_FORMULA<br>Id: 7995c92d-a245-40ca-b5e9-5aeac96f532d<br>Formula Expression: Formula String: DEGREES(B5); Formula Values: DEGREES(120.0); Formula Ptg: 120.0 DEGREES ; Ptgs: B5 DEGREES  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4c4748bf'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '3dcf736d-2457-4cd4-8ff8-5555cad52a92', to: '53431abc-c39c-4ecf-b16c-4e812ba7ca84'},
{from: '53431abc-c39c-4ecf-b16c-4e812ba7ca84', to: '7995c92d-a245-40ca-b5e9-5aeac96f532d'}
                            ]);