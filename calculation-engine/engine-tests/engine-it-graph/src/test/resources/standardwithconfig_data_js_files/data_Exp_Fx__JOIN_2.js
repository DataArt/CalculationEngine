var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '2af21737-4fb3-4eeb-acca-096595713764', label: 'A1\n2.718281828459045', color: '#31b0d5', title: 'Name: A1<br>Value: 2.718281828459045<br>Type: CELL_WITH_FORMULA<br>Id: 2af21737-4fb3-4eeb-acca-096595713764<br>Formula Expression: Formula String: EXP(VALUE); Formula Values: EXP(1.0); Formula Ptg: 1.0 EXP ; Ptgs: VALUE EXP  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@44d43cc9'},
{id: '7d83dee6-48a7-4593-b6f9-617c5e8c4587', label: 'VALUE\n1.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 1.0<br>Type: CONSTANT_VALUE<br>Id: 7d83dee6-48a7-4593-b6f9-617c5e8c4587<br>Formula Expression: Formula String: VALUE; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@44d43cc9'},
{id: '1d1a3aec-f93a-45e4-b6b6-aed3c31326df', label: 'EXP\n15.154262241479259', color: '#f0ad4e', title: 'Name: EXP<br>Value: 15.154262241479259<br>Type: FUNCTION<br>Id: 1d1a3aec-f93a-45e4-b6b6-aed3c31326df<br>Formula Expression: Formula String: EXP(EXP(VALUE)); Formula Values: EXP(EXP(1.0)); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@44d43cc9'},
{id: 'e1ae869c-957f-4a6b-afe4-b8ec3b471d33', label: 'EXP\n7.3890560989306495', color: '#f0ad4e', title: 'Name: EXP<br>Value: 7.3890560989306495<br>Type: FUNCTION<br>Id: e1ae869c-957f-4a6b-afe4-b8ec3b471d33<br>Formula Expression: Formula String: EXP(VALUE); Formula Values: EXP(2.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@44d43cc9'},
{id: '769eb028-12da-4c79-bf34-0e1c95ced1ac', label: 'A2\n7.3890560989306495', color: '#31b0d5', title: 'Name: A2<br>Value: 7.3890560989306495<br>Type: CELL_WITH_FORMULA<br>Id: 769eb028-12da-4c79-bf34-0e1c95ced1ac<br>Formula Expression: Formula String: EXP(VALUE); Formula Values: EXP(2.0); Formula Ptg: 2.0 EXP ; Ptgs: VALUE EXP  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@44d43cc9'},
{id: 'b7a35416-45e8-40b0-97e1-529aaefb4076', label: 'VALUE\n2.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 2.0<br>Type: CONSTANT_VALUE<br>Id: b7a35416-45e8-40b0-97e1-529aaefb4076<br>Formula Expression: Formula String: VALUE; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@44d43cc9'},
{id: '1321d82d-e646-462e-a9db-6f3d5932eb1a', label: 'EXP\n2.718281828459045', color: '#f0ad4e', title: 'Name: EXP<br>Value: 2.718281828459045<br>Type: FUNCTION<br>Id: 1321d82d-e646-462e-a9db-6f3d5932eb1a<br>Formula Expression: Formula String: EXP(VALUE); Formula Values: EXP(1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@44d43cc9'},
{id: 'a64ac4cc-535e-4923-a886-1c844634a61c', label: 'B1\n15.154262241479259', color: '#31b0d5', title: 'Name: B1<br>Value: 15.154262241479259<br>Type: CELL_WITH_FORMULA<br>Id: a64ac4cc-535e-4923-a886-1c844634a61c<br>Formula Expression: Formula String: EXP(EXP(VALUE)); Formula Values: EXP(EXP(1.0)); Formula Ptg: 1.0 EXP  EXP ; Ptgs: VALUE EXP  EXP  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@44d43cc9'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '7d83dee6-48a7-4593-b6f9-617c5e8c4587', to: '1321d82d-e646-462e-a9db-6f3d5932eb1a'},
{from: '1d1a3aec-f93a-45e4-b6b6-aed3c31326df', to: 'a64ac4cc-535e-4923-a886-1c844634a61c'},
{from: 'b7a35416-45e8-40b0-97e1-529aaefb4076', to: 'e1ae869c-957f-4a6b-afe4-b8ec3b471d33'},
{from: '2af21737-4fb3-4eeb-acca-096595713764', to: '1d1a3aec-f93a-45e4-b6b6-aed3c31326df'},
{from: '1321d82d-e646-462e-a9db-6f3d5932eb1a', to: '2af21737-4fb3-4eeb-acca-096595713764'},
{from: 'e1ae869c-957f-4a6b-afe4-b8ec3b471d33', to: '769eb028-12da-4c79-bf34-0e1c95ced1ac'}
                            ]);