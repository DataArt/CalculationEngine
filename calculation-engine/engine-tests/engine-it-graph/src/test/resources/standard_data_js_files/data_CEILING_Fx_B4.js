var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'eb305855-4a09-4202-a3c4-738c6a19acac', label: 'CEILING\n2.0', color: '#f0ad4e', title: 'Name: CEILING<br>Value: 2.0<br>Type: FUNCTION<br>Id: eb305855-4a09-4202-a3c4-738c6a19acac<br>Formula Expression: Formula String: CEILING(VALUE, VALUE); Formula Values: CEILING(2.0, 0.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4bd31064'},
{id: 'd402212b-d5ae-45b8-9ea0-ac685fffb116', label: 'B4\n2.0', color: '#31b0d5', title: 'Name: B4<br>Value: 2.0<br>Type: CELL_WITH_FORMULA<br>Id: d402212b-d5ae-45b8-9ea0-ac685fffb116<br>Formula Expression: Formula String: CEILING(VALUE, VALUE); Formula Values: CEILING(2.0, 0.5); Formula Ptg: 2.0, 0.5 CEILING ; Ptgs: VALUE, VALUE CEILING  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4bd31064'},
{id: 'b8076da2-5293-4c84-abb4-21e1d9cd94d0', label: 'VALUE\n0.5', color: '#31b0d5', title: 'Name: VALUE<br>Value: 0.5<br>Type: CONSTANT_VALUE<br>Id: b8076da2-5293-4c84-abb4-21e1d9cd94d0<br>Formula Expression: Formula String: VALUE; Formula Values: 0.5; Formula Ptg: 0.5; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4bd31064'},
{id: 'c4c2b3ff-1a77-464a-8d10-b842f08f2ee6', label: 'VALUE\n2.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 2.0<br>Type: CONSTANT_VALUE<br>Id: c4c2b3ff-1a77-464a-8d10-b842f08f2ee6<br>Formula Expression: Formula String: VALUE; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4bd31064'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'c4c2b3ff-1a77-464a-8d10-b842f08f2ee6', to: 'eb305855-4a09-4202-a3c4-738c6a19acac'},
{from: 'eb305855-4a09-4202-a3c4-738c6a19acac', to: 'd402212b-d5ae-45b8-9ea0-ac685fffb116'},
{from: 'b8076da2-5293-4c84-abb4-21e1d9cd94d0', to: 'eb305855-4a09-4202-a3c4-738c6a19acac'}
                            ]);