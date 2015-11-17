var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '0ae81c5f-7f15-417d-99c8-d97de749f1d3', label: 'A2\n3.0', color: '#31b0d5', title: 'Name: A2<br>Value: 3.0<br>Type: CELL_WITH_FORMULA<br>Id: 0ae81c5f-7f15-417d-99c8-d97de749f1d3<br>Formula Expression: Formula String: MODELEXEC(VALUE, VALUE, VALUE); Formula Values: MODELEXEC(2.0, 1.0, DEF_1); Formula Ptg: 2.0, 1.0, DEF_1 MODELEXEC ; Ptgs: VALUE, VALUE, VALUE MODELEXEC  Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6b88ca8c'},
{id: '9c4d567f-cb5c-470c-a337-f32ac47eb04f', label: 'VALUE\nDEF_1', color: '#31b0d5', title: 'Name: VALUE<br>Value: DEF_1<br>Type: CONSTANT_VALUE<br>Id: 9c4d567f-cb5c-470c-a337-f32ac47eb04f<br>Formula Expression: Formula String: VALUE; Formula Values: DEF_1; Formula Ptg: DEF_1; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6b88ca8c'},
{id: '86229fab-313a-4dc3-9ad0-9652307b8c5d', label: 'VALUE\n1.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 1.0<br>Type: CONSTANT_VALUE<br>Id: 86229fab-313a-4dc3-9ad0-9652307b8c5d<br>Formula Expression: Formula String: VALUE; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6b88ca8c'},
{id: 'f1c41db4-a70b-4096-bd58-8573b4001006', label: 'VALUE\n2.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 2.0<br>Type: CONSTANT_VALUE<br>Id: f1c41db4-a70b-4096-bd58-8573b4001006<br>Formula Expression: Formula String: VALUE; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: VALUE Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6b88ca8c'},
{id: '0bf82dc3-fafa-44e0-86ac-c0d5a68188c9', label: 'MODELEXEC\n3.0', color: '#f0ad4e', title: 'Name: MODELEXEC<br>Value: 3.0<br>Type: FUNCTION<br>Id: 0bf82dc3-fafa-44e0-86ac-c0d5a68188c9<br>Formula Expression: Formula String: MODELEXEC(VALUE, VALUE, VALUE); Formula Values: MODELEXEC(2.0, 1.0, DEF_1); Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6b88ca8c'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '9c4d567f-cb5c-470c-a337-f32ac47eb04f', to: '0bf82dc3-fafa-44e0-86ac-c0d5a68188c9'},
{from: '0bf82dc3-fafa-44e0-86ac-c0d5a68188c9', to: '0ae81c5f-7f15-417d-99c8-d97de749f1d3'},
{from: 'f1c41db4-a70b-4096-bd58-8573b4001006', to: '0bf82dc3-fafa-44e0-86ac-c0d5a68188c9'},
{from: '86229fab-313a-4dc3-9ad0-9652307b8c5d', to: '0bf82dc3-fafa-44e0-86ac-c0d5a68188c9'}
                            ]);