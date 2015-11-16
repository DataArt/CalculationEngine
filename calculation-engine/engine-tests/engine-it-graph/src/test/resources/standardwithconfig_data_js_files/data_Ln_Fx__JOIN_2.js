var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'a06bf3ce-8f7d-4a32-b46b-38d15d90d34d', label: 'LN\n3.0', color: '#f0ad4e', title: 'Name: LN<br>Value: 3.0<br>Type: FUNCTION<br>Id: a06bf3ce-8f7d-4a32-b46b-38d15d90d34d<br>Formula Expression: Formula String: LN(EXP(VALUE)); Formula Values: LN(EXP(3.0)); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2c34402'},
{id: 'dabac752-82c9-48ef-86cb-e8dfa909573c', label: 'B2\n20.085536923187664', color: '#31b0d5', title: 'Name: B2<br>Value: 20.085536923187664<br>Type: CELL_WITH_FORMULA<br>Id: dabac752-82c9-48ef-86cb-e8dfa909573c<br>Formula Expression: Formula String: EXP(VALUE); Formula Values: EXP(3.0); Formula Ptg: 3.0 EXP ; Ptgs: VALUE EXP  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2c34402'},
{id: '0e97788e-440e-49a0-b115-568767f404b3', label: 'VALUE\n3.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 3.0<br>Type: CONSTANT_VALUE<br>Id: 0e97788e-440e-49a0-b115-568767f404b3<br>Formula Expression: Formula String: VALUE; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2c34402'},
{id: '02e8bab2-8e55-4923-ac67-cb8d0e358675', label: 'EXP\n20.085536923187664', color: '#f0ad4e', title: 'Name: EXP<br>Value: 20.085536923187664<br>Type: FUNCTION<br>Id: 02e8bab2-8e55-4923-ac67-cb8d0e358675<br>Formula Expression: Formula String: EXP(VALUE); Formula Values: EXP(3.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2c34402'},
{id: 'cda03056-79fe-4e9d-9646-cae9dfdb9ca1', label: 'C4\n3.000000153185454', color: '#31b0d5', title: 'Name: C4<br>Value: 3.000000153185454<br>Type: CELL_WITH_FORMULA<br>Id: cda03056-79fe-4e9d-9646-cae9dfdb9ca1<br>Formula Expression: Formula String: LN(VALUE); Formula Values: LN(20.08554); Formula Ptg: 20.08554 LN ; Ptgs: VALUE LN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2c34402'},
{id: '39b0b89f-81f5-4a54-aa2c-6b2e9fc4ded3', label: 'VALUE\n20.08554', color: '#31b0d5', title: 'Name: VALUE<br>Value: 20.08554<br>Type: CONSTANT_VALUE<br>Id: 39b0b89f-81f5-4a54-aa2c-6b2e9fc4ded3<br>Formula Expression: Formula String: VALUE; Formula Values: 20.08554; Formula Ptg: 20.08554; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2c34402'},
{id: 'e1751d0c-76c8-4a3a-869a-73ebbed1739a', label: 'C3\n3.0', color: '#31b0d5', title: 'Name: C3<br>Value: 3.0<br>Type: CELL_WITH_FORMULA<br>Id: e1751d0c-76c8-4a3a-869a-73ebbed1739a<br>Formula Expression: Formula String: LN(EXP(VALUE)); Formula Values: LN(EXP(3.0)); Formula Ptg: 3.0 EXP  LN ; Ptgs: VALUE EXP  LN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2c34402'},
{id: '096bdcd9-f8fc-4066-a935-c78a73455180', label: 'LN\n3.000000153185454', color: '#f0ad4e', title: 'Name: LN<br>Value: 3.000000153185454<br>Type: FUNCTION<br>Id: 096bdcd9-f8fc-4066-a935-c78a73455180<br>Formula Expression: Formula String: LN(VALUE); Formula Values: LN(20.08554); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2c34402'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'dabac752-82c9-48ef-86cb-e8dfa909573c', to: 'a06bf3ce-8f7d-4a32-b46b-38d15d90d34d'},
{from: 'a06bf3ce-8f7d-4a32-b46b-38d15d90d34d', to: 'e1751d0c-76c8-4a3a-869a-73ebbed1739a'},
{from: '02e8bab2-8e55-4923-ac67-cb8d0e358675', to: 'dabac752-82c9-48ef-86cb-e8dfa909573c'},
{from: '096bdcd9-f8fc-4066-a935-c78a73455180', to: 'cda03056-79fe-4e9d-9646-cae9dfdb9ca1'},
{from: '39b0b89f-81f5-4a54-aa2c-6b2e9fc4ded3', to: '096bdcd9-f8fc-4066-a935-c78a73455180'},
{from: '0e97788e-440e-49a0-b115-568767f404b3', to: '02e8bab2-8e55-4923-ac67-cb8d0e358675'}
                            ]);