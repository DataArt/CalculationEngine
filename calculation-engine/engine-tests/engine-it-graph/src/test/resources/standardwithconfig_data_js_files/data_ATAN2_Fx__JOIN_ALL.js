var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'b365c410-e91b-4eff-94e8-7f22be27e36d', label: 'VALUE\n-1.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: -1.0<br>Type: CONSTANT_VALUE<br>Id: b365c410-e91b-4eff-94e8-7f22be27e36d<br>Formula Expression: Formula String: VALUE; Formula Values: -1.0; Formula Ptg: -1.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@909217e'},
{id: '666aad9a-570f-4ad7-8ba3-fde3aa4ce126', label: 'ATAN2\n-2.356194490192345', color: '#f0ad4e', title: 'Name: ATAN2<br>Value: -2.356194490192345<br>Type: FUNCTION<br>Id: 666aad9a-570f-4ad7-8ba3-fde3aa4ce126<br>Formula Expression: Formula String: ATAN2(VALUE, VALUE); Formula Values: ATAN2(-1.0, -1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@909217e'},
{id: '3299398d-d10f-4803-a53d-1c60a4c5ed22', label: 'VALUE\n1.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 1.0<br>Type: CONSTANT_VALUE<br>Id: 3299398d-d10f-4803-a53d-1c60a4c5ed22<br>Formula Expression: Formula String: VALUE; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@909217e'},
{id: 'd1cd96b3-4423-4fb1-be5d-ec461d23d443', label: 'B3\n-2.356194490192345', color: '#31b0d5', title: 'Name: B3<br>Value: -2.356194490192345<br>Type: CELL_WITH_FORMULA<br>Id: d1cd96b3-4423-4fb1-be5d-ec461d23d443<br>Formula Expression: Formula String: ATAN2(VALUE, VALUE); Formula Values: ATAN2(-1.0, -1.0); Formula Ptg: -1.0, -1.0 ATAN2 ; Ptgs: VALUE, VALUE ATAN2  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@909217e'},
{id: '84b83e29-2532-4616-80e9-553c7c03c870', label: 'VALUE\n1.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 1.0<br>Type: CONSTANT_VALUE<br>Id: 84b83e29-2532-4616-80e9-553c7c03c870<br>Formula Expression: Formula String: VALUE; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@909217e'},
{id: '8f4ad13c-b034-4dd8-af4e-5e3d1829594d', label: 'VALUE\n-1.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: -1.0<br>Type: CONSTANT_VALUE<br>Id: 8f4ad13c-b034-4dd8-af4e-5e3d1829594d<br>Formula Expression: Formula String: VALUE; Formula Values: -1.0; Formula Ptg: -1.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@909217e'},
{id: '1d31417c-c165-4de0-9520-c3cfb7aacf12', label: 'ATAN2\n0.7853981633974483', color: '#f0ad4e', title: 'Name: ATAN2<br>Value: 0.7853981633974483<br>Type: FUNCTION<br>Id: 1d31417c-c165-4de0-9520-c3cfb7aacf12<br>Formula Expression: Formula String: ATAN2(VALUE, VALUE); Formula Values: ATAN2(1.0, 1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@909217e'},
{id: 'd285b593-dd52-42fd-b13c-301d4786d597', label: 'B2\n0.7853981633974483', color: '#31b0d5', title: 'Name: B2<br>Value: 0.7853981633974483<br>Type: CELL_WITH_FORMULA<br>Id: d285b593-dd52-42fd-b13c-301d4786d597<br>Formula Expression: Formula String: ATAN2(VALUE, VALUE); Formula Values: ATAN2(1.0, 1.0); Formula Ptg: 1.0, 1.0 ATAN2 ; Ptgs: VALUE, VALUE ATAN2  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@909217e'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '8f4ad13c-b034-4dd8-af4e-5e3d1829594d', to: '666aad9a-570f-4ad7-8ba3-fde3aa4ce126'},
{from: '3299398d-d10f-4803-a53d-1c60a4c5ed22', to: '1d31417c-c165-4de0-9520-c3cfb7aacf12'},
{from: '84b83e29-2532-4616-80e9-553c7c03c870', to: '1d31417c-c165-4de0-9520-c3cfb7aacf12'},
{from: '1d31417c-c165-4de0-9520-c3cfb7aacf12', to: 'd285b593-dd52-42fd-b13c-301d4786d597'},
{from: '666aad9a-570f-4ad7-8ba3-fde3aa4ce126', to: 'd1cd96b3-4423-4fb1-be5d-ec461d23d443'},
{from: 'b365c410-e91b-4eff-94e8-7f22be27e36d', to: '666aad9a-570f-4ad7-8ba3-fde3aa4ce126'}
                            ]);