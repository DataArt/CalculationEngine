var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'b1a877f3-b862-462e-8e20-7ed06a3b5488', label: 'D8\n#NAME?', color: '#31b0d5', title: 'Name: D8<br>Value: #NAME?<br>Type: CELL_WITH_FORMULA<br>Id: b1a877f3-b862-462e-8e20-7ed06a3b5488<br>Formula Expression: Formula String: ISERROR(D3); Formula Values: ISERROR(#NAME?); Formula Ptg: #NAME? ISERROR ; Ptgs: D3 ISERROR  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3b2cf7ab'},
{id: 'd4502ce3-283a-4fe1-95ca-c591164d5fef', label: 'ISERROR\n#NAME?', color: '#f0ad4e', title: 'Name: ISERROR<br>Value: #NAME?<br>Type: FUNCTION<br>Id: d4502ce3-283a-4fe1-95ca-c591164d5fef<br>Formula Expression: Formula String: ISERROR(D3); Formula Values: ISERROR(#NAME?); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3b2cf7ab'},
{id: 'e6fe0d47-f2e1-4309-96ae-f5cf067bf6fa', label: 'D3\n#NAME?', color: '#31b0d5', title: 'Name: D3<br>Value: #NAME?<br>Type: CELL_WITH_VALUE<br>Id: e6fe0d47-f2e1-4309-96ae-f5cf067bf6fa<br>Formula Expression: Formula String: D3; Formula Values: #NAME?; Formula Ptg: #NAME?; Ptgs: D3 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3b2cf7ab'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'e6fe0d47-f2e1-4309-96ae-f5cf067bf6fa', to: 'd4502ce3-283a-4fe1-95ca-c591164d5fef'},
{from: 'd4502ce3-283a-4fe1-95ca-c591164d5fef', to: 'b1a877f3-b862-462e-8e20-7ed06a3b5488'}
                            ]);