var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '9cdbc25b-3393-448e-836f-030190125a3d', label: 'B3\n40589.0', color: '#31b0d5', title: 'Name: B3<br>Value: 40589.0<br>Type: CELL_WITH_FORMULA<br>Id: 9cdbc25b-3393-448e-836f-030190125a3d<br>Formula Expression: Formula String: EDATE(VALUE, A1); Formula Values: EDATE(1.0, 40558.0); Formula Ptg: 1.0, 40558.0 EDATE ; Ptgs: VALUE, A1 EDATE  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3a43d133'},
{id: 'a3cbe3c6-f7e8-4255-9785-889c8fa154d3', label: 'EDATE\n40589.0', color: '#f0ad4e', title: 'Name: EDATE<br>Value: 40589.0<br>Type: FUNCTION<br>Id: a3cbe3c6-f7e8-4255-9785-889c8fa154d3<br>Formula Expression: Formula String: EDATE(VALUE, A1); Formula Values: EDATE(1.0, 40558.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3a43d133'},
{id: '1fea8370-56f2-4bb7-a813-b37aabb94518', label: 'A1\n40558.0', color: '#31b0d5', title: 'Name: A1<br>Value: 40558.0<br>Type: CELL_WITH_VALUE<br>Id: 1fea8370-56f2-4bb7-a813-b37aabb94518<br>Formula Expression: Formula String: A1; Formula Values: 40558.0; Formula Ptg: 40558.0; Ptgs: A1 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3a43d133'},
{id: '5436252c-8f57-47c6-a88a-56dd3caabbee', label: 'VALUE\n1.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 1.0<br>Type: CONSTANT_VALUE<br>Id: 5436252c-8f57-47c6-a88a-56dd3caabbee<br>Formula Expression: Formula String: VALUE; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3a43d133'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'a3cbe3c6-f7e8-4255-9785-889c8fa154d3', to: '9cdbc25b-3393-448e-836f-030190125a3d'},
{from: '1fea8370-56f2-4bb7-a813-b37aabb94518', to: 'a3cbe3c6-f7e8-4255-9785-889c8fa154d3'},
{from: '5436252c-8f57-47c6-a88a-56dd3caabbee', to: 'a3cbe3c6-f7e8-4255-9785-889c8fa154d3'}
                            ]);