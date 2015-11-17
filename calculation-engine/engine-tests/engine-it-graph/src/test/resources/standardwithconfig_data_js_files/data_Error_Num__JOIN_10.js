var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '6fef2f7b-b979-493b-bded-597533b1c338', label: 'VALUE\n6.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 6.0<br>Type: CONSTANT_VALUE<br>Id: 6fef2f7b-b979-493b-bded-597533b1c338<br>Formula Expression: Formula String: VALUE; Formula Values: 6.0; Formula Ptg: 6.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@434b2e0c'},
{id: '3d785281-f1e3-4fbf-bc7f-f816a0a33589', label: 'COMBIN\n#NUM!', color: '#f0ad4e', title: 'Name: COMBIN<br>Value: #NUM!<br>Type: FUNCTION<br>Id: 3d785281-f1e3-4fbf-bc7f-f816a0a33589<br>Formula Expression: Formula String: COMBIN(VALUE, VALUE); Formula Values: COMBIN(8.0, 6.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@434b2e0c'},
{id: 'f0cf9761-8434-4281-aa63-c8d7c3a866c2', label: 'VALUE\n8.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 8.0<br>Type: CONSTANT_VALUE<br>Id: f0cf9761-8434-4281-aa63-c8d7c3a866c2<br>Formula Expression: Formula String: VALUE; Formula Values: 8.0; Formula Ptg: 8.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@434b2e0c'},
{id: 'f5cefebd-b0a2-4e38-b6cc-ce7a699b0715', label: 'A1\n#NUM!', color: '#31b0d5', title: 'Name: A1<br>Value: #NUM!<br>Type: CELL_WITH_FORMULA<br>Id: f5cefebd-b0a2-4e38-b6cc-ce7a699b0715<br>Formula Expression: Formula String: COMBIN(VALUE, VALUE); Formula Values: COMBIN(8.0, 6.0); Formula Ptg: 8.0, 6.0 COMBIN ; Ptgs: VALUE, VALUE COMBIN  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@434b2e0c'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '6fef2f7b-b979-493b-bded-597533b1c338', to: '3d785281-f1e3-4fbf-bc7f-f816a0a33589'},
{from: 'f0cf9761-8434-4281-aa63-c8d7c3a866c2', to: '3d785281-f1e3-4fbf-bc7f-f816a0a33589'},
{from: '3d785281-f1e3-4fbf-bc7f-f816a0a33589', to: 'f5cefebd-b0a2-4e38-b6cc-ce7a699b0715'}
                            ]);