var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '0ccdad39-d672-4c78-8c90-e119b645328c', label: '/\n5.0', color: '#f0ad4e', title: 'Name: /<br>Value: 5.0<br>Type: OPERATOR<br>Id: 0ccdad39-d672-4c78-8c90-e119b645328c<br>Formula Expression: Formula String: SUM(D1:F1) / G1; Formula Values: SUM(5.0, 5.0, 5.0) / 3.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@18463720'},
{id: 'af2de55b-110d-46a4-aa9d-fc7c02fe7394', label: 'D1:F1\n[[5.0, 5.0, 5.0]]', color: '#31b0d5', title: 'Name: D1:F1<br>Value: [[5.0, 5.0, 5.0]]<br>Type: RANGE<br>Id: af2de55b-110d-46a4-aa9d-fc7c02fe7394<br>Formula Expression: Formula String: D1:F1; Formula Values: [[5.0, 5.0, 5.0]]; Formula Ptg: [[5.0, 5.0, 5.0]]; Ptgs: D1:F1 Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@18463720'},
{id: 'bcd9e9ea-ed66-4598-be61-e775b9c02aca', label: '+\n7.0', color: '#f0ad4e', title: 'Name: +<br>Value: 7.0<br>Type: OPERATOR<br>Id: bcd9e9ea-ed66-4598-be61-e775b9c02aca<br>Formula Expression: Formula String: B1 * C1 + SUM(D1:F1) / G1; Formula Values: 1.0 * 2.0 + SUM(5.0, 5.0, 5.0) / 3.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 7 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@18463720'},
{id: 'a41f40bf-d2ad-4861-82ec-09d697c2b466', label: '*\n2.0', color: '#f0ad4e', title: 'Name: *<br>Value: 2.0<br>Type: OPERATOR<br>Id: a41f40bf-d2ad-4861-82ec-09d697c2b466<br>Formula Expression: Formula String: B1 * C1; Formula Values: 1.0 * 2.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@18463720'},
{id: '202f93b0-fbb0-45d5-8de6-a68e74d67567', label: 'H1\n5.0', color: '#31b0d5', title: 'Name: H1<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 202f93b0-fbb0-45d5-8de6-a68e74d67567<br>Formula Expression: Formula String: H1; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: H1 Index in Ptgs: 8 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@18463720'},
{id: '0fe8b9d5-6623-4e6e-8d72-bbe1d0d1cdab', label: 'A1\n2.0', color: '#31b0d5', title: 'Name: A1<br>Value: 2.0<br>Type: CELL_WITH_FORMULA<br>Id: 0fe8b9d5-6623-4e6e-8d72-bbe1d0d1cdab<br>Formula Expression: Formula String: B1 * C1 + SUM(D1:F1) / G1 - H1; Formula Values: 1.0 * 2.0 + SUM(5.0, 5.0, 5.0) / 3.0 - 5.0; Formula Ptg: 1.0 2.0 * 5.0, 5.0, 5.0 SUM  3.0 / + 5.0 -; Ptgs: B1 C1 * D1:F1 SUM  G1 / + H1 - Index in Ptgs: 9 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@18463720'},
{id: '4326dbb0-46c2-4260-905a-f5c393f22f40', label: 'B1\n1.0', color: '#31b0d5', title: 'Name: B1<br>Value: 1.0<br>Type: CELL_WITH_VALUE<br>Id: 4326dbb0-46c2-4260-905a-f5c393f22f40<br>Formula Expression: Formula String: B1; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: B1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@18463720'},
{id: '1abf6f8d-e741-4391-8c74-0288275563bb', label: '-\n2.0', color: '#f0ad4e', title: 'Name: -<br>Value: 2.0<br>Type: OPERATOR<br>Id: 1abf6f8d-e741-4391-8c74-0288275563bb<br>Formula Expression: Formula String: B1 * C1 + SUM(D1:F1) / G1 - H1; Formula Values: 1.0 * 2.0 + SUM(5.0, 5.0, 5.0) / 3.0 - 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 9 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@18463720'},
{id: 'f4575dbc-7568-46e0-a509-1cad8bb553bc', label: 'C1\n2.0', color: '#31b0d5', title: 'Name: C1<br>Value: 2.0<br>Type: CELL_WITH_VALUE<br>Id: f4575dbc-7568-46e0-a509-1cad8bb553bc<br>Formula Expression: Formula String: C1; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: C1 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@18463720'},
{id: '20db753a-78ec-439f-8f93-0df6abeb1d63', label: 'SUM\n15.0', color: '#f0ad4e', title: 'Name: SUM<br>Value: 15.0<br>Type: FUNCTION<br>Id: 20db753a-78ec-439f-8f93-0df6abeb1d63<br>Formula Expression: Formula String: SUM(D1:F1); Formula Values: SUM(5.0, 5.0, 5.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@18463720'},
{id: '836ba492-7a4b-4867-a135-b6b6ea357be6', label: 'G1\n3.0', color: '#31b0d5', title: 'Name: G1<br>Value: 3.0<br>Type: CELL_WITH_VALUE<br>Id: 836ba492-7a4b-4867-a135-b6b6ea357be6<br>Formula Expression: Formula String: G1; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: G1 Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@18463720'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'bcd9e9ea-ed66-4598-be61-e775b9c02aca', to: '1abf6f8d-e741-4391-8c74-0288275563bb'},
{from: '1abf6f8d-e741-4391-8c74-0288275563bb', to: '0fe8b9d5-6623-4e6e-8d72-bbe1d0d1cdab'},
{from: '836ba492-7a4b-4867-a135-b6b6ea357be6', to: '0ccdad39-d672-4c78-8c90-e119b645328c'},
{from: '4326dbb0-46c2-4260-905a-f5c393f22f40', to: 'a41f40bf-d2ad-4861-82ec-09d697c2b466'},
{from: 'a41f40bf-d2ad-4861-82ec-09d697c2b466', to: 'bcd9e9ea-ed66-4598-be61-e775b9c02aca'},
{from: '202f93b0-fbb0-45d5-8de6-a68e74d67567', to: '1abf6f8d-e741-4391-8c74-0288275563bb'},
{from: '0ccdad39-d672-4c78-8c90-e119b645328c', to: 'bcd9e9ea-ed66-4598-be61-e775b9c02aca'},
{from: 'f4575dbc-7568-46e0-a509-1cad8bb553bc', to: 'a41f40bf-d2ad-4861-82ec-09d697c2b466'},
{from: '20db753a-78ec-439f-8f93-0df6abeb1d63', to: '0ccdad39-d672-4c78-8c90-e119b645328c'},
{from: 'af2de55b-110d-46a4-aa9d-fc7c02fe7394', to: '20db753a-78ec-439f-8f93-0df6abeb1d63'}
                            ]);