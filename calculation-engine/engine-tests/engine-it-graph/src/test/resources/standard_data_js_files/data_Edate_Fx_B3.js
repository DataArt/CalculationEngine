var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '3e906931-7e70-4fc7-92c9-2a308cb90cd5', label: 'B3\n40589.0', color: '#31b0d5', title: 'Name: B3<br>Alias: null<br>Value: 40589.0<br>Type: CELL_WITH_FORMULA<br>Id: 3e906931-7e70-4fc7-92c9-2a308cb90cd5<br>Formula Expression: Formula String: EDATE(VALUE, A1); Formula Values: EDATE(1.0, 40558.0); Formula Ptg: 1.0, 40558.0 EDATE ; Ptgs: VALUE, A1 EDATE  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@c96a4ea'},
{id: '9292bbf3-c3fb-4ed8-ad58-c075c6fb8f69', label: 'EDATE\n40589.0', color: '#f0ad4e', title: 'Name: EDATE<br>Alias: null<br>Value: 40589.0<br>Type: FUNCTION<br>Id: 9292bbf3-c3fb-4ed8-ad58-c075c6fb8f69<br>Formula Expression: Formula String: EDATE(VALUE, A1); Formula Values: EDATE(1.0, 40558.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@c96a4ea'},
{id: '8243d079-dacd-48be-96cb-c01939b94561', label: 'A1\n40558.0', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: 40558.0<br>Type: CELL_WITH_VALUE<br>Id: 8243d079-dacd-48be-96cb-c01939b94561<br>Formula Expression: Formula String: A1; Formula Values: 40558.0; Formula Ptg: 40558.0; Ptgs: A1 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@c96a4ea'},
{id: '700e11a8-7249-4142-8885-5f6330448978', label: 'VALUE\n1.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 1.0<br>Type: CONSTANT_VALUE<br>Id: 700e11a8-7249-4142-8885-5f6330448978<br>Formula Expression: Formula String: VALUE; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@c96a4ea'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '700e11a8-7249-4142-8885-5f6330448978', to: '9292bbf3-c3fb-4ed8-ad58-c075c6fb8f69'},
{from: '9292bbf3-c3fb-4ed8-ad58-c075c6fb8f69', to: '3e906931-7e70-4fc7-92c9-2a308cb90cd5'},
{from: '8243d079-dacd-48be-96cb-c01939b94561', to: '9292bbf3-c3fb-4ed8-ad58-c075c6fb8f69'}
                            ]);