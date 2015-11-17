var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'bd2f817e-8ce5-4487-ba39-2f28bdef5dc7', label: 'A1\n#NUM!', color: '#31b0d5', title: 'Name: A1<br>Value: #NUM!<br>Type: CELL_WITH_FORMULA<br>Id: bd2f817e-8ce5-4487-ba39-2f28bdef5dc7<br>Formula Expression: Formula String: COMBIN(VALUE, VALUE); Formula Values: COMBIN(8.0, 6.0); Formula Ptg: 8.0, 6.0 COMBIN ; Ptgs: VALUE, VALUE COMBIN  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1511d157'},
{id: '278f3d42-77e6-460e-9e27-a52dcf59aa2d', label: 'VALUE\n8.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 8.0<br>Type: CONSTANT_VALUE<br>Id: 278f3d42-77e6-460e-9e27-a52dcf59aa2d<br>Formula Expression: Formula String: VALUE; Formula Values: 8.0; Formula Ptg: 8.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1511d157'},
{id: '57e4f6e8-69b1-4533-a70d-5f119616c1f9', label: 'VALUE\n6.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 6.0<br>Type: CONSTANT_VALUE<br>Id: 57e4f6e8-69b1-4533-a70d-5f119616c1f9<br>Formula Expression: Formula String: VALUE; Formula Values: 6.0; Formula Ptg: 6.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1511d157'},
{id: '601bef24-3ce7-430e-a5d9-cb5b54478284', label: 'COMBIN\n#NUM!', color: '#f0ad4e', title: 'Name: COMBIN<br>Value: #NUM!<br>Type: FUNCTION<br>Id: 601bef24-3ce7-430e-a5d9-cb5b54478284<br>Formula Expression: Formula String: COMBIN(VALUE, VALUE); Formula Values: COMBIN(8.0, 6.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1511d157'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '601bef24-3ce7-430e-a5d9-cb5b54478284', to: 'bd2f817e-8ce5-4487-ba39-2f28bdef5dc7'},
{from: '278f3d42-77e6-460e-9e27-a52dcf59aa2d', to: '601bef24-3ce7-430e-a5d9-cb5b54478284'},
{from: '57e4f6e8-69b1-4533-a70d-5f119616c1f9', to: '601bef24-3ce7-430e-a5d9-cb5b54478284'}
                            ]);