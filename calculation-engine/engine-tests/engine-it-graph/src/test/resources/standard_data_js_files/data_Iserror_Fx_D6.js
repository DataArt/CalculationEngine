var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '7f283446-159f-4a27-a47e-0bc934354138', label: 'D6\nFALSE', color: '#31b0d5', title: 'Name: D6<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 7f283446-159f-4a27-a47e-0bc934354138<br>Formula Expression: Formula String: ISERROR(C3); Formula Values: ISERROR(989.0); Formula Ptg: 989.0 ISERROR ; Ptgs: C3 ISERROR  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3d98d138'},
{id: 'de52b45d-e3f2-47aa-ac21-cdbf22573111', label: 'C3\n989.0', color: '#31b0d5', title: 'Name: C3<br>Value: 989.0<br>Type: CELL_WITH_VALUE<br>Id: de52b45d-e3f2-47aa-ac21-cdbf22573111<br>Formula Expression: Formula String: C3; Formula Values: 989.0; Formula Ptg: 989.0; Ptgs: C3 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3d98d138'},
{id: 'b076dbcd-67a5-4227-b860-535875a6f6c2', label: 'ISERROR\nFALSE', color: '#f0ad4e', title: 'Name: ISERROR<br>Value: FALSE<br>Type: FUNCTION<br>Id: b076dbcd-67a5-4227-b860-535875a6f6c2<br>Formula Expression: Formula String: ISERROR(C3); Formula Values: ISERROR(989.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3d98d138'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'de52b45d-e3f2-47aa-ac21-cdbf22573111', to: 'b076dbcd-67a5-4227-b860-535875a6f6c2'},
{from: 'b076dbcd-67a5-4227-b860-535875a6f6c2', to: '7f283446-159f-4a27-a47e-0bc934354138'}
                            ]);