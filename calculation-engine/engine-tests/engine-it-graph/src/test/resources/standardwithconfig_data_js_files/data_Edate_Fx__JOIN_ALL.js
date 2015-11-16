var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '9a76ecaf-4a97-486c-ad61-fb86a9a402df', label: 'EDATE\n40589.0', color: '#f0ad4e', title: 'Name: EDATE<br>Value: 40589.0<br>Type: FUNCTION<br>Id: 9a76ecaf-4a97-486c-ad61-fb86a9a402df<br>Formula Expression: Formula String: EDATE(VALUE, A1); Formula Values: EDATE(1.0, 40558.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@67ec8477'},
{id: 'be8c3aba-6be1-4df3-bdc5-bc5a5c830758', label: 'VALUE\n-1.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: -1.0<br>Type: CONSTANT_VALUE<br>Id: be8c3aba-6be1-4df3-bdc5-bc5a5c830758<br>Formula Expression: Formula String: VALUE; Formula Values: -1.0; Formula Ptg: -1.0; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@67ec8477'},
{id: 'e6a4e6c2-0f66-48ea-bb14-d2d36e2aabd9', label: 'EDATE\n40558.0', color: '#f0ad4e', title: 'Name: EDATE<br>Value: 40558.0<br>Type: FUNCTION<br>Id: e6a4e6c2-0f66-48ea-bb14-d2d36e2aabd9<br>Formula Expression: Formula String: EDATE(VALUE, EDATE(VALUE, A1)); Formula Values: EDATE(-1.0, EDATE(1.0, 40558.0)); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@67ec8477'},
{id: '85e6eee6-0ec5-46b2-b828-a80c2b510cf0', label: 'C5\n40558.0', color: '#31b0d5', title: 'Name: C5<br>Value: 40558.0<br>Type: CELL_WITH_FORMULA<br>Id: 85e6eee6-0ec5-46b2-b828-a80c2b510cf0<br>Formula Expression: Formula String: EDATE(VALUE, EDATE(VALUE, A1)); Formula Values: EDATE(-1.0, EDATE(1.0, 40558.0)); Formula Ptg: -1.0, 1.0, 40558.0 EDATE  EDATE ; Ptgs: VALUE, VALUE, A1 EDATE  EDATE  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@67ec8477'},
{id: 'be96643c-66a2-4010-944e-4fe0b9976e39', label: 'VALUE\n1.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 1.0<br>Type: CONSTANT_VALUE<br>Id: be96643c-66a2-4010-944e-4fe0b9976e39<br>Formula Expression: Formula String: VALUE; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@67ec8477'},
{id: '9eb7ee84-059a-4092-8d62-d076b43056b2', label: 'A1\n40558.0', color: '#31b0d5', title: 'Name: A1<br>Value: 40558.0<br>Type: CELL_WITH_VALUE<br>Id: 9eb7ee84-059a-4092-8d62-d076b43056b2<br>Formula Expression: Formula String: A1; Formula Values: 40558.0; Formula Ptg: 40558.0; Ptgs: A1 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@67ec8477'},
{id: '8c2eab1e-23ef-4052-92ad-0e3e0f05bd74', label: 'B3\n40589.0', color: '#31b0d5', title: 'Name: B3<br>Value: 40589.0<br>Type: CELL_WITH_FORMULA<br>Id: 8c2eab1e-23ef-4052-92ad-0e3e0f05bd74<br>Formula Expression: Formula String: EDATE(VALUE, A1); Formula Values: EDATE(1.0, 40558.0); Formula Ptg: 1.0, 40558.0 EDATE ; Ptgs: VALUE, A1 EDATE  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@67ec8477'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '9eb7ee84-059a-4092-8d62-d076b43056b2', to: '9a76ecaf-4a97-486c-ad61-fb86a9a402df'},
{from: '8c2eab1e-23ef-4052-92ad-0e3e0f05bd74', to: 'e6a4e6c2-0f66-48ea-bb14-d2d36e2aabd9'},
{from: 'be96643c-66a2-4010-944e-4fe0b9976e39', to: '9a76ecaf-4a97-486c-ad61-fb86a9a402df'},
{from: '9a76ecaf-4a97-486c-ad61-fb86a9a402df', to: '8c2eab1e-23ef-4052-92ad-0e3e0f05bd74'},
{from: 'be8c3aba-6be1-4df3-bdc5-bc5a5c830758', to: 'e6a4e6c2-0f66-48ea-bb14-d2d36e2aabd9'},
{from: 'e6a4e6c2-0f66-48ea-bb14-d2d36e2aabd9', to: '85e6eee6-0ec5-46b2-b828-a80c2b510cf0'}
                            ]);