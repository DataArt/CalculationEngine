var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '5b7eda92-dc96-4bea-ab33-beb8750efd1c', label: 'VALUE\n1.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 1.0<br>Type: CONSTANT_VALUE<br>Id: 5b7eda92-dc96-4bea-ab33-beb8750efd1c<br>Formula Expression: Formula String: VALUE; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@46fa2a7e'},
{id: '2f500fbf-d4b1-4004-864f-b7622ae27e81', label: 'ATAN2\n0.7853981633974483', color: '#f0ad4e', title: 'Name: ATAN2<br>Value: 0.7853981633974483<br>Type: FUNCTION<br>Id: 2f500fbf-d4b1-4004-864f-b7622ae27e81<br>Formula Expression: Formula String: ATAN2(VALUE, VALUE); Formula Values: ATAN2(1.0, 1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@46fa2a7e'},
{id: '87995572-ef7f-4d3f-b2e1-d3db99fd128b', label: 'VALUE\n-1.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: -1.0<br>Type: CONSTANT_VALUE<br>Id: 87995572-ef7f-4d3f-b2e1-d3db99fd128b<br>Formula Expression: Formula String: VALUE; Formula Values: -1.0; Formula Ptg: -1.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@46fa2a7e'},
{id: '58e78cc9-3325-47a3-a987-b4370940b337', label: 'ATAN2\n-2.356194490192345', color: '#f0ad4e', title: 'Name: ATAN2<br>Value: -2.356194490192345<br>Type: FUNCTION<br>Id: 58e78cc9-3325-47a3-a987-b4370940b337<br>Formula Expression: Formula String: ATAN2(VALUE, VALUE); Formula Values: ATAN2(-1.0, -1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@46fa2a7e'},
{id: '9664d1b8-ab05-4fce-93a3-8c4bd071a087', label: 'VALUE\n1.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 1.0<br>Type: CONSTANT_VALUE<br>Id: 9664d1b8-ab05-4fce-93a3-8c4bd071a087<br>Formula Expression: Formula String: VALUE; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@46fa2a7e'},
{id: 'a7cd0c57-d346-4241-86ce-ea58c2689077', label: 'VALUE\n-1.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: -1.0<br>Type: CONSTANT_VALUE<br>Id: a7cd0c57-d346-4241-86ce-ea58c2689077<br>Formula Expression: Formula String: VALUE; Formula Values: -1.0; Formula Ptg: -1.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@46fa2a7e'},
{id: '53f2fff7-2c39-4e84-9ee0-f85bee854aec', label: 'B2\n0.7853981633974483', color: '#31b0d5', title: 'Name: B2<br>Value: 0.7853981633974483<br>Type: CELL_WITH_FORMULA<br>Id: 53f2fff7-2c39-4e84-9ee0-f85bee854aec<br>Formula Expression: Formula String: ATAN2(VALUE, VALUE); Formula Values: ATAN2(1.0, 1.0); Formula Ptg: 1.0, 1.0 ATAN2 ; Ptgs: VALUE, VALUE ATAN2  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@46fa2a7e'},
{id: '2f587e4a-46a2-4ba9-8e2d-e55383bc438a', label: 'B3\n-2.356194490192345', color: '#31b0d5', title: 'Name: B3<br>Value: -2.356194490192345<br>Type: CELL_WITH_FORMULA<br>Id: 2f587e4a-46a2-4ba9-8e2d-e55383bc438a<br>Formula Expression: Formula String: ATAN2(VALUE, VALUE); Formula Values: ATAN2(-1.0, -1.0); Formula Ptg: -1.0, -1.0 ATAN2 ; Ptgs: VALUE, VALUE ATAN2  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@46fa2a7e'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '2f500fbf-d4b1-4004-864f-b7622ae27e81', to: '53f2fff7-2c39-4e84-9ee0-f85bee854aec'},
{from: '87995572-ef7f-4d3f-b2e1-d3db99fd128b', to: '58e78cc9-3325-47a3-a987-b4370940b337'},
{from: '9664d1b8-ab05-4fce-93a3-8c4bd071a087', to: '2f500fbf-d4b1-4004-864f-b7622ae27e81'},
{from: '58e78cc9-3325-47a3-a987-b4370940b337', to: '2f587e4a-46a2-4ba9-8e2d-e55383bc438a'},
{from: '5b7eda92-dc96-4bea-ab33-beb8750efd1c', to: '2f500fbf-d4b1-4004-864f-b7622ae27e81'},
{from: 'a7cd0c57-d346-4241-86ce-ea58c2689077', to: '58e78cc9-3325-47a3-a987-b4370940b337'}
                            ]);